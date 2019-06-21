import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './widget.css';

export default class Widget extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temp: '',
            hasError: false,
        }
    }


    getTemp = () => {
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: (this.props.city ),
                appid: '039a8c724ce745425ae047d6f28feb9f',
                // lang: 'en'
            }
        })
        .then(res => {
            if(res.cod === '404') {
                throw new SyntaxError('Нет такого города, милейший!')
            }
            console.log('res', res);
            const temp = (res.data.main.temp - 273.17).toFixed(1);

            this.setState({temp});
            this.setState({hasError: false});
        })
            .catch((err) => {

                this.setState({hasError: true});

            });
    }

    componentDidMount(){
        this.getTemp();
    }

    render() {
        return(
            (!this.state.hasError) &&
            <div className="widget">
                <div>Погода в городе {this.props.city}</div>
                <div>Температура {this.state.temp}</div>
            </div>
        );
    }
}

Widget.defaultProps = {
    city: 'London'
};

Widget.propTypes = {
    city: PropTypes.string
};