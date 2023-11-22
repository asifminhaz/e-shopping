
import { useEffect } from "react";
import { useState } from "react";
import MenCard from "../MenCard/MenCard";
import './men.css'

const Men = () => {

    const  [mens, setMens] = useState([])

    useEffect(() => {
        fetch('https://eshopping-server.onrender.com/mens')
        .then(res => res.json())
        .then (data => setMens(data))

    },[])

    return (
        <div className="grid grid-cols-3 mencard m-20">
           
            {
                    mens.map(men => <MenCard
                        key={men._id}
                        men={men}
                    ></MenCard>)
                }
        </div>
    );
};

export default Men;