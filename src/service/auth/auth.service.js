const API_URL = "http://localhost:8080/auth/";

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
        return fetch('http://localhost:8081/auth', requestOptions)
        .then(response => {
            response.json() 
            console.log('response',  response)
            alert('response service auth', response)
        })
        .catch(error => { 
            console.log('error', error)
            alert("Error then - Não foi possível listar veículo!", error);
            throw new Error(`Error`, error);
        })
      } catch(error){
        alert("Error - Não foi possível listar veículo!", error);
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