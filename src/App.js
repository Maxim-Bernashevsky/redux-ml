import React, { Component } from 'react';


export default class App extends Component{

    submit(e){
        e.preventDefault();
        console.log('submit ', this.testInput.value);
    }


    render(){
        return (
            <div>

            </div>
        );
    }

}



