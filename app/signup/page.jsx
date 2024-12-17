import Link from 'next/link';

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-pink-600 via-red-500 to-yellow-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-gray-300" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 text-white bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-white bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-300" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 text-white bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Create a password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white transition duration-300 bg-pink-500 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:via-red-500 hover:to-pink-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-300">
          Already have an account?{' '}
          <Link href="/" className="font-semibold text-pink-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
