/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface Calculate165SelectorsInterface extends utils.Interface {
  functions: {
    "calculateSelectorERC725X()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "calculateSelectorERC725X"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calculateSelectorERC725X",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateSelectorERC725X",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Calculate165Selectors extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Calculate165SelectorsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    calculateSelectorERC725X(overrides?: CallOverrides): Promise<[string]>;
  };

  calculateSelectorERC725X(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    calculateSelectorERC725X(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    calculateSelectorERC725X(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateSelectorERC725X(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
