/* eslint-disable */
async function getUsers(){
    try{
        const requestOptions = {
          method: 'GET',
          headers: { 
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + localStorage.getItem('token')
        }
        };
        return await fetch('http://localhost:8081/usuarios/listar', requestOptions)
        .then(response => {
          return response.json()
        })
        .then(response => {
          return response
        } )
      } catch(error){
        throw new Error(`Error`, error);
      }
  }
  
   function getUsersById(id){
    try{
        const requestOptions = {
          method: 'GET',
          headers: { 
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + localStorage.getItem('token')
        }
        };
        return fetch(`http://localhost:8081/usuarios/listar/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          return data
        } )
      } catch(error){
        throw new Error(`Error`, error);
      }
  }
  
  function updateUser(user, id){
    const requestOptions = {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
     },
      body: JSON.stringify({
        email: user.email,
        senha: user.password
      })
    };
    
    try{
      fetch("http://localhost:8081/usuarios/editar/" + id, requestOptions)
        .then(response => response.json());
    } catch(error){
      throw new Error(`Error`, error);
    }
  }
  
  function addUser(user) {
    const requestOptions = {
      method: 'POST',
      headers: { 
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
     },
      body: JSON.stringify({
          email: user.email,
          senha: user.password
        })
      };
  
    try{
      fetch('http://localhost:8081/usuarios/incluir', requestOptions)
        .then(response => response.json());
    } catch(error){
      throw new Error(`Error`, error);
    }
  }
  
  function deleteUser(id){
    const requestOptions = {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('token') }
    };
    
    try{
      return fetch(`http://localhost:8081/usuarios/deletar/${id}`, requestOptions)
    } catch(error){
      throw new Error(`Error`, error);
    }
  }
  
  export default {
    getUsers,
    getUsersById,
    updateUser,
    addUser,
    deleteUser
  }