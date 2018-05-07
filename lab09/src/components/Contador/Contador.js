import React, {Component} from 'react';

export default class Contador extends Component{
    render(){
        let advertencia = (<p> iniciamos con un numero a 5! </p>);
        if (this.props.valor<=5) advertencia = null;
        return (<div>
            <h1>este es mi componete contador</h1>
            <p>este contador iniciara en: {this.props.valor}</p>
            {advertencia}
        </div>)
    }   }
