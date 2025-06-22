export default function LearningPathPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Learning Path</h1>
      <p className="text-gray-600 mb-8">Track your personalized learning journey and progress through Microsoft technologies.</p>
      
      {/* Current Progress */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Current Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">4</div>
            <p className="text-gray-600">Courses Completed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">2</div>
            <p className="text-gray-600">Certificates Earned</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">76%</div>
            <p className="text-gray-600">Overall Progress</p>
          </div>
        </div>
      </div>
      
      {/* Learning Paths */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Microsoft 365 Path */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Microsoft 365 Specialist</h3>
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">In Progress</span>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-gray-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{width: '75%'}}></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 border-l-4 border-green-500">
              <span className="font-medium">M365 Fundamentals</span>
              <span className="text-green-600 text-sm">✓ Complete</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border-l-4 border-green-500">
              <span className="font-medium">Teams Administration</span>
              <span className="text-green-600 text-sm">✓ Complete</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 border-l-4 border-blue-500">
              <span className="font-medium">SharePoint Management</span>
              <span className="text-blue-600 text-sm">📚 In Progress</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 border-l-4 border-gray-300">
              <span className="font-medium text-gray-600">Security & Compliance</span>
              <span className="text-gray-500 text-sm">⏳ Locked</span>
            </div>
          </div>
        </div>
        
        {/* Azure Path */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Azure Cloud Engineer</h3>
            <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Active</span>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-gray-600">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-600 h-3 rounded-full" style={{width: '45%'}}></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 border-l-4 border-green-500">
              <span className="font-medium">Azure Fundamentals (AZ-900)</span>
              <span className="text-green-600 text-sm">✓ Complete</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 border-l-4 border-blue-500">
              <span className="font-medium">Azure Administrator (AZ-104)</span>
              <span className="text-blue-600 text-sm">📚 In Progress</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 border-l-4 border-gray-300">
              <span className="font-medium text-gray-600">Azure Security (AZ-500)</span>
              <span className="text-gray-500 text-sm">⏳ Locked</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 border-l-4 border-gray-300">
              <span className="font-medium text-gray-600">Azure Solutions Architect</span>
              <span className="text-gray-500 text-sm">⏳ Locked</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommended Next Steps */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Recommended Next Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-semibold mb-2">Complete SharePoint Module</h4>
            <p className="text-sm text-gray-600 mb-3">Finish your current Microsoft 365 learning path</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Continue Learning
            </button>
          </div>
          
          <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-semibold mb-2">Take Skills Assessment</h4>
            <p className="text-sm text-gray-600 mb-3">Identify areas for improvement and get personalized recommendations</p>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
              Start Assessment
            </button>
          </div>
          
          <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-semibold mb-2">Practice with Labs</h4>
            <p className="text-sm text-gray-600 mb-3">Apply your knowledge with hands-on Azure exercises</p>
            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Access Labs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}