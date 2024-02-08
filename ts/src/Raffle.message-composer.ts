/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.25.2.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { ExecuteMsg, AssetInfo, Uint128, Timestamp, Uint64, Decimal, Binary, HexBinary, Cw721Coin, Sg721Token, Coin, RaffleOptionsMsg, Cw721ReceiveMsg, NoisCallback, InstantiateMsg, QueryMsg, QueryFilters, Addr, RaffleState, AllRafflesResponse, RaffleResponse, RaffleInfo, RaffleOptions, ArrayOfString, ConfigResponse, Uint32 } from "./Raffle.types";
export interface RaffleMessage {
  contractAddress: string;
  sender: string;
  createRaffle: ({
    assets,
    owner,
    raffleOptions,
    raffleTicketPrice
  }: {
    assets: AssetInfo[];
    owner?: string;
    raffleOptions: RaffleOptionsMsg;
    raffleTicketPrice: AssetInfo;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  cancelRaffle: ({
    raffleId
  }: {
    raffleId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateConfig: ({
    creationCoins,
    feeAddr,
    minimumRaffleDuration,
    minimumRaffleTimeout,
    name,
    noisProxyAddr,
    noisProxyCoin,
    owner,
    raffleFee
  }: {
    creationCoins?: Coin[];
    feeAddr?: string;
    minimumRaffleDuration?: number;
    minimumRaffleTimeout?: number;
    name?: string;
    noisProxyAddr?: string;
    noisProxyCoin?: Coin;
    owner?: string;
    raffleFee?: Decimal;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  modifyRaffle: ({
    raffleId,
    raffleOptions,
    raffleTicketPrice
  }: {
    raffleId: number;
    raffleOptions: RaffleOptionsMsg;
    raffleTicketPrice?: AssetInfo;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  buyTicket: ({
    raffleId,
    sentAssets,
    ticketCount
  }: {
    raffleId: number;
    sentAssets: AssetInfo;
    ticketCount: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  receive: ({
    msg,
    sender,
    tokenId
  }: {
    msg: Binary;
    sender: string;
    tokenId: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  determineWinner: ({
    raffleId
  }: {
    raffleId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  noisReceive: ({
    callback
  }: {
    callback: NoisCallback;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  toggleLock: ({
    lock
  }: {
    lock: boolean;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateRandomness: ({
    raffleId
  }: {
    raffleId: number;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class RaffleMessageComposer implements RaffleMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.createRaffle = this.createRaffle.bind(this);
    this.cancelRaffle = this.cancelRaffle.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.modifyRaffle = this.modifyRaffle.bind(this);
    this.buyTicket = this.buyTicket.bind(this);
    this.receive = this.receive.bind(this);
    this.determineWinner = this.determineWinner.bind(this);
    this.noisReceive = this.noisReceive.bind(this);
    this.toggleLock = this.toggleLock.bind(this);
    this.updateRandomness = this.updateRandomness.bind(this);
  }

  createRaffle = ({
    assets,
    owner,
    raffleOptions,
    raffleTicketPrice
  }: {
    assets: AssetInfo[];
    owner?: string;
    raffleOptions: RaffleOptionsMsg;
    raffleTicketPrice: AssetInfo;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          create_raffle: {
            assets,
            owner,
            raffle_options: raffleOptions,
            raffle_ticket_price: raffleTicketPrice
          }
        })),
        funds
      })
    };
  };
  cancelRaffle = ({
    raffleId
  }: {
    raffleId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          cancel_raffle: {
            raffle_id: raffleId
          }
        })),
        funds
      })
    };
  };
  updateConfig = ({
    creationCoins,
    feeAddr,
    minimumRaffleDuration,
    minimumRaffleTimeout,
    name,
    noisProxyAddr,
    noisProxyCoin,
    owner,
    raffleFee
  }: {
    creationCoins?: Coin[];
    feeAddr?: string;
    minimumRaffleDuration?: number;
    minimumRaffleTimeout?: number;
    name?: string;
    noisProxyAddr?: string;
    noisProxyCoin?: Coin;
    owner?: string;
    raffleFee?: Decimal;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            creation_coins: creationCoins,
            fee_addr: feeAddr,
            minimum_raffle_duration: minimumRaffleDuration,
            minimum_raffle_timeout: minimumRaffleTimeout,
            name,
            nois_proxy_addr: noisProxyAddr,
            nois_proxy_coin: noisProxyCoin,
            owner,
            raffle_fee: raffleFee
          }
        })),
        funds
      })
    };
  };
  modifyRaffle = ({
    raffleId,
    raffleOptions,
    raffleTicketPrice
  }: {
    raffleId: number;
    raffleOptions: RaffleOptionsMsg;
    raffleTicketPrice?: AssetInfo;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          modify_raffle: {
            raffle_id: raffleId,
            raffle_options: raffleOptions,
            raffle_ticket_price: raffleTicketPrice
          }
        })),
        funds
      })
    };
  };
  buyTicket = ({
    raffleId,
    sentAssets,
    ticketCount
  }: {
    raffleId: number;
    sentAssets: AssetInfo;
    ticketCount: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          buy_ticket: {
            raffle_id: raffleId,
            sent_assets: sentAssets,
            ticket_count: ticketCount
          }
        })),
        funds
      })
    };
  };
  receive = ({
    msg,
    sender,
    tokenId
  }: {
    msg: Binary;
    sender: string;
    tokenId: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          receive: {
            msg,
            sender,
            token_id: tokenId
          }
        })),
        funds
      })
    };
  };
  determineWinner = ({
    raffleId
  }: {
    raffleId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          determine_winner: {
            raffle_id: raffleId
          }
        })),
        funds
      })
    };
  };
  noisReceive = ({
    callback
  }: {
    callback: NoisCallback;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          nois_receive: {
            callback
          }
        })),
        funds
      })
    };
  };
  toggleLock = ({
    lock
  }: {
    lock: boolean;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          toggle_lock: {
            lock
          }
        })),
        funds
      })
    };
  };
  updateRandomness = ({
    raffleId
  }: {
    raffleId: number;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_randomness: {
            raffle_id: raffleId
          }
        })),
        funds
      })
    };
  };
}