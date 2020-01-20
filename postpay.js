/**
 * DevGenii #8: Dummy Postpay JavaScript
 */
define(function () {
    window.Postpay = {
        renderElement: function (el) {
            el.innerHTML = 'Postpay!'
        },
        hideElement: function (el) {
            el.style.display = 'none';
        }
    };
    return window.Postpay;
});