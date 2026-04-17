import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import StepInputs from '../components/StepInputs';


type Service = {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  href: string;
};

const SERVICES_DATA: Service[] = [
  { 
    title: "ERP Services", 
    altText: "Enterprise resource planning",
    description: "End-to-end ERP implementation and customization solutions.",
    imageSrc: "https://xadelit.com/assets/img/servbg1.jpg",
    href: "/services/web-dev"
  },
  { 
    title: "Applications Development", 
    altText: "Custom application development",
    description: "Scalable and secure custom application development.",
    imageSrc: "https://xadelit.com/assets/img/servbg2.jpg",
    href: "/services/design"
  },
  { 
    title: "Web Services", 
    altText: "Web development services",
    description: "Modern and responsive web solutions for businesses.",
    imageSrc: "https://xadelit.com/assets/img/servbg3.jpg",
    href: "/services/web-dev"
  },
  { 
    title: "IT Solutions", 
    altText: "IT solutions and support",
    description: "Comprehensive IT infrastructure and support services.",
    imageSrc: "https://xadelit.com/assets/img/servbg4.jpg",
    href: "/services/it-solutions"
  },
  { 
    title: "Cloud Services", 
    altText: "Cloud computing services",
    description: "Flexible and scalable cloud deployment solutions.",
    imageSrc: "https://xadelit.com/assets/img/servbg5.jpg",
    href: "/services/cloud"
  },
  { 
    title: "Mobile App Development", 
    altText: "Mobile application development",
    description: "High-performance mobile apps for Android and iOS.",
    imageSrc: "https://xadelit.com/assets/img/servbg6.jpg",
    href: "/services/mobile-dev"
  },
  { 
    title: "Data Analytics", 
    altText: "Data analysis and visualization",
    description: "Transform data into actionable business insights.",
    imageSrc: "https://xadelit.com/assets/img/servbg7.jpg",
    href: "/services/data-analytics"
  },
  { 
    title: "Cyber Security", 
    altText: "Cybersecurity solutions",
    description: "Advanced security solutions to protect digital assets.",
    imageSrc: "https://xadelit.com/assets/img/servbg8.jpg",
    href: "/services/cyber-security"
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <section className="bg-zinc-100 py-20 px-6 flex-1">
        <div className="max-w-6xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tight text-zinc-900">
              Our Services
            </h2>
            <div className="h-1 w-20 bg-red-600 mx-auto mt-4" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

        </div>
      </section>
<StepInputs total={3} />
      <Footer />
      
    </div>
  );
}

function ServiceCard({ title, description, imageSrc, altText, href }: Service) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
        
        {/* Image */}
        <div className="relative w-full h-40">
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
            loading="lazy" // optional (Next does this by default)
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQE..." 
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-zinc-900">
            {title}
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            {description}
          </p>

            <button className="custombtn">Read More</button>
        </div>

      </div>

    </Link>
    
  );
  
}
