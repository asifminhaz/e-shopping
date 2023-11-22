import { Link } from "react-router-dom";
import './category.css'

const Category = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-3xl  mt-12 categorytitle">Category</h1>
            <div className="grid grid-cols-3 gap-12 p-12 category">
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-6498.jpg?w=740&t=st=1696871607~exp=1696872207~hmac=7043376ff86628901a4b678a478d587963da1736c3e90144cfb7cd0d0792ba9e" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Women</h2>
  
    <div className="card-actions">
     <Link to='/women'> <button className="btn btn-neutral">Visit Now</button></Link>
    </div>
  </div>
</div>
<div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://img.freepik.com/free-photo/handsome-man-black-suit-with-white-shirt-posing-attractive-guy-with-fashion-hairstyle-confident-man-with-short-beard-adult-boy-with-brown-hair_186202-8527.jpg?w=740&t=st=1696871683~exp=1696872283~hmac=dc27e34900ae3c8a144d0f0fe68e24bd611181e098013b3beca6bcaddcdab413" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Men</h2>
    
    <div className="card-actions">
     <Link to='/men'> <button className="btn btn-neutral">Visit Now</button></Link>
    </div>
  </div>
</div>
<div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://img.freepik.com/free-photo/full-shot-kids-posing-together_23-2149853383.jpg?w=360&t=st=1696875461~exp=1696876061~hmac=9237d60b7e509308bf6ad069fa1ead4d78394c2393d37c4de4c3400110d8154c" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Kid</h2>
  
    <div className="card-actions">
     <Link to='/kid'> <button className="btn btn-neutral">visit Now</button></Link>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Category;