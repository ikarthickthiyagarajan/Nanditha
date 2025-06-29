import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-cyan-100 px-6">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
        404
      </h1>
      <p className="text-xl text-cyan-300 mb-8">The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}
