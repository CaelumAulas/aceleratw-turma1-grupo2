/* eslint-disable */
function getUsers(){
    try{
        const requestOptions = {
          method: 'GET',
          headers: { 
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + localStorage.getItem('token')
        }
        };
        return fetch('http://localhost:8081/usuarios/listar', requestOptions)
        .then(response => response.json())
        .then(data => {
          alert(data)
          alert("Usuários listados com sucesso!");
        } )
      } catch(error){
        alert("Error - Não foi possível listar usuário!");
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
          alert("Usuário listado com sucesso!");
          console.log('DATA', data)
        } )
      } catch(error){
        alert("Error - Não foi possível listar usuário por id!");
        throw new Error(`Error`, error);
      }
  }
  
  function updateUser(user){
    const requestOptions = {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
     },
      body: JSON.stringify({ user: user })
    };
    
    try{
      fetch(`http://localhost:8081/usuarios/editar/${user.id}`, requestOptions)
        .then(response => response.json());
        alert("Usuário atualizado com sucesso!");
    } catch(error){
      alert("Error - Não foi possível atualizar usuário!");
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
      body: JSON.stringify({ marca: user.brand , valor: user.value, modelo: user.userModel, ano: user.year} ) //editar
    };
  
    console.log('requestOptions***',requestOptions)
    try{
      fetch('http://localhost:8081/usuarios/incluir', requestOptions)
        .then(response => response.json());
        alert("Usuário incluído com sucesso!");
    } catch(error){
      alert("Error - Não foi possível incluir usuário!");
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
      alert("Error - Não foi possível deletar usuário!");
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