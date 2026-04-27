 import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button'
import Image3 from '../assets/Image 03.png'

const AboutPage = () => {
  const navigate = useNavigate()

  return (
    <main>

   
      <section className="py-20 px-6 flex flex-col items-center text-center">
        <span className="font-body text-xs font-semibold tracking-[0.3em] uppercase text-bloom-gray mb-4">
          About Us
        </span>
        <h1 className="font-display font-black text-4xl md:text-6xl text-bloom-dark max-w-3xl leading-tight mb-6">
          Rooted in nature. Crafted with love.
        </h1>
        <p className="font-body text-bloom-gray text-lg max-w-xl leading-relaxed">
          Our Blooms is a floral design studio specializing in native plant arrangements,
          floral installations, and event styling.
        </p>
      </section>
 
  
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <div className="w-full h-[50vh] rounded-3xl overflow-hidden bg-gray-100">
          
          <img
            src={Image3}    
            alt="Our Blooms team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
 
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="font-display font-black text-3xl text-bloom-dark mb-6">Our Story</h2>
        <p className="font-body text-bloom-gray text-base leading-relaxed mb-4">
          We started Our Blooms with a simple belief that flowers have the power to transform spaces
          and create unforgettable moments. From intimate weddings to large-scale corporate events,
          we bring nature's beauty to every occasion.
        </p>
        <p className="font-body text-bloom-gray text-base leading-relaxed mb-8">
          Using locally sourced, seasonal blooms and native plants, our team crafts arrangements
          that are as sustainable as they are stunning.
        </p>
        <Button onClick={() => navigate('/contact')}>Get In Touch</Button>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
       
        ].map((src, i) => (
          <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={src}
              alt={`Team member ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </section>

    </main>
  )
}

export default AboutPage
