// 1. deklarasi player ngambil dari dom queryselectorAll -->done
// 2. deklarasi komputer ngambil dari Math.floor(Math.random() *3) --> done
// 3. menentukan pilihan COM gunting/batu/kertas (diambil dari mathRandom) --> done
// 4. menentukan pilihan player gunting/batu/kertas (diambil dari dom queryselectorAll) --> done, tapi belum selesai
// 5. membandingkan pilihan komputer dan player dengan diberi kondisi if else
// 6. menampilkan hasil dari pilihan player vs komp
// 7. Reset --> done
//     1. mathrandom dipanggil kembali (pilihan komputer)
//     2. menghapus background (pilihan komputer)
//     3. menghapus background (pilihan player)
//     4. mengembalikan tampilan hasil ke vs (tampilan awal)


//deklarasi variabel untuk menyimpan pilihan user 
let pilihanPlayer = document.querySelectorAll('#pilihanPlayer img');
// console.log(pilihanPlayer);
let playerChoice=0;

// deklarasi variabel untuk hasil randomCom
let resultCom = document.querySelectorAll('#resultCom img');
console.log(resultCom);

//deklarasi numberCom untuk generate bil. random Comp
let numberCom; 
console.log(numberCom);

//looping untuk nampilin begron abu2 hasil pilihanPlayer
for(let i=0; i<pilihanPlayer.length; i++){
    pilihanPlayer[i].addEventListener("click", function(){
        playerChoice = i ;
        pilihanPlayer[i].style.background = 'grey';
        //looping untuk nampilin begron abu2 hasil numberCom
        numberCom = Math.floor(Math.random() * 3);
        for(let j=0; j<resultCom.length; j++){
            if(j===numberCom){
              resultCom[j].style.background = 'grey' ;
            }
          }
        logikaSuit(playerChoice,numberCom);
    })
}

// menentukan logika suit dan hasil
//0 = batu
//1 = gunting
//2 = kertas
// deklarasi hasil
let vs = document.querySelector("#vs");
let win = document.querySelector("#win");
let lose = document.querySelector("#lose");
let draw = document.querySelector("#draw");
console.log(vs);
let result='';
function logikaSuit(playerChoice, numberCom){
    console.log(playerChoice, numberCom);

    if(playerChoice === numberCom){ 
        result='draw';
        boxResult(result);
    }
    else if(playerChoice===0 && numberCom===1){
        result='win';
        boxResult(result);
    }
    else if(playerChoice===0 && numberCom===2){
        result='lose';
        boxResult(result);
    }
    else if(playerChoice===1 && numberCom===0){
        result='lose';
        boxResult(result);
    }
    else if(playerChoice===1 && numberCom===2){
        result='win';
        boxResult(result);
    }
    else if(playerChoice && numberCom===0){
        result='win';
        boxResult(result);
    }
    else{
        result='lose';
        boxResult(result);
    }
}

//membuat fungsi untuk menampilkan hasil di tengah
function boxResult(result){
    if(result=='draw'){
        draw.classList.remove("d-none");
        vs.classList.add("d-none");
    } else if(result=='win'){
        win.classList.remove("d-none");
        vs.classList.add("d-none");
    } else{
        lose.classList.remove("d-none");
        vs.classList.add("d-none");
    }
}
//fungsi ini untuk mengembalikan hasil 
function resetBox(result){
    if(result=='draw'){
        draw.classList.add("d-none");
        vs.classList.remove("d-none");
    } else if(result=='win'){
        win.classList.add("d-none");
        vs.classList.remove("d-none");
    } else{
        lose.classList.add("d-none");
        vs.classList.remove("d-none");
    }
}

//untuk refresh page
const refreshPage = document.querySelector('#refresh').addEventListener("click", function(){
   
    //menghapus background com
    resultCom[numberCom].style.background = 'none';
    //menghapus background player
    pilihanPlayer[playerChoice].style.background = 'none';

     //memanggil mathrandom kembali
     numberCom = null;
    //mengembalikan tampilan hasil ke vs
    resetBox(result);
    

});

