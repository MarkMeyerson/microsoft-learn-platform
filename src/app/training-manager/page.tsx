export default function TrainingManagerPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Training Manager</h1>
      <p className="text-gray-600 mb-8">Manage training programs, monitor team progress, and assign learning paths.</p>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors">
          <div className="text-2xl mb-2">👥</div>
          <div className="font-semibold">Manage Teams</div>
        </button>
        
        <button className="bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors">
          <div className="text-2xl mb-2">📚</div>
          <div className="font-semibold">Create Course</div>
        </button>
        
        <button className="bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-semibold">View Reports</div>
        </button>
        
        <button className="bg-orange-600 text-white p-4 rounded-lg hover:bg-orange-700 transition-colors">
          <div className="text-2xl mb-2">⚙️</div>
          <div className="font-semibold">Settings</div>
        </button>
      </div>
      
      {/* Team Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Team Progress Overview</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  IT
                </div>
                <div>
                  <p className="font-medium">IT Department</p>
                  <p className="text-sm text-gray-600">24 members</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">92%</p>
                <p className="text-xs text-gray-600">completion</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  SA
                </div>
                <div>
                  <p className="font-medium">Sales Team</p>
                  <p className="text-sm text-gray-600">18 members</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-yellow-600">75%</p>
                <p className="text-xs text-gray-600">completion</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  MK
                </div>
                <div>
                  <p className="font-medium">Marketing</p>
                  <p className="text-sm text-gray-600">12 members</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-orange-600">68%</p>
                <p className="text-xs text-gray-600">completion</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 border-l-4 border-blue-500 bg-blue-50">
              <div className="text-blue-600">📘</div>
              <div className="flex-1">
                <p className="text-sm font-medium">John completed Azure Fundamentals</p>
                <p className="text-xs text-gray-600">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 border-l-4 border-green-500 bg-green-50">
              <div className="text-green-600">✅</div>
              <div className="flex-1">
                <p className="text-sm font-medium">Sales team milestone: 75% completion</p>
                <p className="text-xs text-gray-600">4 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 border-l-4 border-purple-500 bg-purple-50">
              <div className="text-purple-600">🎯</div>
              <div className="flex-1">
                <p className="text-sm font-medium">New course assigned to Marketing</p>
                <p className="text-xs text-gray-600">1 day ago</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 border-l-4 border-orange-500 bg-orange-50">
              <div className="text-orange-600">🏆</div>
              <div className="flex-1">
                <p className="text-sm font-medium">Sarah earned Power BI certification</p>
                <p className="text-xs text-gray-600">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Management */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Course Management</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create New Course
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-3">Course Name</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">Enrolled</th>
                <th className="pb-3">Completion Rate</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Microsoft 365 Fundamentals</td>
                <td className="py-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Productivity</span>
                </td>
                <td className="py-3">45</td>
                <td className="py-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm">85%</span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                </td>
                <td className="py-3">
                  <button className="text-blue-600 hover:text-blue-800 text-sm mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Archive</button>
                </td>
              </tr>
              
              <tr className="border-b">
                <td className="py-3">Azure Security Basics</td>
                <td className="py-3">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Security</span>
                </td>
                <td className="py-3">32</td>
                <td className="py-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{width: '72%'}}></div>
                    </div>
                    <span className="text-sm">72%</span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                </td>
                <td className="py-3">
                  <button className="text-blue-600 hover:text-blue-800 text-sm mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Archive</button>
                </td>
              </tr>
              
              <tr className="border-b">
                <td className="py-3">Power BI Analytics</td>
                <td className="py-3">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Analytics</span>
                </td>
                <td className="py-3">28</td>
                <td className="py-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-600 h-2 rounded-full" style={{width: '58%'}}></div>
                    </div>
                    <span className="text-sm">58%</span>
                  </div>
                </td>
                <td className="py-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Draft</span>
                </td>
                <td className="py-3">
                  <button className="text-blue-600 hover:text-blue-800 text-sm mr-3">Edit</button>
                  <button className="text-green-600 hover:text-green-800 text-sm mr-3">Publish</button>
                  <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}