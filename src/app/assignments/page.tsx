export default function AssignmentsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Assignments</h1>
      <p className="text-gray-600">Track and manage your learning assignments here.</p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Microsoft 365 Fundamentals</h3>
          <p className="text-gray-600 mb-4">Complete the basic training module</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-green-600">Due: In 5 days</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Azure Basics</h3>
          <p className="text-gray-600 mb-4">Introduction to Azure cloud services</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-orange-600">Due: In 2 days</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Continue
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Teams Collaboration</h3>
          <p className="text-gray-600 mb-4">Master Microsoft Teams features</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Completed</span>
            <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed">
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}