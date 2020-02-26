//Variáveis - Tipagem dinâmica (strings, inteiros, float, vetores, objetos), declarados apenas como var 

var nome = 'Diego';
var idade = 21;
var peso = 80.5;
var altura = 70.6;

var alunos = ['Diego', 'Mirele', 'Paulo']; // Vetor

var aluno = { // Objeto

    nome: alunos[0],
    idade : 21,
    peso: 80.5,
    altura: 70.6
};

console.log(alunos);
console.log(aluno);
console.log(aluno.nome); // Consultado um atributo do objeto

//Operações matemáticas - + (Soma ou concatena) - % (Modulo) - -=|+=|/= (Atribui a uma variavél um certo valor com ela mesma) 

//Funções 

function soma (parametro1,parametro2){
    //Copo da função 
    var resultado = parametro1 + parametro2; 
    return resultado;
}

var resultado = soma(1,2); // Variavel de escopo diferente
console.log('Resultado da soma: ',resultado) 

//Condicionais

function sexo(sexo){
    //M,F

/*  
    if (sexo == 'M'){ // == (valores iguais, true para 1 == '1') === (Valor e tipo, false 1 === '1')
        return 'Masculino';
    }else if (sexo == 'F'){
        return 'Feminino';
    }else{
        return 'Outros';
    }
*/

    //ou usar o swith para uma só variável 

    switch(sexo){
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default:
            return 'Outros';

    }
}

//Operadores lógicos - && (E ou and) - || (OU ou or) - != ou !== (verificar a desiguldade)

//Condição ternária 
sex = 'M';

resultado = (sex === 'M')?'Masculino':'Feminino';

console.log('Resultado do sexo: ',resultado)

//Repetição - For - While 

for (var i = 0; i <= 10; i++){//Souber o tamanho do intervalo
    console.log('Valor de i :',i);
}

var j = 0;
while (j<10){ // Roda enquanto a condição for verdadeira 
    console.log('Valor de j :',j);
    j++;
}

//Intervalos e Timeout - permite que funções sejam executadas varias vezes dentro de um intervalo definido 

function exibeAlgo(){
    console.log('Hello');
}
setInterval(exibeAlgo,1000); // sexo vai ser executada a cada 1 segundo, não precisa do () pq ele não iria referenciar 
setTimeout(exibeAlgo, 10000); // Só execulta uma vez, mas com um dalay 