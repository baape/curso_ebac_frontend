const form = document.getElementById('form-principal');


form.addEventListener('submit',function(e){
    e.preventDefault();

let campoA = (document.getElementById('campoA').value);
let campoB = (document.getElementById('campoB').value);

if (campoB>campoA){
    alert("Formulário Válido: O Campo B é maior que o Campo A");
}else {
    alert("Formulário Inválido: O Campo B deve ser maior que o Campo A")
}


})


console.log(form)
