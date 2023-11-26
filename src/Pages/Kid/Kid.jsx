import { useEffect, useState } from "react";
import KidsCard from "../KidsCard/KidsCard";
import './kid.css'

const Kid = () => {
    const  [kids, setkids] = useState([])

    useEffect(() => {
        fetch('https://eshopping-server.onrender.com/kids')
        .then(res => res.json())
        .then (data => setkids(data))

    },[])

    return (
        <div className="grid grid-cols-3 kidcard ">
         
           
            {
                    kids.map(kid => <KidsCard
                        key={kid._id}
                        kid={kid}
                    ></KidsCard>)
                }
        </div>
    );
};

export default Kid;