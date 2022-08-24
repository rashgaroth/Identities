// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./libraries/Common.sol";
import "./Identity.sol";
import "./Claim.sol";

contract IdentitiesNFT is ERC721, Ownable {
  uint16 constant MAX_SUPPLY = 30;
  uint256 constant MINT_PRICE = 0.1 ether;

  address public claimVerifier;

  using Counters for Counters.Counter;

  Counters.Counter private _tokenIdCounter;

  constructor(address _claimVerifier, string memory _ercName, string memory _ercSymbol) ERC721(_ercName, _ercSymbol) {
    setClaimVerifier(_claimVerifier);
  }

  function setClaimVerifier(address _claimer) public onlyOwner {
    claimVerifier = _claimer;
  }

  function safeMint() external payable returns (bool) {
    require(msg.value >= MINT_PRICE, "Balance not enough");
    uint256 tokenId = _tokenIdCounter.current();
    require(tokenId < MAX_SUPPLY, "Already minted out");

    (
      string memory identifier,
      address from,
      address to,
      bytes memory data,
      bytes memory signature
    ) = Identity(payable(msg.sender)).claims("nft_mint_allowed");

    require(from != address(0x0), "Identity has no 'nft_mint_allowed' claim stored");
    require(from == Claim(claimVerifier).owner(), "Not owner of ClaimVerifier signed the claim");
    require(to == msg.sender, "Wrong claim receiver");
    require(
      Claim(claimVerifier)
        .verify(SharedStructs.Claim(identifier, from, to, data, signature)),
      "Claim not valid"
    );

    _tokenIdCounter.increment();
    _safeMint(msg.sender, tokenId);

    return true;
  }
}