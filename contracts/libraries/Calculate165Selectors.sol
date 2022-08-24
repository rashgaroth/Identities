// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@erc725/smart-contracts/contracts/interfaces/IERC725X.sol";
import "@erc725/smart-contracts/contracts/interfaces/IERC725Y.sol";


contract Calculate165Selectors {
    function calculateSelectorERC725X() public pure returns (bytes4) {
        IERC725X i;

        return i.execute.selector;
    }
}