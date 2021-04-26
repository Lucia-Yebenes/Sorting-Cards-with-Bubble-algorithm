/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //creo las array con los distintos simbolos y numeros
  let simbolo = ["♦", " ♥", "♠", "♣"];
  let Numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "K", "Q", "J"];
  //para obtener carta
  //1ro llamo al elemento el div donde esta el elemento y lo guardo en variable
  let CartaAux = document.querySelector(".cartaDeso");
  function CrearCarta(CardPalo, CardNum) {
    //funcion devuelve cata creo vatiables palo y numero para poder almacenar random
    CartaAux.innerHTML += `<div class="Carta col-10 bg-light rounded-lg p-0 mx-5 my-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <div class="icono1 col-12 text-right px-0">${CardPalo}</div>
                    <h1 id="num" class="text-center">${CardNum}</h1>
                    <div id="IconROtado" class="icono1 col-12 px-0">${CardPalo}</div>
                </div>`;
  }

  //   console.log("valores de numero de cartas aleatorieo");
  //   console.log(Prueba);
  //1ro llamo al elemento cilck, el boton y lo almaceno en una varaiable llamada BtnnDraww
  let BtnnDraww = document.querySelector("#BtnDraw");
  BtnnDraww.addEventListener("click", function() {
    //llamo al mi carta (cartaAux) y la inicializo en vacio para que cuando recargue me borre las anteriores
    CartaAux.innerHTML = "";
    //llamo al elemento (el numro q ingresa en el input)y lo almaceno en variable NumCard, al
    //poner .value lo q hago es q me devuelva el valor del imput
    let NumCard = document.querySelector("#NummCardd").value;
    //creo variable contador entonces le digo cuendo el numero que ingresa en la variable Num card sea
    //menor a contador entonces imprimir carta y luedo sumo uno
    let contador = 0;
    var OrdenAux = []; //declaro afuera de while, para que no me cree muchas
    var PalosRandom = [];
    while (contador < NumCard) {
      //creo estas vatiables , y las igualo a lo que me devuelve la fuuncion randon de los array simbolo
      //y del array numero.
      let CardPalo = simbolo[Math.floor(Math.random() * 4)];
      let CardNum = Numero[Math.floor(Math.random() * 12)];
      //llamo a la primera funcion y le paso los parametros y las crea
      CrearCarta(CardPalo, CardNum);
      contador++;
      //me devuelve la array con todos los numeros random
      OrdenAux[contador] = CardNum;
      PalosRandom[contador] = CardPalo;
    }
    console.log(OrdenAux); //impriime array de nuemros
    console.log(PalosRandom); // imprime array de simbolos
    //lista con solo nuemros, para poder ordenar las cartas paso las letras a nuemros
    var i;
    for (i = 0; i <= OrdenAux.length - 1; i++) {
      switch (OrdenAux[i]) {
        case "A":
          OrdenAux[i] = 1;
          break;
        case "K":
          OrdenAux[i] = 10;
          break;
        case "Q":
          OrdenAux[i] = 11;
          break;
        case "J":
          OrdenAux[i] = 12;
          break;
        default:
        // code block
      }
    }
    console.log(OrdenAux);
    const bubbleSort = arr => {
      let wall = arr.length - 1; //iniciamos el wall o muro al final del array
      while (wall > 0) {
        let index = 0;
        while (index < wall) {
          //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
          if (arr[index] > arr[index + 1]) {
            let aux = arr[index];
            arr[index] = arr[index + 1];
            arr[index + 1] = aux;
          }
          index++;
        }
        wall--; //disminuir la pared para optimizar
      }
      return arr;
    };
    console.log(bubbleSort(OrdenAux)); //lista ordenada lo mas del mundo mundial
  });
};

//para obtener ordenada
//1ro llamo al elemento el div donde esta el elemento y lo guardo en variable
/*let CartaAux = document.querySelector(".CartaOrden");
  function CrearCarta(CardPalo, NumOrden) {
    //funcion devuelve cata creo vatiables palo y numero para poder almacenar random
    CartaAux.innerHTML += `<div class="Carta col-10 bg-light rounded-lg p-0 mx-5 my-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <div class="icono1 col-12 text-right px-0">${CardPalo}</div>
                    <h1 id="num" class="text-center">${NumOrden}</h1>
                    <div id="IconROtado" class="icono1 col-12 px-0">${CardPalo}</div>
                </div>`;
  }*/
