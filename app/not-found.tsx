import React from "react"
import Link from "next/link"

const NotFoundPaga = () => {
  return (
    <div>
      <div>
        <h1 className="pb-4 text-4xl font-bold">404 - Not Found.</h1>
        <p className="pb-10">
          It looks like you spelled the address wrong. Please double check the page address.
        </p>
      </div>
      <Link
        href="/"
        className="hover:bg-base-700 border border-white/10 px-4 py-2 rounded-lg hover:text-white"
      >
        Kembali ke beranda
      </Link>
    </div>
  )
}

export default NotFoundPaga
