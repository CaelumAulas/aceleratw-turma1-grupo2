
function login(email, senha){
    console.log('chamou service auth', email, senha)
    alert('chamou service auth', email,senha)
    try{
        const requestOptions = {
          method: 'POST',
          headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha }) //editar
        };
         fetch('http://localhost:8081/auth', requestOptions)
        .then(response => {
          console.error('response',  JSON.stringify(response))
          alert('response service auth', JSON.stringify(response))
          JSON.stringify(response)
           // response.json() 
            
        })
        .catch(error => { 
            console.error('error', error)
            alert("Error then - Não foi possível pegar o token!", error);
            throw new Error(`Error`, error);
        })
      } catch(error){
        alert("Error - Não foi possível pegar o token!", error);
        throw new Error(`Error`, error);
      }
}

  export default {
    login
  };

/*const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}; 

export default {
  register,
  login,
  logout,
  getCurrentUser,
};*/