import NewsCard1 from '../assets/news-card-1.jpg';

const Card = () => {
  return (
    <div>
      <div className="card bg-base-300 w-100 h-auto shadow-sm">
        <figure className="px-10 pt-10">
          <img src={NewsCard1} alt="news" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Demo Kenaikan BBM</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum dolorem, unde accusamus eum cupiditate, et quidem dolor voluptates quo perferendis. Explicabo possimus tempora optio quasi excepturi nam. Pariatur, ducimus?
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">
              {' '}
              <a href="/news" target="_blank" rel="noopener noreferrer">
                Visit Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
