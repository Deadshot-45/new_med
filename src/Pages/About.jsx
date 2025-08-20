import React from "react";
import pharmacyTeamImage from "../assets/pharmacy_team.png";
import { Heart, Shield, Clock, Star } from "lucide-react";

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-12 px-2">
    <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 border border-blue-100">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-4 text-blue-700 drop-shadow">
            About Entire Biotech
          </h1>
          <p className="text-gray-700 mb-4 text-lg">
            <span className="font-semibold text-blue-700">Entire Biotech</span> has
            been a trusted name in healthcare for over 25 years, providing
            high-quality medicines and health products to millions of customers
            worldwide. Our mission is to make healthcare accessible, affordable,
            and reliable for everyone.
          </p>
          <p className="text-gray-700 mb-4">
            We partner with leading pharmaceutical companies to ensure
            authenticity and quality. Our team of licensed pharmacists is always
            available to provide expert guidance and answer your health-related
            questions. We believe in a patient-first approach, ensuring every
            customer receives personalized care and attention.
          </p>
          <p className="text-gray-700 mb-6">
            Our services include not only a wide range of prescription and
            over-the-counter medicines, but also health supplements, wellness
            products, and medical devices. We are committed to continuous
            improvement, adopting the latest technology and best practices to
            enhance your experience.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-gray-700">FDA Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-green-600" />
              <span className="font-semibold text-gray-700">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-600" />
              <span className="font-semibold text-gray-700">Expert Care</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500" />
              <span className="font-semibold text-gray-700">
                Top Rated Service
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1M+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
          <div className="mb-2">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Our Values</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Integrity:</span> We uphold the
                highest standards of honesty and transparency in all our
                dealings.
              </li>
              <li>
                <span className="font-semibold">Compassion:</span> We care
                deeply about the well-being of our customers and community.
              </li>
              <li>
                <span className="font-semibold">Innovation:</span> We embrace
                new technologies to improve healthcare delivery.
              </li>
              <li>
                <span className="font-semibold">Excellence:</span> We strive for
                excellence in service, quality, and customer satisfaction.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={pharmacyTeamImage}
            alt="Pharmacy team"
            className="rounded-2xl shadow-xl w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
