import React from 'react';
import Photo from '../assets/news-card-1.jpg';
import Card from '../components/Card';

const News = () => {
  return (
    <div>
      <div className="mx-80">
        <div className="mx-50 my-10 w-200 text-center">
          <p className="text-4xl font-bold">
            PP Pemuda Muhammadiyah Apresiasi Kinerja <br /> Polri Tangani Rentetan Demo
          </p>
          <p className="text-xl my-3">Rakhmad Hidayatulloh Permana - TheZine</p>
          <p className="my-3">Minggu, 14 Sep 2025 13:46 WIB</p>
          <img className="w-200 h-auto" src={Photo} alt="" />
          <p className="text-left my-2">Source:</p>
          <p className="w-200 text-left text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis blanditiis mollitia sequi. A, velit animi? Vel ea et numquam. Sunt iste voluptas corporis numquam minima dolor nisi rerum animi consequatur? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Vitae, aliquam? Debitis, temporibus reprehenderit! Aut assumenda quos dolorem aperiam neque! Facere quos fugiat facilis, at aut laborum itaque eaque. Reiciendis, asperiores. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dicta laboriosam blanditiis alias corporis, aspernatur animi consectetur aut voluptatibus atque debitis, temporibus omnis explicabo ipsam fugit commodi libero? Totam, laborum voluptates.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis blanditiis mollitia sequi. A, velit animi? Vel ea et numquam. Sunt iste voluptas corporis numquam minima dolor nisi rerum animi consequatur? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Vitae, aliquam? Debitis, temporibus reprehenderit! Aut assumenda quos dolorem aperiam neque! Facere quos fugiat facilis, at aut laborum itaque eaque. Reiciendis, asperiores. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dicta laboriosam blanditiis alias corporis, aspernatur animi consectetur aut voluptatibus atque debitis, temporibus omnis explicabo ipsam fugit commodi libero? Totam, laborum voluptates.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis blanditiis mollitia sequi. A, velit animi? Vel ea et numquam. Sunt iste voluptas corporis numquam minima dolor nisi rerum animi consequatur? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Vitae, aliquam? Debitis, temporibus reprehenderit! Aut assumenda quos dolorem aperiam neque! Facere quos fugiat facilis, at aut laborum itaque eaque. Reiciendis, asperiores. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dicta laboriosam blanditiis alias corporis, aspernatur animi consectetur aut voluptatibus atque debitis, temporibus omnis explicabo ipsam fugit commodi libero? Totam, laborum voluptates.
          </p>
        </div>
        <div className="text-center">
          <p>Seberapa Puas Anda Dengan Berita Ini?</p>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mx-50 my-10">
        <p className="text-2xl font-bold">Up Next</p>
        <div className="flex">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
