//var colors=[
//    "rgb(255, 0, 0)",
//    "rgb(255, 255, 0)",
//    "rgb(255, 0, 255)",
//    "rgb(0, 255, 0)",
//    "rgb(0, 255, 255)",
//    "rgb(0, 0, 255)"
//];
var leng=6;
var colors = generateRandomColor(leng);
console.log('colors='+colors);
var correct=colors[2];
console.log('correct='+correct);

var head=document.querySelector('h1 span');
head.textContent=correct;

var main_head = document.querySelector('#Head');

var easy = document.querySelector('#easy');
var hard = document.querySelector('#hard');
var square=document.querySelectorAll(".square");

easy.addEventListener('click', function(){
    easy.classList.add('selected');
    hard.classList.remove('selected');
    leng=3;
});

hard.addEventListener('click', function(){
    hard.classList.add('selected');
    easy.classList.remove('selected');
    leng=6;
});


for(var i=0;i<colors.length;i++){
    square[i].style.backgroundColor=colors[i];
    
    square[i].addEventListener('click',function(){
        if(this.style.backgroundColor == correct){
            console.log(this.style.backgroundColor);
            //alert('correct');
            tryAgain.style.visibility='visible';
            tryAgain.textContent='CORRECT';
            main_head.style.backgroundColor=correct;
            for(var i=0;i<colors.length;i++){
                square[i].style.backgroundColor=correct;
            }
        }
        else{
            tryAgain.style.visibility='visible';
            tryAgain.textContent='INCORRECT';
            this.style.backgroundColor='#232323';
        }
})
}

var tryAgain=document.querySelector("#try");
tryAgain.style.visibility='hidden';

var newgame=document.querySelector('#newgame');
newgame.addEventListener('click',function(){
    main_head.style.backgroundColor='skyblue';
    colors=generateRandomColor(leng);
    correct=colors[Math.floor(Math.random()*leng)];
    console.log('correct='+correct);

    head.textContent=correct;
    tryAgain.style.visibility='hidden';
    for(var i=0;i<colors.length;i++){
        square[i].style.backgroundColor=colors[i];
    }
    
    for(var i=0;i<square.length;i++){
        if(colors[i]){
            square[i].style.backgroundColor=colors[i];
            square[i].style.display='block';
        }else{
            square[i].style.display='none';
        }
    }
});

function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        arr.push("rgb("+r+", "+g+", "+b+")");
    }
    return arr;
}