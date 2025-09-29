window.addEventListener("load", () => {
  //1. fetch data from api on page load
  fetch("fandom.json")
    .then((response) => response.json())
    .then((data) => {
      // 2. display that data on the webpage
      randomNumber = Math.floor(Math.random() * data.length);
      console.log("fandom 1 rand num: " + randomNumber);
      randomNumberTwo = Math.floor(Math.random() * data.length);
      console.log("fandom 2 random num: " + randomNumberTwo);

      //first fandom data
      let fandomButtonOne = document.querySelector("#fandom_name");
      let fandomNameOne = data[randomNumber].name;
      fandomButtonOne.innerHTML = fandomNameOne;
      //edit fandom name so that it's broader to make the wikipedia search turn up more results - not sure if I need this rn

      let numWorksOne = data[randomNumber].cached_count;
      console.log(numWorksOne);

      //get the name of title of the wikipedia page page from the fandom data name so that wikipedia can give information about the fandom

      let fandomURLOne =
        "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srlimit=1&srsearch=" +
        fandomNameOne;
      fetch(fandomURLOne)
        .then((response) => response.json())
        .then((data) => {
          //   console.log(data.query.search[0].title);

          let fandomOneWikiTitle = data.query.search[0].title;
          console.log(fandomOneWikiTitle);

          //now query wikipedia api for exact title of the work
          let fandomURLOneUpdate =
            "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&exintro=true&exsentences=2&format=json&titles=" +
            fandomOneWikiTitle;
          fetch(fandomURLOneUpdate)
            .then((response) => response.json())
            .then((data) => {
              console.log(data.query.pages);
              // 1. Get the 'pages' object
              const pages = data.query.pages;
              // 2. Get the *first* (and in this case, only) key from the 'pages' object
              // Since the key ("23616705") is an arbitrary page ID, you can't hardcode it.
              // Object.keys() returns an array of the object's keys. We take the first one [0].
              const pageId = Object.keys(pages)[0];
              // 3. Use the page ID to access the specific page object and then the 'extract'
              const extractValue = pages[pageId].extract;
              console.log(extractValue);
              // Output: "Good Luck Charlie is an American sitcom that aired on Disney Channel from April 4, 2010, to February 16, 2014..."
              //display data on page

              //   let extractValue = data.query.search[0].snippet;
              let fandomOneDescription = document.getElementById(
                "fandom_one_description"
              );
              fandomOneDescription.innerHTML = extractValue;
            });
        });

      //second fandom data
      let fandomButtonTwo = document.querySelector("#fandom_name_two");
      let fandomNameTwo = data[randomNumberTwo].name;
      fandomButtonTwo.innerHTML = fandomNameTwo;

      let numWorksTwo = data[randomNumberTwo].cached_count;
      console.log(numWorksTwo);

      let fandomURLTwo =
        "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srlimit=1&srsearch=" +
        fandomNameTwo;
      fetch(fandomURLTwo)
        .then((response) => response.json())
        .then((data) => {
          //   console.log(data.query.search[0].title);

          let fandomTwoWikiTitle = data.query.search[0].title;
          console.log(fandomTwoWikiTitle);

          //now query wikipedia api for exact title of the work
          let fandomURLTwoUpdate =
            "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&origin=*&exintro=true&exsentences=2&format=json&titles=" +
            fandomTwoWikiTitle;
          fetch(fandomURLTwoUpdate)
            .then((response) => response.json())
            .then((data) => {
              console.log(data.query.pages);
              // 1. Get the 'pages' object
              const pages = data.query.pages;
              // 2. Get the *first* (and in this case, only) key from the 'pages' object
              // Since the key ("23616705") is an arbitrary page ID, you can't hardcode it.
              // Object.keys() returns an array of the object's keys. We take the first one [0].
              const pageId = Object.keys(pages)[0];
              // 3. Use the page ID to access the specific page object and then the 'extract'
              const extractValue = pages[pageId].extract;
              console.log(extractValue);
              // Output: "Good Luck Charlie is an American sitcom that aired on Disney Channel from April 4, 2010, to February 16, 2014..."
              //display data on page

              //   let extractValue = data.query.search[0].snippet;
              let fandomTwoDescription = document.getElementById(
                "fandom_two_description"
              );
              fandomTwoDescription.innerHTML = extractValue;
            });
        });

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
        // let popup = document.getElementById("center_popup");
        // popup.style.visibility = "visible";

        // let continueButton = document.getElementById("continue_button");
        // continueButton.addEventListener("click", function () {
        //   location.reload();
        // });

        if (numWorksOne > numWorksTwo) {
          console.log("number one bigger");

          //  will work on this functionality with additional time
          //  let popup = document.getElementById("center_popup");
          //   popup.style.visibility = "visible";

          //display results in popup window

          //   let resultDisplayOne = document.getElementById("popup_text");
          //   resultDisplayOne.innerHTML =
          //     "Correct! " +
          //     fandomNameOne +
          //     " has " +
          //     numWorksOne +
          //     " works on the Archive! " +
          //     fandomNameTwo +
          //     " has " +
          //     numWorksTwo +
          //     " works.";

          //   let continueButton = document.getElementById("continue_button");
          //   continueButton.addEventListener("click", function () {
          //     location.reload();
          //   });

          //4 different html things
          //with the if statements - have the other stuff

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

          //button in the html and the hidden popup that shows up when the button is clicked

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


