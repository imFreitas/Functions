function CalcularIdade(idadeCachorro, taxaConversao) {

    var atividade1 = idadeCachorro * taxaConversao;

    return atividade1;
}
document.write("Exercício 1 <br><br>")

document.write("Seu pet tem " + (CalcularIdade(1, 7)) + " anos em anos humanos!<br>");

document.write("<br/>Seu pet tem " + (CalcularIdade(2, 7)) + " anos em anos humanos!<br> ");

document.write("<br/>Seu pet tem " + (CalcularIdade(3, 7)) + " anos em anos humanos!<br><br><br> ")


function nome(nomePet) {

    var Batatinha = nomePet;

    return Batatinha;
}

function idade(idade) {

    var idade = idade;

    return idade;
}

function especie(especiePet) {

    var baleia = especiePet;

    return baleia;
}

function CalcularIdade(idade, taxaConversao) {

    var idadeconversao = idade * taxaConversao;

    return idadeconversao;
}

document.write("Exercício 2 <br><br>")

document.write(nome("Batatinha") + " tem " + idade(3) + " anos em anos de verdade! Um(a) " + especie("Baleia")
+ " tem uma relação de " + CalcularIdade(1, 3) + " anos de " + especie("Tartaruga") + " para cada 1 ano humano. <br>");

document.write("<br>" + nome("Batata") + " tem " + idade(5) + " anos em anos de verdade! Um(a) " + especie("Tartaruga")
+ " tem uma relação de " + CalcularIdade(1, 5) + " anos de " + especie("Tartaruga") + " para cada 1 ano humano. <br>");

document.write("<br>" + nome("Potato") + " tem " + idade(7) + " anos em anos de verdade! Um(a) " + especie("Cachorro")
+ " tem uma relação de " + CalcularIdade(1, 7) + " anos de " + especie("Cachorro") + " para cada 1 ano humano. <br><br><br>");


function calcularMeuLanche(idade, quantidadeLanchesPorDia) {

    var calcular = idade * quantidadeLanchesPorDia;

    return calcular;
}

function idade(idade) {

    var idadeLanche = idade;

    return idadeLanche;
}

document.write("Exercício 3 <br><br>")
document.write("Você precisará de " + (calcularMeuLanche(80, 2)) + " lanches, para durar " + (idade(80)) + " anos <br>");

document.write("<br>Você precisará de " + (calcularMeuLanche(18, 6)) + " lanches, para durar " + (idade(54)) + " anos <br>");

document.write("<br>Você precisará de " + (calcularMeuLanche(50, 4)) + " lanches, para durar " + (idade(100)) + " anos <br><br><br>");


function calcularCircunferencia(raio) {

    var circunferencia = 2 * Math.PI * raio

    return circunferencia;

}

function calcularArea(raio) {

    var area = Math.PI * (raio * raio)

    return area;

}

document.write("Exercício 4 <br><br>")

document.write("A circunferênia é: " + calcularCircunferencia(2) + "<br>");
document.write("</br> A área é: " + calcularArea(2));

document.write("</br></br>A circunferênia é: " + calcularCircunferencia(4) + "<br>");
document.write("</br> A área é: " + calcularArea(4));

document.write("</br></br>A circunferênia é: " + calcularCircunferencia(6) + "<br>");
document.write("</br>A área é: " + calcularArea(6) + "<br><br><br>");

var temperaturaCelsius = 0;

function converterCelsiusFahrenheit() {
    var Celsius = ((temperaturaCelsius * 9 / 5) + 32)
    return Celsius;
}

var temperaturaFahrenheit = 0;

function converterFahrenheitCelsius() {
    var Fahrenheit = ((temperaturaFahrenheit - 32) * (5 / 9))
    return Fahrenheit;
}

document.write("Exercício 5 <br><br>")

document.write(temperaturaCelsius + "° C é igual a " + (converterCelsiusFahrenheit()) + "° F </br></br>")

document.write(temperaturaFahrenheit + "° F é igual a " + (converterFahrenheitCelsius()) + "° C")
