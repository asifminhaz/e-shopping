

const Contact = () => {
    return (
        <div>
           <h1 className=" font-bold text-4xl m-12">Get In Touch</h1>
           <div className="">
           <div className="ml-12">
           <div className="form-control">
  <textarea className="textarea textarea-bordered h-24 w-2/4" placeholder="Enter Message"></textarea>
  <label className="label">
   
  </label>
</div>
<div className="flex gap-4">
<div className="form-control w-full max-w-xs">
  <input type="text" placeholder="Enter Name" className="input input-bordered w-full max-w-xs" />
  <label className="label">
 
   
  </label>
</div>
<div className="form-control w-full  max-w-xs">
  <input type="text" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
  <label className="label">
   
   
  </label>
</div>
</div>
<div className="form-control w-full  max-w-xs">
  <input type="text" placeholder="Enter Subject" className="input input-bordered w-full max-w-xs" />
</div>
           </div>
           <div>


           </div>
           </div>
           <button className="btn btn-neutral ml-12 mt-5">Submit</button>
        </div>
    );
};

export default Contact;