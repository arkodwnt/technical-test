import Card from './Card';
import News2 from '../assets/news-card-2.jpg';

const Main = () => {
  return (
    <div>
      <div className="flex mx-20 my-5 gap-10">
        <div className="relative w-fit ">
          <img className="w-200 h-auto rounded-2xl" src={News2} alt="News" />
          <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4 rounded-b-2xl">
            <h2 className="text-xl font-bold">Judul Berita Menarik</h2>
            <div className="flex justify-between">
              <p className="text-sm mt-1">Ini adalah deskripsi singkat dari berita yang ditampilkan pada gambar.</p>
              <button className="btn btn-dash btn-info">
                <a href="/news" target="_blank" rel="noopener noreferrer">
                  Info
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="our-pick">
            <div className="w-180 h-10 bg-black">
              <p className="text-2xl mx-3 text-center">Our Pick</p>
            </div>
          </div>
          <div className="flex bg-white/20 h-30 w-180">
            <a href="/news" target="_blank" rel="noopener noreferrer">
              <img className="w-70 h-30 cursor-pointer hover:opacity-80 transition" src={News2} alt="News Thumbnail" />
            </a>
            <div>
              <p className="mx-5 my-4  ">Judul ini adalah sebagai </p>
              <p className="mx-5 my-4 ">11 Januri 2025 </p>
            </div>
          </div>
          <div className="flex bg-white/20 h-30 w-180">
            <a href="/news" target="_blank" rel="noopener noreferrer">
              <img className="w-70 h-30 cursor-pointer hover:opacity-80 transition" src={News2} alt="News Thumbnail" />
            </a>
            <div>
              <p className="mx-5 my-4  ">Judul ini adalah sebagai </p>
              <p className="mx-5 my-4 ">11 Januri 2025 </p>
            </div>
          </div>
          <div className="flex bg-white/20 h-30 w-180">
            <a href="/news" target="_blank" rel="noopener noreferrer">
              <img className="w-70 h-30 cursor-pointer hover:opacity-80 transition" src={News2} alt="News Thumbnail" />
            </a>
            <div>
              <p className="mx-5 my-4  ">Judul ini adalah sebagai </p>
              <p className="mx-5 my-4 ">11 Januri 2025 </p>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel w-430 h-100 mx-20 rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-10 my-5 mx-20">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
