//1 Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
//programa deverá calcular e mostrar:
//a. A menor altura do grupo;
//b. A maior altura do grupo;

let alturaMaior = 0
let alturaMenor = 999

for (let i = 0; i <= 5; i++) {

    const altura = parseFloat(prompt("Digite a altura:"))

    if (altura > alturaMaior) {
        alturaMaior = altura 
    }

    if (altura < alturaMenor) {
        alturaMenor = altura
    }
}

document.write(`A maior altura é ${alturaMaior} </br>`)
document.write(`A menor altura é ${alturaMenor} </br>`)
document.write("</br>")
document.write("</br>")


//2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
//Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
//Construa um algoritmo que calcule e imprima quantos anos serão
//necessários para que:
//a. Lucas e Pedro tenham o mesmo tamanho;
//b. Lucas seja maior que Pedro.

let pedroAltura = 150; 
let lucasAltura = 110; 
let anos = 0;

while (lucasAltura < pedroAltura) {
  pedroAltura += 2; 
  lucasAltura += 3; 
  anos++;
}

document.write(`a. Serão necessários ${anos} anos para que Lucas e Pedro tenham o mesmo tamanho. </br>`);

pedroAltura = 150;
lucasAltura = 110;
anos = 0;

while (lucasAltura < pedroAltura) {
  pedroAltura += 2; 
  lucasAltura += 3; 
  anos++;
}

document.write(`b. Serão necessários ${anos} anos para que Lucas seja maior que Pedro. </br>`);

document.write("</br>")
document.write("</br>")

//3. Escreva um algoritmo que faça a tabuada de um número e
//apresente o resultado de acordo com o modelo a seguir, sabendo
//que o multiplicando deverá ser fornecido pelo usuário (n) e a
//quantidade de iterações também (i).
//1 * 2 = 2
//2 * 2 = 4
//3 * 2 = 6
//...

const multiplicando = parseInt(prompt("Digite o número para a tabuada:"));

const iteracoes = parseInt(prompt("Digite a quantidade de iterações:"));

if (isNaN(multiplicando) || isNaN(iteracoes)) {
  document.write("Por favor, digite números válidos. </br>");
} else {
  for (let i = 1; i <= iteracoes; i++) {
    const resultado = multiplicando * i;
    document.write(`${i} * ${multiplicando} = ${resultado} </br>`);
  }
}

document.write("</br>")
document.write("</br>")


//4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
//e verifique quais números são múltiplos de 3 e quais são múltiplos
//de 5.

for (let numero = 1; numero <= 250; numero++) {
    if (numero % 3 === 0 && numero % 5 === 0) {
      document.write(`${numero} é múltiplo de 3 e 5 </br></br>`);
    } else if (numero % 3 === 0) {
      document.write(`${numero} é múltiplo de 3 </br></br>`);
    } else if (numero % 5 === 0) {
      document.write(`${numero} é múltiplo de 5 </br></br>`);
    }
  }

  document.write("</br>")
  document.write("</br>")


  //5. Faça um programa usando a estrutura “for” que leia um número
  //inteiro positivo e mostre na tela uma contagem de 0 até o valor
  //digitado:
  //Ex: Digite um valor: 9
  //Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!


  const valorDigitado = parseInt(prompt("Digite um valor inteiro positivo:"));

  if (Number.isInteger(valorDigitado) && valorDigitado >= 0) {
    let contagem = "Contagem: ";
  
    for (let i = 0; i <= valorDigitado; i++) {
      contagem += i;
      if (i < valorDigitado) {
        contagem += ", ";
      } else {
        contagem += ", FIM!";
      }
    }
  
    document.write(contagem);
  } else {
    document.write("Por favor, digite um valor inteiro positivo. </br>");
  }
  document.write("</br>")
  document.write("</br>")


  //6. Desenvolva um algoritmo que mostre uma contagem regressiva de
//30 até 1, marcando os números que forem primos, exatamente
//como mostrado abaixo:
//30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

let divisiveis = 0

for (let i = 30; i > 0; i--) {

    for (let j = 1; j <= 30; j++) {
        if (i % j === 0 && i % 1 === 0) {
            divisiveis++
        } 
    }
    
    if (divisiveis === 2) {
        document.write(`[${i}]`)
    } else {
        document.write(i)
    }
    divisiveis = 0

}
  document.write("</br>")
  document.write("</br>")



  //7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
//média aritmética dos valores lidos, a quantidade de valores
//positivos, a quantidade de valores negativos e o percentual de
//valores negativos e positivos.


let totalNumeros = 0;
let somaNumeros = 0;
let positivos = 0;
let negativos = 0;

for (let i = 1; i <= 10; i++) {
  const numero = parseFloat(prompt(`Digite o ${i}º número:`));

  if (!isNaN(numero)) {
    totalNumeros++;
    somaNumeros += numero;
    if (numero > 0) {
      positivos++;
    } else if (numero < 0) {
      negativos++;
    }
  }
}

if (totalNumeros > 0) {
  const media = somaNumeros / totalNumeros;
  const percentualPositivos = (positivos / totalNumeros) * 100;
  const percentualNegativos = (negativos / totalNumeros) * 100;

  document.write(`Média aritmética: ${media} </br>`);
  document.write(`Quantidade de valores positivos: ${positivos} </br>`);
  document.write(`Quantidade de valores negativos: ${negativos} </br>`);
  document.write(`Percentual de valores positivos: ${percentualPositivos}% </br>`);
  document.write(`Percentual de valores negativos: ${percentualNegativos}% </br>`);
} else {
  document.write("Nenhum número válido foi inserido. </br>");
}