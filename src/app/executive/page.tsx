export default function ExecutivePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Executive Dashboard</h1>
      <p className="text-gray-600 mb-8">Comprehensive overview of training progress and business impact.</p>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Employees</h3>
          <div className="text-3xl font-bold text-blue-600">1,247</div>
          <p className="text-sm text-green-600">+12% from last quarter</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Training Completion</h3>
          <div className="text-3xl font-bold text-green-600">78%</div>
          <p className="text-sm text-green-600">+15% from last quarter</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Certificates Earned</h3>
          <div className="text-3xl font-bold text-purple-600">342</div>
          <p className="text-sm text-green-600">+28% from last quarter</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Training ROI</h3>
          <div className="text-3xl font-bold text-orange-600">247%</div>
          <p className="text-sm text-green-600">+5% from last quarter</p>
        </div>
      </div>
      
      {/* Department Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Department Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">IT Department</span>
                <span className="text-sm text-gray-600">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Sales</span>
                <span className="text-sm text-gray-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Marketing</span>
                <span className="text-sm text-gray-600">76%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '76%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">HR</span>
                <span className="text-sm text-gray-600">68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Top Performing Courses</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">Microsoft 365 Fundamentals</span>
              <span className="text-green-600 font-semibold">95% completion</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">Azure Security Basics</span>
              <span className="text-green-600 font-semibold">88% completion</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">Teams Collaboration</span>
              <span className="text-green-600 font-semibold">82% completion</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="font-medium">Power BI Essentials</span>
              <span className="text-yellow-600 font-semibold">74% completion</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Recent Training Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border-l-4 border-blue-500 bg-blue-50">
            <div>
              <p className="font-medium">New certification achieved: Azure Fundamentals</p>
              <p className="text-sm text-gray-600">John Smith - IT Department</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          
          <div className="flex items-center justify-between p-3 border-l-4 border-green-500 bg-green-50">
            <div>
              <p className="font-medium">Course completion: Microsoft 365 Security</p>
              <p className="text-sm text-gray-600">Sarah Johnson - Security Team</p>
            </div>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
          
          <div className="flex items-center justify-between p-3 border-l-4 border-purple-500 bg-purple-50">
            <div>
              <p className="font-medium">Training milestone: 100 employees completed Power BI training</p>
              <p className="text-sm text-gray-600">Analytics Department</p>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}