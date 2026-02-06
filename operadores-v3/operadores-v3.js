function Somar(){
    const verificaV1 = document.getElementById('valor01').value;
    const verificaV2 = document.getElementById('valor02').value;

        // comparaçao do tipo e valor (===) |  (==) compara apenas valor 
    if(verificaV1  === '' || verificaV2 === ''){
         alert("Valor 01 ou Valor 02 em branco, digite um número. ")
    } else{
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = 
            `
        <h2>Memória de Cálculo</h2>
            <ul>
                <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                <li>Valor 02 digitado pelo usuário: <span> ${v2} </span> </li>
                <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span> </li>
            </ul>

            `;
    };
};

function Multiplicar(){
    const verificaV1 = document.getElementById('valor01').value;
    const verificaV2 = document.getElementById('valor02').value;

        // comparaçao do tipo e valor (===) |  (==) compara apenas valor 
    if(verificaV1  === '' || verificaV2 === ''){
         alert("Valor 01 ou Valor 02 em branco, digite um número. ")
    } else{
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = 
            `
        <h2>Memória de Cálculo</h2>
            <ul>
                <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                <li>Valor 02 digitado pelo usuário: <span> ${v2} </span> </li>
                <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 * v2}</span> </li>
            </ul>

            `;
    };
}; 

function Subtrair(){
    const verificaV1 = document.getElementById('valor01').value;
    const verificaV2 = document.getElementById('valor02').value;

        // comparaçao do tipo e valor (===) |  (==) compara apenas valor 
    if(verificaV1  === '' || verificaV2 === ''){
         alert("Valor 01 ou Valor 02 em branco, digite um número. ")
    } else{
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.display = 'flex';

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = 
            `
        <h2>Memória de Cálculo</h2>
            <ul>
                <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                <li>Valor 02 digitado pelo usuário: <span> ${v2} </span> </li>
                <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 - v2}</span> </li>
            </ul>

            `;
    };
};

function Dividir(){
    
}

function Limpar(){
    // esconder o container de resultado 
    document.getElementById('resultado').style.display = 'none'

    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';
};
