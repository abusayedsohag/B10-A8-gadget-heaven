import { NavLink } from 'react-router-dom';
import Catagory from './Catagory'


const Catagories = ({ loadCategories }) => {


    return (
        <div className="border bg-white rounded-2xl p-6 space-y-6">
            <NavLink to='/' className={({ isActive }) => `rounded-full btn w-full ${isActive ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}>All Products</NavLink>

            {
                loadCategories.map(catagory => <Catagory key={loadCategories.id} catagory={catagory}></Catagory>)
            }
        </div>
    );
};

export default Catagories;