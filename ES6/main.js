class List {

    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{

    /*constructor(){
        this.todos = []; // Atributo
    }
    addTodo(){ //Metodo
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
    */

    constructor(){
        super(); // Chamando o construtor da classe pai
        this.usuario = 'Diego'; // Novo Atributo
    }

    mostraUsuario(){
        return this.usuario;
    }

}
const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function (){
    minhaLista.add('Mirele');
}

console.log(minhaLista.mostraUsuario());

//Metodos static - classes que servem apenas para execultar funções
//Não a necessidade de instâncias 

class Matematica {
    constructor() {
        this.operandoA;
        this.operandoB;
    }

    static soma(a,b){ // Pode ser clamado apenas pela classe
        this.operandoA = a;
        this.operandoB = b;
        return a+b;
    }
}

console.log(Matematica.soma(1,2));

const a = 1;

// a = 3; // Variavél que só pode ler

// O let é variável de bloco, 
//valida apenas no espaço entre chaves

//Manipulação de Vetores 

const arr = [1,2,3,4,5,6,7,8,9];

const newarr = arr.map(function(item, index){
    return item * 2;
});// map, percorrer o vetor e retorna uma informação

console.log(newarr);

const sum = arr.reduce(function(total,next){
    return total + next;
    //total = guarda o retorno da função 
    //Next guarda o próximo elemento
});//Consumir todo o meu vetor e transformalo para apenas uma variável 

console.log(sum);

const filter = arr.filter(function (item){

    return item % 2 == 0;

    //true - afirma que o objeto deve ser enviado para filter
    //Pegar todos os elemento pares 
});

console.log(filter);

//Verifica se existe uma informa dentro do array e retorna

const find = arr.find(function(item){
    return item === 2;
});


console.log(find);

//Arrow functions 

const newarrr = arr.map((item, index) => item * 2);// map, percorrer o vetor e retorna uma informação

console.log(newarrr); 

const teste = () => 'teste' ;// pode ser para array, int, string mas não para objetos 
const teste2 = () => ({ nome: 'Mirele'}) ;// pode ser para array, int, string mas não para objetos 

console.log(teste());
console.log(teste2());

//Valores padroes

const soma = (a = 3, b = 2) => a+b;

console.log(soma());

console.log(soma(2,2));

//Desestruturação de objetos

const usuario = {
    nome: 'Diego',
    idade: 23,   
    endereco: {
        cidade : 'Caico',
        Bairro: 'Castelo',
    }
}

//const nome = usuario.nome;

//Com Deses

const { nome,  idade, endereco: {cidade}} = usuario;

console.log (nome + cidade + idade );

function mostranome({nome}){
    console.log(nome);
}

mostranome(usuario);

//Operadores rest/spread - instalar plugin para o babel
//plugin-proposal-object-rest-spread

//REST - Pegar o resto das propriedade 
const usuario2 = {
    name: 'Mirele',
    age: 23,   
    empresa: 'UFPB',
}
const { name ,  ...resto} = usuario2;

console.log(name);
console.log(resto);

const [...c] = arr;

console.log(c);

// podemos usar o rest nos parametros de funções,
//Sendo um vetor a variavel resto

// Spread - faz o papel de propagar, repassar as infomações entre estruturas de dados 

const arr3 = [...arr, ...newarr];

const usuario3 = {...usuario2, name: "Maria"};

//Template Literals - incluir variaveis dentro de strings 


const n = "Mirele";
const i = 20;

console.log ('Meu nome é ' + n + ' e tenho ' + i + ' anos'); // Muitas concatenações 



console.log (` Meu nome é ${n} e tenho ${i} anos `); // Muitas concatenações 

//Object Short Syntax
    // Se existir const que serão atribuidas aos atributos do objeto
    // E essas tiverem o mesmo nome dos atributos, na definição
    // não há necessidade de fazer a atribuição


