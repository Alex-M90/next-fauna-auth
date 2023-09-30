export default function UserDashboard() {
    return (
      <div className="flex justify-center items-center">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-6xl font-bold tracking-tight text-slate-800">
              Congratulations, you made it inside
            </h2>
            <br />
            <h3 className="text-4xl font-bold tracking-tight text-slate-800">
              You can never leave...
            </h3>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-rose-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-rose-700"
              >
                DO NOT PRESS THIS BUTTON
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}