function calcula_imc(){
var altura = document.imcForm.altura.value;

var peso = document.imcForm.peso.value;

var quadrado = (altura * altura);

var calculo = (peso/quadrado);



if(calculo<18.5){
alert("Você está magro com esse indice: " + calculo);
}
else if(calculo>=18.5 && calculo<24.9){
alert("Você está normal com esse indice: " + calculo);
}

else if(calculo>=25 && calculo<29.9) {
alert("Você está com sobre peso com esse indice: " + calculo);
}
else if(calculo>=30 && calculo<39.9) {
alert("Você está com obesidade com esse indice: " + calculo);
}
else if (calculo>40)
alert("Você está com obesidade grave com esse indice: " + calculo);
}