(function () {
    var squareApplication = {
        square: $('#square')[0],
        properties: {
            size: [],
            color: []
        },
        setSize: function(setSize) {
            this.properties.size.push(setSize);
            $(this.square).css('width', this.properties.size);
            $(this.square).css('height', this.properties.size);
        },
        setColor: function(setColor) {
            this.properties.color.push(setColor);
            $(this.square).css('background', this.properties.color);
        },
        draw: function() {
            if ($(squareApplication.square).is( ":hidden" ))
            {
                $(squareApplication.square).slideDown( "slow" );
            }
            else
            {
                $(squareApplication.square).hide();
            }
        },
        bounce: function() {
            var initialTopPosition = parseInt($(squareApplication.square).css('top'),10);
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
                    $(squareApplication.square).css('top', initialTopPosition + changedPosition + 'px');
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
        }
    };

    $(document).ready(function() {
        squareApplication.init();
        squareApplication.registerHandlers();
    });
})();