var buttonContainer = document.querySelector('#buttonContainer');
buttonContainer.addEventListener('click', action, false);

function chineseChess(){
    
}

function action(event){
    console.log("action");
    if(event.target !== event.currentTarget){
        console.log("clicked button");
        if(event.target.id === 'chineseChess'){
            console.log("chinese chess");
            chineseChess();
        }
    }
}