const tasks = [
  {
    title: "Complete React Project",
    completed: true,
  },
  {
    title: "Study Next.js",
    completed: false,
  },
  {
    title: "Prepare Presentation",
    completed: false,
  },
];

export default function DashboardPage() {
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks =
    tasks.length - completedTasks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        My Dashboard ✨
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">
            Total Tasks
          </h2>

          <p className="text-5xl font-bold">
            {tasks.length}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">
            Completed
          </h2>

          <p className="text-5xl font-bold text-green-400">
            {completedTasks}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">
            Pending
          </h2>

          <p className="text-5xl font-bold text-pink-400">
            {pendingTasks}
          </p>
        </div>

      </div>

      {/* Task List */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          Recent Tasks 📌
        </h2>

        <div className="flex flex-col gap-4">

          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-black/20 p-4 rounded-2xl"
            >

              <span
                className={
                  task.completed
                    ? "line-through text-gray-400"
                    : ""
                }
              >
                {task.title}
              </span>

              <span
                className={
                  task.completed
                    ? "text-green-400"
                    : "text-pink-400"
                }
              >
                {task.completed
                  ? "Completed"
                  : "Pending"}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}