Template.game.events({
    'click .block__content--screen': function (e) {
        var imgPath = $(e.currentTarget).data('image');
        if (imgPath) {
            sImageBox.open(imgPath, {
                animation: 'slideInDown',
                originalHeight: true
            });
        }
    }
});
