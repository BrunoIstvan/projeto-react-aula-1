import axios from 'axios';

class AnuncioService {

    search(productName) {

        return axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${productName}`)
            .then(res => {
                let results = res.data.results;
                //console.log(results);
                //this.setState({ results, loading : false });
            })
            .catch(err => {

            });

    }

}

export default AnuncioService;