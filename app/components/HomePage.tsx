export default function HomePage() {
  return (
    <div className="flex justify-center items-center">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-6xl font-bold tracking-tight text-slate-800">
            Living the dream
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/register"
              className="rounded-md bg-rose-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-700"
            >
              Register
            </a>
            <a
              href="/login"
              className="rounded-md bg-rose-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-700"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
