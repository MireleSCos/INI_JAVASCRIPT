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

//Fazer requisições ao servidor sem atualizar a página 

/*var xhr = new XMLHttpRequest(); //Variavel de requisição

xhr.open('GET','https://api.github.com/users/diego3g');//abrindo requisição
xhr.send(null); // Nada para enviar 

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
} */

//Utilizando biblioteca para o ajax 
/*Promises - promessas - São códigos que não interfere no fluxo do código,
 são funções que devolvem valores de sucesso ou erro só depois de um tempo, não 
 precisa se procupar quando elas vão retornar 
*/ 

/*var minhaPromise = function(){
    return new Promise (function(resolver,reject){
        var xhr = new XMLHttpRequest(); //Variavel de requisição

        xhr.open('GET','https://api.github.com/users/diego3g');//abrindo requisição
        xhr.send(null); // Nada para enviar 

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if (xhr.status === 200){
                    resolver(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        } 
    });
}
minhaPromise()
    .then(function(response){
        console.log(response);
    })//retornado pelo responser
    .catch(function(error){
        console.log(error);
    })//retornado pelo reject

*/
//Utilizando o axios 

axios.get('https://api.github.com/users/diego3g')
    .then(function(response){
        console.log(response);
    })//retornado pelo responser
    .catch(function(error){
        console.log(error);
    })//retornado pelo reject

//As funções call e apply nos deixam invocar métodos como 
//se estivéssemos no contexto de um outro objeto:

            var myself = { firstName: 'Matheus', lastName: 'Lima' };

            function showFullName() {
                console.log(this.firstName + " " + this.lastName);
            }

            showFullName.call(myself);
            // Matheus Lima

            showFullName.apply(myself);
            // Matheus Lima

//This - em OO, faz referência a instancia da classe corrente, mas em JS o valor de this é determinado 
//pelo contexto de invocação da função e onde elas foram chamadas. 

/* No escopo global (em um browser) o this se refere ao objeto window*/

//Quando usado dentro de um método de um objeto, o this se refere ao próprio objeto:

var object = {
    func: function() {
        return this;
    }
};
document.write(object.func());  //[object Object]

// E bem comum esquecermos a regra acima, principalmente no uso de loops:


var object2 = {
    name: 'Mirele',
    friends: ['João', 'Ana' ],

    loop: function() {

        var self = this;

        this.friends.forEach(function(friend) {
            console.log(self.name + ' knows ' + friend); // Não pega o objeto2
        });

    }

};

object2.loop();

/* Função na Prototype Chain
Quando um método está na prototype chain de um objeto, o this desse método vai se 
referir ao objeto que o está chamando, mesmo se o método não estiver definido nesse objeto: */

var object2 = {
    func: function () {
        return this.name;
    }
};

var anotherObject = Object.create(object2); // ?? criando um novo objeto 
anotherObject.name = "Maris";

document.write(anotherObject.func()); //Matheus

// Map, Filter e Reduce

/* Provavelmente já passou por alguma situação em que era necessário por
 exemplo iterar sobre um array, ou então verificar se existe alguma propriedade 
 nele ou mesmo simplesmente gerar um novo array com base no primeiro. Os métodos
map, filter e reduce nos ajudam nessas situações */

/* Map: Dado um array qualquer, como podemos fazer para transformá-lo, ou mapeá-lo, 
em um outro array? */

// Forma difícil sem o map
        

    var months1 = [
        {shortName: 'JAN', fullName: 'January',  number: 1},
        {shortName: 'FEB', fullName: 'February', number: 2},
    ];

    var shortNameMonths1 = [];

    for (var i = 0; i < months1.length; i++) {
        shortNameMonths1.push(months1[i].shortName); // Copiando o array months para shortName
    }

    console.log(shortNameMonths1); // ['JAN', 'FEB', ...]

//Com o map 

    var months = [
        {shortName: 'JAN', fullName: 'January',  number: 1},
        {shortName: 'FEB', fullName: 'February', number: 2},
        {shortName: 'MAR', fullName: 'Março', number: 3},
        {shortName: 'ABR', fullName: 'Abril', number: 4},
        {shortName: 'MAI', fullName: 'Maio', number: 5},
    ];

    var shortNameMonths = [];

    shortNameMonths = months.map(function(month) {
        return month.shortName; // Fazendo a cópia do array months referenciado em month
    });
    
    console.log(shortNameMonths);
/*Filter : mapear um array com elementos filtrados. Ex: os primeiros 6 elementos*/

    var shortNamesixMonths = months.filter(function(month) {
        return month.number <= 2;
    }); // Fez a cópia do objeto, porém só das dois primeiros indices 

    console.log(shortNamesixMonths);

/* como podemos fazer para gerar uma acumulação de valores, ou reduzi-lo, 
em algum valor específico? 
Com o reduce seria mais ou menos assim:*/

    var monthsAcc = months.reduce(function(acc, month) {
        return acc + '/' + month.shortName;
    }, '');

    console.log(monthsAcc); // /JAN/FEB/MAR/APR...

    console.log(monthsAcc); // /JAN/FEB/MAR/APR...


// 6 - Prototype
//Herança em JS

    
    var Animal = {
        walk: function() {
            console.log("I'm walking...");
        }
    };

    var Dog = Object.create(Animal);

    Animal.walk(); // I'm walking...
    Dog.walk(); // I'm walking... 
    //Dog é um tipo de animal 
    //Se quiser posso atribuir novos atributos e métodos
    var Airplane = {
        fly: function() {
            console.log("I'm flying...");
        }
    };

    //Airplane.walk(); // Uncaught TypeError: Airplane.walk is not a function(…)

    //7 - Hoisting


// com var, o valor do segundo console.log não é esperado
    function varr(){
        var n = 1;
        if (true) {
            var n = 2;
            console.log(n); // 2
        }
        console.log(n); // 2 
    }
    
    // com let, o valor do segundo console.log é esperado
    function let() {
        let n = 1;
        if (true) {
            let n = 2;
            console.log(n); // 2
        }
        console.log(n);  // 1
    }

