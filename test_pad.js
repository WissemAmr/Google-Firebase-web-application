//this page is made just to test before implementing things to the original work
// Your web app's Firebase configuration
// REPLACE THIS WITH YOUR CONFIG
var firebaseConfig = {
    apiKey: "AIzaSyAM3dXmkUbM3rTEpuskEB5EJZwb9UbdETs",
    authDomain: "wissem-world-health.firebaseapp.com",
    databaseURL: "https://wissem-world-health.firebaseio.com",
    projectId: "wissem-world-health",
    storageBucket: "wissem-world-health.appspot.com",
    messagingSenderId: "662766957860",
    appId: "1:662766957860:web:a98a7ca6185593e9726fb1",
    measurementId: "G-MLRZBVCSNW"
  };

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below
const rootRef=firebase.database().ref("issues/");
// GET A ROOT REFERENCE to issues HERE (type along)

// Task 3 ------------------------------------------

// rootRef.push ({
//   description: "Logo does not show up on screen 3",
//   resolved: "yes",
//   severity: "minor"
// });

// rootRef.push ({
//   description: "Screen flashes on save",
//   resolved: "no",
//   severity: "moderate"
// });

// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");

// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

var recordRef = firebase.database().ref("issues/delete-me");

recordRef.remove()
   .catch(function(error) {
     alert("Delete failed: " + error.message)
   });
