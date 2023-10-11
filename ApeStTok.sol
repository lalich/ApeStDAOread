// contracts/ApeStTok.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.21;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract ApeStToke is ERC20("ApeSt Token", "ApeSt"), Ownable {
    constructor(uint256 initialSupply, address initialOwner) Ownable(initialOwner){
        require(initialOwner != address(0x41A4470356E5ab5F042C149565Af2B8259B06261), "Invalid initial owner");
        _mint(initialOwner, initialSupply);
        } 
    function _mintSupply() public onlyOwner {
        _mint(msg.sender, 100000000 * 10**18);
    }
}


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract ApeStToken is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("ApeSt Token", "ApeSt")
        Ownable(initialOwner)
        ERC20Permit("ApeSt Token")
    {
        _mint(msg.sender, 100000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

Verification request submitted successfully. Use this receipt 
GUID 6n3nhndwia846u2b6w1uhjfwkxl8yhpyw9he4bzr3pqcpb2rmi to track the status of your submission
