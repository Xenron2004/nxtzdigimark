import { Lock, Shield, Maximize as WindowMaximize, Waves } from "lucide-react";
import Link from "next/link";

export default function ProductFeature() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Modern interior"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              NXTZEN Products
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
              Redefining Excellence in Every Detail
            </p>
          </div>
        </div>
      </div>

      {/* Product Features */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">OUR PRODUCTS</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our products are crafted with a focus on innovation, quality, and customer-centric solutions, 
            ensuring excellence in every detail.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-2">
          {/* Feature 1 */}
          <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Shield className="h-10 w-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Patented TEXGUARD Coating
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Advanced coating technology for long-lasting lustre and protection
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Lock className="h-10 w-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Crescent Lock System
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Enhanced security features for excellent safety & protection
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <WindowMaximize className="h-10 w-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Wide Glass Panels
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Expansive views with narrow sightlines for modern aesthetics
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Waves className="h-10 w-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Rubber Gaskets
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Superior sealing against dust, noise, and water infiltration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </main>
  );
}