// SPDX-License-Identifier: NONE
pragma solidity ^0.8.9;

import "@erc725/smart-contracts/contracts/ERC725.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "./libraries/Common.sol";

contract Identity is ERC725(tx.origin), IERC721Receiver {
  uint8 public MAX_ADDITIONAL_OWNERS = 9;
  uint8 public additionalOwnersCount = 0;

  mapping (address => bool) public additionalOwners;
  mapping (address => uint8) public removeAdditionalOwnerConfirmationCount;
  mapping (address => mapping(address => bool)) public removeAdditionalOwnerAcknowledgments;

  mapping (string => SharedStructs.Claim) public claims;
  mapping (address => bool) public ownerOfAnyNftInContract;

  function _checkOwner() internal view override {
    require(owner() == msg.sender || additionalOwners[msg.sender], "Ownable: caller is not the owner");
  }
  
  function addClaim(SharedStructs.Claim memory claim) onlyOwner public {
    claims[claim.identifier] = claim;
  }

  function addAdditionalOwner(address _newAdditionalOwner) public onlyOwner {
    require(additionalOwnersCount < MAX_ADDITIONAL_OWNERS, "Owner are not allowed");

    additionalOwnersCount++;

    additionalOwners[_newAdditionalOwner] = true;
  }

  function proposeAdditionalRemoval(address _additionalOwner) public onlyOwner {
    require(!removeAdditionalOwnerAcknowledgments[_additionalOwner][msg.sender], "Cannot propose the same owner!");
    removeAdditionalOwnerAcknowledgments[_additionalOwner][msg.sender] = true;
    removeAdditionalOwnerConfirmationCount[_additionalOwner]++;
  }

  function removeAdditionalOwner(address _additionalOwner) public onlyOwner {
    require(
      removeAdditionalOwnerConfirmationCount[_additionalOwner] > additionalOwnersCount / 2, 
      "At least 50% of owners need to confirm the removal"
    );
    additionalOwners[_additionalOwner] = false;
    additionalOwnersCount--;
    removeAdditionalOwnerConfirmationCount[_additionalOwner] = 0;
  }

  function onERC721Received(
    address operator,
    address from,
    uint256 tokenId,
    bytes calldata data
  ) external override returns (bytes4) {
    ownerOfAnyNftInContract[operator] = true;
    return IERC721Receiver.onERC721Received.selector;
  }

  receive() external payable {}
}