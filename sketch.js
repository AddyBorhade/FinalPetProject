var dog,sadDog,happyDog;
var foodStock = 0,database,doghungry,dogfull
var updatefood,reducefood,milk


function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
  milkBottle = loadImage("milkImage.png")
}

function setup() {
  createCanvas(1000,400);
  dog=createSprite(600,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
//add database
  database = firebase.database();
  //two buttons to update and deduct milk
updatefood=createButton('Increase Stock')
reducefood = createButton('Feed Drago')
updatefood.position(400,60)
reducefood.position(600,60)


food = new Food();
createCanvas(800,700);

dog.scale = 0.2
dog.addImage("doghungry",sadDog);
dog.addImage("dogfull",happyDog);
//update the last fed time in the database by seeing the hour
food.lastFedTime(hour());
}

function draw() {
  background(46,139,87);
  drawSprites();
  //call the function getFoodStock from the food class
  food.getFoodStock();

  food.display();
//an arrow function to increase foodSTcok when the updateFood button is pressed
  updatefood.mousePressed(()=>{

    foodStock++;
    food.updateFoodStock(foodStock)
    
  })

  reducefood.mousePressed(()=>{
    food.deductFoodStock();
    //update in the database
    food.updateFoodStock(food.foodStock);
    
    food.lastFedTime(hour())
  })

  textSize(20)
  fill("black")
  //shows how much food is remaining
  text("Food Remaining: "+food.foodStock,350,30)
  //make sure it is correct in terms of am and pm
  if(hour()>=12){
    time = "pm"
  }
  else if(hour()<12){

    time = "am"
  }
  text("Last fed at: "+food.lastFed+time,550,30)
}


//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
