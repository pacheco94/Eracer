
const { assert,expect} = require('chai');
const Erase = artifacts.require('Erase.sol');

contract('Testing the contract', function([owner]){
      
    let testarray = [2,3,4,5,6,7,8,9];
    let arrayerase = [2,3,4,9,6,7,8];

    beforeEach(async () => {
        this.instance = await Erase.new({from: owner})
    });

    //inserting value into array
    it('Value should be [2,3,4,5,6,7,8,9]', async () =>{
        // await this.instance.fullArray([2,3,4,5,6,7,8,9]);
        expect((await this.instance.fullArray([2,3,4,5,6,7,8,9]).toString()),testarray,'The value is not as expected.')
    });

    //removing 3rd array position
    it('Array should have [2,3,4,9,6,7,8]', async () =>{
        await this.instance.fullArray([2,3,4,5,6,7,8,9]);
        expect((await this.instance.eraceArray(3).toString()),arrayerase,'The value it not expected.'); 
    });

    // testing empty array
    it('should not work with an empty array', async () => {
        try{
            await this.instance.fullArray([]);
            assert(false);
        }catch(err){
            assert(err);
        }
    });
});
