import {buscarCep} from "./viacep.js";

let btnBuscar = document.querySelector('#btn-buscar');

btnBuscar.addEventListener('click', async() => {
    let campoCep = document.querySelector('#cep');
    if(!campoCep.value) return
    console.log(campoCep.value)

    try {
        let endereco = await buscarCep(campoCep.value)
        console.log(endereco)
        document.querySelector('#logradouro').textContent = endereco.logradouro
        document.querySelector('#complemento').textContent = endereco.complemento
        document.querySelector('#unidade').textContent = endereco.unidade
        document.querySelector('#bairro').textContent = endereco.bairro
        document.querySelector('#uf').textContent = endereco.uf
        document.querySelector('#estado').textContent = endereco.estado
        document.querySelector('#regiao').textContent = endereco.regiao
        document.querySelector('#ibge').textContent = endereco.ibge
        document.querySelector('#gia').textContent = endereco.gia
        document.querySelector('#ddd').textContent = endereco.ddd
        document.querySelector('#siafi').textContent = endereco.siafi
    } catch(error) {
        console.error(error.message)
    }
})