class Food{
constructor(){
this.foodStock = 0;
this.lastFed = null;


}
//read the foodstock data from the database and stores in this.foodstock
getFoodStock(){
database.ref("foodStock").on("value",(data)=>{
    this.foodStock = data.val();
    foodStock = this.foodStock;
    console.log(foodStock)
})
}
//updates the database and this.foodStcok
updateFoodStock(foodStock){
database.ref("/").update({
    foodStock:foodStock
})
this.foodStock = foodStock;
}
//deducts the foodStcok by 1 
deductFoodStock(){
    if(this.foodStock>0){
        this.foodStock = this.foodStock-1;
    }
}
//update lastFedTime in database
lastFedTime(lastFed){
    database.ref("/").update({
        lastFed:lastFed
    })
    this.lastFed = lastFed;
    console.log(this.lastFed)
}
display(){
    var x=50,y=200
    
    if(this.foodStock>0){
        //a for loop to display the milk bottles
        for(var m=0;m<this.foodStock;m++){
            image(milkBottle,x,y,50,50);
            x+=30
            if(x>=390){
                x = 50;
                y = y+50;
            }
        }
    }
}


}


