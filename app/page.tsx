"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGoogle,
  FaInstagram,
  FaUsers,
} from "react-icons/fa";
import { Phone } from "lucide-react";
import { FaX } from "react-icons/fa6";

export default function HomePage() {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
  ];

  const leaders = [
    { name: "Syama Prasad", img: "/image8.png" },
    { name: "Deendayal", img: "/image9.png" },
    { name: "Atal Bihari", img: "/image10.png" },
    { name: "L.K. Advani", img: "/image11.png" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 text-center sm:text-left">
            <Image
              src="/image7.png"
              alt="BJP Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <p className="text-2xl font-bold text-orange-600 leading-tight">
                বিজেপি পশ্চিমবঙ্গ
              </p>
              <p className="text-sm text-slate-500">
                The Party with a Difference
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-600 items-center lg:items-end">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <span>For Any Suggestion or Queries Call:</span>
              <span className="font-semibold text-orange-600">
                +91 98312 28624
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-green-700">
                <Phone className="h-4 w-4" />
                +91 98312 28624
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span>Follow us:</span>

              <div className="flex items-center gap-2">
                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/debasish.mukherjee.7773/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-[#1877F2] hover:text-white transition"
                >
                  <FaFacebookF size={14} />
                </Link>

                {/* Twitter */}
                <Link
                  href="https://x.com/debasishvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-black hover:text-white transition"
                >
                  <FaX size={14} />
                </Link>

                {/* YouTube */}
                <Link
                  href="https://www.youtube.com/@debasishmukherjee9365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-[#FF0000] hover:text-white transition"
                >
                  <FaYoutube size={14} />
                </Link>

                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/debasishvc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition"
                >
                  <FaInstagram size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <nav className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm uppercase tracking-[0.16em]">
            <span className="cursor-pointer hover:text-orange-400">Home</span>
            <span className="cursor-pointer hover:text-orange-400">
              Organisation
            </span>
            <span className="cursor-pointer hover:text-orange-400">MLA</span>
            <span className="cursor-pointer hover:text-orange-400">MP</span>
            <span className="cursor-pointer hover:text-orange-400">Press</span>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-lg overflow-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="h-full">
              {images.map((src, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative h-52.5 sm:h-67.5 md:h-100 w-full">
                    <Image
                      src={src}
                      alt={`slide-${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* SIDE CARDS */}
        <div className="flex flex-col gap-6">
          {/* JOIN US */}
          <Card className="bg-orange-500 text-white hover:scale-[1.02] transition duration-300 shadow-md">
            <CardContent className="p-2 flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">Join Us</p>
                <Button className="mt-2 bg-white text-orange-600 hover:bg-gray-100">
                  Join BJP
                </Button>
              </div>

              <FaUsers size={30} className="opacity-80" />
            </CardContent>
          </Card>

          {/* FACEBOOK */}
          <Card className="bg-[#1877F2] text-white hover:scale-[1.02] transition duration-300 shadow-md">
            <CardContent className="p-2 flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">Facebook</p>
                <Link href="https://www.facebook.com/debasish.mukherjee.7773/" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 bg-white text-black hover:bg-gray-100">
                    Contact Us
                  </Button>
                </Link>
              </div>

              <FaFacebookF size={26} className="opacity-90" />
            </CardContent>
          </Card>

          {/* TWITTER */}
          <Card className="bg-[#1e2022] text-white hover:scale-[1.02] transition duration-300 shadow-md">
            <CardContent className="p-2 flex items-center justify-between">
              <div>
                <p className="text-xl font-bold">X</p>
                <Link href="https://x.com/debasishvc" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 bg-white text-black hover:bg-gray-100">
                    Contact Us
                  </Button>
                </Link>
              </div>

              <FaTwitter size={26} className="opacity-90" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ANNOUNCEMENT BAR */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-black text-white px-4 py-2 rounded-md text-center sm:text-left">
          Announcements
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">
          {/* GUIDING LIGHTS */}
          <Card className="rounded-md border">
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                🌼 OUR GUIDING LIGHTS
              </h3>

              <div className="flex flex-wrap justify-around gap-2">
                {leaders.map((leader, i) => (
                  <div key={i} className="flex flex-col items-center w-[60px] sm:w-[70px]">
                    {/* IMAGE */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-1 overflow-hidden rounded border bg-gray-100">
                      <Image
                        src={leader.img}
                        alt={leader.name}
                        fill
                        sizes="64px"
                        className="object-cover grayscale hover:grayscale-0 transition duration-300"
                      />
                    </div>

                    {/* NAME */}
                    <p className="text-[10px] sm:text-xs leading-tight text-center text-gray-700">
                      {leader.name}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* LEADER CARDS */}
          {[
            {
              name: "Narendra Modi",
              role: "Prime Minister",
              image: "/image12.png",
            },
            { name: "Amit Shah", role: "Home Minister", image: "/image13.png" },
            {
              name: "Nitin Nabin",
              role: "National President",
              image: "/image5.png",
            },
            {
              name: "Samik Bhattacharya",
              role: "State President",
              image: "/image14.png",
            },
          ].map((leader, i) => (
            <div
              key={i}
              className="relative h-[140px] sm:h-[160px] rounded-md overflow-hidden"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* MIDDLE COLUMN */}
        <div className="flex flex-col gap-4">
          {/* NEWS */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3">📰 NEWS & BLOG</h3>

              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-3 mb-3 items-start">
                  {/* IMAGE */}
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={`/image15.png`} // 👈 your images
                      alt="news"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-tight">
                      Schedule of Dr. Sukanta Majumdar...
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Posted on: 27 Aug 2022
                    </p>
                  </div>
                </div>
              ))}

              <Button size="sm" className="mt-2 w-full sm:w-auto">
                View All Articles
              </Button>
            </CardContent>
          </Card>

          {/* LEADER SCHEDULE */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3">
                📅 LEADER'S SCHEDULE
              </h3>

              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400 rounded flex items-center justify-center text-white flex-shrink-0">
                    🌼
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Schedule of Samik Bhattacharya
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Posted on: 10 Jan 2026
                    </p>
                  </div>
                </div>
              ))}

              <Button size="sm" className="mt-2 w-full sm:w-auto">
                View All Articles
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
          {/* SOCIAL STREAM */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3">📱 SOCIAL STREAM</h3>

              <div className="h-[250px] bg-gray-200 rounded flex items-center justify-center text-gray-500">
                Facebook Embed
              </div>
            </CardContent>
          </Card>

          {/* LATEST VIDEO */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3">🎥 LATEST VIDEO</h3>

              <div className="relative h-[180px] sm:h-[220px] rounded overflow-hidden">
                <Image
                  src="/image5.png"
                  alt="video"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition cursor-pointer shadow-lg">
                    ▶
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-gray-200 mt-10 relative overflow-hidden">
        {/* Background watermark (lotus style placeholder) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="text-[150px] sm:text-[200px] text-gray-400">🌼</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 justify-around items-center md:items-start relative z-10 text-sm text-gray-700">
          {/* CONTACT */}
          <div className="text-center md:text-left max-w-sm">
            <h3 className="font-semibold text-gray-800 mb-3 uppercase tracking-wide">
              CONTACT INFORMATION
            </h3>

            <div className="space-y-2 text-xs">
              <p>
                <span className="font-semibold">Address :</span> D-49, DANKUNI
                HOUSING ESTATE, PHASE-2, DANKUNI, HOOGHLY, PIN-712311, WEST
                BENGAL, INDIA
              </p>
              <p>
                <span className="font-semibold">Phone :</span> +91 98312 28624
              </p>
              <p>
                <span className="font-semibold">Office Email :</span>{" "}
                hello@bjpchanditala.com
              </p>
              <p>
                <span className="font-semibold">Election Office Email :</span>{" "}
                xxxxxx@bjpwb.org
              </p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-gray-800 mb-3 uppercase tracking-wide">
              JOIN THE CONVERSATION
            </h3>

            <p className="text-xs mb-3">Follow / Like us :</p>

            <div className="flex gap-2 mb-4 justify-center md:justify-start">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/debasish.mukherjee.7773/"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#1877F2] hover:text-white transition"
              >
                <FaFacebookF size={14} />
              </Link>

              {/* Twitter */}
              <Link
                href="https://x.com/debasishvc"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-black hover:text-white transition"
              >
                <FaX size={14} />
              </Link>

              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@debasishmukherjee9365"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-[#FF0000] hover:text-white transition"
              >
                <FaYoutube size={14} />
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/debasishvc/"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition"
              >
                <FaInstagram size={14} />
              </Link>
            </div>

            <p className="text-xs text-gray-600">
              © Copyright 2026 - BJP Bengal
            </p>
          </div>
        </div>
      </footer>
      
      {/* FLOATING ACTION BUTTON */}
      <Link
        href="https://www.facebook.com/debasish.mukherjee.7773/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50"
      >
        <div className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center rounded-full shadow-lg transition duration-300">
          <FaFacebookF size={18} />
        </div>
      </Link>
    </div>
  );
}