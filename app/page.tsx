'use client'; // Required since Hero uses hooks

import Footer from './components/Footer';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';

export default function Home() {
  const services = [
    {
      title: "ERP Services",
      imageSrc: "https://xadelit.com/assets/img/servbg1.jpg", // Using demo link for now
      href: "/erp-solutions",
      description: "Streamline your business processes with our custom ERP."
    },
    {
      title: "CRM Solutions",
      imageSrc: "https://xadelit.com/assets/img/servbg2.jpg",
      href: "/crm-solutions",
      description: "Manage customer relationships more effectively."
    },
    {
      title: "Cloud Hosting",
      imageSrc: "https://xadelit.com/assets/img/servbg3.jpg",
      href: "/cloud",
      description: "Secure and scalable cloud infrastructure."
    },
    {
      title: "Consulting",
      imageSrc: "https://xadelit.com/assets/img/servbg4.jpg",
      href: "/consulting",
      description: "Expert advice for your digital transformation."
    },
  ];

  return (
    <main>
      {/* 1. Hero Section (Full Height) */}
      <Hero />

      {/* 2. Services Section (Gray Background) */}
      <section className="bg-zinc-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-zinc-900">
             Our Services
            </h2>
            <div className="h-1 w-20 bg-[#FF0000] mx-auto mt-4" />
            <p className="mt-6 text-zinc-600 max-w-2xl mx-auto">
              All of our services are customised for each customer. In terms of strategy and technology, we modify and adapt for your individual demands.
            </p>
          </div>

          {/* 3. The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                imageSrc={service.imageSrc}
                href={service.href}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
<section className="bg-gray-100 py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      
      {/* Left Image */}
      <div>
        <img
          src="https://xadelit.com/assets/img/why-us-ban.jpg"
          alt="Why Xadel"
          className="w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Why Xadel?
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          The professionals at the Xadel have extensive knowledge, top-notch
          competence, and unmistakable delivery. We don't skimp on the most
          trustworthy technologies and tools. We make sure to extract the finest
          from the current innovations in the industry to assure the provision of
          top-quality solutions. We've set the bar high and will stick to it.
        </p>

        <a
          href="#"
          className="inline-block bg-cyan-600 text-white px-6 py-3 font-medium hover:bg-cyan-700 transition"
        >
          Read more
        </a>
      </div>

    </div>
  </div>
</section>
<section
  className="relative py-16 bg-cover bg-center"
  style={{ backgroundImage: "url('https://xadelit.com/assets/img/contact-us-bg_1920.jpg')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-4 text-white">
    <h3 className="text-3xl font-semibold">
      Request Free Estimation
    </h3>

    <p className="mt-6 text-lg leading-relaxed text-gray-200 max-w-xl">
      We will get back to you with the best solution in the nick of time.
    </p>

    <a
      href="https://xadelit.com/contactus.html"
      className="inline-block mt-6 bg-cyan-600 px-6 py-3 font-medium hover:bg-cyan-700 transition"
    >
      Contact Us
    </a>
  </div>
</section>
<Footer />
    </main>
  );
}