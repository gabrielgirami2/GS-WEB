import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:4000

const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:8080/resultado');
      console.log(response.data);
    } catch (error) {
      console.error('Erro na requisição GET:', error);
    }
  };
  
fetchData();

const postData = async () => {
    try {
      const response = await axios.post('https://localhost:8080/usuario', { key: 'value' });
      console.log(response.data);
    } catch (error) {
      console.error('Erro na requisição POST:', error);
    }
  };
  
  postData();

const updateData = async () => {
    try {
      const response = await axios.put('https://localhost:8080/usuario', { key: 'updatedValue' });
      console.log(response.data);
    } catch (error) {
      console.error('Erro na requisição PUT:', error);
    }
  };
  
updateData();

const deleteData = async () => {
    
    let id = obterDado();
    try {
      const response = await axios.delete('https://localhost:8080/resultado/ ' + id);
      console.log(response.data);
    } catch (error) {
      console.error('Erro na requisição DELETE:', error);
    }
  };
  
  deleteData();

function obterDado() {
    const userInput = document.getElementById('userInput');
    console.log('Dado do usuário:', userInput);
}