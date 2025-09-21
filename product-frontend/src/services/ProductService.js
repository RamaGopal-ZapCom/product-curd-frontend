import axios from "axios";

const API_BASE_URL = "http://localhost:9999/api/product-service"; // your backend URL

class ProductService {
  getAllProducts() {
    return axios.get(`${API_BASE_URL}/getAllProducts`);
  }

  getProductById(id) {
    return axios.get(`${API_BASE_URL}/getProductById/${id}`);
  }

  createProduct(product) {
    return axios.post(`${API_BASE_URL}/createProduct`, product);
  }

  updateProduct(id, product) {
    return axios.put(`${API_BASE_URL}/updateProduct/${id}`, product);
  }

  deleteProduct(id) {
    return axios.delete(`${API_BASE_URL}/deleteProduct/${id}`);
  }
}

const productService = new ProductService();

export default productService;
