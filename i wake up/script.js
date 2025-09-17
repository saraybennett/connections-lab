
//slider that allows the user to slide over to wake the person up; link here: https://stackoverflow.com/questions/43261985/jquery-range-slider-with-image-swap 
let imageUrl = new Array();

imageUrl[0] = 'images/lay down.png';

imageUrl[1] = 'images/sit up.png';

imageUrl[2] = 'images/wake up.png';

$(document).on('input change', '#slider', function () {//listen to slider changes
    var v = $(this).val();//getting slider val
    $('#sliderStatus').html($(this).val());
    $("#img").prop("src", imageUrl[v]);
});

//step two -- mirror button
function foobar(){
    x=document.getElementById("wake_up");
    x.classList.add("hide");
    y=document.getElementById("mirror_look");
    y.classList.add("hide");
    z=document.getElementById("mirror_image");
    z.classList.remove("hide");
}


//The Mirror Button
// console.log ('hi');

// let mirrorButton = document.getElementById("mirror_button");
// mirrorButton.addEventListener("click", function() {
//   console.log('why');
// });
