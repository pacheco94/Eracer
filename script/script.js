module.exports = async function main(callback){
    try{

        //instantiating the contract  
        const Erase = artifacts.require('Erase.sol');
        const instance = await Erase.deployed();


        //funtion to fill the array
        let array = await instance.fullArray([2,3,4,5,6,7,8,9]);

        //displaying the array in its original form
        let arr0 = await instance.showArray();
        console.log(`Original value of array: ${arr0.toString()}`);
        console.log('\n');

        //removing the third position from array
         await instance.eraceArray(3);

         //displaying the value of the array [2,3,4,9,6,7,8]
         let arr = await instance.showArray();
         console.log(`Value of array after removing 3rd position: ${arr.toString()}`);
         console.log('\n');
        callback(0);
    }catch(error){
        console.error(error);
        callback(1);
    }
}