
//usando insertBefore

/*let NovoE = document.createElement("p");
let alvo = document.querySelector(".titulo");
let pai = document.querySelector("#container");
let texto = document.createTextNode("tem paragrafo aqui!!");

NovoE.appendChild(texto);
pai.insertBefore(NovoE,alvo);*/

/*Usando appendChild

let NovoElemento = document.createElement("p");
let texto = document.createTextNode("tem um espan aqui!!")
let add = document.querySelector(".paragrafo");
let pai = add.parentNode;
NovoElemento.appendChild(texto);

pai.appendChild(NovoElemento);
add.textContent="ola mundo"; */

/*Inserido texto com CreateTextNode
let texto = document.createTextNode("criando ums texto aonde não tem!!")
let p = document.querySelector(".paragrafo");

p.appendChild(texto);*/


/* usando um for com createElement
let Novoel = document.createElement("ul");
let pai = document.querySelector("#container-3");

for (i = 0; i < 5; i++) {
    
    let lista = document.createElement("li");

    let texto = document.createTextNode("opcoes" + i);

    lista.appendChild(texto);

    Novoel.appendChild(lista);



}

pai.appendChild(Novoel);*/

/*manipulandos elementos dom

let a = document.querySelector("footer a");
 
 console.log(a.getAttribute("href"));
 let link = "https://www.google.com.br/?hl=pt-BR";

 a.setAttribute("href",link);*/




