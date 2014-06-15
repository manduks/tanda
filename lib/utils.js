/**
 * Created by lumartin on 14/06/14.
 */
utils = {
    log: function(obj) {
        if(typeof console !== 'undefined') {
            console.log(obj);
        }
    },
    getFormValues: function(id) {
        // get all the inputs into an array.
        var $inputs = $('#' + id + ' :input'),
            values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        return values;
    }
};