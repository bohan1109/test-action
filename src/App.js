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
    <div>
      <button type="button" onClick={click}>test</button>
    </div>
  );
}

export default App;
