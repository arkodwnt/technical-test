import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar shadow-sm bg-black">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Home
        </Link>
        <Link to="/lifestyle" className="btn btn-ghost text-xl">
          Lifestyle
        </Link>
        <Link to="/business" className="btn btn-ghost text-xl">
          Business
        </Link>
        <Link to="/celebrities" className="btn btn-ghost text-xl">
          Celebrities
        </Link>
        <Link to="/sport" className="btn btn-ghost text-xl">
          Sport
        </Link>
        <Link to="/news" className="btn btn-ghost text-xl">
          News
        </Link>
      </div>
      <div className="flex gap-2">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
