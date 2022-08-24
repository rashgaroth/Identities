/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  IdentitiesNFT,
  IdentitiesNFTInterface,
} from "../../contracts/IdentitiesNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_claimVerifier",
        type: "address",
      },
      {
        internalType: "string",
        name: "_ercName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ercSymbol",
        type: "string",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimVerifier",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "safeMint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
    ],
    name: "setClaimVerifier",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b5060405162001f9e38038062001f9e8339810160408190526200003491620002ea565b8151829082906200004d90600090602085019062000177565b5080516200006390600190602084019062000177565b505050620000806200007a6200009460201b60201c565b62000098565b6200008b83620000ea565b505050620003b1565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b620000f462000116565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6006546001600160a01b03163314620001755760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b828054620001859062000374565b90600052602060002090601f016020900481019282620001a95760008555620001f4565b82601f10620001c457805160ff1916838001178555620001f4565b82800160010185558215620001f4579182015b82811115620001f4578251825591602001919060010190620001d7565b506200020292915062000206565b5090565b5b8082111562000202576000815560010162000207565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200024557600080fd5b81516001600160401b03808211156200026257620002626200021d565b604051601f8301601f19908116603f011681019082821181831017156200028d576200028d6200021d565b81604052838152602092508683858801011115620002aa57600080fd5b600091505b83821015620002ce5785820183015181830184015290820190620002af565b83821115620002e05760008385830101525b9695505050505050565b6000806000606084860312156200030057600080fd5b83516001600160a01b03811681146200031857600080fd5b60208501519093506001600160401b03808211156200033657600080fd5b620003448783880162000233565b935060408601519150808211156200035b57600080fd5b506200036a8682870162000233565b9150509250925092565b600181811c908216806200038957607f821691505b60208210811415620003ab57634e487b7160e01b600052602260045260246000fd5b50919050565b611bdd80620003c16000396000f3fe6080604052600436106101145760003560e01c806370a08231116100a0578063a93539d011610064578063a93539d0146102e8578063b88d4fde14610308578063c87b56dd14610328578063e985e9c514610348578063f2fde38b1461039157600080fd5b806370a0823114610252578063715018a6146102805780638da5cb5b1461029557806395d89b41146102b3578063a22cb465146102c857600080fd5b806323b872dd116100e757806323b872dd146101ca57806338eb8425146101ea57806342842e0e1461020a5780636352211e1461022a5780636871ee401461024a57600080fd5b806301ffc9a71461011957806306fdde031461014e578063081812fc14610170578063095ea7b3146101a8575b600080fd5b34801561012557600080fd5b506101396101343660046114de565b6103b1565b60405190151581526020015b60405180910390f35b34801561015a57600080fd5b50610163610403565b6040516101459190611553565b34801561017c57600080fd5b5061019061018b366004611566565b610495565b6040516001600160a01b039091168152602001610145565b3480156101b457600080fd5b506101c86101c3366004611594565b6104bc565b005b3480156101d657600080fd5b506101c86101e53660046115c0565b6105d7565b3480156101f657600080fd5b506101c8610205366004611601565b610608565b34801561021657600080fd5b506101c86102253660046115c0565b610632565b34801561023657600080fd5b50610190610245366004611566565b61064d565b6101396106ad565b34801561025e57600080fd5b5061027261026d366004611601565b610abb565b604051908152602001610145565b34801561028c57600080fd5b506101c8610b41565b3480156102a157600080fd5b506006546001600160a01b0316610190565b3480156102bf57600080fd5b50610163610b55565b3480156102d457600080fd5b506101c86102e336600461162c565b610b64565b3480156102f457600080fd5b50600754610190906001600160a01b031681565b34801561031457600080fd5b506101c86103233660046116d4565b610b73565b34801561033457600080fd5b50610163610343366004611566565b610bab565b34801561035457600080fd5b50610139610363366004611783565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561039d57600080fd5b506101c86103ac366004611601565b610c1f565b60006001600160e01b031982166380ac58cd60e01b14806103e257506001600160e01b03198216635b5e139f60e01b145b806103fd57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060008054610412906117b1565b80601f016020809104026020016040519081016040528092919081815260200182805461043e906117b1565b801561048b5780601f106104605761010080835404028352916020019161048b565b820191906000526020600020905b81548152906001019060200180831161046e57829003601f168201915b5050505050905090565b60006104a082610c98565b506000908152600460205260409020546001600160a01b031690565b60006104c78261064d565b9050806001600160a01b0316836001600160a01b0316141561053a5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061055657506105568133610363565b6105c85760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610531565b6105d28383610cf7565b505050565b6105e13382610d65565b6105fd5760405162461bcd60e51b8152600401610531906117ec565b6105d2838383610de4565b610610610f80565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6105d283838360405180602001604052806000815250610b73565b6000818152600260205260408120546001600160a01b0316806103fd5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610531565b600067016345785d8a00003410156106fc5760405162461bcd60e51b8152602060048201526012602482015271084c2d8c2dcc6ca40dcdee840cadcdeeaced60731b6044820152606401610531565b600061070760085490565b9050601e811061074e5760405162461bcd60e51b8152602060048201526012602482015271105b1c9958591e481b5a5b9d1959081bdd5d60721b6044820152606401610531565b604051632bc3a3c160e01b815260206004820152601060248201526f1b999d17db5a5b9d17d85b1b1bddd95960821b604482015260009081908190819081903390632bc3a3c19060640160006040518083038186803b1580156107b057600080fd5b505afa1580156107c4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107ec919081019061189a565b9398509196509450925090506001600160a01b0384166108665760405162461bcd60e51b815260206004820152602f60248201527f4964656e7469747920686173206e6f20276e66745f6d696e745f616c6c6f776560448201526e1909c818db185a5b481cdd1bdc9959608a1b6064820152608401610531565b600760009054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108b457600080fd5b505afa1580156108c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ec919061195b565b6001600160a01b0316846001600160a01b0316146109605760405162461bcd60e51b815260206004820152602b60248201527f4e6f74206f776e6572206f6620436c61696d5665726966696572207369676e6560448201526a642074686520636c61696d60a81b6064820152608401610531565b6001600160a01b03831633146109af5760405162461bcd60e51b81526020600482015260146024820152732bb937b7339031b630b4b6903932b1b2b4bb32b960611b6044820152606401610531565b6007546040805160a0810182528781526001600160a01b038781166020830152868116828401526060820186905260808201859052915163bf0972f160e01b8152919092169163bf0972f191610a089190600401611978565b60206040518083038186803b158015610a2057600080fd5b505afa158015610a34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5891906119fb565b610a965760405162461bcd60e51b815260206004820152600f60248201526e10db185a5b481b9bdd081d985b1a59608a1b6044820152606401610531565b610aa4600880546001019055565b610aae3387610fda565b6001965050505050505090565b60006001600160a01b038216610b255760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610531565b506001600160a01b031660009081526003602052604090205490565b610b49610f80565b610b536000610ff4565b565b606060018054610412906117b1565b610b6f338383611046565b5050565b610b7d3383610d65565b610b995760405162461bcd60e51b8152600401610531906117ec565b610ba584848484611115565b50505050565b6060610bb682610c98565b6000610bcd60408051602081019091526000815290565b90506000815111610bed5760405180602001604052806000815250610c18565b80610bf784611148565b604051602001610c08929190611a18565b6040516020818303038152906040525b9392505050565b610c27610f80565b6001600160a01b038116610c8c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610531565b610c9581610ff4565b50565b6000818152600260205260409020546001600160a01b0316610c955760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610531565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d2c8261064d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d718361064d565b9050806001600160a01b0316846001600160a01b03161480610db857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610ddc5750836001600160a01b0316610dd184610495565b6001600160a01b0316145b949350505050565b826001600160a01b0316610df78261064d565b6001600160a01b031614610e5b5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610531565b6001600160a01b038216610ebd5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610531565b610ec8600082610cf7565b6001600160a01b0383166000908152600360205260408120805460019290610ef1908490611a5d565b90915550506001600160a01b0382166000908152600360205260408120805460019290610f1f908490611a74565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6006546001600160a01b03163314610b535760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610531565b610b6f828260405180602001604052806000815250611246565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031614156110a85760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610531565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611120848484610de4565b61112c84848484611279565b610ba55760405162461bcd60e51b815260040161053190611a8c565b60608161116c5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611196578061118081611ade565b915061118f9050600a83611b0f565b9150611170565b60008167ffffffffffffffff8111156111b1576111b1611665565b6040519080825280601f01601f1916602001820160405280156111db576020820181803683370190505b5090505b8415610ddc576111f0600183611a5d565b91506111fd600a86611b23565b611208906030611a74565b60f81b81838151811061121d5761121d611b37565b60200101906001600160f81b031916908160001a90535061123f600a86611b0f565b94506111df565b6112508383611386565b61125d6000848484611279565b6105d25760405162461bcd60e51b815260040161053190611a8c565b60006001600160a01b0384163b1561137b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906112bd903390899088908890600401611b4d565b602060405180830381600087803b1580156112d757600080fd5b505af1925050508015611307575060408051601f3d908101601f1916820190925261130491810190611b8a565b60015b611361573d808015611335576040519150601f19603f3d011682016040523d82523d6000602084013e61133a565b606091505b5080516113595760405162461bcd60e51b815260040161053190611a8c565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610ddc565b506001949350505050565b6001600160a01b0382166113dc5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610531565b6000818152600260205260409020546001600160a01b0316156114415760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610531565b6001600160a01b038216600090815260036020526040812080546001929061146a908490611a74565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160e01b031981168114610c9557600080fd5b6000602082840312156114f057600080fd5b8135610c18816114c8565b60005b838110156115165781810151838201526020016114fe565b83811115610ba55750506000910152565b6000815180845261153f8160208601602086016114fb565b601f01601f19169290920160200192915050565b602081526000610c186020830184611527565b60006020828403121561157857600080fd5b5035919050565b6001600160a01b0381168114610c9557600080fd5b600080604083850312156115a757600080fd5b82356115b28161157f565b946020939093013593505050565b6000806000606084860312156115d557600080fd5b83356115e08161157f565b925060208401356115f08161157f565b929592945050506040919091013590565b60006020828403121561161357600080fd5b8135610c188161157f565b8015158114610c9557600080fd5b6000806040838503121561163f57600080fd5b823561164a8161157f565b9150602083013561165a8161161e565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156116a4576116a4611665565b604052919050565b600067ffffffffffffffff8211156116c6576116c6611665565b50601f01601f191660200190565b600080600080608085870312156116ea57600080fd5b84356116f58161157f565b935060208501356117058161157f565b925060408501359150606085013567ffffffffffffffff81111561172857600080fd5b8501601f8101871361173957600080fd5b803561174c611747826116ac565b61167b565b81815288602083850101111561176157600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b6000806040838503121561179657600080fd5b82356117a18161157f565b9150602083013561165a8161157f565b600181811c908216806117c557607f821691505b602082108114156117e657634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b6000611848611747846116ac565b905082815283838301111561185c57600080fd5b610c188360208301846114fb565b80516118758161157f565b919050565b600082601f83011261188b57600080fd5b610c188383516020850161183a565b600080600080600060a086880312156118b257600080fd5b855167ffffffffffffffff808211156118ca57600080fd5b818801915088601f8301126118de57600080fd5b6118ed8983516020850161183a565b96506118fb6020890161186a565b95506119096040890161186a565b9450606088015191508082111561191f57600080fd5b61192b89838a0161187a565b9350608088015191508082111561194157600080fd5b5061194e8882890161187a565b9150509295509295909350565b60006020828403121561196d57600080fd5b8151610c188161157f565b602081526000825160a0602084015261199460c0840182611527565b9050602084015160018060a01b03808216604086015280604087015116606086015250506060840151601f19808584030160808601526119d48383611527565b925060808601519150808584030160a0860152506119f28282611527565b95945050505050565b600060208284031215611a0d57600080fd5b8151610c188161161e565b60008351611a2a8184602088016114fb565b835190830190611a3e8183602088016114fb565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611a6f57611a6f611a47565b500390565b60008219821115611a8757611a87611a47565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000600019821415611af257611af2611a47565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611b1e57611b1e611af9565b500490565b600082611b3257611b32611af9565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611b8090830184611527565b9695505050505050565b600060208284031215611b9c57600080fd5b8151610c18816114c856fea26469706673582212200ece76ae41fe16d1e271d56d1c8408551ea9ece954748c8931028b329125420364736f6c63430008090033";

type IdentitiesNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IdentitiesNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IdentitiesNFT__factory extends ContractFactory {
  constructor(...args: IdentitiesNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _claimVerifier: PromiseOrValue<string>,
    _ercName: PromiseOrValue<string>,
    _ercSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IdentitiesNFT> {
    return super.deploy(
      _claimVerifier,
      _ercName,
      _ercSymbol,
      overrides || {}
    ) as Promise<IdentitiesNFT>;
  }
  override getDeployTransaction(
    _claimVerifier: PromiseOrValue<string>,
    _ercName: PromiseOrValue<string>,
    _ercSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _claimVerifier,
      _ercName,
      _ercSymbol,
      overrides || {}
    );
  }
  override attach(address: string): IdentitiesNFT {
    return super.attach(address) as IdentitiesNFT;
  }
  override connect(signer: Signer): IdentitiesNFT__factory {
    return super.connect(signer) as IdentitiesNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IdentitiesNFTInterface {
    return new utils.Interface(_abi) as IdentitiesNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdentitiesNFT {
    return new Contract(address, _abi, signerOrProvider) as IdentitiesNFT;
  }
}
