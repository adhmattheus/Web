$(function() {
    var tabs = $('#features > nav a');
    var tabsContent = $('#features > article > section');

    tabs.click(function(e) {
        e.preventDefault();

        var that = $(this);

        tabs.removeclass('is-selected');
        that.addClass('is-selected');
        tabsContent.removeclass('is-selected');

        tabsContent
            .filter((i, tab) => $(tab).data('id') === tabsContent.data('id'))
            .addClass('is-selected');

    });
});