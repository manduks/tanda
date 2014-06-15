 Meteor.startup(function() {
 	Conekta.setPublishableKey('key_MxhSqdJdtsmBy64o');
 });
Template.tarjeta.events({
    'click #SubmitCC': function() {
        obj = {
            "description": product.name,
            "amount": Ext.util.Format.usMoney(product.price).replace('$', '').replace('.', ''),
            "currency": "MXN",
            "reference_id": product.id,
            "card": {
                "number": obj.ccNumber,
                "exp_month": obj.ccExpireMonth,
                "exp_year": obj.ccExpireYear,
                "name": obj.ccName,
                "cvc": obj.ccCVC
            }
        };
        Conekta.charge.create(obj, function () {
        	alert('Exito');
        }, function () {
        	alert('Error');
        })
    }
});;