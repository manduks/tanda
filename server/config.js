Meteor.startup(function(){
   Accounts.loginServiceConfiguration.remove({
       service: 'facebook'
   });

    Accounts.loginServiceConfiguration.insert({
       service: 'facebook',
        appId: '503561796364059',
        secret: 'c278822063aebe7f0a07696d972b6d85'
    });



});