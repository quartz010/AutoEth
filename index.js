var Web3 = require("web3");
var program = require('commander');
var Account = require('./module/account');
var Logger = require('./module/logger');
var async = require('async');

// commander

program
    .option('-n, --num <number>', 'account number')
    .option('-c, --create <bool>', 'new account?')
    .option('-l, --log <level>', 'Log level')
    .parse(process.argv);

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.cfrrentProvider);
    console.log("Local Loded!");

} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/EF0HiTihtDEGGyVZ5Yvs"));
    console.log("Remote Loaded!");
    web3.eth.getBlock(48, function (error, result) {
        if (!error)
            console.log(result.timestamp);
        else
            console.error(error);
    })
}

var logger =  new Logger(); 
var account = new Account();


console.log(program.num, program.create);

      
// para
if (program.num && program.create) {

    account.createAccount(program.num, function(err, res){
        //console.log(res);
        //logger.saveAccount(res);       
        account.getBalance(res, function(){});
    });
}




//web3.eth.personal.newAccount("password").then(console.log);



//console.log(web3.eth.accounts.privateKeyToAccount(account.privateKey));

// console.log(account);