class Form{
    constructor(){

    }
    display(){
        //header
        var title = createElement('h1');
        title.html('Car Racing Game');
        title.position(400,150);
        //input box
        var input = createInput("Name");
        //button
        var btn = createButton("Register");
        var greetings = createElement("h3");
        input.position(400,250);
        btn.position(400,300);
       //expects a funtion name
       // anonymus or unnamed function
        btn.mousePressed(function (){
            input.hide();
            btn.hide();
            player.name = input.value();
            // alert("before adding");
            playerCount = playerCount + 1;
            player.index = playerCount;
            // alert("after");
            // alert(playerCount)
            player.updateCount(playerCount);
           player.update();
            greetings.html("Welcome  "+ player.name);
            greetings.position(400,300);
        })
    }
}