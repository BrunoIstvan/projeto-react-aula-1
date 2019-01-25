import React from 'react';
// import React, { Component } from 'react';
// class Home extends Component {

import axios from 'axios';

class Home extends React.Component {

    constructor() {

        super();

        this.state = {
            array: []
        }

    }

    listAllMacbooks() {

        axios.get('https://api.mercadolibre.com/sites/MLB/search?q=mackoob')
            .then(res => {

            })
            .catch(err => {

            });

    }

    render() {

        return (

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="search" />
                <label className="mdl-textfield__label" htmlFor="search">Digite para buscar...</label>
            </div>

        )

    }

}

export default Home;

