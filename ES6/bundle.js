"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  /*constructor(){
      this.todos = []; // Atributo
  }
  addTodo(){ //Metodo
      this.todos.push('Novo todo');
      console.log(this.todos);
  }
  */
  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this)); // Chamando o construtor da classe pai

    _this.usuario = 'Diego'; // Novo Atributo

    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      return this.usuario;
    }
  }]);

  return TodoList;
}(List);

var minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  minhaLista.add('Mirele');
};

console.log(minhaLista.mostraUsuario()); //Metodos static - classes que servem apenas para execultar funções
//Não a necessidade de instâncias 

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);

    this.operandoA;
    this.operandoB;
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      // Pode ser clamado apenas pela classe
      this.operandoA = a;
      this.operandoB = b;
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
var a = 1; // a = 3; // Variavél que só pode ler
// O let é variável de bloco, 
//valida apenas no espaço entre chaves
//Manipulação de Vetores 

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newarr = arr.map(function (item, index) {
  return item * 2;
}); // map, percorrer o vetor e retorna uma informação

console.log(newarr);
var sum = arr.reduce(function (total, next) {
  return total + next; //total = guarda o retorno da função 
  //Next guarda o próximo elemento
}); //Consumir todo o meu vetor e transformalo para apenas uma variável 

console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 == 0; //true - afirma que o objeto deve ser enviado para filter
  //Pegar todos os elemento pares 
});
console.log(filter); //Verifica se existe uma informa dentro do array e retorna

var find = arr.find(function (item) {
  return item === 2;
});
console.log(find); //Arrow functions 

var newarrr = arr.map(function (item, index) {
  return item * 2;
}); // map, percorrer o vetor e retorna uma informação

console.log(newarrr);

var teste = function teste() {
  return 'teste';
}; // pode ser para array, int, string mas não para objetos 


var teste2 = function teste2() {
  return {
    nome: 'Mirele'
  };
}; // pode ser para array, int, string mas não para objetos 


console.log(teste());
console.log(teste2()); //Valores padroes

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
};

console.log(soma());
console.log(soma(2, 2)); //Desestruturação de objetos

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Caico',
    Bairro: 'Castelo'
  }
}; //const nome = usuario.nome;
//Com Deses

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome + cidade + idade);

function mostranome(_ref) {
  var nome = _ref.nome;
  console.log(nome);
}

mostranome(usuario); //Operadores rest/spread - instalar plugin para o babel
//plugin-proposal-object-rest-spread
//REST - Pegar o resto das propriedade 

var usuario2 = {
  name: 'Mirele',
  age: 23,
  empresa: 'UFPB'
};

var name = usuario2.name,
    resto = _objectWithoutProperties(usuario2, ["name"]);

console.log(name);
console.log(resto);
var c = arr.slice(0);
console.log(c); // podemos usar o rest nos parametros de funções,
//Sendo um vetor a variavel resto
// Spread - faz o papel de propagar, repassar as infomações entre estruturas de dados 

var arr3 = [].concat(arr, _toConsumableArray(newarr));

var usuario3 = _objectSpread({}, usuario2, {
  name: "Maria"
}); //Template Literals - incluir variaveis dentro de strings 


var n = "Mirele";
var i = 20;
console.log('Meu nome é ' + n + ' e tenho ' + i + ' anos'); // Muitas concatenações 

console.log(" Meu nome \xE9 ".concat(n, " e tenho ").concat(i, " anos ")); // Muitas concatenações 
//Object Short Syntax
// Se existir const que serão atribuidas aos atributos do objeto
// E essas tiverem o mesmo nome dos atributos, na definição
// não há necessidade de fazer a atribuição
