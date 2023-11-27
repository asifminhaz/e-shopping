import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const LogIn = () => {

   const {signIn} = useContext(AuthContext)
   const navigate = useNavigate()
   const location = useLocation()

   const from = location.state?.from?.pathname || "/"

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)
        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
          Swal.fire({
            title: 'User Login Successfully',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          navigate(from, {replace: true})
        })

    }


    return (
        <div>
            <h1 className="text-3xl text-center font-bold  mt-12">Please Log In</h1>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse mb-72">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login"></input>
        </div>
      </form>
      <p>New here? <button className="btn btn-link"><Link to="/register">Create an account</Link></button></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;