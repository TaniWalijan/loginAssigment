import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 text-white bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
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
              className="w-full px-4 py-2 text-white bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white transition duration-300 bg-purple-500 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-300">
        Don&#39;t have an account?{' '}
          <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
