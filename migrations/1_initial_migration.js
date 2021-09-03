const UpworkToken = artifacts.require("UpworkToken");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
