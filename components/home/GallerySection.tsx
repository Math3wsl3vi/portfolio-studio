'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const GallerySection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHoveredagain, setIsHoveredAgain] = useState(false)


  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="mx-auto px-10 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left side - Small image and text */}
          <div className="lg:w-2/5 w-full">
            <div className="mb-5">
              <div
                className="relative w-[60%] h-64 overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHoveredAgain(true)}
                onMouseLeave={() => setIsHoveredAgain(false)}
              >
                <Image
                  width={400}
                  height={400}
                  src={isHoveredagain ? '/images/hero3.jpg' : '/images/hero1.jpg'}
                  alt="Brand logo or related image"
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    isHoveredagain ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="leading-tight font-poppins text-lg">
                Nike: A global digital brand reset
              </h2>
            </div>
          </div>

          {/* Right side - Image that becomes a video on hover */}
          <div className="lg:w-3/5 w-full">
            <div
              className="relative aspect-video overflow-hidden shadow-lg cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Static Image */}
              {!isHovered && (
                <Image
                  src="/images/hero3.jpg"
                  alt="Video preview"
                  fill
                  className="object-cover transition-opacity duration-500 ease-in-out"
                />
              )}

              {/* Video on Hover */}
              {isHovered && (
                <video
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/hero2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <h2 className="leading-tight font-poppins text-lg mt-5">
                Nike: A global digital brand reset
              </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
