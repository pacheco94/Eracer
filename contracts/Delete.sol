//SPDX-License-Identifier:MIT

pragma solidity ^0.8.4;

//This library removes the position of an array and fills that position with the last value.
library Delete {
    function eraser(uint[] storage data, uint index) external {
        require(data.length > 0, "No puedes borrar un array vacio");
        data[index] = data[data.length - 1];
        data.pop();
    }
}