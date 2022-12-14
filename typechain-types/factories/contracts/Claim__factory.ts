/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Claim, ClaimInterface } from "../../contracts/Claim";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_messageHash",
        type: "bytes32",
      },
    ],
    name: "getEthSignedMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_identifier",
        type: "string",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_ethSignedMessageHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "recoverSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "splitSignature",
    outputs: [
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "identifier",
            type: "string",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct SharedStructs.Claim",
        name: "claim",
        type: "tuple",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6108468061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063bf0972f11161005b578063bf0972f114610105578063e955dca414610128578063f2fde38b14610149578063fa5408011461015c57600080fd5b8063715018a61461008d5780638da5cb5b1461009757806397aba7f9146100c1578063a7bb5803146100d4575b600080fd5b61009561016f565b005b6000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6100a46100cf366004610552565b610183565b6100e76100e2366004610599565b610202565b60408051938452602084019290925260ff16908201526060016100b8565b6101186101133660046105f2565b61026e565b60405190151581526020016100b8565b61013b6101363660046106c9565b6102d7565b6040519081526020016100b8565b61009561015736600461074e565b610310565b61013b61016a366004610770565b610389565b6101776103dc565b6101816000610436565b565b60008060008061019285610202565b6040805160008152602081018083528b905260ff8316918101919091526060810184905260808101839052929550909350915060019060a0016020604051602081039080840390855afa1580156101ed573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b600080600083516041146102525760405162461bcd60e51b8152602060048201526012602482015271496e76616c696465207369676e617475726560701b60448201526064015b60405180910390fd5b50505060208101516040820151606083015160001a9193909250565b60008061028d83600001518460200151856040015186606001516102d7565b9050600061029a82610389565b90506102ae6000546001600160a01b031690565b6001600160a01b03166102c5828660800151610183565b6001600160a01b031614949350505050565b6000848484846040516020016102f094939291906107b9565b604051602081830303815290604052805190602001209050949350505050565b6103186103dc565b6001600160a01b03811661037d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610249565b61038681610436565b50565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b6000546001600160a01b031633146101815760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610249565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156104bf576104bf610486565b60405290565b600082601f8301126104d657600080fd5b813567ffffffffffffffff808211156104f1576104f1610486565b604051601f8301601f19908116603f0116810190828211818310171561051957610519610486565b8160405283815286602085880101111561053257600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561056557600080fd5b82359150602083013567ffffffffffffffff81111561058357600080fd5b61058f858286016104c5565b9150509250929050565b6000602082840312156105ab57600080fd5b813567ffffffffffffffff8111156105c257600080fd5b6105ce848285016104c5565b949350505050565b80356001600160a01b03811681146105ed57600080fd5b919050565b60006020828403121561060457600080fd5b813567ffffffffffffffff8082111561061c57600080fd5b9083019060a0828603121561063057600080fd5b61063861049c565b82358281111561064757600080fd5b610653878286016104c5565b825250610662602084016105d6565b6020820152610673604084016105d6565b604082015260608301358281111561068a57600080fd5b610696878286016104c5565b6060830152506080830135828111156106ae57600080fd5b6106ba878286016104c5565b60808301525095945050505050565b600080600080608085870312156106df57600080fd5b843567ffffffffffffffff808211156106f757600080fd5b610703888389016104c5565b9550610711602088016105d6565b945061071f604088016105d6565b9350606087013591508082111561073557600080fd5b50610742878288016104c5565b91505092959194509250565b60006020828403121561076057600080fd5b610769826105d6565b9392505050565b60006020828403121561078257600080fd5b5035919050565b60005b838110156107a457818101518382015260200161078c565b838111156107b3576000848401525b50505050565b600085516107cb818460208a01610789565b6bffffffffffffffffffffffff19606087811b821692850192835286901b1660148201528351610802816028840160208801610789565b01602801969550505050505056fea2646970667358221220165e699f9984c1b6edf7dfe53b1f5b15cb2e9a6e4f710e64b68f35866788360864736f6c63430008090033";

type ClaimConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClaimConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Claim__factory extends ContractFactory {
  constructor(...args: ClaimConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Claim> {
    return super.deploy(overrides || {}) as Promise<Claim>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Claim {
    return super.attach(address) as Claim;
  }
  override connect(signer: Signer): Claim__factory {
    return super.connect(signer) as Claim__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClaimInterface {
    return new utils.Interface(_abi) as ClaimInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Claim {
    return new Contract(address, _abi, signerOrProvider) as Claim;
  }
}
