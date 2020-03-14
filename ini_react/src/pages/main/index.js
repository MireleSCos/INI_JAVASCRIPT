import React, {Component} from 'react';
import './styles.css';
import api from '../../services/api';

export default class Main extends Component {

    /*Metodos de ciclo de vida são os que executam 
    automaticamete durante o ciclo de montagem 
    do componente em tela*/

    /* Dentro do React não ultiliza-se de variáveis 
    para armazenar valore, pois o método render só
    "Escuta" um tipo de 'variável' ou melhor um objetos
    que é o state, ele vai ser o arazenador das variaveis
    do backend e o render vai pegar essas variáveis e 
    jogar no front*/

    state = {
        products: []
    };

    componentDidMount(){  //Executa assim que o componente for montado em tela
        this.loadProducts();
    }  
    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response.data.docs);

        this.setState({products : response.data.docs}); //Atribuindo os valores ao estado
    };
    render(){
        const {products} = this.state;
        return (            
            <div >        
                <h6>Quandidade de produtos em estoque : {this.state.products.length}</h6>
                
                <div className = 'product-list'>
                    {products.map(product => (
                        <article className= 'product-list-un' key={product._id}>
                            <strong className='text'>{product.title}</strong>
                            <p >{product.description}</p>
                            <a  href="">Acessar</a>
                        </article>
                    ))}
                    
                </div>

            </div>
        );
    }
}

