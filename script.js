
let price1=document.getElementById('prices1')
let quantite1=document.getElementById('quantites1')
let pshop1=document.getElementById('part1')
let total=document.getElementById('total')
let pheart1=document.getElementById('hearts1')
let price2=document.getElementById('prices2')
let quantite2=document.getElementById('quantites2')
let pshop2=document.getElementById('part2')
let pheart2=document.getElementById('hearts2')
let price3=document.getElementById('prices3')
let quantite3=document.getElementById('quantites3')
let pshop3=document.getElementById('part3')
let pheart3=document.getElementById('hearts3')


function heart1(){
    if(pheart1.style.color=='red'){
        pheart1.style.color='grey'
    }
    else{
        pheart1.style.color='red'
    }
}
function more1(){
    quantite1.innerHTML=+quantite1.innerHTML+1
    price1.innerHTML=+price1.innerHTML+457
    total.innerHTML=+total.innerHTML+457
}
function less1(){
    if(quantite1.innerHTML==0){
        quantite1.innerHTML=quantite1.innerHTML
        total.innerHTML=+total.innerHTML
        price1.innerHTML=   price1.innerHTML
    }
    else{
        quantite1.innerHTML=+quantite1.innerHTML-1
        total.innerHTML=+total.innerHTML-457
        price1.innerHTML=+ price1.innerHTML-457

    }
}
function remove1(){
    pshop1.style.display='none'
    total.innerHTML=+total.innerHTML-price1.innerHTML
}





function heart2(){
    if(pheart2.style.color=='red'){
        pheart2.style.color='grey'
    }
    else{
        pheart2.style.color='red'
    }
}
function more2(){
    quantite2.innerHTML=+quantite2.innerHTML+1
    price2.innerHTML=+price2.innerHTML+522
    total.innerHTML=+total.innerHTML+522
}
function less2(){
    if(quantite2.innerHTML==0){
        quantite2.innerHTML=quantite2.innerHTML
        total.innerHTML=+total.innerHTML
        price2.innerHTML=   price2.innerHTML
    }
    else{
        quantite2.innerHTML=+quantite2.innerHTML-1
        total.innerHTML=+total.innerHTML-522
        price2.innerHTML=+ price2.innerHTML-522

    }
}
function remove2(){
    pshop2.style.display='none'
    total.innerHTML=+total.innerHTML-price2.innerHTML
}



function heart3(){
    if(pheart3.style.color=='red'){
        pheart3.style.color='grey'
    }
    else{
        pheart3.style.color='red'
    }
}
function more3(){
    quantite3.innerHTML=+quantite3.innerHTML+1
    price3.innerHTML=+price3.innerHTML+312
    total.innerHTML=+total.innerHTML+312
}
function less3(){
    if(quantite3.innerHTML==0){
        quantite3.innerHTML=quantite3.innerHTML
        total.innerHTML=+total.innerHTML
        price3.innerHTML=   price3.innerHTML
    }
    else{
        quantite3.innerHTML=+quantite3.innerHTML-1
        total.innerHTML=+total.innerHTML-312
        price3.innerHTML=+ price3.innerHTML-312

    }
}
function remove3(){
    pshop3.style.display='none'
    total.innerHTML=+total.innerHTML-price3.innerHTML
}