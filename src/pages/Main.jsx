import React from 'react'
import { useState,useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'
import Details from './Details'


const Main = ({setData}) => {
const[isShown,setIsShown] = useState(false)
const [products,setProducts] = useState([])
useEffect(() => {
  const getData = async() => {
    let {data} = await axios("https://fakestoreapi.com/products ")
    setProducts(data);
   
   }
   getData()
},[])







const handleClick =() =>{
  setIsShown(isShown)
}

  return (
    <>
      <button onClick={handleClick}>
        go
      </button>
    {
      isShown && <p>modal</p>
    }
    
    </>


  )}


export default Main



{/* {

products[0] ?

<section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
   <div class="container max-w-[780px] mx-auto">

      <div class="flex flex-wrap -mx-4">
        {
          products.map((el) => (
            <Card product = {el}/>
          ))
        }
      
        
      </div>
   </div>
</section> 

:

<p>
    spinner
  </p>


}  */}