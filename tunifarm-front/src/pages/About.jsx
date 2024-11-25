import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-600 mb-6 text-center">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          At <span className="font-bold text-green-700">TuniFarm</span>, we aim
          to connect local farmers with consumers to provide fresh, organic, and
          sustainable products. Join our mission to support local communities
          and embrace healthier lifestyles.
        </p>

        <div className="space-y-8">
          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2 mb-4">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to empower local farmers, reduce food waste, and
              foster sustainable agricultural practices. By connecting farmers
              directly to consumers, we ensure freshness, transparency, and fair
              trade.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2 mb-4">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              Why Choose Us?
            </h2>
            <p className="text-gray-700">
              We stand out by offering the freshest products sourced directly
              from local farmers. With a focus on sustainability, quality, and
              building strong community ties, we provide a shopping experience
              you can trust.
            </p>
          </div>

          {/* Our Values Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 flex items-center gap-2 mb-4">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Supporting local farmers and small businesses.</li>
              <li>Encouraging sustainable and eco-friendly practices.</li>
              <li>Building trust and transparency with our customers.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
