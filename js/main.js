(function ($, document) {
    'use strict';
    var squareApplication = {
        square: $('#square'),
        properties: {
            size: [],
            color: []
        },
        setSize: function(setSize) {
            squareApplication.properties.size.push(setSize);
            squareApplication.square.css('width', squareApplication.properties.size);
            squareApplication.square.css('height', squareApplication.properties.size);
        },
        setColor: function(setColor) {
            squareApplication.properties.color.push(setColor);
            squareApplication.square.css('background', squareApplication.properties.color);
        },
        draw: function() {
            if (squareApplication.square.is( ":hidden" ))
            {
                squareApplication.square.slideDown( "slow" );
            }
            else
            {
                squareApplication.square.hide();
            }
        },
        bounce: function() {
            var initialTopPosition = parseInt(squareApplication.square.css('top'),10);
            var changedPosition = 0;
            var id = setInterval(move, 10);
            function move() {
                if (changedPosition == 50)
                {
                    clearInterval(id);
                }
                else
                {
                    changedPosition++;
                    // TBD: Bugfix for behavior of top value
                    squareApplication.square.css('top', initialTopPosition + changedPosition + 'px');
                }
            }
        },
        handlers: {
            '#draw click':          'draw',
            '#square mouseover':    'bounce'
        },
        registerHandlers: function() {
            var that = this;
            $.each(this.handlers, function(key, value) {
                var split = key.split(" "),
                    element = split[0],
                    trigger = split[1];
                $(document).delegate(element, trigger, that[value]);
            })
        },
        init: function() {
            squareApplication.setSize('150px');
            squareApplication.setColor('cornflowerblue');
            squareApplication.registerHandlers();
        }
    };

    $(document).ready(function() {
        squareApplication.init();
    });
})(jQuery, document);