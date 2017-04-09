<!DOCTYPE html>
<html>
<head>
    <title>squareApplication</title>
    <script src="jquery-3.2.0.js"></script>
    <style>
        #square {
            margin: 3px;
            display: none;
            position: absolute;
            border: 1px solid;
        }
        #container {
            width: 400px;
            height: 400px;
            position: relative;
            background: SlateGrey;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }
        #buttonContainer
        {
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>

<body>
<div id="container">
    <div id="square"></div>
</div>
<div id="buttonContainer">
    <button id="draw">Draw Square!</button>
</div>
</body>

<script>
    var squareApplication = {
        square: document.getElementById('square'),
        properties: {
            size: [],
            color: []
        },
        setSize: function(setSize) {
            this.properties.size.push(setSize);
            this.square.style.width = this.properties.size;
            this.square.style.height = this.properties.size;
        },
        setColor: function(setColor) {
            this.properties.color.push(setColor);
            this.square.style.background = this.properties.color;
        },
        draw: function() {
            if ($(document.getElementById('square')).is( ":hidden" ))
            {
                $(document.getElementById('square')).slideDown( "slow" );
            }
            else
            {
                $(document.getElementById('square')).hide();
            }
        },
        bounce: function() {
            var squareElement = document.getElementById('square');
            var initialTopPosition = document.getElementById('square').style.getPropertyValue('top');
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
                    squareElement.style.top = initialTopPosition + changedPosition + 'px';
                }
            }
        }
    };

    squareApplication.setSize('150px');
    squareApplication.setColor('cornflowerblue');

    document.getElementById("draw").addEventListener("click", squareApplication.draw);
    document.getElementById("square").addEventListener("mouseover", squareApplication.bounce);
</script>
</html>








