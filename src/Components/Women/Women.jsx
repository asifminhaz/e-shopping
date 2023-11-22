import { useEffect, useState } from "react";
import Womencard from "../WomenCard/Womencard";
import './women.css'
const Women = () => {
    const  [womens, setWomens] = useState([])

    useEffect(() => {
        fetch('https://eshopping-server.onrender.com/womens')
        .then(res => res.json())
        .then (data => setWomens(data))

    },[])
    return (
        <div>
           <div className="grid grid-cols-3 womencard m-20">
           
           {
                   womens.map(women => <Womencard
                       key={women._id}
                       women={women}
                   ></Womencard>)
               }
       </div>
        </div>
    );
};

export default Women;