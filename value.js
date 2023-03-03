var a=[0,0,0,0,0,0,0,0,0],w=0,k=0;
let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;
function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const formattedMilliSeconds=milliseconds %1000;
    const formattedSeconds = seconds % 60;
    const formattedMinutes = minutes % 60;
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutesStr = formattedMinutes.toString().padStart(2, "0");
    const formattedSecondsStr = formattedSeconds.toString().padStart(2, "0");
    const formattedMilliSecondsStr=formattedMilliSeconds.toString().padStart(3,"0")
    return `${formattedHours}:${formattedMinutesStr}:${formattedSecondsStr}:${formattedMilliSecondsStr}`;
  }
  function updateDisplay() {
    document.getElementById("displayy").textContent=formatTime(elapsedTime);
  }
  function startTimer() {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 1);
  }
  function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
  }
  var fr=1;
function one(){fr=1;
document.getElementById('one').style.borderWidth="5px";
document.getElementById('two').style.borderWidth="2px";
}
function two(){
  document.getElementById('one').style.borderWidth="2px";
document.getElementById('two').style.borderWidth="5px";
  fr=0;nexttt();}
var u=0;
function f(b){
  if (fr==1)
   ff(b);
  else
g(b);
  
}
function g(b){
  if(w==1)return;
  if(a[b]==1)
  return
  if(k==0){
  if (!isRunning) {startTimer();}
  k=1;} 
document.getElementById(`t${Math.floor(b/3)}${b%3}`).style.visibility="visible";
a[b]=1;
setTimeout(check,50);
if(w==1)return;
setTimeout(nexttt,100);

}
function nexttt(){
  if(w==1)return;
  for (var i = 0; i < a.length; i++){
      if (a[bb[i]]==0){
      document.getElementById(`l${Math.floor(bb[i]/3)}${bb[i]%3}`).style.visibility="visible";
      a[bb[i]]=1;
      break;}
  }
  setTimeout(check,50);


}
function ff(b){
    if(a[b]==1 || w==1)
        return
    if(k==0){
        if (!isRunning) {startTimer();}
        k=1;} 
    document.getElementById(`l${Math.floor(b/3)}${b%3}`).style.visibility="visible";
    a[b]=1;
    setTimeout(check,50);
    if(w==1)return;
    setTimeout(nextt,100);
}
let b = [0,1,2,3,4,5,6,7,8];
let bb = b.sort(function () {return Math.random() - 0.5;});
function nextt(){
    if(w==1)return;
    for (var i = 0; i < a.length; i++){
        if (a[bb[i]]==0){
        document.getElementById(`t${Math.floor(bb[i]/3)}${bb[i]%3}`).style.visibility="visible";
        a[bb[i]]=1;
        break;}
    }
    setTimeout(check,50);
    
    
}


function check(){
    if (document.getElementById("l00").style.visibility=="visible" && 
    document.getElementById("l01").style.visibility=="visible" && 
    document.getElementById("l02").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by X');w=1;
    return;}
    if (document.getElementById("t00").style.visibility=="visible" && 
    document.getElementById("t01").style.visibility=="visible" && 
    document.getElementById("t02").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by O');w=1;
    return;}

    if (document.getElementById("l00").style.visibility=="visible" && 
    document.getElementById("l10").style.visibility=="visible" && 
    document.getElementById("l20").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by X');w=1;
    return;}
    if (document.getElementById("t00").style.visibility=="visible" && 
    document.getElementById("t10").style.visibility=="visible" && 
    document.getElementById("t20").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by O');w=1;
    return;}

    if (document.getElementById("l10").style.visibility=="visible" && 
    document.getElementById("l11").style.visibility=="visible" && 
    document.getElementById("l12").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by X');w=1;
    return;}
    if (document.getElementById("t10").style.visibility=="visible" && 
    document.getElementById("t11").style.visibility=="visible" && 
    document.getElementById("t12").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by O');w=1;
    return;}

    if (document.getElementById("l01").style.visibility=="visible" && 
    document.getElementById("l11").style.visibility=="visible" && 
    document.getElementById("l21").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by X');w=1;
    return;}
    if (document.getElementById("t01").style.visibility=="visible" && 
    document.getElementById("t11").style.visibility=="visible" && 
    document.getElementById("t21").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by O');w=1;
    return;}

    if (document.getElementById("l20").style.visibility=="visible" && 
    document.getElementById("l21").style.visibility=="visible" && 
    document.getElementById("l22").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by X');w=1;
    return;}
    if (document.getElementById("t20").style.visibility=="visible" && 
    document.getElementById("t21").style.visibility=="visible" && 
    document.getElementById("t22").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by O');w=1;
    return;}

    if (document.getElementById("l02").style.visibility=="visible" && 
    document.getElementById("l12").style.visibility=="visible" && 
    document.getElementById("l22").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by X');w=1;
    return;}
    if (document.getElementById("t02").style.visibility=="visible" && 
    document.getElementById("t12").style.visibility=="visible" && 
    document.getElementById("t22").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by O');w=1;
    return;}

    if (document.getElementById("l00").style.visibility=="visible" && 
    document.getElementById("l11").style.visibility=="visible" && 
    document.getElementById("l22").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by X');w=1;
    return;}
    if (document.getElementById("t00").style.visibility=="visible" && 
    document.getElementById("t11").style.visibility=="visible" && 
    document.getElementById("t22").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by O');w=1;
    return;}
    if (document.getElementById("l20").style.visibility=="visible" && 
    document.getElementById("l11").style.visibility=="visible" && 
    document.getElementById("l02").style.visibility=="visible"){
    if (isRunning) {stopTimer();}alert('game won by X');w=1;
    return;}
    if (document.getElementById("t20").style.visibility=="visible" && 
    document.getElementById("t11").style.visibility=="visible" && 
    document.getElementById("t02").style.visibility=="visible"){
        if (isRunning) {stopTimer();}alert('game won by O');w=1;
    return;}
    if(w==1)return;
    r=0
  for (var i = 0; i < a.length; i++){
      if(a[i]==0)r=1;
  }
  if(r==0){
      if (isRunning) {stopTimer();}alert('game drawn');w=1;
      return;
  }
}


 