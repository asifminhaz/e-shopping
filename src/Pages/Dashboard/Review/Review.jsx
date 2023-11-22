import React from 'react';
import useAuth from '../../../Shared/Hook/useAuth';

const Review = () => {
    const {user} = useAuth()
    return (
        <div>
        <h1 className='font-bold text-3xl text-center mb-10'>Please Add a Review</h1>

       
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  className="card-body">
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="name" className="input input-bordered" required />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <inputb type="email" name="email" placeholder="email" className="input input-bordered" required >{user?.email}</inputb>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comment</span>
          </label>
          <input type="text" name="" placeholder="comment" className="input input-bordered" required />
         
        </div>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Submit"></input>
        </div>
      </form>
    
    </div>
       
        </div>
    );
};

export default Review;