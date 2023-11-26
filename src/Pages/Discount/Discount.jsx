import './discount.css'

const Discount = () => {
    return (
        <div>
          <h1 className="text-3xl font-bold text-center m-12 bigsaletitle">Big Sale!</h1>
        <div className="grid grid-cols-2 gap-4 p-12 bigsale">
            <div>
                <img src="https://images.pexels.com/photos/1488470/pexels-photo-1488470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            </div>
            <div className="text-center ">
      <h1 className="text-3xl font-bold">50% less in all items</h1>
      <p className="pt-5"> Hurry, this offer wont last long.Snag your favorite items at half the price while supplies last.dont miss out on this fantastic opportunity to shop smart and save big. its time to upgrade your lifestyle without breaking the bank!</p>
      <p className="">  </p>
      <p className="">  </p>
      <p className="">  </p>
      <button className="btn btn-neutral mt-5">Get Started</button>
    </div>
           {/* <div className="hero min-h-screen bg-base-100 ">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://images.pexels.com/photos/3060330/pexels-photo-3060330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">50% less in all items</h1>
      <p className="py-3">by Asif . 10 oct, 2023</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}
        </div>
        </div>
    );
};

export default Discount;