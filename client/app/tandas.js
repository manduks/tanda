/**
 * Created by lumartin on 14/06/14.
 */
Template.tanda_list.tandas = function () {
    return Tandas.find({}).fetch();
};

Template.add_tanda.events({
    'click #submitTanda': function(e, tpl) {
        e.preventDefault();
        var obj = utils.getFormValues('form_tandas'),
            form = $('#form_tandas');
        console.log(obj);
        Tandas.insert({
            name: obj.name,
            description: obj.description,
            periodicity: obj.periodicity,
            amount: obj.amount,
            participants: obj.participants
        });

        form[0].reset();
    }
});