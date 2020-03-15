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
        products: [],
        productInfo: {},
        page: 1, //Faz referencia a pagina que o sistema está atualmente
    };

    componentDidMount(){  //Executa assim que o componente for montado em tela
        this.loadProducts();
    }  
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        console.log(response.data.docs);
        const { docs, ...productInfo} = response.data;

        this.setState({products : docs,productInfo, page}); //Atribuindo os valores ao estado
    };
    prevPage = () => {
        const{page, productInfo} = this.state;

        if (page === 1) return

        const prevPage = page -1;

        this.loadProducts(prevPage); // Pegar as informações da proxima pagina 

    }
    nextPage = () => {
        const{page, productInfo} = this.state;

        if(page === productInfo.pages) return;
        
        const nextPage = page +1;

        this.loadProducts(nextPage); // Pegar as informações da proxima pagina 
    }

    render(){
        const {products, productInfo, page} = this.state;
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
                    <div className="actions">
                        <button disabled ={page === 1} onClick={this.prevPage}>Anterior</button>
                        <button disabled ={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
                    </div>
                    
                </div>

            </div>
        );
    }
}

