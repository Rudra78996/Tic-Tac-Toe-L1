let btns = document.querySelectorAll('button');
let term = document.querySelector('#term');
let again =document.querySelector('#again');
let move = 0;
let k =0;
for(let i =0; i<btns.length; i++){
    btns[i].onclick=()=>{
        if(k==0){
            btns[i].innerText='X';
            btns[i].style.color="#007bff";
            k=1;
            term.innerText='O'
            if(win("X")){
                result.innerText='X WINNER!!';
                line.style.backgroundColor="#007bff"
                result.classList.add("x");
                document.querySelector('.again').classList.add('visible');
                k=2;
            }
            move++;
            end(move);
        }
        else if(k=1){
            btns[i].innerText='O';
            btns[i].style.color='#dc3545';
            k=0;
            term.innerText='X'
            if(win("O")){
                result.innerText='O WINNER!!'
                line.style.backgroundColor="#dc3545"
                result.classList.add("y");
                document.querySelector('.again').classList.add('visible');
                k=2;
            }
            move++;
            end(move);
        }
    }
}
function disableMoves(){
    let btns = document.querySelectorAll('button');
    for(let btn of btns){
        btn.disabled = true;
    }
    let playAgain = document.getElementById("again");
    playAgain.disabled = false;
}
let end=(move)=>{
    if(move==9){
        if(win("O")){
            result.innerText='O WINNER!!'
            line.style.backgroundColor="#dc3545"
            result.classList.add("y");
            document.querySelector('.again').classList.add('visible');
        }
        else if(win("X")){
            result.innerText='X WINNER!!'
            line.style.backgroundColor="#007bff"
            result.classList.add("x");
            document.querySelector('.again').classList.add('visible');
        }else{
            result.innerText='DRAW';
            document.querySelector('.again').classList.add('visible');
        }
    }
}
again.onclick=()=>{
    location.reload();
}
let _1 = document.querySelector(".one");
let _2 = document.querySelector(".two");
let _3 = document.querySelector(".three");
let _4 = document.querySelector(".four");
let _5 = document.querySelector(".five");
let _6 = document.querySelector(".six");
let _7 = document.querySelector(".seven");
let _8 = document.querySelector(".eight");
let _9 = document.querySelector(".nine");
let result = document.querySelector('.result');
let line = document.querySelector(".line")


let win = (check)=>{
    let pattern = check+check+check;
    if(_1.innerText+_2.innerText+_3.innerText== pattern){
        line.style="top:35%";
        line.style.transform="translateY(-100px)";
        disableMoves();
        return true;
    }
    else if(_4.innerText+_5.innerText+_6.innerText== pattern){
        line.style="top:35%"
        disableMoves();
        return true
    }
    else if(_7.innerText+_8.innerText+_9.innerText== pattern){
        line.style="top:35%";
        disableMoves();
        line.style.transform="translateY(100px)";
        return true;
    }
    else if(_1.innerText+_4.innerText+_7.innerText== pattern){
        line.style="top:35%";
        disableMoves();
        line.style.transform="rotate(90deg) translateY(100px)";
        return true;
    }
    else if(_2.innerText+_5.innerText+_8.innerText== pattern){
        line.style="top:35%";
        disableMoves();
        line.style.transform="rotate(90deg)";
        return true;
    }
    else if(_3.innerText+_6.innerText+_9.innerText== pattern){
        line.style="top:35%";
        disableMoves();
        line.style.transform="rotate(90deg) translateY(-100px)";
        return true;
    }
    else if(_1.innerText+_5.innerText+_9.innerText== pattern){
        line.style="top:35%";
        disableMoves();
        line.style.transform="rotate(45deg)";
        return true;
    }
    
    else if(_3.innerText+_5.innerText+_7.innerText== pattern){
        line.style="top:35%";
        disableMoves();
        line.style.transform="rotate(135deg)";
        return true;
    }
    else{
        return false;
    }   
}