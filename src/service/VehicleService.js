import React from 'react'

const getVehicles = async () => {
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
      return await fetch('http://localhost:8081/veiculos/listar', requestOptions)
      .then(response => response.json())
      .then(data => {
        this.setVehicle(data)  
        alert(data)
        console.log('DATA', data)
      } )
    } catch(error){
      alert("Tente novamente.", error);
      throw new Error(`Error`, error);
    }
};

export default {
  getVehicles
}