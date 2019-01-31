import React from 'react';

// import React, { Component } from 'react';
// class Home extends Component {

import { Link } from 'react-router-dom';

import axios from 'axios';
import Button from '../../components/Button/Index';

class Home extends React.Component {

    constructor() {

        super();

        this.search = this.search.bind(this);
        this.state = { 
            results: [], 
            loading: false 
        };

    }

    search(event) {

        let busca = event.currentTarget.value;
        //console.log(busca);

        this.setState({ loading : true })

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${busca}`)
            .then(res => {
                let results = res.data.results;
                //console.log(results);
                this.setState({ results, loading : false });
            })
            .catch(err => {

            });

    }

    renderLoading() {
        
        return (
            <div className="mdl-spinner mdl-js-spinner is-active"></div>
        );

    }

    renderItem() {

        let list = this.state.results;
        return list.map(item => (
            <tr key={item.id} >
                <td style={{textAlign: "center"}}>{ item.id }</td>
                <td style={{textAlign: "center"}}><img src={ item.thumbnail } /> </td>
                <td style={{textAlign: "left"}}>{ item.title }</td>
                <td style={{textAlign: "right"}}>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency', 
                        currency: 'BRL',
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                      }).format(item.price)}</td>
                {/* <td><Link to={`/anuncio/${item.id}`}>Detalhe</Link></td> */}
                <td>
                    <Link to={`/anuncio/${item.id}`}>
                        <Button 
                            label="Detalhe"
                            modifier="mdl-button--colored"></Button>
                    </Link>
                </td>
            </tr>
        ));

    }

    render() {

        //console.log('Fui chamado');

        return (

            <div>

                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="search" onChange={this.search} />
                    <label className="mdl-textfield__label" htmlFor="search">Digite para buscar...</label>
                </div>

                <hr />

                { this.state.loading && this.renderLoading() }

                <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp" style={{width: "100%"}}>
                    <thead>
                        <tr>
                            <th style={{textAlign: "center"}}>Id</th>
                            <th style={{textAlign: "center"}}>Imagem</th>
                            <th style={{textAlign: "left"}}>Nome</th>
                            <th style={{textAlign: "right"}}>Preço</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderItem() }                   
                    </tbody>
                </table>


            </div>

        )

    }

}

export default Home;

