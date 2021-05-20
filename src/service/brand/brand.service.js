/* eslint-disable */
async function getBrands(){
  try{
    const requestOptions = {
      method: 'GET',
      headers: { 
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    }
    };
    return await fetch('http://localhost:8081/marcas/listar', requestOptions)
    .then(response => {return response.json()})
    .then(reponse => {
      return reponse
    } )
  } catch(error){
    throw new Error(`Error`, error);
  }
  }
  
   function getBrandsById(id){
    try{
        const requestOptions = {
          method: 'GET',
          headers: { 
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + localStorage.getItem('token')
        }
        };
        return fetch(`http://localhost:8081/marcas/listar/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
          alert("Marca listada com sucesso!");
          console.log('DATA', data)
        } )
      } catch(error){
        alert("Error - Não foi possível listar marca por id!");
        throw new Error(`Error`, error);
      }
  }
  
  function updateBrand(brand, id){
    const requestOptions = {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({ descricao: brand })
    };
    
    try{
      fetch("http://localhost:8081/veiculos/editar/ "+ id, requestOptions)
        .then(response => response.json());
        alert("Marca atualizado com sucesso!");
    } catch(error){
      alert("Error - Não foi possível atualizar marca!");
      throw new Error(`Error`, error);
    }
  }
  
  function addBrand(brand) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('token') 
      },
      body: JSON.stringify({  descricao: brand.descricao } ) 
    };
  
    try{
      fetch('http://localhost:8081/marcas/incluir', requestOptions)
        .then(response => response.json());
        alert("Marca incluído com sucesso!");
    } catch(error){
      alert("Error - Não foi possível incluir marca!");
      throw new Error(`Error`, error);
    }
  }
  
  function deleteBrand(id){
    const requestOptions = {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('token') 
      }
    };
    
    try{
    
      return fetch(`http://localhost:8081/marcas/deletar/` + id, requestOptions)
    } catch(error){
      alert("Error - Não foi possível deletar marca!");
      throw new Error(`Error`, error);
    }
  }
  
  export default {
    getBrands,
    getBrandsById,
    updateBrand,
    addBrand,
    deleteBrand
  }