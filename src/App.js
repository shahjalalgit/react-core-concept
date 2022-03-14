import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const name = "Neelima";
  // const person = {
  //   fullName:  "Swapnil Khan Shahjalal",
  //   Email: "shahjalal.csegub@gmail.com",
  //   Designation: "Software Developer",
  //   Salay: 30000
  // } 
  // const style = {
  //   backgroundColor: 'red',
  //   padding: "20px"
  // }
  const nayok = ['Razzal', 'Alomgir', 'Josim', 'Bappa Raj', 'Sakib Khan', 'Swapnil Khan', 'Robi', 'Jhontu'];
  const product = [
    {name: 'photoshop', price: '$45'},
    {name: 'Illastrator', price: '$34'},
    {name: 'Windows10', price: '$105'}
  ]
  // const names = product.map( products => products.name);
  // console.log(names);

  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{color: "red", border: "10px solid blue", padding: "20px"}}>Love Story</h1>
        <p className='' style={style}>{person.fullName} Loved {name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
        }
        {/* React component call */}
        {/* <Person name="Swapnil" jobTitle = "Software Developer" salary = "30000" ></Person>
        <Person name="Neelima" jobTitle = "Software Engineer" salary = "25000"></Person>
        <Person name="Salauddin" jobTitle = "Driver" salary = "40000"></Person> */}
        {/* <Person product ={product[0]}></Person>
        <Person product ={product[1]}></Person>
        <Person product ={product[2]}></Person> */}

        <ul>
          {nayok.map( name => <li>{name}</li>)}
          {product.map( pName => <li>{pName.name}</li>)}
        </ul>
        {product.map( productDetails => <Person product = {productDetails}></Person>)}

        {/* React State */}
        <Count></Count>
        {/* Dynamic Data load on react */}
        <Users></Users>
      </header>      
    </div>
  );
  //Dynamic Data load on react
  function Users() {
    const [user, setUser] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
    })
    return(
      <div>
        <h1>Dynamic Data</h1>
        <ul>
          {
            user.map( user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }

  // React State
  function Count() {
    const [counter , setCouter] = useState(0);
    const increaseCounter = () => {
      const newCounter = counter + 1;
      setCouter(newCounter);
    }
    return(
      <div>
        <h1>Count: {counter}</h1>
        <button onClick={increaseCounter} >Increase Counter 1</button>
        <button onClick={() => setCouter(counter+1) } >Increase Counter 2</button>
        
      </div>
    )
  }

  // React Component creat
  function Person(props) {
    const style = {
       border: '1px solid grey',
       borderRadius: '10px',
       backgroundColor: "lightgrey",
       height: "300px",
       width: "400px"
    }
    return (
      // <div style={{border: '10px solid blue', margin: '10px', padding: '10px'}}>
      //   <h1>Name: {props.name} </h1>
      //   <h5>Job Title: {props.jobTitle}</h5>
      //   <p>Salary: {props.salary}</p>
      // </div>
      <div style={style}>
        <h2>{props.product.name}</h2>
        <h1>{props.product.price}</h1>
        <button type="submit">Buy Now</button>
      </div>
    )
  }
}

export default App;
