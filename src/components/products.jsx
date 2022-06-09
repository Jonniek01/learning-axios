import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Product from './product'

const url = ['https://fakestoreapi.com/products', "https://fakestoreapi.com/products/categories"]

const Products = () => {
    const [products, setproducts] = useState(null)
    const [categories, setCategories]= useState([])
    const [cat, setCat]=useState("")

    useEffect(() => {
      axios.get(url[0]).then(res=> setproducts(res.data))
      axios.get(url[1]).then(res=> setCategories(res.data))

    }, [])
    console.log("product", products)



    
  return (
    <div className='content'>
              <div className='categories'>
              <button onClick={()=>{setCat("")}} >All</button>
        {categories.map(
          (category)=>{ return  <button onClick={()=>{setCat(category)}} key={category}>{category}</button>

          }
        )}

      </div>

        <div className='products'>
          {
            cat===""?<>
                    {products? products.map(product=>(<Product product={product} key={product.id}/>)): "Loading..."}

            </>
            :
            <>
                                {products? products.filter(product=>product.category===cat).map(product=>(<Product product={product} key={product.id}/>)): "Loading..."}

            </>

          }
          </div>


    </div>
  )
}

export default Products