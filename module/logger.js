var fs = require('fs');

var privated = {};

var Logger = function () {
    
    self = this;
    self.__private = privated;

    // fs.open('logs/account.txt', 'w+', function (err, fd) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     privated.fdList.account = fd;
    // });

    // fs.open('logs/log.txt', 'w+', function(err, fd) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     privated.fdList.log = fd;
    // });

    // fs.open('logs/stat.txt', 'w+', function(err, fd) {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     privated.fdList.stat = fd;
    //     console.log(privated.fdList);
    // });

    privated.fdList.account = fs.openSync('logs/account.txt', 'w+')
    privated.fdList.log = fs.openSync('logs/log.txt', 'w+')
    privated.fdList.stat = fs.openSync('logs/stat.txt', 'w+')
    privated.fdList.wallet = fs.openSync('logs/wallet.json', 'w+')
    console.log(privated.fdList);
    
}

privated.fdList = {
    account: "",
    log: "",
    stat: "",
    wallet: ""
};


// Public methods
Logger.prototype.saveAccount = function (wallet) {
    
    for (i=0; i < wallet.length ; i++) {

        data = wallet[i].address + '   ' + wallet[i].privateKey + '\n';
        
        fs.write(privated.fdList.account, data, (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
    }
    fs.write(privated.fdList.wallet, wallet, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });


}

module.exports = Logger;