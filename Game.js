class Game{
    //empty
    constructor(){

    }

    getState(){
        //ref to db
        var stateRef = database.ref("cardatabase/gameState");
        //add a listener to db 
        ///pass an event ....change in value
        ///as soon as value in datbase changes we will get the new value in datat var
        ///anonymous or unnamed function
        stateRef.on("value",function (data){
            gameState = data.val();
        });
        //alert(gameState);

    }
    //update state in to db
    updateState(state){
        var stateRef =  database.ref("cardatabase/");
        stateRef.update({
            gameState: state

        })

    }
//will start the game
//first display a form
// display playerdetails
//abstaract programmings : create objetcs of things that are to be created later 
    start(){
        // alert(gameState);
        if(gameState===0){
            player = new Player();
            player.getCount();
            // alert("in game "+ playerCount);
            form = new Form();
            form.display();
        }

    }
    play(){
     
        form.hide()
        text("GAME START",200,50)
    }
    
    }

   