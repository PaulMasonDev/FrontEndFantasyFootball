var players = [ // Database of player to randomly pull first and last names from.  You can add to the bottom of the list for more variety
    {first: "Tom", last: "Brady"},
    {first: "Patrick", last: "Mahomes"},
    {first: "Dak", last: "Prescott"},
    {first: "Jim", last: "Brown"},
    {first: "Jerry", last: "Rice"},
    {first: "Lawrence", last: "Taylor"},
    {first: "Walter", last: "Payton"},
    {first: "Joe", last: "Montana"},
    {first: "Reggie", last: "White"},
    {first: "Peyton", last: "Mannin"},
    {first: "Don", last: "Hutson"},
    {first: "Dick", last: "Butkus"},
    {first: "Barry", last: "Sanders"},
    {first: "John", last: "Unitas"},
    {first: "Anthony", last: "Munoz"},
    {first: "Joe", last: "Greene"},
    {first: "John", last: "Elway"},
    {first: "Dan", last: "Marino"},
    {first: "Ronnie", last: "Lott"},
    {first: "Otto", last: "Graham"},
    {first: "Sammy", last: "Baugh"},
    {first: "Deacon", last: "Jones"},
    {first: "Steve", last: "Young"},
    {first: "Bob", last: "Lilly"},
    {first: "Jack", last: "Lambert"},
    {first: "Alan", last: "Page"},
    {first: "John", last: "Hannah"},
    // Add more players using this format: {first: "John", last: "Hannah"},
];

var teamName = document.querySelector("#teamName"); // Selects the input field for the user's team name.
var button = document.querySelector("button"); // Selects the button used to generate the team and players.
var h1 = document.querySelector("h1");// Selects the h1 to display the team name.
var musicButton = document.querySelector("#musicButton"); // Selects the music button.
var musicToggle = false; // If music is on or off.
var audio = document.querySelector("audio"); //Grab music file.

musicButton.addEventListener("click", function(){ //Toggle music on and off.
    if (!musicToggle) {
        musicButton.textContent = "Pause Music";
        audio.play();
        musicToggle = true;
    } else {
        musicButton.textContent = "Play Music";
        audio.pause();
        musicToggle = false;
    }
});

button.addEventListener("click", function(){ // When the button is clicked...
    generateTeam(); // ...generate a random team and...
    if (teamName.value) {
        h1.textContent = teamName.value // ...update the h1 to display whatever team name was in the Input field.
    } 
});

function randomIndex() { // Function to generate a random index based upon the size of the players array.
    return Math.floor(Math.random() * players.length);
}

function randomPlayer() { // Function to generate the actual names of the players.
    var firstIndex = randomIndex();
    var lastIndex = randomIndex();
    return players[firstIndex].first + " " + players[lastIndex].last
}

function generateTeam() { // Function to generate the team and display it on the HTML.
    var html = document.querySelectorAll("span"); // Select the spans where teh player names will go in.
    var team = []; // Create the team array
    for(i = 0; i < html.length; i++) { // Loop that creates the team. We use the length of the html selector array so that
        team[i] = randomPlayer(); // all you need to do to add or remove more positions is add another li/span combo.
    }
    for (i = 0; i < html.length; i++) { // Loop that Updates the HTML to the newly generated players.
        html[i].textContent = team[i]
    }
}