import React, {Component} from 'react';
import  classes from './Contador.css';

export default class Contador extends Component{
    state = {
        cont:this.props.valor
    }
    disminuirHandler=()=> {
        this.setState ({
            cont:this.state.cont - 1
        });
    }
    aumentarHandler = ()=> {
        this.setState({
            cont: this.state.cont + 1
        });
         }
    resetHandler = () => {
            this.setState({
                cont: this.props.valor
            });
        }
    
    render(){
        let advertencia = (<p> iniciamos con un numero a 5! </p>);
        if (this.props.valor<=5) advertencia = null;
        return (<div className={classes.Contador}>
            <h1>este es mi componete contador</h1>
            <p>este contador iniciara en: {this.props.valor}</p>
            {advertencia}
            <p>Numero actual:{this.state.cont}</p>
            <button onClick={this.disminuirHandler}>Disminuir</button>
            <button onClick={this.resetHandler}>Resetear</button>
            <button onClick={this.aumentarHandler}>Aumentar</button>
        </div>)
    }   }
