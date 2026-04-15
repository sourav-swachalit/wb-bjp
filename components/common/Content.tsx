import React from 'react'
import { Card, CardAction, CardContent } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'

type Props = {}

const Content = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-3 gap-6">

  {/* LEFT COLUMN */}
  <div className="flex flex-col gap-4">

    {/* GUIDING LIGHTS */}
    <CardAction className="rounded-md border">
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
          🌼 OUR GUIDING LIGHTS
        </h3>

        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 bg-gray-300 rounded mb-1" />
              <p className="text-[10px] leading-tight">
                Leader Name
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </CardAction>

    {/* LEADER CARDS */}
    {[
      { name: "Narendra Modi", role: "Prime Minister" },
      { name: "Amit Shah", role: "Home Minister" },
      { name: "Nitin Nabin", role: "National President" },
      { name: "Samik Bhattacharya", role: "State President" },
    ].map((leader, i) => (
      <div
        key={i}
        className="relative h-[140px] rounded-md overflow-hidden"
      >
        <Image
          src={`/image${i + 1}.png`}
          alt={leader.name}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-orange-500/80" />

        <div className="absolute left-4 top-4 text-white">
          <h3 className="text-lg font-bold">{leader.name}</h3>
          <p className="text-xs">{leader.role}</p>
        </div>
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
          <div key={i} className="flex gap-3 mb-3">
            <div className="w-12 h-12 bg-gray-300 rounded" />
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
        <h3 className="font-semibold text-sm mb-3">📅 LEADER'S SCHEDULE</h3>

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
  )
}