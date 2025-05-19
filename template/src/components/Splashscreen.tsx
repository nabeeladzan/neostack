export function Splashscreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src="/logo.svg" alt="Logo" className="w-32 h-32 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Welcome to My App</h1>
      <p className="text-gray-600 mb-4">Loading...</p>
      <div className="loader"></div>
    </div>
  );
}
