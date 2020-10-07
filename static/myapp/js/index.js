var myTimer = setTimeout(myTitle, 3200);

function myTitle() {
    var greet = document.querySelector("#hello");
    greet.style.animationPlayState = "running";
}


let TextShadow = (function() {

    const eventSpace = document.querySelector('#myHeaderZ');
    const title = eventSpace.querySelector('#mySub');
    const step = 100;

    function shadowUpdate(e) {
        const { offsetWidth: width, offsetHeight: height } = eventSpace;
        let { offsetX: x, offsetY: y } = e;

        if (this !== e.target) {
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }

        const xStep = Math.round((x / width * step) - (step / 2));
        const yStep = Math.round((y / height * step) - (step / 2));

        title.style.textShadow = `${-xStep}px ${-yStep}px 0  rgba(10,10,10, .9)`;
        title.style.transitionTimingFunction = "ease-out";

    }

    function handleMouseLeave(e) {
        title.style.textShadow = "2px 2px 4px #fff";
    }
    return {
        eventSpace: eventSpace,
        shadowUpdate: shadowUpdate,
        handleMouseLeave: handleMouseLeave
    };
})();

TextShadow.eventSpace.addEventListener('mousemove', TextShadow.shadowUpdate);

TextShadow.eventSpace.addEventListener('mouseleave', TextShadow.handleMouseLeave);


let myAnimate = (function() {

    const animationSpace = document.querySelector("#animateCard");
    const myAnimation = animationSpace.querySelector('#toAnimate');

    function startAnimation(e) {

        myAnimation.style.animationPlayState = "running";

    }

    function handleLeave(e) {
        myAnimation.style.animationPlayState = "paused";
    }
    return {
        animationSpace: animationSpace,
        startAnimation: startAnimation,
        handleLeave: handleLeave,
    };

})();

myAnimate.animationSpace.addEventListener(
    "mouseenter",
    myAnimate.startAnimation
);
myAnimate.animationSpace.addEventListener("mouseleave", myAnimate.handleLeave);


let myAnimate2 = (function() {
    const animationSpace2 = document.querySelector("#animateCard2");
    const myAnimation2 = animationSpace2.querySelector("#toAnimate2");

    function startAnimation(e) {
        myAnimation2.style.animationPlayState = "running";
    }

    function handleLeave(e) {
        myAnimation2.style.animationPlayState = "paused";
    }
    return {
        animationSpace2: animationSpace2,
        startAnimation: startAnimation,
        handleLeave: handleLeave,
    };
})();

myAnimate2.animationSpace2.addEventListener(
    "mouseenter",
    myAnimate2.startAnimation
);
myAnimate2.animationSpace2.addEventListener("mouseleave", myAnimate2.handleLeave);


let myAnimate3 = (function() {
    const animationSpace3 = document.querySelector("#animateCard3");
    const myAnimation3 = animationSpace3.querySelector("#toAnimate3");

    function startAnimation(e) {
        myAnimation3.style.animationPlayState = "running";
    }

    function handleLeave(e) {
        myAnimation3.style.animationPlayState = "paused";
    }
    return {
        animationSpace3: animationSpace3,
        startAnimation: startAnimation,
        handleLeave: handleLeave,
    };
})();

myAnimate3.animationSpace3.addEventListener(
    "mouseenter",
    myAnimate3.startAnimation
);
myAnimate3.animationSpace3.addEventListener(
    "mouseleave",
    myAnimate3.handleLeave
);


// Content and Side-nav

$(".side-nav li:nth-of-type(2)").click(function() {

    $(".side-nav li:nth-of-type(2)").toggleClass("active");
    $('#a-element').attr('class', '');
}, function() {
    $('#a-element').attr('class', 'active');
    $(".side-nav li:first-of-type").removeClass("active");
    $(".side-nav li:nth-of-type(3)").removeClass("active");
    $(".side-nav li:nth-of-type(2)").toggleClass("active");

});

$(".side-nav li:first-of-type").click(function() {

    $(".side-nav li:first-of-type").toggleClass("active");
    $('#a-element').attr('class', '');
}, function() {
    $('#a-element').attr('class', 'active');
    $(".side-nav li:nth-of-type(2)").removeClass("active");
    $(".side-nav li:nth-of-type(3)").removeClass("active");
    $(".side-nav li:first-of-type").toggleClass("active");

});

$(".side-nav li:nth-of-type(3)").click(function() {

    $(".side-nav li:nth-of-type(3)").toggleClass("active");
    $('#a-element').attr('class', '');
}, function() {
    $('#a-element').attr('class', 'active');
    $(".side-nav li:first-of-type").removeClass("active");
    $(".side-nav li:nth-of-type(2)").removeClass("active");
    $(".side-nav li:nth-of-type(3)").toggleClass("active");

});


function activateTab(tab) {
    $('.side-nav a[href="#' + tab + '"]').tab('show');
}

activateTab('a');

function openPopUpBox() {
    if (FormControlInputEmail.value === "") {
        alert("You have not supplied a contact email address, \nplease enter one in the field provided!");
    } else {
        fullName = formName1.value + " " + formName2.value;
        alert("Thank you for submitting your enquiry\nWe will get back to you shortly " + fullName);
    }
}