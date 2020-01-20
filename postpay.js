/**
 * DevGenii: Dummy Postpay JavaScript
 */
define(function () {
    window.Postpay = {
        render: function (el) {
            el.innerHTML = 'Postpay!'
        },
        hide: function (el) {
            el.style.display = 'none';
        }
    };
    return window.Postpay;
});