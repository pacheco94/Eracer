const Erase = artifacts.require("Erase.sol");
const Delete = artifacts.require("Delete.sol");

module.exports = function (deployer) {
  deployer.deploy(Delete);
  deployer.link(Delete,Erase);
  deployer.deploy(Erase);
};