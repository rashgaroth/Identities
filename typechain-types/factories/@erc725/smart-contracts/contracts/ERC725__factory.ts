/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC725,
  ERC725Interface,
} from "../../../../@erc725/smart-contracts/contracts/ERC725";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "operation",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ContractCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
    ],
    name: "DataChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "operation",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "Executed",
    type: "event",
  },
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
        internalType: "uint256",
        name: "operation",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
    ],
    name: "getData",
    outputs: [
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
    ],
    name: "getData",
    outputs: [
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516200182738038062001827833981016040819052610031916100b0565b6100448161004a60201b6109401760201c565b506100e0565b6000546001600160a01b038281169116146100ad57600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a3505b50565b6000602082840312156100c257600080fd5b81516001600160a01b03811681146100d957600080fd5b9392505050565b61173780620000f06000396000f3fe6080604052600436106100865760003560e01c806354f6127f1161005957806354f6127f1461012f578063715018a61461014f5780637f23690c146101645780638da5cb5b14610184578063f2fde38b146101ac57600080fd5b806301ffc9a71461008b57806314a6e293146100c057806344c028fe146100e25780634e3e6e9c14610102575b600080fd5b34801561009757600080fd5b506100ab6100a6366004611100565b6101cc565b60405190151581526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db366004611270565b610212565b005b6100f56100f0366004611361565b6102d4565b6040516100b79190611451565b34801561010e57600080fd5b5061012261011d366004611464565b6107de565b6040516100b79190611499565b34801561013b57600080fd5b506100f561014a3660046114fb565b610892565b34801561015b57600080fd5b506100e061089d565b34801561017057600080fd5b506100e061017f366004611514565b6108b1565b34801561019057600080fd5b506000546040516001600160a01b0390911681526020016100b7565b3480156101b857600080fd5b506100e06101c736600461155b565b6108c7565b60006001600160e01b03198216632260147f60e11b14806101fd57506001600160e01b03198216631c537ddf60e21b145b8061020c575061020c826109a5565b92915050565b61021a6109ca565b805182511461027f5760405162461bcd60e51b815260206004820152602660248201527f4b657973206c656e677468206e6f7420657175616c20746f2076616c756573206044820152650d8cadccee8d60d31b60648201526084015b60405180910390fd5b60005b82518110156102cf576102c78382815181106102a0576102a0611576565b60200260200101518383815181106102ba576102ba611576565b6020026020010151610a33565b600101610282565b505050565b60606102de6109ca565b60005a9050866103a557844710156103085760405162461bcd60e51b81526004016102769061158c565b61034b868686868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250610a82915050565b9150846001600160a01b038716887f4810874456b8e6487bd861375cf6abd8e1c8bb5858c8ce36a86a04dabfac199e61038487896115d2565b6040516001600160e01b0319909116815260200160405180910390a46107d4565b60038714156104645784156104225760405162461bcd60e51b815260206004820152603860248201527f455243373235583a2063616e6e6f74207472616e736665722076616c7565207760448201527f697468206f7065726174696f6e2053544154494343414c4c00000000000000006064820152608401610276565b61034b8685858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250610b2c915050565b60048714156105235784156104e15760405162461bcd60e51b815260206004820152603a60248201527f455243373235583a2063616e6e6f74207472616e736665722076616c7565207760448201527f697468206f7065726174696f6e2044454c454741544543414c4c0000000000006064820152608401610276565b61034b8685858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869250610bd2915050565b6001871415610626576001600160a01b038616156105535760405162461bcd60e51b815260040161027690611602565b844710156105735760405162461bcd60e51b81526004016102769061158c565b60006105b58686868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c2c92505050565b6040516bffffffffffffffffffffffff19606083901b166020820152909150603401604051602081830303815290604052925085816001600160a01b0316897f01c42bd7e97a66166063b02fce6924e6656b6c2c61966630165095c4fb0b7b2f60405160405180910390a4506107d4565b6002871415610795576001600160a01b038616156106565760405162461bcd60e51b815260040161027690611602565b844710156106765760405162461bcd60e51b81526004016102769061158c565b60006106c485858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506106bf925060209150889050611681565b610ce0565b9050600061071386868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250925061070e91506020905089611681565b610d3e565b90506000610722888484610e4d565b6040516bffffffffffffffffffffffff19606083901b166020820152909150603401604051602081830303815290604052945087816001600160a01b03168b7f01c42bd7e97a66166063b02fce6924e6656b6c2c61966630165095c4fb0b7b2f60405160405180910390a45050506107d4565b60405162461bcd60e51b815260206004820152601460248201527357726f6e67206f7065726174696f6e207479706560601b6044820152606401610276565b5095945050505050565b6060815167ffffffffffffffff8111156107fa576107fa61112a565b60405190808252806020026020018201604052801561082d57816020015b60608152602001906001900390816108185790505b50905060005b825181101561088c5761085e83828151811061085157610851611576565b6020026020010151610f57565b82828151811061087057610870611576565b60200260200101819052506108858160010190565b9050610833565b50919050565b606061020c82610f57565b6108a56109ca565b6108af6000610940565b565b6108b96109ca565b6108c38282610a33565b5050565b6108cf6109ca565b6001600160a01b0381166109345760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610276565b61093d81610940565b50565b6000546001600160a01b0382811691161461093d57600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006001600160e01b03198216631c537ddf60e21b148061020c575061020c82610ff9565b336109dd6000546001600160a01b031690565b6001600160a01b0316146108af5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610276565b60008281526001602090815260409091208251610a5292840190611067565b5060405182907fcdf4e344c0d23d4cdd0474039d176c55b19d531070dbe17856bfb993a5b5720b90600090a25050565b6060600080866001600160a01b0316848787604051610aa19190611698565b600060405180830381858888f193505050503d8060008114610adf576040519150601f19603f3d011682016040523d82523d6000602084013e610ae4565b606091505b5091509150610b2182826040518060400160405280601581526020017422a9219b991aac1d102ab735b737bb9022b93937b960591b81525061102e565b979650505050505050565b6060600080856001600160a01b03168486604051610b4a9190611698565b6000604051808303818686fa925050503d8060008114610b86576040519150601f19603f3d011682016040523d82523d6000602084013e610b8b565b606091505b5091509150610bc882826040518060400160405280601581526020017422a9219b991aac1d102ab735b737bb9022b93937b960591b81525061102e565b9695505050505050565b6060600080856001600160a01b03168486604051610bf09190611698565b6000604051808303818686f4925050503d8060008114610b86576040519150601f19603f3d011682016040523d82523d6000602084013e610b8b565b6000815160001415610c805760405162461bcd60e51b815260206004820152601d60248201527f6e6f20636f6e74726163742062797465636f64652070726f76696465640000006044820152606401610276565b81516020830184f090506001600160a01b03811661020c5760405162461bcd60e51b815260206004820152601960248201527f436f756c64206e6f74206465706c6f7920636f6e7472616374000000000000006044820152606401610276565b6000610ced8260206116b4565b83511015610d355760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401610276565b50016020015190565b606081610d4c81601f6116b4565b1015610d8b5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b6044820152606401610276565b610d9582846116b4565b84511015610dd95760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b6044820152606401610276565b606082158015610df85760405191506000825260208201604052610e42565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610e31578051835260209283019201610e19565b5050858452601f01601f1916604052505b5090505b9392505050565b60008084471015610ea05760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152606401610276565b8251610eee5760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606401610276565b8383516020850187f590506001600160a01b038116610f4f5760405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152606401610276565b949350505050565b6000818152600160205260409020805460609190610f74906116cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610fa0906116cc565b8015610fed5780601f10610fc257610100808354040283529160200191610fed565b820191906000526020600020905b815481529060010190602001808311610fd057829003601f168201915b50505050509050919050565b60006001600160e01b03198216632260147f60e11b148061020c57506301ffc9a760e01b6001600160e01b031983161461020c565b6060831561103d575081610e46565b82511561104d5782518084602001fd5b8160405162461bcd60e51b81526004016102769190611451565b828054611073906116cc565b90600052602060002090601f01602090048101928261109557600085556110db565b82601f106110ae57805160ff19168380011785556110db565b828001600101855582156110db579182015b828111156110db5782518255916020019190600101906110c0565b506110e79291506110eb565b5090565b5b808211156110e757600081556001016110ec565b60006020828403121561111257600080fd5b81356001600160e01b031981168114610e4657600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156111695761116961112a565b604052919050565b600067ffffffffffffffff82111561118b5761118b61112a565b5060051b60200190565b600082601f8301126111a657600080fd5b813560206111bb6111b683611171565b611140565b82815260059290921b840181019181810190868411156111da57600080fd5b8286015b848110156111f557803583529183019183016111de565b509695505050505050565b600082601f83011261121157600080fd5b813567ffffffffffffffff81111561122b5761122b61112a565b61123e601f8201601f1916602001611140565b81815284602083860101111561125357600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561128357600080fd5b823567ffffffffffffffff8082111561129b57600080fd5b6112a786838701611195565b93506020915081850135818111156112be57600080fd5b8501601f810187136112cf57600080fd5b80356112dd6111b682611171565b81815260059190911b820184019084810190898311156112fc57600080fd5b8584015b83811015611334578035868111156113185760008081fd5b6113268c8983890101611200565b845250918601918601611300565b508096505050505050509250929050565b80356001600160a01b038116811461135c57600080fd5b919050565b60008060008060006080868803121561137957600080fd5b8535945061138960208701611345565b935060408601359250606086013567ffffffffffffffff808211156113ad57600080fd5b818801915088601f8301126113c157600080fd5b8135818111156113d057600080fd5b8960208285010111156113e257600080fd5b9699959850939650602001949392505050565b60005b838110156114105781810151838201526020016113f8565b8381111561141f576000848401525b50505050565b6000815180845261143d8160208601602086016113f5565b601f01601f19169290920160200192915050565b602081526000610e466020830184611425565b60006020828403121561147657600080fd5b813567ffffffffffffffff81111561148d57600080fd5b610f4f84828501611195565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156114ee57603f198886030184526114dc858351611425565b945092850192908501906001016114c0565b5092979650505050505050565b60006020828403121561150d57600080fd5b5035919050565b6000806040838503121561152757600080fd5b82359150602083013567ffffffffffffffff81111561154557600080fd5b61155185828601611200565b9150509250929050565b60006020828403121561156d57600080fd5b610e4682611345565b634e487b7160e01b600052603260045260246000fd5b60208082526026908201527f455243373235583a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6001600160e01b031981358181169160048510156115fa5780818660040360031b1b83161692505b505092915050565b60208082526043908201527f455243373235583a20435245415445206f7065726174696f6e7320726571756960408201527f726520746865207265636569766572206164647265737320746f20626520656d60608201526270747960e81b608082015260a00190565b634e487b7160e01b600052601160045260246000fd5b6000828210156116935761169361166b565b500390565b600082516116aa8184602087016113f5565b9190910192915050565b600082198211156116c7576116c761166b565b500190565b600181811c908216806116e057607f821691505b6020821081141561088c57634e487b7160e01b600052602260045260246000fdfea2646970667358221220c3c09255f7f0a6146aa4277ecffa676b1924d4a8d3013c2d602c41c594aeb56264736f6c63430008090033";

type ERC725ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC725ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC725__factory extends ContractFactory {
  constructor(...args: ERC725ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC725> {
    return super.deploy(newOwner, overrides || {}) as Promise<ERC725>;
  }
  override getDeployTransaction(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(newOwner, overrides || {});
  }
  override attach(address: string): ERC725 {
    return super.attach(address) as ERC725;
  }
  override connect(signer: Signer): ERC725__factory {
    return super.connect(signer) as ERC725__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC725Interface {
    return new utils.Interface(_abi) as ERC725Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC725 {
    return new Contract(address, _abi, signerOrProvider) as ERC725;
  }
}
