// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Simple {
    struct Person {
        uint age;
        string name;
    }

    uint256 favoriteNumber;
    mapping(string => uint) public signersAge;

    Person[] public signers;

    function sign(string calldata _name, uint _age) public {
        // signers.push(Person({name: _name, age: _age}));
        signers.push(Person(_age, _name));
        signersAge[_name] = _age;
    }

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }
}
