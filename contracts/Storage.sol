// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Storage {
    struct Person {
        uint age;
        string name;
    }

    mapping(string => uint) public signersAge;

    Person[] public signers;

    function sign(string calldata _name, uint _age) public {
        // signers.push(Person({name: _name, age: _age}));
        signers.push(Person(_age, _name));
        signersAge[_name] = _age;
    }
}