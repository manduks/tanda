 Meteor.startup(function() {
     //Conekta.setPublishableKey('key_MxhSqdJdtsmBy64o');
 });
 Template.tarjeta.events({
     'click #SubmitCC': function() {
         //$("#formPagoConTarjeta").
         //En modo de desarrollo puedes usar la tarjeta 4242424242424242 con cualquier cvc y fecha de expiración
         function getFormObj(formId) {
             var formObj = {};
             var inputs = $('#' + formId).serializeArray();
             $.each(inputs, function(i, input) {
                 formObj[input.name] = input.value;
             });
             return formObj;
         }
         var obj = getFormObj('formPagoConTarjeta');
         console.log(obj);
         obj = {
             "description": 'Tanda MAC book',
             "amount": 100000,
             "currency": "MXN",
             "reference_id": '008',
             "card": {
                 "number": obj.number,
                 "exp_month": obj.exp_month,
                 "exp_year": obj.exp_year,
                 "name": obj.name,
                 "cvc": obj.cvc
             }
         };
         Conekta.charge.create(obj, function () {
         	alert('Exito');
         	console.log(arguments);
         }, function () {
         	alert('Error');
         	console.log(arguments);
         })
     }
 });;