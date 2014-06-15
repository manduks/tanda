Accounts.onCreateUser(function(options, user) {
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
        },
        sendEmail: function(to, subject, text) {
            // Let other method calls from the same client start running,
            // without waiting for the email sending to complete.
            this.unblock();
            // don’t allow sending email unless the user is logged in
            if (!Meteor.user()) throw new Meteor.Error(403, 'not logged in');
            // and here is where you can throttle the number of emails this user
            // is allowed to send per day
            Email.send({
                to: to,
                from: Meteor.user().emails[0].address,
                subject: subject,
                text: text
            });
        }
    });
});