

var privated = {}, shared = {};

var Account = function () {

    self = this;
    self.__private = privated;
    
}


// private 

privated.wallet = {};
//shared.accountsList = new Array();

// Public methods
Account.prototype.createAccount = function (num, cb) {
    
    // for (var i = 0; i < num; i++) {
    //     account = web3.eth.accounts.create(web3.utils.randomHex(32));
    //     shared.accountsList.push(account);        
    // }
    privated.wallet = web3.eth.accounts.wallet.create(num, web3.utils.randomHex(32));
    //console.log(privated.wallet);
    
    cb(null, privated.wallet);
    //cb(null, shared.accountsList);
}


Account.prototype.getBalance = function (wallet, cb) {
    //console.log(wallet);
    
    for (i=0; i < wallet.length ; i++) {
        
        web3.eth.getBalance(wallet[i].address, function(ree, res){
            
            console.log(res);
        
        })
    }
    cb(null,null);


}
module.exports = Account;