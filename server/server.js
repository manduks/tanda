Accounts.onCreateUser(function(options, user){
    console.log('Se creeo usuario');

    if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;

        console.log(user.profile);
    }
    return user;
});


Meteor.startup(function() {

    return Meteor.methods({

        removeAllAmigos: function() {

            return Amigos.remove({});

        }

    });

});
