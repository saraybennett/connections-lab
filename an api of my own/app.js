window.addEventListener('load', () => {
    console.log('page is loaded')
});

//listen for button click event
let button = document.getElementById('button');

//1. listen to event click on the button 2. fetch data from api 3. display that data on the webpage
button.addEventListener('click', function () {
    fetch('https://www.freepublicapis.com/api/random')
        .then(response => response.json())
        .then(data => {
            
            let nameElement = document.querySelector('#api-name');
            nameElement.innerHTML = data.title;

            let documentationElement = document.querySelector('#api-documentation');
            documentationElement.innerHTML = data.documentation;

            let descriptionElement = document.querySelector('#api-description');
            descriptionElement.innerHTML = data.description;


            // let descriptionElement = document.querySelector('#api-description');
            // descriptionElement.innerHTML = data.description;
        })
        .catch(function (err) {
            console.error(err);
        });
});

//fetch random api : https://www.freepublicapis.com/api/random

//Load the json data file
//    fetch('https://www.freepublicapis.com/api/random')
//    .then(response => response.json())
//    .then(data => {
//         console.log(data.title);
//         //Do something with 'data'

//    })
//    .catch(error => {
//        console.log("Error!!! : " + error);
//    })



// button.addEventListener('click', function () {
//     fetch('https://whicheverapi.com/path/id')
//         .then(function (result) {
//             console.log(result);
//         })
//         .catch(function (err) {
//             console.error(err);
//         });
// });

//show the constraint page
// function foobar(){
//     x=document.getElementById("wake_up");
//     x.classList.add("hide");
//     y=document.getElementById("mirror_look");
//     y.classList.add("hide");
//     z=document.getElementById("mirror_image");
//     z.classList.remove("hide");
// }