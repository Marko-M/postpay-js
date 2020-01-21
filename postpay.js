/**
 * DevGenii #8: Dummy Postpay JavaScript
 */
define(function () {
    window.Postpay = {
        renderProduct: function (el) {
            el.innerHTML = 'Postpay product page widget!'
        },
        renderCart: function (el) {
            el.innerHTML = 'Postpay cart page widget!'
        },
        hideElement: function (el) {
            el.style.display = 'none';
        }
    };
    return window.Postpay;
});
