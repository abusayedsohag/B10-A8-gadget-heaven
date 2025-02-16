import { NavLink } from "react-router-dom";


const Catagory = ({ catagory }) => {

    const { category } = catagory;

    return (
        <div>
            <NavLink to={`/category/${category}`}
                className={({ isActive }) => `rounded-full btn w-full ${isActive ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}>{category}</NavLink>

        </div>
    );
};

export default Catagory;