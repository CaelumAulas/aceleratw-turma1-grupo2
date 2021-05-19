
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
      console.error(error);
      alert("CATCH ERROR: ", error);
    })
}

  export default {
    login
  }