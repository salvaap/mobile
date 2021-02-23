import { API } from '../api';
import axios from 'axios';

class ProductService {
    //private url = `${API}/products`;
    constructor() {
        this.url = `${API}/products`;
    }

    allProducts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error.response.data);
                });
        });
    }
}

export default ProductService;
