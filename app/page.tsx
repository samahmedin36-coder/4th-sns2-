
'use client'

import { useEffect, useRef } from 'react'

const MAIN_WEBSITE_URL = 'https://nsn999.com/'
const IMAGE_URL = '/images/banner.png'
const REDIRECT_DELAY_MS = 1000

export default function Page() {
  const hasNavigated = useRef(false)

  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      if (!hasNavigated.current) {
        hasNavigated.current = true
        window.location.href = MAIN_WEBSITE_URL
      }
    }, REDIRECT_DELAY_MS)

    return () => {
      window.clearTimeout(redirectTimer)
    }
  }, [])

  const handleImageClick = () => {
    if (hasNavigated.current) return

    hasNavigated.current = true
    window.location.href = MAIN_WEBSITE_URL
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f4f0] px-4 py-8 sm:px-8">

      <div className="flex w-full max-w-5xl flex-col items-center gap-5">

        <button
          type="button"
          onClick={handleImageClick}
          aria-label="Continue to registration page"
          className="block w-full cursor-pointer overflow-hidden rounded-2xl shadow-lg focus:outline-none"
        >
          <img
            src={IMAGE_URL}
            alt="Welcome banner"
            className="block h-auto w-full object-contain"
          />
        </button>

        <p className="text-xs font-medium tracking-widest text-gray-500">
          Continue to our main website.
        </p>

      </div>

    </main>
  )
}
