import React from "react";
import Navbar from "@/components/Navbar";
import { assets } from "@/assets/assets";
import Image from "next/image";
import PartnerProgram from "@/components/JoinPartnerProgram";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Navbar isDarkMode={undefined} />

      <section className="bg-darkBG text-white py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div>
              <p className="uppercase text-green-400 font-semibold text-sm mb-4">
                Partner Program
              </p>
              <h2 className="text-4xl font-bold mb-6">
                Become a <span className="text-green-400">Macro Rides</span>{" "}
                partner
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Empower your clients with a leading, trusted rides booking,
                parcels and goods delivery platform, helping them to transform
                the way they do ride, send/reciece goods.
              </p>
              <button className="bg-green-400 text-[#022B3A] px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-all">
                Join our network
              </button>
            </div>

            {/* Image Section */}
            <div className="grid gap-6">
              <Image
                src={assets.Hero_image_Partners}
                alt="Partner Program"
                className="rounded-lg shadow-md w-full"
                width={500}
                height={300}
              />
            </div>
          </div>

          {/* Logos Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 items-center">
            <Image
              src="/logos/quickbooks.png"
              alt="Quickbooks Logo"
              className="w-auto h-10 mx-auto"
              width={100}
              height={40}
            />
            <Image
              src="/logos/netsuite.png"
              alt="Oracle NetSuite Logo"
              className="w-auto h-10 mx-auto"
              width={100}
              height={40}
            />
            <Image
              src="/logos/microsoft.png"
              alt="Microsoft Logo"
              className="w-auto h-10 mx-auto"
              width={100}
              height={40}
            />
            <Image
              src="/logos/kpmg.png"
              alt="KPMG Logo"
              className="w-auto h-10 mx-auto"
              width={100}
              height={40}
            />
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center min-h-screen px-6 md:px-16 lg:px-32 py-20">
        <div className="max-w-7xl w-full">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why partner with us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Section 1 */}
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-2xl font-semibold">
                End your clients’ month-end nightmares
              </h3>
              <p className="text-gray-700">
                Empower your clients to automate everyday finance tasks — from
                receipts to approvals — and sync effortlessly with their
                accounting or ERP systems with a single global spend management
                platform.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src={assets.Img_GET_Support}
                alt="End your clients’ month-end nightmares"
                className="rounded-lg shadow-md w-full"
              />
            </div>

            {/* Section 2 */}
            <div className="order-4 md:order-3">
              <Image
                src={assets.Fuel}
                alt="Help your customers scale"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="space-y-6 order-3 md:order-4">
              <h3 className="text-2xl font-semibold">
                Help your customers scale
              </h3>
              <p className="text-gray-700">
                Build even stronger client relationships by introducing them to
                a trusted spend management solution that automates financial
                processes, maximises efficiency, and supports their business
                expansion. Client experience is as important to us as it is to
                you; our business is your clients' success.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Section 3 */}
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-2xl font-semibold">
                Fuel your business growth
              </h3>
              <p className="text-gray-700">
                Improve client longevity, create additional revenue streams and
                attract new clients. Whatever your expansion plans, we’ll help
                you achieve them.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src={assets.Business_Growth}
                alt="End your clients’ month-end nightmares"
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <PartnerProgram />
      <Footer />
    </>
  );
}
