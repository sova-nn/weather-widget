import React from 'react';
import './weatherset.css';
import Widget from "../Widget/Widget";


export default class WidgetSet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cities: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const newCity = this.input.value;
        const citiesToAdd = this.state.cities;
        citiesToAdd.push(newCity);
        this.setState({cities: citiesToAdd});
        console.log(citiesToAdd);
        e.preventDefault();
    }


    render(){

        return(
            <div className='weatherset'>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Добавьте город' type='text' ref={(input) => this.input = input}/>
                    <button type='submit'>Добавить город</button>
                </form>
                <div>
                    {this.state.cities.map((city, index) =>
                        <Widget key={index} city={city} />
                    )}
                </div>

            </div>
        );
    }
}