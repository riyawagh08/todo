export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 flex items-center justify-center">

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl w-[400px] shadow-2xl">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Create Account ✨
        </h1>

        <div className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Enter your name"
            className="border border-white/20 bg-white/10 text-white placeholder-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="border border-white/20 bg-white/10 text-white placeholder-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="password"
            placeholder="Create password"
            className="border border-white/20 bg-white/10 text-white placeholder-gray-300 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-pink-400"
          />

          <button
            className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 hover:scale-105 text-white p-4 rounded-2xl font-semibold"
          >
            Register
          </button>

        </div>

      </div>

    </div>
  );
}