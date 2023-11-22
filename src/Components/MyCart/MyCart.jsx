import React from 'react';
import useCart from '../../Shared/Hook/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart.reduce((sum,item) => item.price + sum , 0)
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://eshopping-server.onrender.com/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full'>
        <div className='uppercase font-bold grid grid-cols-3 m-8'>
            <div>
            <h1>total items: {cart.length}</h1>
            </div>
            <div>
            <h1>total price: {total}</h1>
            </div>
            <div className=''>
            <Link to="/dashboard/payment"><button className="btn btn-info">Pay</button></Link>
            </div>
        </div>
        <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className='font-bold'>
            <tr>
              <th>
                #
              </th>
              <th className='font-bold'>Product</th>
              {/* <th>Category</th> */}
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { cart.map((item, index) => <tr key ={item._id}>
              <td>
                {index}
              </td>
              <td>
               
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                 
             
              </td>
              {/* <td>
              {item.category}
              </td> */}
              <td>${item.price}</td>
              <td>
                <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
              </td>
            </tr>)}
            
           
           
          </tbody>
         
          
        </table>
      </div>
      </div>
    );
};

export default MyCart;