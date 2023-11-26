import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import useCart from "../../Shared/Hook/useCart";
const KidsCard = ({kid}) => {
    const {_id, price, category, image} = kid;
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const [,refetch] = useCart()
    const handleAddToCart = item => {
      console.log(item);
      if(user && user.email){
        const cartItem = {menId: _id, image, price, email: user.email}
//     fetch('https://eshopping-server.onrender.com/carts', {
          fetch('https://eshopping-server.onrender.com/carts', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(cartItem)
          })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId){
                  refetch(); // refetch cart to update the number of items in the cart
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Product added on the cart.',
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
          })
      }
      else{
          Swal.fire({
              title: 'Please login to order the Product',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login now!'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login')
              }
            })
      }
  }
    return (
        <div>
             
                <div className="">
               
            <div className="card w-96  mt-32">
  <figure className="px-10 pt-10">

    <img src={image} alt="Shoes" className="rounded-xl w-76 h-64" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Price ${price}</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions">
    <button onClick={() => handleAddToCart(kid)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default KidsCard;