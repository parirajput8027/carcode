class Player{
    constructor(){
       this.name = null;
       this.distance = 0 ;
       this.index = null;
    }
    getCount(){
    var playercompreff = database.ref("cardatabase/playerComp");
     
    playercompreff.on("value",function(data){
     playerCount=data.val();
    //  alert(playerCount);
    });
    
    }
    updateCount(count){
    var countRef =  database.ref("cardatabase/");
    countRef.update({
    playerComp: count
    })
    }

   update(){
       var playerIndex = "player"+this.index ;
     var playernamereff = database.ref('cardatabase/'+playerIndex+'/')
     playernamereff.update({
        name:this.name
     })

     
   }
}