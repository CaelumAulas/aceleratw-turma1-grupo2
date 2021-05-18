/* eslint-disable */
function getVehicles(){
  try{
      const requestOptions = {
        method: 'GET',
        headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
      }
      };
      return fetch('http://localhost:8081/veiculos/listar', requestOptions)
      .then(response => response.json())
      .then(data => {
        alert(data)
        alert("Veículos listados com sucesso!");
      } )
    } catch(error){
      alert("Error - Não foi possível listar veículo!");
      throw new Error(`Error`, error);
    }
}

 function getVehiclesById(id){
  try{
      const requestOptions = {
        method: 'GET',
        headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'
      }
      };
      return fetch(`http://localhost:8081/veiculos/listar/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        alert("Veículo listado com sucesso!");
        console.log('DATA', data)
      } )
    } catch(error){
      alert("Error - Não foi possível listar veículo por id!");
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
    fetch(`http://localhost:8081/veiculos/editar/${vehicle.id}`, requestOptions)
      .then(response => response.json());
      alert("Veículo atualizado com sucesso!");
  } catch(error){
    alert("Error - Não foi possível atualizar veículo!");
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
    fetch('http://localhost:8081/veiculos/incluir', requestOptions)
      .then(response => response.json());
      alert("Veículo incluído com sucesso!");
  } catch(error){
    alert("Error - Não foi possível incluir veículo!");
    throw new Error(`Error`, error);
  }
}

function deleteVehicle(id){
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  };
  
  try{
    alert("Veículo deletado com sucesso!");
    return fetch(`http://localhost:8081/veiculos/deletar/${id}`, requestOptions)
  } catch(error){
    alert("Error - Não foi possível deletar veículo!");
    throw new Error(`Error`, error);
  }
}

export default {
  getVehicles,
  getVehiclesById,
  updateVehicle,
  addVehicle,
  deleteVehicle
}