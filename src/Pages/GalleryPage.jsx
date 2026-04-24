import Gallery1 from "../assets/Flower1.jpeg";
import Gallery2 from "../assets/Flower2.jpeg";
import Gallery3 from "../assets/Flower3.jpeg";
import Gallery4 from "../assets/Flower4.jpeg";
import Gallery5 from "../assets/Flower5.jpeg";
import Gallery6 from "../assets/Flower1.jpeg";
import Gallery7 from "../assets/Flower2.jpeg";
import Gallery8 from "../assets/Flower3.jpeg";
import Gallery9 from "../assets/Flower4.jpeg";
import Gallery10 from "../assets/Flower5.jpeg";

const GalleryPage = () => {
  
  const galleryImages = [
    {
      src: Gallery1,
      alt: "Floral arrangement 1",
      span: "col-span-1 row-span-2",
    },
    {
      src: Gallery2,
      alt: "Floral arrangement 2",
      span: "col-span-1 row-span-1",
    },
    {
      src: Gallery3,
      alt: "Floral arrangement 3",
      span: "col-span-1 row-span-1",
    },
    {
      src: Gallery4,
      alt: "Floral arrangement 4",
      span: "col-span-2 row-span-1",
    },
    {
      src: Gallery5,
      alt: "Floral arrangement 5",
      span: "col-span-1 row-span-2",
    },
    {
      src: Gallery6,
      alt: "Floral arrangement 6",
      span: "col-span-1 row-span-1",
    },
    {
      src: Gallery7,
      alt: "Floral arrangement 7",
      span: "col-span-1 row-span-1",
    },
    {
      src: Gallery8,
      alt: "Floral arrangement 8",
      span: "col-span-1 row-span-1",
    },
    {
      src: Gallery9,
      alt: "Floral arrangement 9",
      span: "col-span-1 row-span-2",
    },
    {
      src: Gallery10,
      alt: "Floral arrangement 10",
      span: "col-span-2 row-span-1",
    },
  ];

  return (
    <main className="py-16 px-6 max-w-6xl mx-auto">
      
     
      <div className="text-center mb-16">
        <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-bloom-gray mb-4 block">
          Our Work
        </span>

        <h1 className="font-display font-black text-5xl md:text-7xl text-bloom-dark">
          Gallery
        </h1>
      </div>
 
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`${img.span} rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryPage;