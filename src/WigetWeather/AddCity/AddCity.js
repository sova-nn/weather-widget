import React from 'react';


export default class AddCity extends React.Component{
    constructor(props){
        super(props);

    }



    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.ref.city.value)}>
                    <input placeholder='Добавьте город' ref='city'/>
                    <button type='submit'>Добавить город</button>
                </form>
            </div>
        );
    }
}
