
 async function login(email, senha){
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    }

     await fetch("http://localhost:8081/auth", requestOptions).then(response => {
      return response.json()
    })
    .then(response => {
      localStorage.setItem("token", response.jwtAuthenticationResponse.accessToken);
      return response.jwtAuthenticationResponse.accessToken
    })
    .catch(error => {
        throw new Error(`Error`);
    })
}

  export default {
    login
  }