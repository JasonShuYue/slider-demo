let $images = $(".container img");
let $buttons = $(".buttons span");
let $container = $(".container");
let $window = $(".window");
let TIME_INTTER = 2000;




var imageIndex = 0; //  目前是第几张图片
var n = 0;
var size = $images.length;
var timer = null;

//init

activeButton($($buttons[n % size]));
autoPlay();


//  button onclick
for(let i = 0; i < $buttons.length; i++) {
    $($buttons[i]).on("click", function(e) {
        imageIndex = $(e.currentTarget).index();
        n = imageIndex;
        moveImage(imageIndex);
        activeButton($(e.currentTarget))
    });
}

mouseEnterOrLeave();

function mouseEnterOrLeave() {
    $window.on("mouseenter", function() {
        clearInterval(timer);
    });
    $window.on("mouseleave", function() {
        autoPlay();
    });
}


function activeButton($button) {
    $button.addClass("red").siblings('.red').removeClass('red');
}

function moveImage(index) {
    $container.css({
        transform: 'translateX(-'+ index * 480 +'px)',
    });
}

function autoPlay() {
    timer = setInterval(function() {
        n = n + 1;
        $buttons.eq(n % size).trigger("click");
        activeButton($buttons.eq(n % size));
    }, TIME_INTTER);
}

