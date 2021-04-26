/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //creo las array con los distintos simbolos y numeros
  let simbolo = ["♦", " ♥", "♠", "♣"];
  let Numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "K", "Q", "J"];
  let mazo = [];
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
    while (contador < NumCard) {
      //creo estas vatiables , y las igualo a lo que me devuelve la fuuncion randon de los array simbolo
      //y del array numero.
      let CardPalo = simbolo[Math.floor(Math.random() * 4)];
      let CardNum = Numero[Math.floor(Math.random() * 12)];
      //llamo a la primera funcion y le paso los parametros y las crea
      CrearCarta(CardPalo, CardNum);
      contador++;
      //concateno array me queda una array dentro de la otra no una traz de la otra
      mazo.push([CardNum, CardPalo]);
    }

    //lista con solo nuemros, para poder ordenar las cartas paso las letras a nuemros
    var i;
    for (i = 0; i <= mazo.length - 1; i++) {
      switch (mazo[i][0]) {
        case "A":
          mazo[i][0] = 1;
          break;
        case "K":
          mazo[i][0] = 10;
          break;
        case "Q":
          mazo[i][0] = 11;
          break;
        case "J":
          mazo[i][0] = 12;
          break;
        default:
        // code block
      }
    }
    //console.log(OrdenAux);
    //[[1,corazon],[4,diamante],[8,pica]]
    const bubbleSort = arr => {
      let wall = arr.length - 1; //iniciamos el wall o muro al final del array
      while (wall > 0) {
        let index = 0;
        while (index < wall) {
          //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
          if (arr[index][0] > arr[index + 1][0]) {
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
    console.log(bubbleSort(mazo)); //lista ordenada
    console.log(mazo);
  });
};
