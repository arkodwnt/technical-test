import Headerimg from '../assets/header.png';
import Bg from '../assets/bg-header.jpg';

const Header = () => {
  return (
    <div className="bg-black bg-cover bg-center text-white" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="flex justify-between items-center px-8 py-6 bg-black/50">
        <img src={Headerimg} alt="Logo" className="h-12" />
        <p className="text-3xl font-semibold">Berita Terpercaya dan up to date?</p>
        <h1></h1>
        {/* <button className="btn btn-outline btn-secondary px-6">Click Now</button> */}
      </div>
    </div>
  );
};

export default Header;
