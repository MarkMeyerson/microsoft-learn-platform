export default function CertificatesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Certificates</h1>
      <p className="text-gray-600 mb-8">View and manage your earned certificates and credentials.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Microsoft 365 Certified</h3>
            <span className="text-2xl">🏆</span>
          </div>
          <p className="mb-4">Fundamentals</p>
          <div className="text-sm opacity-90">
            <p>Earned: December 15, 2024</p>
            <p>Valid until: December 15, 2026</p>
          </div>
          <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100">
            Download PDF
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Azure Fundamentals</h3>
            <span className="text-2xl">📜</span>
          </div>
          <p className="mb-4">AZ-900</p>
          <div className="text-sm opacity-90">
            <p>Earned: November 22, 2024</p>
            <p>Valid until: November 22, 2026</p>
          </div>
          <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-gray-100">
            Download PDF
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Teams Admin</h3>
            <span className="text-2xl">🎖️</span>
          </div>
          <p className="mb-4">MS-700</p>
          <div className="text-sm opacity-90">
            <p>In Progress</p>
            <p>Expected: January 2025</p>
          </div>
          <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded font-semibold hover:bg-gray-100">
            View Progress
          </button>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Certificate Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">2</div>
            <p className="text-gray-600">Certificates Earned</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600">1</div>
            <p className="text-gray-600">In Progress</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">85%</div>
            <p className="text-gray-600">Overall Progress</p>
          </div>
        </div>
      </div>
    </div>
  )
}