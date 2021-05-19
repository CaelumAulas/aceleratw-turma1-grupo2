/* eslint-disable */
function getUsers(){
    try{
        const requestOptions = {
          method: 'GET',
          headers: { 
          'Content-Type': 'application/json'
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
          'Content-Type': 'application/json'
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
  
  function updateVehicle(vehicle){
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vehicle: vehicle })
    };
    
    try{
      fetch(`http://localhost:8081/usuarios/editar/${vehicle.id}`, requestOptions)
        .then(response => response.json());
        alert("Usuário atualizado com sucesso!");
    } catch(error){
      alert("Error - Não foi possível atualizar usuário!");
      throw new Error(`Error`, error);
    }
  }
  
  function addVehicle(vehicle) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ marca: vehicle.brand , valor: vehicle.value, modelo: vehicle.vehicleModel, ano: vehicle.year} ) //editar
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
  
  function deleteVehicle(id){
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
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
    updateVehicle,
    addVehicle,
    deleteVehicle
  }