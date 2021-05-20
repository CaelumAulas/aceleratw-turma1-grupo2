
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
      console.log(response)
      localStorage.setItem("token", response.jwtAuthenticationResponse.accessToken);
      return response
    })
    .catch(error => {
        alert("Não foi possível logar!");
        throw new Error(`Error`, error);
    })
}

  export default {
    login
  }