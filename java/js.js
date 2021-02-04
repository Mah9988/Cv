$(document).ready(function(){

    var text = ["FrontEnd", "BackEnd"];
    var counter = 0;
    var elem = $("#textMoving");
    setInterval(change, 1800);
    function change() {
        elem.fadeOut(function(){
            elem.html(text[counter]);
            counter++;
            if(counter >= text.length) { counter = 0; }
                elem.fadeIn();
    });}
});
