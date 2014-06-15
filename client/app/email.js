Template.about.events({
    'click #sendMail': function(e, tpl) {
        e.preventDefault();
        // In your client code: asynchronously send an email
        Meteor.call('sendEmail',
            'armando@codetlan.com',
            'Hello from Bob!',
            'This is a test of Email.send.');
    }
});