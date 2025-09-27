window.addEventListener("load", () => {
  //1. fetch data from api on page load
  fetch("fandom.json")
    .then((response) => response.json())
    .then((data) => {
      // 2. display that data on the webpage
      randomNumber = Math.floor(Math.random() * data.length);
      randomNumberTwo = Math.floor(Math.random() * data.length);

      //checking that everything is working using console.log(data[randomNumber].name);

      //first fandom data
      let fandomButtonOne = document.querySelector("#fandom_name");
      let fandomNameOne = data[randomNumber].name;
      fandomButtonOne.innerHTML = fandomNameOne;

      let numWorksOne = data[randomNumber].cached_count;
      console.log(numWorksOne);

      //second fandom data
      let fandomButtonTwo = document.querySelector("#fandom_name_two");
      let fandomNameTwo = data[randomNumberTwo].name;
      fandomButtonTwo.innerHTML = fandomNameTwo;

      let numWorksTwo = data[randomNumberTwo].cached_count;
      console.log(numWorksTwo);

      // let numElement = document.querySelector('#fandom_num');
      // numElement.innerHTML = data[randomNumber].cached_count;

      //figure out which fandom has more works - do I need this statement?
      let largerFandom;

      if (numWorksTwo > numWorksOne) {
        largerFandom = fandomNameTwo;
      } else {
        largerFandom = fandomNameOne;
      }

      console.log(largerFandom);

      //listen for the button click on correct fandom
      // let button = document.getElementById('button');
      //detect click event for each button , in each button, ask if numworks if bigger than the other num works and then perform something based on that
      //in the click event, determine if they clicked the right button

      //when user clicks fandom button one, something happens depending on if that fandom is bigger
      fandomButtonOne.addEventListener("click", function () {
        //for some reason could not get this to work properly
        //     if (largerFandom = fandomNameOne) {
        //  console.log("number one bigger");
        //  window.confirm("Correct!");

        //     }

        //     else {
        //         console.log("number two bigger");
        //         window.confirm("Sorry, better luck next time :/");
        //     }



          if (numWorksOne > numWorksTwo) {
            console.log("number one bigger");
            window.confirm(
              "Correct! " +
                fandomNameOne +
                " has " +
                numWorksOne +
                " works on the Archive! " +
                fandomNameTwo +
                " has " +
                numWorksTwo +
                " works."
            );

            location.reload();
          } else {
            console.log("number two bigger");
            window.confirm(
              "Sorry, better luck next time :/ " +
                fandomNameTwo +
                " has " +
                numWorksTwo +
                " works on the Archive and " +
                fandomNameOne +
                " has " +
                numWorksOne +
                " works."
            );
            location.reload();
          }
        });

      //when user clicks fandom button two, something happens depending on if that fandom is bigger
      fandomButtonTwo.addEventListener("click", function () {
        if (numWorksTwo > numWorksOne) {
          console.log("number two bigger");
          window.confirm(
            "Correct! " +
              fandomNameTwo +
              " has " +
              numWorksTwo +
              " works on the Archive! " +
              fandomNameOne +
              " has " +
              numWorksOne +
              " works."
          );
          location.reload();
        } else {
          console.log("number one bigger");
          window.confirm(
            "Sorry, better luck next time :/ " +
              fandomNameOne +
              " has " +
              numWorksOne +
              " works on the Archive and " +
              fandomNameTwo +
              " has " +
              numWorksTwo +
              " works."
          );
          location.reload();
        }
      });

      //figure out if they selected the fandom with more works
      //if they selected right fandom, randomize the other one
      //if they didn't, it ends - sad end screen
    })
    .catch(function (err) {
      console.error(err);
    });
});

// //listen for button click event
// let button = document.getElementById('button');

// //1. listen to event click on the button 2. fetch data from api 3. display that data on the webpage
// button.addEventListener('click', function () {
//     fetch('https://www.freepublicapis.com/api/random')
//         .then(response => response.json())
//         .then(data => {

//             let nameElement = document.querySelector('#api-name');
//             nameElement.innerHTML = data.title;

//             let documentationElement = document.querySelector('#api-documentation');
//             documentationElement.innerHTML = data.documentation;

//             let descriptionElement = document.querySelector('#api-description');
//             descriptionElement.innerHTML = data.description;

//             // let descriptionElement = document.querySelector('#api-description');
//             // descriptionElement.innerHTML = data.description;
//         })
//         .catch(function (err) {
//             console.error(err);
//         })
