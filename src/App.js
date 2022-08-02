import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import axios from './axios.config'

function App() {
  const click = () => {
    const query = `
    query Account($username:String){
      account(username:$username){
        name
        age
        department
        sex
        salary(city:"台北")
      }
    }
    `;
    const variables = { username: "han" };
    axios
    .post('graphql',
    {
      query:query,
      variables:variables
    },{
      headers:{
        "content-type": "application/json",
        "Accept": "application/json"
      }
    }
    ).then(response =>console.log(response))
    .catch(err =>console.log(err))
    // fetch("http://localhost:5000/graphql", {
    //   mode:'no-cors',
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     "Accept": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: query,
    //     variables: variables,
    //   })
      
    // }).then((res) => res.json())
    //   .then(res => console.log(res))
    //   .catch((err) => console.log(err))
  };
  return (
<<<<<<< HEAD
    <div>
      <button type="button" onClick={click}>test</button>
=======
    <div className="App">
      <h1>hello</h1>
>>>>>>> d431d038cf71553cc8c89c0c1897a90419a92e79
    </div>
  );
}

export default App;
