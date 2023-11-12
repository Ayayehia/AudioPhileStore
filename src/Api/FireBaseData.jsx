import { useEffect, useState } from "react"
import axios from "axios"

const FireBaseData = () => {

const [products, setProducts] = useState([]);
   const [Data,setData]=useState([])
   
    useEffect( () => {
     axios.get("https://audiophile-d4be3-default-rtdb.firebaseio.com/.json")       
        .then((res) => {
         const data = res.data;
          setData(data)
          const thirdProduct = data[3];
          const productsArray = [thirdProduct];
          // Assuming the data is an array of products, set it to the state
            setProducts(productsArray);
          console.log(thirdProduct)
        });
    }, []);
  return { products,Data
    }
}

export default FireBaseData
