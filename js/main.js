$(function () {
    var bar = new ProgressBar.Circle(winrate, {
        color: '#aaa',
        strokeWidth: 7,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 2000,
        text: {
            autoStyleContainer: true
        },
        from: { color: '#ff0000', width: 1 },
        to: { color: '#ff6969', width: 7 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    bar.text.style.fontSize = '3.5rem';
    bar.text.style.fontWeight = 'bold';
    bar.text.style.color = '#fff';
    bar.animate(1.0);

    $('.title').addClass('hvr-grow');
});