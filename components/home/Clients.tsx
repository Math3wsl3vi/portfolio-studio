'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Clients = () => {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null)
  const [popupPosition, setPopupPosition] = useState<'left' | 'right'>('right')
  const containerRef = useRef<HTMLUListElement>(null)

  const testimonials: Record<string, string> = {
    Mantle:
      '“A transformative collaboration! The Mantle team brought our digital vision to life with precision and creativity.”',
    'Carbon And Soil Loop Africa':
      '“They understood our mission and turned complex sustainability data into a beautiful digital story.”',
    'Tumalock Deal':
      '“From idea to execution, flawless. The Tumalock project redefined what we thought possible.”',
    Chakulahub:
      '“The attention to detail and smooth delivery made the Chakulahub platform a joy to use.”',
    Bloom:
      '“Brilliant UI/UX and a deeply thoughtful design process. Absolutely stellar team.”',
    'Premium Phones':
      '“They modernized our brand identity while keeping it rooted in authenticity. Couldn’t recommend them more.”',
    Riviamed:
      '“A seamless healthcare platform build — elegant, fast, and reliable.”',
    'Mantle Telemedicine':
      '“This team merged healthcare and tech perfectly. Exceptional work on Mantle Telemedicine.”',
  }

  // Determine if popup should go left or right depending on available space
  const handleHover = (client: string, e: React.MouseEvent) => {
    setHoveredClient(client)
    const rect = e.currentTarget.getBoundingClientRect()
    const screenWidth = window.innerWidth

    // Check if right side has enough space
    if (rect.right + 350 > screenWidth) {
      setPopupPosition('left')
    } else {
      setPopupPosition('right')
    }
  }

  return (
    <section className="w-full bg-black text-white py-24 px-6 lg:px-16 relative overflow-hidden">
      <div className="mx-auto flex flex-col md:flex-row justify-between gap-20">
        {/* Left Column */}
        <div className="md:w-1/3 space-y-10">
          <div>
            <h3 className="font-semibold text-sm tracking-wide mb-3 uppercase">
              We build
            </h3>
            <ul className="space-y-1 text-gray-200">
              <li>Digital products, apps, and services</li>
              <li>Large-scale digital platforms</li>
              <li>Digital editorial products</li>
              <li>Brands and design systems</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wide mb-3 uppercase">
              For
            </h3>
            <ul className="space-y-1 text-gray-200">
              <li>Established brands</li>
              <li>Historic institutions</li>
              <li>Visionary leaders</li>
              <li>Mission-focused startups</li>
            </ul>
          </div>

          {/* Tree Icon */}
          <div className="pt-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <svg
                className="w-10 h-10 stroke-white fill-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
              >
                <path d="M50 5 L30 40 L70 40 Z M50 40 L50 95" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3 relative">
          <h3 className="font-semibold text-sm tracking-wide mb-6 uppercase">
            Our clients
          </h3>
          <ul
            ref={containerRef}
            className="space-y-2 text-[2rem] md:text-[3.5rem] leading-tight font-serif relative"
          >
            {Object.keys(testimonials).map((client, index) => (
              <li
                key={index}
                onMouseEnter={(e) => handleHover(client, e)}
                onMouseLeave={() => setHoveredClient(null)}
                className="relative hover:underline underline-offset-[6px] decoration-[1px] transition-all duration-300 cursor-pointer"
              >
                {client}

                {/* Floating testimonial */}
                <AnimatePresence>
                  {hoveredClient === client && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25 }}
                      className={`absolute top-1/2 -translate-y-1/2 w-80 bg-zinc-900 text-gray-200 text-sm p-5 rounded-lg shadow-xl z-20 ${
                        popupPosition === 'right'
                          ? 'left-full ml-8 origin-left'
                          : 'right-full mr-8 origin-right'
                      }`}
                    >
                      {testimonials[client]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Clients
