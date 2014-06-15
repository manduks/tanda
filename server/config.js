Meteor.startup(function(){
   Accounts.loginServiceConfiguration.remove({
       service: 'facebook'
   });

    Accounts.loginServiceConfiguration.insert({
       service: 'facebook',
        appId: '207443096095083',
        secret: '6b763af5f0b2a36213efb96c85a5afb5'
    });



});