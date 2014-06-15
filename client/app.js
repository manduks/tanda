Router.configure({
    layoutTemplate: 'layout'
});
Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'home'
    });
    this.route('about');
    this.route('tandas');

    this.route('crear', {
        path: '/crear',
        template: 'add_tanda',
        before: function() {
            if (!Meteor.loggingIn() && !Meteor.user()) {
                this.redirect("home");
            }
        }
    });
});

Meteor.startup(function() {
    Meteor.call('removeAllAmigos');
});
