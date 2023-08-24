// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LoanApplicationNFT is ERC721URIStorage, Ownable {
    uint256 private tokenIdCounter = 0;

    constructor() ERC721("PRAYAS","PRY") {}

    function mintLoanApplication(string memory applicationId) external onlyOwner {
        require(!_applicationIdExists(applicationId), "Application ID already used");
        
        uint256 tokenId = tokenIdCounter;
        require(!_exists(tokenId), "Token already minted");
        
        _mint(msg.sender, tokenId); 
        tokenIdCounter++;
        _setTokenURI(tokenId, applicationId);
    }

    function _applicationIdExists(string memory applicationId) internal view returns (bool) {
        for (uint256 i = 0; i < tokenIdCounter; i++) {
            if (keccak256(bytes(tokenURI(i))) == keccak256(bytes(applicationId))) {
                return true;
            }
        }
        return false;
    }

    // Additional Functions

    function getTotalMintedTokens() external view returns (uint256) {
        return tokenIdCounter;
    }

    function tokenExists(uint256 tokenId) external view returns (bool) {
        return _exists(tokenId);
    }

    function getTokenOwner(uint256 tokenId) external view returns (address) {
        require(_exists(tokenId), "Token does not exist");
        return ownerOf(tokenId);
    }

    function getTokenApplicationId(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return tokenURI(tokenId);
    }

    function getTokenIdByApplicationId(string memory applicationId) external view returns (uint256) {
        for (uint256 i = 0; i < tokenIdCounter; i++) {
            if (keccak256(bytes(tokenURI(i))) == keccak256(bytes(applicationId))) {
                return i;
            }
        }
        revert("Token not found for the given application ID");
    }
}