import {
  PackageCheck,
  Truck,
  Stethoscope,
  Syringe,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <PackageCheck className="h-8 w-8 text-blue-600" />,
    title: "Prescription Fulfillment",
    description:
      "Fast and accurate prescription processing by licensed pharmacists. Upload your prescription and get your medicines delivered to your doorstep.",
  },
  {
    icon: <Truck className="h-8 w-8 text-green-600" />,
    title: "Express Delivery",
    description:
      "Get your medicines and health products delivered within 24-48 hours with our reliable express delivery service.",
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-purple-600" />,
    title: "Pharmacist Consultation",
    description:
      "Free online consultation with our expert pharmacists for medication guidance, dosage, and health advice.",
  },
  {
    icon: <Syringe className="h-8 w-8 text-red-600" />,
    title: "Vaccination Services",
    description:
      "Book appointments for essential vaccinations at our partner clinics and stay protected.",
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-pink-600" />,
    title: "Health & Wellness Products",
    description:
      "Shop a wide range of vitamins, supplements, personal care, and wellness products from trusted brands.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-yellow-500" />,
    title: "Secure Payments",
    description:
      "Multiple secure payment options including credit/debit cards, UPI, and net banking for a hassle-free experience.",
  },
];

const Services = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-12 px-2">
    <div className="w-full max-w-5xl rounded-2xl  p-8 md:p-12">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center drop-shadow">
        Our Services
      </h1>
      <p className="text-gray-700 mb-10 text-lg text-center max-w-2xl mx-auto">
        MediCare offers a comprehensive suite of pharmacy and healthcare
        services designed to make your life easier, healthier, and more
        convenient.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
          >
            <div>{service.icon}</div>
            <div>
              <h2 className="text-xl font-bold text-blue-700 mb-1">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
