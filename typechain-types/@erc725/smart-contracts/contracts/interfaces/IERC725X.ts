/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface IERC725XInterface extends utils.Interface {
  functions: {
    "execute(uint256,address,uint256,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "execute" | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "ContractCreated(uint256,address,uint256)": EventFragment;
    "Executed(uint256,address,uint256,bytes4)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

export interface ContractCreatedEventObject {
  operation: BigNumber;
  contractAddress: string;
  value: BigNumber;
}
export type ContractCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ContractCreatedEventObject
>;

export type ContractCreatedEventFilter = TypedEventFilter<ContractCreatedEvent>;

export interface ExecutedEventObject {
  operation: BigNumber;
  to: string;
  value: BigNumber;
  selector: string;
}
export type ExecutedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string],
  ExecutedEventObject
>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export interface IERC725X extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC725XInterface;

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
    execute(
      operationType: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  execute(
    operationType: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    execute(
      operationType: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ContractCreated(uint256,address,uint256)"(
      operation?: PromiseOrValue<BigNumberish> | null,
      contractAddress?: PromiseOrValue<string> | null,
      value?: PromiseOrValue<BigNumberish> | null
    ): ContractCreatedEventFilter;
    ContractCreated(
      operation?: PromiseOrValue<BigNumberish> | null,
      contractAddress?: PromiseOrValue<string> | null,
      value?: PromiseOrValue<BigNumberish> | null
    ): ContractCreatedEventFilter;

    "Executed(uint256,address,uint256,bytes4)"(
      operation?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      value?: PromiseOrValue<BigNumberish> | null,
      selector?: null
    ): ExecutedEventFilter;
    Executed(
      operation?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      value?: PromiseOrValue<BigNumberish> | null,
      selector?: null
    ): ExecutedEventFilter;
  };

  estimateGas: {
    execute(
      operationType: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      operationType: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
