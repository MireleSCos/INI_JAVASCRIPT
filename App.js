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

// --------------------------- Manipulando a DOM --------------------------
//A DOM é a arvore de elementos disposto em tela, organizada pelo html
function mostrarAlerta(){
    alert('Botão foi clicado !');
}


//Referenciando elementos da DOM através do js 

var inputElement = document.getElementById('name') ;//Armazeno uma referência para o input na DOm pelo id
//inputElement = document.getElementsByTagName('input'); // Retorna um vetor de referências 
//inputElement = document.getElementsByTagName('input')[0]; // Retorna o primeiro input
//posso retornar por uma classe que tbm vai ser um vetor 
//inputElement = document.querySelector('body div#app input'); // Referencio o local exato que o elemento se encontra

var btnElement = document.getElementsByClassName('botao')[0];
console.log (btnElement);
btnElement.onclick = function(){
    var text = inputElement.value;
    alert (text);
}

//Criando novos elementos 

var linkElement = document.createElement('a'); // Criando um elemento com tag a - um link 

linkElement.href = 'https://github.com/MireleSCos';

var textElement = document.createTextNode('Acessar github');

linkElement.appendChild(textElement); // Adicionando um filho ao link - um texto

var conteiner = document.getElementById('app');
console.log (conteiner); 
conteiner.appendChild(linkElement);

//É possível remover elementos tbm com removeChild(linkElement)

//Podemos editar o style
//como os atributos - semelhante ao href

// Adicionando todos 

var listElement = document.querySelector('#todo ul');
var inputElement2 = document.querySelector('#todo input');
var buttonElement = document.querySelector('#todo button');
console.log(listElement);

var todos = JSON.parse(localStorage.getItem('list_todo')) || [];

function renderTodos(){

    listElement.innerHTML = '';

    for (todo of todos){
        console.log(todo);
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo); 

        var linkElement2 = document.createElement('a');
        linkElement2.setAttribute('href','#');
        var linkText = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);
        linkElement2.setAttribute('onclick','deleteTodo('+pos+')');

        linkElement2.appendChild(linkText);
    
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement2);
        listElement.appendChild(todoElement);


    }
}
renderTodos();

function addTodo(){

    todos.push(inputElement2.value);
    inputElement2.value = "";
    renderTodos();
    saveStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){

    todos.splice(pos,1);

    renderTodos();
    saveStorage();
}

//Usando o armazenamento local STORAGE 
//Não relacionais, apenas chave e valor 
//Como todos é um vetor e o storage só amerzena chave e valor, é necessário a conversão para esse formato
//Por esse motivo usa-se o JSON (estrutura de objetos em strigs)

function saveStorage(){
    localStorage.setItem('list_todo', JSON.stringify(todos));
}