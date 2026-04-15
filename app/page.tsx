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
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
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

          <div className="flex flex-col gap-3 text-sm text-slate-600 lg:items-end">
            <div className="">
              <span>For Any Suggestion or Queries Call:</span>
              <span className="font-semibold text-orange-600">
                (033) 2241-7086
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-green-700">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.5 6.5c-1.3-1.3-3.4-1.4-4.9-.3-.4.3-1 .3-1.4 0l-.9-.9c-.3-.3-.8-.3-1.1 0L7.4 6.5c-.3.3-.3.8 0 1.1l1.1 1.1c.3.3.3.8 0 1.1l-.5.6c-.2.5-.4 1-.6 1.5-.1.4 0 .8.3 1.1l2.2 2.2c.3.3.7.4 1.1.3.5-.2 1-.4 1.5-.6l.6-.5c.3-.3.8-.3 1.1 0l1.1 1.1c.3.3.8.3 1.1 0l2.6-2.6c.3-.3.3-.8 0-1.1l-.9-.9c-.3-.3-.8-.3-1.1 0l-1.1 1.1c-.3.3-.8.3-1.1 0l-.5-.5c-.3-.3-.3-.8 0-1.1l.6-.6c.3-.3.3-.8 0-1.1-.1-.2-.3-.4-.5-.5z" />
                </svg>
                +91 6289902136
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span>Follow us:</span>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  f
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  t
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  y
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  g
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  i
                </span>
              </div>
            </div>
          </div>
        </div>

        <nav className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-6 text-sm uppercase tracking-[0.16em]">
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
      <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-3 gap-4">
        <div className="col-span-2 rounded-lg overflow-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-100 w-full">
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
        <div className="flex flex-col gap-5">
          <Card className="bg-orange-500 text-white">
            <CardContent className="p-2">
              <p className="text-2xl font-bold">Join Us</p>
              <Button className="mt-2 bg-white text-orange-600">
                Join BJP
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-blue-600 text-white">
            <CardContent className="p-2">
              <p className="font-bold text-2xl">Facebook</p>
              <Button className="mt-2 bg-white text-blue-600">
                Contact Us
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-sky-500 text-white">
            <CardContent className="p-2">
              <p className="text-2xl font-bold font-sans">Twitter</p>
              <Button className="mt-2 bg-white text-sky-500">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ANNOUNCEMENT BAR */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="bg-black text-white px-4 py-2 rounded-md">
          Announcements
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">
          {/* GUIDING LIGHTS */}
          <Card className="rounded-md border">
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                🌼 OUR GUIDING LIGHTS
              </h3>

              <div className="flex justify-around">
                {leaders.map((leader, i) => (
                  <div key={i} className="flex flex-col items-center w-15">
                    {/* IMAGE */}
                    <div className="relative w-18 h-15 mb-1 overflow-hidden rounded border bg-gray-100">
                      <Image
                        src={leader.img}
                        alt={leader.name}
                        fill
                        sizes="52px"
                        className="object-cover grayscale hover:grayscale-0 transition duration-300"
                      />
                    </div>

                    {/* NAME */}
                    <p className="text-[10px] leading-tight text-center text-gray-700">
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
              className="relative h-[140px] rounded-md overflow-hidden"
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
                  <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={`/image15.png`} // 👈 your images
                      alt="news"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="text-sm font-medium leading-tight">
                      Schedule of Dr. Sukanta Majumdar...
                    </p>
                    <p className="text-xs text-gray-500">
                      Posted on: 27 Aug 2022
                    </p>
                  </div>
                </div>
              ))}

              <Button size="sm" className="mt-2">
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
                  <div className="w-10 h-10 bg-orange-400 rounded flex items-center justify-center text-white">
                    🌼
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Schedule of Samik Bhattacharya
                    </p>
                    <p className="text-xs text-gray-500">
                      Posted on: 10 Jan 2026
                    </p>
                  </div>
                </div>
              ))}

              <Button size="sm" className="mt-2">
                View All Articles
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">
          {/* SOCIAL STREAM */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3">📱 SOCIAL STREAM</h3>

              <div className="h-[250px] bg-gray-200 rounded flex items-center justify-center">
                Facebook Embed
              </div>
            </CardContent>
          </Card>

          {/* LATEST VIDEO */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-3">🎥 LATEST VIDEO</h3>

              <div className="relative h-[180px] rounded overflow-hidden">
                <Image
                  src="/image5.png"
                  alt="video"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
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
          <div className="text-[200px] text-gray-400">🌼</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-10 relative z-10 text-sm text-gray-700">
          {/* THE PARTY */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 uppercase tracking-wide">
              THE PARTY
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-600 cursor-pointer">
                About the Party
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                Our Foundation
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                Our Agenda
              </li>
            </ul>
          </div>

          {/* GET INVOLVED */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 uppercase tracking-wide">
              GET INVOLVED
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-orange-600 cursor-pointer">
                Join the Party
              </li>
              <li className="hover:text-orange-600 cursor-pointer">
                Make a Donation
              </li>
              <li className="hover:text-orange-600 cursor-pointer">BJP Live</li>
              <li className="hover:text-orange-600 cursor-pointer">
                e-Library
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 uppercase tracking-wide">
              CONTACT INFORMATION
            </h3>

            <div className="space-y-2 text-xs">
              <p>
                <span className="font-semibold">Address :</span> 6, Muralidhar
                Sen Lane, Kolkata-700073
              </p>
              <p>
                <span className="font-semibold">Phone :</span> (033) 2241-7086
              </p>
              <p>
                <span className="font-semibold">Fax :</span> (033) 2241-7460
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green-600">🟢</span>
                +91 6289902136
              </p>

              <p>
                <span className="font-semibold">Office Email :</span>{" "}
                wbbjpoffice@gmail.com
              </p>
              <p>
                <span className="font-semibold">Election Office Email :</span>{" "}
                warroom@bjpwb.org
              </p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 uppercase tracking-wide">
              JOIN THE CONVERSATION
            </h3>

            <p className="text-xs mb-3">Follow / Like us :</p>

            <div className="flex gap-2 mb-4">
              {["f", "t", "y", "g", "i"].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-orange-500 hover:text-white cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-600">
              © Copyright 2020 - BJP Bengal
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
