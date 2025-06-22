export default function SkillsAssessmentPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Skills Assessment</h1>
      <p className="text-gray-600 mb-8">Evaluate your current skills and discover personalized learning recommendations.</p>
      
      {/* Assessment Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Available Assessments</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg">Microsoft 365 Proficiency</h4>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">30 min</span>
              </div>
              <p className="text-gray-600 mb-3">Assess your knowledge of Microsoft 365 applications and services</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>Last taken: Never</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Start Assessment
                </button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg">Azure Cloud Fundamentals</h4>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">45 min</span>
              </div>
              <p className="text-gray-600 mb-3">Test your understanding of Azure cloud services and concepts</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>Last taken: 2 weeks ago</span> • <span className="text-green-600">Score: 78%</span>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Retake
                </button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg">Power BI Analytics</h4>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">25 min</span>
              </div>
              <p className="text-gray-600 mb-3">Evaluate your data visualization and analytics skills</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>Last taken: 1 month ago</span> • <span className="text-yellow-600">Score: 65%</span>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                  Retake
                </button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-lg">Teams Administration</h4>
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">35 min</span>
              </div>
              <p className="text-gray-600 mb-3">Test your Microsoft Teams management and configuration knowledge</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>Last taken: Never</span>
                </div>
                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
                  Start Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Your Skills Profile</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Microsoft 365</span>
                  <span className="text-sm text-gray-600">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Azure</span>
                  <span className="text-sm text-gray-600">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Power BI</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '35%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Security</span>
                  <span className="text-sm text-gray-600">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '55%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4">Recommended Actions</h3>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-sm font-medium">Improve Power BI Skills</p>
                <p className="text-xs text-gray-600">Take the Power BI Fundamentals course</p>
              </div>
              
              <div className="p-3 bg-blue-50 border-l-4 border-blue-400">
                <p className="text-sm font-medium">Complete M365 Assessment</p>
                <p className="text-xs text-gray-600">Establish your baseline knowledge</p>
              </div>
              
              <div className="p-3 bg-green-50 border-l-4 border-green-400">
                <p className="text-sm font-medium">Azure Certification Path</p>
                <p className="text-xs text-gray-600">Consider pursuing AZ-104 certification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}