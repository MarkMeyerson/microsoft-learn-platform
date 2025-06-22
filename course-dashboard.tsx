"use client"

import { useState } from "react"
import { Search, Clock, Users, Filter, BookOpen, Brain, Cloud, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock course data
const courses = [
  {
    id: 1,
    title: "Azure Fundamentals for Business Leaders",
    duration: "3 hours",
    skillLevel: "Beginner",
    topics: ["Azure"],
    progress: 75,
    thumbnail: Cloud,
    description: "Learn the basics of Microsoft Azure cloud services and how they can benefit your business.",
  },
  {
    id: 2,
    title: "AI-Powered Business Solutions",
    duration: "2.5 hours",
    skillLevel: "Intermediate",
    topics: ["AI", "Azure"],
    progress: 45,
    thumbnail: Brain,
    description: "Discover how artificial intelligence can transform your business operations and decision-making.",
  },
  {
    id: 3,
    title: "Power Platform for Small Business",
    duration: "4 hours",
    skillLevel: "Beginner",
    topics: ["Power Platform"],
    progress: 90,
    thumbnail: Zap,
    description: "Build custom business applications and automate workflows with Microsoft Power Platform.",
  },
  {
    id: 4,
    title: "Microsoft 365 Security Essentials",
    duration: "2 hours",
    skillLevel: "Intermediate",
    topics: ["Microsoft 365"],
    progress: 30,
    thumbnail: BookOpen,
    description: "Protect your business data and ensure compliance with Microsoft 365 security features.",
  },
  {
    id: 5,
    title: "Advanced Power BI Analytics",
    duration: "5 hours",
    skillLevel: "Advanced",
    topics: ["Power Platform", "AI"],
    progress: 15,
    thumbnail: Brain,
    description: "Create sophisticated business intelligence dashboards and reports for data-driven decisions.",
  },
  {
    id: 6,
    title: "Teams Collaboration Strategies",
    duration: "1.5 hours",
    skillLevel: "Beginner",
    topics: ["Microsoft 365"],
    progress: 100,
    thumbnail: Users,
    description: "Maximize productivity and collaboration using Microsoft Teams in your organization.",
  },
  {
    id: 7,
    title: "Azure Cost Management",
    duration: "3.5 hours",
    skillLevel: "Intermediate",
    topics: ["Azure"],
    progress: 60,
    thumbnail: Cloud,
    description: "Optimize your cloud spending and manage Azure resources efficiently.",
  },
  {
    id: 8,
    title: "Copilot for Business Productivity",
    duration: "2 hours",
    skillLevel: "Beginner",
    topics: ["AI", "Microsoft 365"],
    progress: 0,
    thumbnail: Brain,
    description: "Leverage Microsoft Copilot to enhance productivity across your business applications.",
  },
]

const skillLevels = ["All Levels", "Beginner", "Intermediate", "Advanced"]
const topics = ["All Topics", "Azure", "AI", "Power Platform", "Microsoft 365"]

const getSkillLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "Intermediate":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200"
    case "Advanced":
      return "bg-purple-100 text-purple-800 hover:bg-purple-200"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }
}

const getTopicColor = (topic: string) => {
  switch (topic) {
    case "Azure":
      return "bg-blue-50 text-blue-700 border-blue-200"
    case "AI":
      return "bg-purple-50 text-purple-700 border-purple-200"
    case "Power Platform":
      return "bg-orange-50 text-orange-700 border-orange-200"
    case "Microsoft 365":
      return "bg-green-50 text-green-700 border-green-200"
    default:
      return "bg-gray-50 text-gray-700 border-gray-200"
  }
}

export default function CourseDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("All Levels")
  const [selectedTopic, setSelectedTopic] = useState("All Topics")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSkillLevel = selectedSkillLevel === "All Levels" || course.skillLevel === selectedSkillLevel
    const matchesTopic = selectedTopic === "All Topics" || course.topics.includes(selectedTopic)

    return matchesSearch && matchesSkillLevel && matchesTopic
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Microsoft Learn</h1>
                <p className="text-gray-600 mt-1">Small Business Training Dashboard</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <BookOpen className="h-4 w-4" />
                <span>{filteredCourses.length} courses available</span>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2">
                <Select value={selectedSkillLevel} onValueChange={setSelectedSkillLevel}>
                  <SelectTrigger className="w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {skillLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {topics.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => {
            const IconComponent = course.thumbnail
            return (
              <Card key={course.id} className="hover:shadow-lg transition-shadow duration-200 cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge className={getSkillLevelColor(course.skillLevel)}>{course.skillLevel}</Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {course.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className={`text-xs ${getTopicColor(topic)}`}>
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <Button
                    className="w-full"
                    variant={course.progress === 0 ? "default" : course.progress === 100 ? "outline" : "default"}
                  >
                    {course.progress === 0 ? "Start Course" : course.progress === 100 ? "Review" : "Continue"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
