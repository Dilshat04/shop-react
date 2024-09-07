import Header from "./components/Header"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import About from "./pages/About"
import Details from "./pages/Details"
import Main from "./pages/Main"
import Modal from "./components/Modal"
import { useState } from "react"
const App = () => {
  const [data,setData] = useState([])

  let requestOptions = {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "title": "test product",
      "price": 13.5,
      "description": "lorem ipsum set",
      "image": "https://i.pravatar.cc",
      "category": "electronic"
    }),
  };
  
  fetch("https://fakestoreapi.com/products", requestOptions)
    .then(response => response.text())
    .then(result =>{
      let data = JSON.parse(result)
      console.log(data);
    }
      
    )

 
  return (
    <>
    
 <Router>
 <Header/>
 <Modal/>
 <Routes>
  <Route path="/" element = {<Main setData = {setData} />}/>
  <Route path="/about" element = {<About/>}/>
  <Route path="/details" element = {<Details data = {data} />}/>
 </Routes>
 </Router>
   
    
     
    </>
  )
}

export default App