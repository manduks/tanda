/*
    Eventos de la plantilla de compropago
 */
Template.compropago.events({
    'click #SubmitCompropago': function() {

        var obj = {
                "product_price": 100,
                "product_name": 'Tanda',
                "product_id": 1,
                "image_url": '',
                "customer_name": 'Armando Gonzále',
                "customer_email": 'armando@codetlan.com',
                "customer_phone": '5515348884',
                "payment_type": 'oxxo',
                "send_sms": false
            };

        Meteor.call("compropagoCharge", obj, function(error, result) {
            var instructions;
            if (error) {
                alert('Error Al conectar')
            } else {
                alert("Exito");
            }
        });
    }
});