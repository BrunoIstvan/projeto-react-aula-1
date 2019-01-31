import React from 'react';

import axios from 'axios';

class Anuncio extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            productId: props.match.params.id,
            product: {
                id: '',
                thumbnail: '',
                title: '',
                start_time: '',
                price: 0
            }
        };
    }

    componentDidMount() {

        this.getProductInfo();

    }

    getProductInfo() {

        axios.get(`https://api.mercadolibre.com/items/${this.state.productId}`)
            .then(res => {
                // console.log(res.data);
                this.setState({ product: res.data });
            })
            .catch(err => {

            });

    }

    renderProduct() {
        return (

            <div style={{textAlign: 'center'}}> 
                
                <br />
                <div>
                    <img src={this.state.product.thumbnail} />
                </div>

                <hr />
                <div style={{textAlign: 'center'}}>
                    <h3>{this.state.product.title}</h3>
                </div>
                
                {
                /* <hr />
                
                <div>
                    <h3>{new Intl.DateTimeFormat('pt-BR', {
                            year: 'numeric', 
                            month: 'long', 
                            day: '2-digit' 
                        }).format(this.state.product.start_time)}</h3>
                </div> */
                }

                <hr />
                
                <div>
                    <h3>{new Intl.NumberFormat('pt-BR', {
                        style: 'currency', 
                        currency: 'BRL',
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                      }).format(this.state.product.price)}</h3>
                </div>
                
            </div>

            // <div>

            //     <img src={this.state.product.thumbnail} />
            //     <hr />
            //     <span></span>
            //     <hr />
            //     <span></span>

            // </div>
        )
    }


    render() {
        return (
            <div>
                Anúncio
                {this.renderProduct()}
            </div>
        )
    }


}

export default Anuncio;