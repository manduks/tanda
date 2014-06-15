Template.fb_connect.events({
    'click #loginFacebook': function () {
        Meteor.loginWithFacebook({
            requestPermissions: ['user_likes',
                'friends_about_me',
                'user_birthday',
                'email',
                'user_location',
                'user_work_history',
                'read_friendlists',
                'friends_groups',
                'user_groups']
        }, function (error) {
            if (error) {
                console.log(error);
            } else {
                window.location = '/';
            }
        });
    }
});

Template.user_loggedIn.events({
    "click #logout": function (e, tmpl) {
        Meteor.logout(
            function (err) {
                if (err) {
                    throw err;
                } else {
                    window.location.href = "/";
                }
            })
    }
})

Template.home.events({
    'click #btn-user-data': function () {
        FB.api('/' + Meteor.user().services.facebook.id + '?fields=friends' + '&access_token=' + Meteor.user().services.facebook.accessToken, function (response) {
            if (response.friends && response.friends.data) {
                var data = response.friends.data;

                data.forEach(function (item) {
                    var friend = {
                        id: item.id,
                        name: item.name,
                        picture: "http://graph.facebook.com/" + item.id + "/picture/?type=large",
                        email: 'armando@codetlan.com'
                    };
                    Amigos.insert(friend);
                });
            }
        });
    }
});

Template.home_view.amigos = function () {
    return Amigos.find({}).fetch();
};

Template.home_view.events({
    'click .selected': function () {
        var amigo = Amigos.find({
            _id: this._id
        }).fetch();
        console.log(amigo);
    }

});
