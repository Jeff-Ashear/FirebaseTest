// Initialize Firebase (YOUR OWN APP)

var firebaseConfig = {
    apiKey: "AIzaSyATyfvW4ljW1OPganzWkNMXK7F_nMgzQPQ",
    authDomain: "fir-demo-33d93.firebaseapp.com",
    databaseURL: "https://fir-demo-33d93.firebaseio.com",
    projectId: "fir-demo-33d93",
    storageBucket: "fir-demo-33d93.appspot.com",
    messagingSenderId: "987132343245",
    appId: "1:987132343245:web:e652b52234bf0b66c38a84"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Set Initial Counter
var initialValue = 100;
var database = firebase.database();
var clickCounter = initialValue;
database.ref().set({
clickCounter
});

console.log("clickCounter: " + clickCounter)

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.


database.ref().on("value", function(snapshot) {
    // Print the initial data to the console.
    console.log(database);

    // Change the html to reflect the initial value.
    $("#click-value").text(initialValue);

    // Change the clickCounter to match the data in the database
    clickCounter = snapshot.val().clickCounter;
    
    // Log the value of the clickCounter
    console.log("clickCounter 2: " + clickCounter);

    // Change the HTML Value
    $("#click-value").text(clickCounter);

    // If any errors are experienced, log them to console.
}, function(errorObject) {
console.log("The read failed " + errorObject.code);
});


// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
    clickCounter = clickCounter - 1;

  // Alert User and reset the counter
  $("#click-value").text("clickCounter 3: " + clickCounter);


  // Save new value to Firebase
  database.ref().set({
      clickCounter
  })


  // Log the value of clickCounter
  console.log("clickCounter 3: " + clickCounter);


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
    clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
      clickCounter
  })

  // Log the value of clickCounter
  console.log("clickCounter 4: " + clickCounter)

  // Change the HTML Values
  $("#click-value").text(clickCounter)
});
