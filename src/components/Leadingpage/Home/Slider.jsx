import img1 from '../../../assets/aaa.jpeg';
import img2 from '../../../assets/aaaa.jpeg';
import img3 from '../../../assets/aa.jpeg';
import img4 from '../../../assets/a.jpeg';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Hero = () => {
  const ImageList = [
    { id: 1, src: img1, title: "Products from the Source", description: "Pure products from the source" },
    { id: 2, src: img2, title: "Fresh Products", description: "Get fresh and organic products directly." },
    { id: 3, src: img3, title: "Nationwide Availability", description: "Choose from all regions of the country." },
    { id: 4, src: img4, title: "Reliable Transportation", description: "We provide safe and timely delivery." },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px]">
      <Slider {...settings}>
        {ImageList.map((data) => (
          <div key={data.id} className="relative w-full h-[500px] md:h-[600px] lg:h-[650px]">
            {/* Image */}
            <img src={data.src} alt={data.title} className="w-full h-full object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6 text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">{data.title}</h1>
              <p className="text-lg md:text-xl font-light max-w-xl">{data.description}</p>

              {/* Call to Action */}
              <Link to="/signup">
                <button className="mt-5 px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-all shadow-lg">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;