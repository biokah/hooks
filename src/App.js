// import Styles
import './App.css';

// import from library
import React, {useState, useRef, useEffect} from 'react';

// components from Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {

  const [counter, setCounter] = useState(0)
  const [isLoggedIn, setLogIn] = useState(false)
  const [string, setString] = useState("")
  const exampleRef = useRef(null)

  const modules = ["maquetado", "javascript", "backend", "react", "cloud"]
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=30")
    .then((response) => response.json())
    .then((data) => console.log(data));
  }, [])

  const add = () => {
    setCounter(counter + 1)
  }

  const substract = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <div>

      <main>
        <section>
          <Button variant="primary" onClick={substract}>-</Button>
          <span>{counter}</span>
          <Button variant="primary" onClick={add}>+</Button>
          <Button variant="success" onClick={()=>{exampleRef.current.focus()}}>Log in </Button>
          { isLoggedIn ? <span>Log out</span> : <span>Log in</span> }
      </section>
      <div>
       
        <input value={string} ref={exampleRef} onChange={(e)=>{setString(e.target.value)}}/>
        String: {string}
        <ul>
        {modules
        .filter(item => item.includes(string))
        .map(item => <li key={item}>{item}</li>)
        }
        </ul> 
      </div>
      </main> 

      
      </div>
    
  );
}

// https://randomuser.me/api/?results=30

export default App;
