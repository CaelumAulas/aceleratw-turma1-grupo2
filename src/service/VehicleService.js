export class VehicleService {

    getVehicles() {
        try{
            const requestOptions = {
              method: 'GET',
              headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin' : '*'
            }
            };
            return fetch('http://localhost:8081/veiculos/listar', {mode: 'cors'})
            .then(response => response.json())
            .then(data => {
              setVehicle(data)  
              alert(data)
              console.log('DATA', data)
            } )
          } catch(error){
            alert("Tente novamente.");
            throw new Error(`Error`, error);
          }
    }
}