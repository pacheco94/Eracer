//SPDX-License-Identifier:MIT

pragma solidity ^0.8.4;

import "./Delete.sol";
contract Erase {

using Delete for uint[];

uint[] public array;

//function to full array
function fullArray(uint[] memory value) public returns(uint[] memory) {
    array = value;
    return array;
}

//funtion to erase the index
function eraceArray(uint _index) external returns(uint[] memory){
  array.eraser(_index);
  return array;
 }

 //funtion to show the array
 function showArray() public view returns(uint[] memory){
    return array;
 }
}