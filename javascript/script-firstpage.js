var correctnumber=Math.floor(Math.random()*100)

function Play(){
while (true) {
        userGuess = prompt('Gimme your guess');
            if (isNaN(userGuess)) {alert("Please Enter a Valid Number!")}
            else if (userGuess==="") {alert("Please Enter Something")}
            else if (userGuess!=="") {userGuess=parseInt(userGuess)}
        

            if (userGuess==correctnumber) {alert('Correct! U Smrt'); break}
            else if (userGuess < correctnumber, userGuess !== "") {alert('Too Low!')}
            else if (userGuess > correctnumber) {alert('Too High!')};
}
}

Play()