function somar() {
    // criar uma variavel para armazenar o valor 01 
    let v1 = parseFloat(prompt('Valor01'));

    // template de string para exibir o valor
    // template de string sintaxe: ${variável ou constante}
    alert(`O valor digitado pelo usuário ${v1}.`);

    let v2 = parseFloat(prompt('Valor02'));
    alert(`O valor digitado pelo usuário ${v2}.`);

    // resultado = div
    document.getElementById('rseultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é ${v1 + v2}.`;
};

    function subtrair() {

    }

    function multiplicar() {

    }

    function dividir() {


    }