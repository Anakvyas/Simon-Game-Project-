// Accessing variables
const text = document.querySelector('.text');
const box = document.querySelector('.boxes');


// array 
let color = ["red","yellow","blue","green"];
let user = [];
let comp = [];

// variables
let isstart = false;
let level = 0 ;
let maxScore = 0;

document.addEventListener('keypress',function(event){
  if(event.key == 'Enter' && isstart == false){
    isstart = true;
    levelup();
  }
});

let levelup = function(){
    user = [];
    level++;
    text.innerText = `LEVEL : ${level}`;
    //generate random color;
    let random = color[Math.floor(Math.random()*4)];
    comp.push(random);
    console.log(comp);
    const btn = document.querySelector(`.${random}`);
    flash(btn);
}

// to flash box
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
};

// for user btn
function btnpress(){
    let btn = this;
    let n = btn.getAttribute('id');
    user.push(n);
    console.log(user);
    flash(btn);
    checking(user.length-1);
}

let btns = document.querySelectorAll('.boxes');
for(btn of btns){
    btn.addEventListener('click',btnpress);
}

// checking user and comp array
function checking(idx){
    if(user[idx] == comp[idx]){
        if(user.length == comp.length){
            setTimeout(levelup,1000);
        }
    }else{

        text.innerHTML = `Game Over , Your Score is <b>${level}</b> <br> Press ENTER Key To Restart `;
        if(level > maxScore){
            maxScore = level;
            highscore(maxScore);
        }
        document.querySelector('body').style.background="red";
        setTimeout(function(){
            document.querySelector('body').style.background="linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)";
        },150);
        reset();
    }
}
// for reset: 
function reset(){
    user = [];
    comp =[];
    isstart = false;
    level = 0 ;
    // text.innerText = " Press ENTER Key To Start";
}

function highscore(val){
    let div = document.querySelector('.high');
    let highscore = document.createElement('h2');
    highscore.innerText = val;
    div.appendChild(highscore);
}