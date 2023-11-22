
import './service.css'
const Service = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl m-12 servicetitle">Service</h1>
            <div className="grid grid-cols-4 gap-4 p-12 servicecard">
            <div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://cdn-icons-png.flaticon.com/128/956/956960.png?ga=GA1.1.1070043143.1660023343&track=ais" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Free Delivery</h2>
  </div>
</div>
<div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://cdn-icons-png.flaticon.com/128/4702/4702108.png?ga=GA1.1.1070043143.1660023343" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Always Support</h2>
  </div>
</div>
<div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://cdn-icons-png.flaticon.com/128/550/550713.png?ga=GA1.1.1070043143.1660023343&track=ais" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Money Back Gurranty</h2>
  </div>
</div>
<div className="card w-72 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://cdn-icons-png.flaticon.com/128/2438/2438078.png?ga=GA1.1.1070043143.1660023343&track=ais" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Secure Payment</h2>
  </div>
</div>
                {/* <div>
                    <img className="" src="https://cdn-icons-png.flaticon.com/128/956/956960.png?ga=GA1.1.1070043143.1660023343&track=ais"></img>
                    <h1 className=" font-bold text-1xl mt-5">Free Delivery</h1>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/4702/4702108.png?ga=GA1.1.1070043143.1660023343"></img>
                    <h1 className=" font-bold text-1xl mr-8 mt-5">Always Support</h1>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/550/550713.png?ga=GA1.1.1070043143.1660023343&track=ais"></img>
                    <h1 className=" font-bold text-1xl mt-5 mr-4">Money Back Gurranty</h1>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/2438/2438078.png?ga=GA1.1.1070043143.1660023343&track=ais"></img>
                    <h1 className=" font-bold text-1xl mt-5">Secure Payment</h1>
                </div> */}

            </div>
        </div>
    );
};

export default Service;