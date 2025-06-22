import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex space-x-6">
        <Link href="/" className="hover:underline">Course Catalog</Link>
        <Link href="/learning-path" className="hover:underline">My Learning Path</Link>
        <Link href="/assignments" className="hover:underline">Assignments</Link>
        <Link href="/skills-assessment" className="hover:underline">Skills Assessment</Link>
        <Link href="/certificates" className="hover:underline">Certificates</Link>
        <Link href="/training-manager" className="hover:underline">Training Manager</Link>
        <Link href="/executive" className="hover:underline">Executive Dashboard</Link>
      </div>
    </nav>
  )
}