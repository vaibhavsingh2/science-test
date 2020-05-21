
var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
//var drawing=[];
var voterAnswer=0;
//var voterAnswer2=[];

var form, player, game;
var allPlayers;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  this.button1=createButton('a) Heating');
  this.button2=createButton('b) Cooling');
  this.button3=createButton('c) Expanding')
  this.button4=createButton('d) Contracting')
  this.button5=createButton('a) Yes')
  this.button6=createButton('b) No')
  this.button7=createButton('a) Buffalo ')
  this.button8=createButton('b) Pig')
  this.button9=createButton('c) Horse')
  this.button10=createButton('d) Dog')

  this.button11=createButton('Submit');
 }


function draw(){
  background(220);
  //console.log(voterAnswer);
  if(playerCount===1){


clear();

game.play();
text("Q1)the iron blade in these tools is fixed to the wooden handle WHEN FIXED COMES WHICH PROCESS",50,50);
this.button1.position(50,80);
   //t1=(20,40,10,10,ground_options);
   this.button1.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
    game.update1(1);
   });

   this.button2.position(50,110);
   this.button2.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
      
   });

   this.button3.position(50,140);
   this.button3.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
      
   });

   this.button4.position(50,170);
   this.button4.mousePressed(()=>{
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
      
   });

   text("Q2) IS GATTE POPULAR AMONG ODISHA?",50,220);
   this.button5.position(50,250);
   this.button5.mousePressed(()=>{
    this.button5.hide();
    this.button6.hide();
   });
  

  this.button6.position(50,280);
  this.button6.mousePressed(()=>{
    this.button5.hide();
    this.button6.hide();
    game.update2(1);
      
   });

   text("Q3) WHO EAT OILCAKE?",50,320);

   this.button7.position(50,350);
   this.button7.mousePressed(()=>{
    this.button7.hide();
    this.button8.hide();
    this.button9.hide();
    this.button10.hide();
 game.update3(1);
      
   });
   this.button8.position(50,380);
   this.button8.mousePressed(()=>{
    this.button7.hide();
    this.button8.hide();
    this.button9.hide();
    this.button10.hide();
 
      
   });this.button9.position(50,410);
   this.button9.mousePressed(()=>{
    this.button7.hide();
    this.button8.hide();
    this.button9.hide();
    this.button10.hide();
 
      
   });
   this.button10.position(50,440);
   this.button10.mousePressed(()=>{
    this.button7.hide();
    this.button8.hide();
    this.button9.hide();
    this.button10.hide();
 
      
   });

  

this.button11.position(200,500);
  }
this.button11.mousePressed(()=>{
 this.button1.hide();
 this.button2.hide();
 this.button3.hide();
 this.button4.hide();
 this.button5.hide();
 this.button6.hide();
 this.button7.hide();
 this.button8.hide();
 this.button9.hide();
 this.button10.hide();   
this.button11.hide();
game.update(0);
});
}
function hide(){
 // this.button1.hide();
 this.button1.hide();
 this.button2.hide();
 this.button3.hide();
 this.button4.hide();
 this.button5.hide();
 this.button6.hide();
 this.button7.hide();
 this.button8.hide();
 this.button9.hide();
 this.button10.hide();
 this.button11.hide();

}
