let userseq=[];
let comseq=[];
let btnarr=['yellow','green','purple','red'];
let level=0;
let started=false;
let high=comseq.length;


let h3=document.querySelector('h3');

document.addEventListener("keypress",function()
{
    if(started==false){
    console.log("Game started");
        started=true;
    levelup();
    }
})


function comflash(btn)
{
    btn.classList.add('comflash');
    setTimeout(function()
    {
        btn.classList.remove('comflash');
    },250);

    if(comseq.length>high)
        high=comseq.length;
}

function userflash(btn)
{
    btn.classList.add('userflash');
    setTimeout(function()
    {
        btn.classList.remove('userflash');
    },250);
}


function levelup()
{

    userseq=[];
    level++;


h3.innerText=`level ${level}`;
    let randindex=Math.floor(Math.random()*4);
    let randCol=btnarr[randindex];
    let randbtn=document.querySelector(`.${randCol}`);
    // console.dir(randbtn);

    comseq.push(randCol);
    comflash(randbtn);
}



function checkans(idx){
    if(userseq[idx]===comseq[idx])
    {
        console.log(userseq[idx]);
        console.log(comseq[idx]);
        if(userseq.length==comseq.length)
            setTimeout(levelup,1000);
    }
    else{
        h3.innerHTML=`GAME OVER! your score was <b>${comseq.length-1}</b><br>To restart press any key.<br>(Heighest Score:-${high-1}!!)`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    }
}

function btnpress()
{
    let btn=this;

    let col=btn.getAttribute('id');
    userseq.push(col);
    checkans(userseq.length-1);
    userflash(btn);
}

let allbtns=document.querySelectorAll('.btn');
for(let btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}

function reset()
{
    started=false;
    userseq=[];
    comseq=[];
    level=0;
}