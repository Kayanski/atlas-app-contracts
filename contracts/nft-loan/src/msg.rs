use cosmwasm_schema::{cw_serde, QueryResponses};
use cosmwasm_std::{Coin, Decimal, StdError, StdResult, Uint128};

use utils::state::{is_valid_name, AssetInfo};

use crate::state::{
    BorrowerInfo, CollateralInfo, Config, LoanExtensionInfo, LoanState, LoanTerms, OfferInfo,
};

#[cw_serde]
pub struct InstantiateMsg {
    pub name: String,
    pub owner: Option<String>,
    pub treasury_addr: String,
    pub fee_rate: Decimal,
    pub listing_fee_coins: Option<Vec<Coin>>,
}

impl InstantiateMsg {
    pub fn validate(&self) -> StdResult<()> {
        // Check name
        if !is_valid_name(&self.name) {
            return Err(StdError::generic_err(
                "Name is not in the expected format (3-50 UTF-8 bytes)",
            ));
        }
        // Check the fee distribution
        if self.fee_rate >= Decimal::one() {
            return Err(StdError::generic_err("The Fee rate should be lower than 1"));
        }

        Ok(())
    }
}

#[cw_serde]
pub enum ExecuteMsg {
    // ******* Before Loan Starts ************* //
    //// We support both Cw721 and Cw1155
    ListCollaterals {
        tokens: Vec<AssetInfo>,
        terms: Option<LoanTerms>,
        comment: Option<String>,
        loan_preview: Option<AssetInfo>,
    },
    /// Used to modify the loan terms and the associated comment
    ModifyCollaterals {
        loan_id: u64,
        terms: Option<LoanTerms>,
        comment: Option<String>,
        loan_preview: Option<AssetInfo>,
    },
    /// Used to withdraw the collateral before the loan starts
    WithdrawCollaterals {
        loan_id: u64,
    },
    /// Make an offer to deposited collaterals
    MakeOffer {
        borrower: String,
        loan_id: u64,
        terms: LoanTerms,
        comment: Option<String>,
    },
    CancelOffer {
        global_offer_id: String,
    },
    RefuseOffer {
        global_offer_id: String,
    },
    WithdrawRefusedOffer {
        global_offer_id: String,
    },

    // ******* Loan Start ************* //
    AcceptOffer {
        global_offer_id: String,
    },
    AcceptLoan {
        borrower: String,
        loan_id: u64,
        comment: Option<String>,
    },

    // ******* After Loan Starts ************* //
    RequestExtension {
        loan_id: u64,
        comment: Option<String>,
        additional_interest: Uint128,
        additional_duration: u64,
    },
    AcceptExtension {
        borrower: String,
        loan_id: u64,
        extension_id: u32, // This is used to avoid borrowers from front-running lenders
    },

    RepayBorrowedFunds {
        loan_id: u64,
    },
    WithdrawDefaultedLoan {
        borrower: String,
        loan_id: u64,
    },

    // ******* General config ************* //
    ToggleLock {
        lock: bool,
    },
    /// Internal state
    SetOwner {
        owner: String,
    },
    SetFeeDestination {
        treasury_addr: String,
    },
    SetFeeRate {
        fee_rate: Decimal,
    },
    SetListingCoins {
        listing_fee_coins: Vec<Coin>,
    },
}

#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    #[returns(Config)]
    Config {},

    #[returns(BorrowerInfo)]
    BorrowerInfo { borrower: String },

    #[returns(CollateralResponse)]
    CollateralInfo {
        borrower: String,
        loan_id: u64,
        // filters: Option<QueryFilters>,
    },

    #[returns(MultipleCollateralsResponse)]
    Collaterals {
        borrower: String,
        start_after: Option<u64>,
        limit: Option<u32>,
        // filters: Option<QueryFilters>,
    },

    #[returns(MultipleCollateralsAllResponse)]
    AllCollaterals {
        start_after: Option<(String, u64)>,
        limit: Option<u32>,
        // filters: Option<QueryFilters>,
    },

    #[returns(OfferResponse)]
    OfferInfo { global_offer_id: String },

    #[returns(MultipleOffersResponse)]
    Offers {
        borrower: String,
        loan_id: u64,
        start_after: Option<String>,
        limit: Option<u32>,
    },
    #[returns(MultipleOffersResponse)]
    LenderOffers {
        lender: String,
        start_after: Option<String>,
        limit: Option<u32>,
    },
    #[returns(ExtensionResponse)]
    Extension { borrower: String, loan_id: u64 },
}

// loan info
#[cw_serde]
pub struct CollateralResponse {
    pub borrower: String,
    pub loan_id: u64,
    pub loan_state: LoanState,
    pub collateral: CollateralInfo,
}

// array of loan information
#[cw_serde]
pub struct MultipleCollateralsResponse {
    pub collaterals: Vec<CollateralResponse>,
    pub next_collateral: Option<u64>,
}

// array of loan information
#[cw_serde]
pub struct MultipleCollateralsAllResponse {
    pub collaterals: Vec<CollateralResponse>,
    pub next_collateral: Option<(String, u64)>,
}

// loan terms offer response
#[cw_serde]
pub struct OfferResponse {
    pub global_offer_id: String,
    pub offer_info: OfferInfo,
}

// array of loan terms offer responses
#[cw_serde]
pub struct MultipleOffersResponse {
    pub offers: Vec<OfferResponse>,
    pub next_offer: Option<String>,
}

// filters on loan queries
#[cw_serde]
pub struct QueryFilters {
    pub states: Option<Vec<String>>,
    pub owner: Option<String>,
    pub borrower: Option<String>,
    pub lender: Option<String>,
}

// Queries the extension linked to the offer
#[cw_serde]
pub struct ExtensionResponse {
    pub extension: Option<LoanExtensionInfo>,
}
