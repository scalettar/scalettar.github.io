// PUZZLE CONTAINER
const puzzleTitle = document.querySelector('#puzzleTitle');
const infoBox = document.querySelector('#infoBox');
const codeBox = document.querySelector('#codeBox');
const enter = document.querySelector('#enter');
enter.addEventListener('click', puzzleAction, false);

// BUTTON CONTAINER
const buttonContainer = document.querySelector('#buttonContainer');
buttonContainer.addEventListener('click', switchPuzzle, false);
const chineseChessButton = document.querySelector('#chineseChess');
const metronomeButton = document.querySelector('#metronome');
const pickupButton = document.querySelector('#pickup');
const scrabbleButton = document.querySelector('#scrabble');
const chessButton = document.querySelector('#chess');
const dominoButton = document.querySelector('#domino');

// FUNCTIONS
function youWin(){
    puzzleTitle.innerText = "You Won!";
    puzzleTitle.className = 'winner';
    infoBox.innerText = "Congratulations on your successful escape! I hope you enjoyed playing this as much as I enjoyed making it!";
    codeBox.innerText = "";
    codeBox.hidden = true;
    enter.hidden = true;
}

function chineseChess(){
    puzzleTitle.innerText = "Chinese Chess (Blue Lock)";
    puzzleTitle.className = 'blue';
    infoBox.innerText = "Some pieces appear to be missing.";
    codeBox.placeholder = '4 Digit Code (0-9)';
}

function metronome(){
    puzzleTitle.innerText = "Metronome (Red Lock)";
    puzzleTitle.className = 'red';
    infoBox.innerText = "THE UNWELCOME TRAVELER\n\n\"They looked at their tea, they had none to spare,\nThey counted the people, then the cups that were there.\nThe man fell to his knees, and begged them all, 'Please!'\nThey just let out a sigh, and counted the birds nearby.\"";
    codeBox.placeholder = '3 Digit Code (0-9)';
}

function pickupSticks(){
    puzzleTitle.innerText = "Pickup Sticks (Pink Lock)";
    puzzleTitle.className = 'pink';
    infoBox.innerText = "RBRBR\nB_Y_R\nR___B\nB_R_B";
    codeBox.placeholder = '4 Digit Code (0-9)';
}

function scrabble(){
    puzzleTitle.innerText = "Scrabble (Orange Lock)";
    puzzleTitle.className = 'orange';
    infoBox.innerText = "T: 6";
    codeBox.placeholder = '5 Digit Code (0-9)';
}

function chess(){
    puzzleTitle.innerText = "Chess (Yellow Lock)";
    puzzleTitle.className = 'yellow';
    infoBox.innerText = "\"His majesty, the King. The entire court has turned against him!\"";
    codeBox.placeholder = '4 Letter Code (a, b, c, d)';
}

function domino(){
    puzzleTitle.innerText = "Dominoes (White Lock)";
    puzzleTitle.className = 'white';
    infoBox.innerText = "\"When the sun is complete, its outer ring will reveal all.\n\nI. The first rays will bless the farmers in their golden fields.\n\nII. By midday, its warmth will reach the deep blue lakes beyond the hills.\n\nIII. And with the approach of night, it will fade beyond the horizon casting a magnificent red glow upon the sky...\n\nIV. Only to rise again the next day, its radiance glistening upon the aquamarine waters of the sea.\"";
    codeBox.placeholder = '4 Digit Code (0-9)';
}

function noLockSelected(){
    puzzleTitle.innerText = "No Lock Selected";
    puzzleTitle.className = 'dark';
    infoBox.innerText = "To enter a code, you must first select a lock."
    codeBox.value = "";
    codeBox.placeholder = "Code Entry Unavailable";
    codeBox.disabled = true;
    enter.disabled = true;
}

function puzzleAction(event){
    if(event.target.innerText === "Continue"){
        if(confirm("Have you read the letter on the table?")){
            enter.innerText = "Enter";
            chineseChessButton.disabled = false;
            metronomeButton.disabled = false;
            pickupButton.disabled = false;
            scrabbleButton.disabled = false;
            chessButton.disabled = false;
            dominoButton.disabled = false;
            codeBox.hidden = false;
            noLockSelected();
        }
    } else{
        if(puzzleTitle.innerText.includes("Blue")){
            if(codeBox.value === "8391"){
                alert("Congratulations! The blue lock (chinese chess) may now be removed.");
                chineseChessButton.disabled = true;
                noLockSelected();
            } else{
                alert("Incorrect code. Please try again.");
            }
        } else if(puzzleTitle.innerText.includes("Red")){
            if(codeBox.value === "536" || codeBox.value === "546"){
                alert("Congratulations! The red lock (metronome) may now be removed.");
                metronomeButton.disabled = true;
                noLockSelected();
            } else{
                alert("Incorrect code. Please try again.");
            }
        } else if(puzzleTitle.innerText.includes("Pink")){
            if(codeBox.value === "5725"){
                alert("Congratulations! The pink lock (pickup sticks) may now be removed.");
                pickupButton.disabled = true;
                noLockSelected();
            } else{
                alert("Incorrect code. Please try again.");
            }
        } else if(puzzleTitle.innerText.includes("Orange")){
            if(codeBox.value === "28412"){
                alert("Congratulations! The orange lock (scrabble) may now be removed.");
                scrabbleButton.disabled = true;
                noLockSelected();
            } else{
                alert("Incorrect code. Please try again.");
            }
        } else if(puzzleTitle.innerText.includes("Yellow")){
            if(codeBox.value === "bcba"){
                alert("Congratulations. The yellow lock (chess) may now be removed.");
                chessButton.disabled = true;
                noLockSelected();
            } else{
                alert("Incorrect code. Please try again.");
            }
        } else if(puzzleTitle.innerText.includes("White")){
            if(codeBox.value === "3613"){
                alert("Congratulations. The white lock (dominoes) may now be removed.");
                dominoButton.disabled = true;
                youWin();
            } else{
                alert("Incorrect code. Please try again.");
            }
        }
    }
}

function switchPuzzle(event){
    if(event.target !== event.currentTarget){
        codeBox.disabled = false;
        codeBox.hidden = false;
        enter.disabled = false;
        if(event.target.id === 'chineseChess'){
            chineseChess();
        } else if(event.target.id === 'metronome'){
            metronome();
        } else if(event.target.id === 'pickup'){
            pickupSticks();
        } else if(event.target.id === 'scrabble'){
            scrabble();
        } else if(event.target.id === 'chess'){
            chess();
        } else if(event.target.id === 'domino'){
            domino();
        }
    }
}