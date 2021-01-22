var r=Math.random();
r=Math.round(r*5)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+r+".png");
var r2=Math.random();
r2=Math.round(r2*5)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+r2+".png");
if(r>r2)
{
document.querySelector("h1").innerHTML="Player 1 wins";

}
else if(r<r2){
  document.querySelector("h1").innerHTML="player 2 wins";

}
else{
  document.querySelector("h1").innerHTML="Draw";
}
