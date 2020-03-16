import React,{Component} from "react";
import { Redirect } from 'react-router'
import './styles.css';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            redirect: false  
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
        this.setState({
            redirect: true
        })
    }
    
    render() {
        if(this.state.redirect) {
            return <Redirect to="/main" />
        }
        return (
            <div className="login">
                
                <form onSubmit={this.handleSubmit}>
                    <div className = "field-input">
                        <label>
                            Email
                            <input type="text" onChange={this.handleChange} />
                        </label>
                        <label>
                            Password
                            <input type="text" onChange={this.handleChange} />
                        </label>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        );
    }
}