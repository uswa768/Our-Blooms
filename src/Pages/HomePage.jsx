import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import hero from "../assets/mainheropage.jpeg"
import flower1 from "../assets/Flower1.jpeg";
import flower2 from "../assets/Flower2.jpeg";
import flower3 from "../assets/Flower3.jpeg";
import flower4 from "../assets/Flower4.jpeg";
import flower5 from "../assets/Flower5.jpeg";

import service1 from "../assets/Service1.jpeg";
import service2 from "../assets/Service2.jpeg"
import service3 from "../assets/Service3.jpeg"

const HomePage = () => {
  const navigate = useNavigate();

  const galleryImages = [
    flower1,
    flower2,
    flower3,
    flower4,
    flower5,
  ];

  return (
    <main>
       
      <section className="min-h-[85vh] flex flex-col items-center justify-start pt-10 px-6">
        <h1 className="font-display font-black text-[12vw] md:text-[10vw] lg:text-[14vw] leading-none text-bloom-dark text-center mb-8">
          Our Blooms
        </h1>

        <div className="w-full max-w-5xl rounded-3xl overflow-hidden">
          <img
            src={hero}
            alt="Our Blooms hero flower"
            className="w-full h-[75vh] object-cover"
          />
        </div>
      </section>
 
      <section className="py-24 px-6 flex flex-col items-center text-center">
        <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-bloom-gray mb-4">
          Who We Are
        </span>

        <h2 className="font-display font-black text-4xl md:text-5xl text-bloom-dark max-w-3xl leading-tight mb-8">
          We're Our Blooms and we're here to help you find your floral story.
        </h2>

        <Button onClick={() => navigate("/about")}>
          About Us
        </Button>

        <div className="mt-16 w-full overflow-x-auto flex gap-4 pb-2 scrollbar-hide">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="flex shrink-0 w-64 h-72 rounded-2xl overflow-hidden bg-gray-100"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

     
      <section className="py-24 px-6 flex flex-col items-center text-center bg-white">
        <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-bloom-gray mb-4">
          Work With Us
        </span>

        <h2 className="font-display font-black text-4xl md:text-5xl text-bloom-dark max-w-3xl leading-tight mb-8">
          Discover how we can add a touch of natural beauty to your next event.
        </h2>

        <Button onClick={() => navigate("/about")}>
          About Us
        </Button>
      </section>

    
      <section className="py-8">
        <ServiceCard
          number="1"
          title="Floral Installations"
          desc="Living art for homes, businesses, and events."
          image={service1}
          imageAlt="Floral installation"
        />

        <ServiceCard
          number="2"
          title="Native Plant Arrangements"
          desc="Whether it's an intimate wedding or a corporate event, our floral arrangements blend seamlessly into any setting."
          image={service2}
          imageAlt="Native plant arrangement"
        />

        <ServiceCard
          number="3"
          title="CUSTOM FLORAL CONCEPTS"
          desc="Your vision, our blooms. We build arrangements that are both personal and exquisitely simple."
          image={service3}
          imageAlt="Custom floral concept"
        />
      </section>

         <section className="py-24 px-6 flex flex-col items-center text-center bg-white">
        <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-bloom-gray mb-4">
          Work With Us
        </span>

        <h2 className="font-display font-black text-4xl md:text-5xl text-bloom-dark max-w-3xl leading-tight mb-8">
          Discover how we can add a touch of natural beauty to your next event.
        </h2>

        <Button onClick={() => navigate("/about")}>
          About Us
        </Button>
      </section>
    </main>
  );
};

export default HomePage;