$(document).ready(function() {

    $(`#telefone`).mask(`(00) 00000-0000`)
    
    $(`#cpf`).mask(`000.000.000-00`)
    
    $(`#cep`).mask(`00000-000`)

    $(`form`).validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            }
            
        },
        messages: {
            nomeCompleto: "Por favor, insira seu nome",
            telefone: "Por favor, insira seu Telefone",
            email: "Por favor, insira seu E-mail",
            cpf: "Por favor, insira seu CPF",
            endereco: "Por favor, insira seu Endereço completo",
            cep: "Por favor, insira seu CEP"
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(envento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
        
    })
})