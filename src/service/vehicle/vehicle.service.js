/* eslint-disable */
async function getVehicles(){
  try{
      const requestOptions = {
        method: 'GET',
        headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
      }
      };
      return await fetch('http://localhost:8081/veiculos/listar', requestOptions)
      .then(response => {return response.json()})
      .then(reponse => {
        return reponse
      } )
    } catch(error){
      throw new Error(`Error`, error);
    }
}

 function getVehiclesById(id){
  try{
      const requestOptions = {
        method: 'GET',
        headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
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

function updateVehicle(vehicle, id){
  let marca = "";

  if(vehicle.brand === 10){
    marca = "VOLKS"
  } else if (vehicle.brand) {
    marca = "FORD"
  } else {
    marca = "FIAT"
  }

  const requestOptions = {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({ 
       modelo: vehicle.vehicleModel,
       ano: vehicle.year,
       valor: vehicle.value,
       marca: marca
      } ) 
    };
  
  try{
    fetch(`http://localhost:8081/veiculos/editar/` + id, requestOptions)
      .then(response => response.json());
  } catch(error){
    alert("Error - Não foi possível atualizar veículo!");
    throw new Error(`Error`, error);
  }
}

function addVehicle(vehicle) {
  let marca = "";

  if(vehicle.brand === 10){
    marca = "VOLKS"
  } else if (vehicle.brand) {
    marca = "FORD"
  } else {
    marca = "FIAT"
  }
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({ 
       modelo: vehicle.vehicleModel,
       ano: vehicle.year,
       valor: vehicle.value,
       marca: marca
      } ) 
  };

  console.log('requestOptions***',requestOptions)
  try{
    fetch('http://localhost:8081/veiculos/incluir', requestOptions)
      .then(response => response.json());
      console.log("Veículo incluído com sucesso!");
  } catch(error){
    console.error("Error - Não foi possível incluir veículo!");
    throw new Error(`Error`, error);
  }
}

function deleteVehicle(id){
  const requestOptions = {
    method: 'DELETE',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('token') 
   }
  };
  
  try{
    return fetch(`http://localhost:8081/veiculos/deletar/` + id, requestOptions);
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