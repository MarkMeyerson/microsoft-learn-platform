"use client"

import { useState } from "react"
import {
  CheckCircle,
  Circle,
  Clock,
  Star,
  BookOpen,
  Play,
  Lock,
  Trophy,
  Calendar,
  Target,
  ArrowRight,
  User,
  Zap,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock user data
const userData = {
  name: "Sarah Johnson",
  role: "Sales Manager",
  department: "Sales",
  currentStreak: 7,
  totalHours: 24,
  completedCourses: 8,
  certificates: 3,
}

// Learning paths data
const learningPaths = [
  {
    id: "sales-leader",
    title: "Sales Leadership Excellence",
    description: "Master Microsoft tools to drive sales performance and team productivity",
    estimatedWeeks: 8,
    totalHours: 32,
    difficulty: "Intermediate",
    courses: [
      {
        id: 1,
        title: "Microsoft 365 Fundamentals",
        description: "Learn the basics of Microsoft 365 suite for business productivity",
        duration: "3 hours",
        difficulty: "Beginner",
        status: "completed",
        progress: 100,
        prerequisites: [],
        skills: ["Microsoft 365", "Productivity"],
        estimatedWeeks: 1,
        certificate: true,
      },
      {
        id: 2,
        title: "Teams Collaboration Mastery",
        description: "Advanced Teams features for effective team management and communication",
        duration: "4 hours",
        difficulty: "Intermediate",
        status: "completed",
        progress: 100,
        prerequisites: [1],
        skills: ["Teams", "Communication", "Leadership"],
        estimatedWeeks: 1,
        certificate: true,
      },
      {
        id: 3,
        title: "Power BI for Sales Analytics",
        description: "Create compelling sales dashboards and reports using Power BI",
        duration: "6 hours",
        difficulty: "Intermediate",
        status: "in-progress",
        progress: 65,
        prerequisites: [1],
        skills: ["Power BI", "Analytics", "Data Visualization"],
        estimatedWeeks: 2,
        certificate: true,
      },
      {
        id: 4,
        title: "Sales Process Automation with Power Platform",
        description: "Automate sales workflows using Power Automate and Power Apps",
        duration: "5 hours",
        difficulty: "Advanced",
        status: "locked",
        progress: 0,
        prerequisites: [2, 3],
        skills: ["Power Platform", "Automation", "Process Optimization"],
        estimatedWeeks: 2,
        certificate: true,
      },
      {
        id: 5,
        title: "AI-Powered Sales with Copilot",
        description: "Leverage Microsoft Copilot to enhance sales productivity and insights",
        duration: "4 hours",
        difficulty: "Advanced",
        status: "locked",
        progress: 0,
        prerequisites: [3, 4],
        skills: ["AI", "Copilot", "Sales Intelligence"],
        estimatedWeeks: 1,
        certificate: true,
      },
      {
        id: 6,
        title: "Advanced Customer Relationship Management",
        description: "Master Dynamics 365 Sales for comprehensive customer management",
        duration: "8 hours",
        difficulty: "Advanced",
        status: "locked",
        progress: 0,
        prerequisites: [4, 5],
        skills: ["Dynamics 365", "CRM", "Customer Management"],
        estimatedWeeks: 2,
        certificate: true,
      },
    ],
  },
  {
    id: "data-analyst",
    title: "Business Data Analytics",
    description: "Transform data into actionable business insights using Microsoft tools",
    estimatedWeeks: 10,
    totalHours: 40,
    difficulty: "Intermediate",
    courses: [
      {
        id: 7,
        title: "Excel Advanced Analytics",
        description: "Master advanced Excel features for data analysis and reporting",
        duration: "5 hours",
        difficulty: "Intermediate",
        status: "not-started",
        progress: 0,
        prerequisites: [],
        skills: ["Excel", "Data Analysis"],
        estimatedWeeks: 1,
        certificate: false,
      },
      {
        id: 8,
        title: "Power BI Fundamentals",
        description: "Introduction to Power BI for business intelligence",
        duration: "6 hours",
        difficulty: "Beginner",
        status: "not-started",
        progress: 0,
        prerequisites: [7],
        skills: ["Power BI", "Business Intelligence"],
        estimatedWeeks: 2,
        certificate: true,
      },
    ],
  },
]

const getStatusIcon = (status: string, progress: number) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-6 w-6 text-green-500" />
    case "in-progress":
      return <Circle className="h-6 w-6 text-blue-500 fill-blue-100" />
    case "locked":
      return <Lock className="h-6 w-6 text-gray-400" />
    default:
      return <Circle className="h-6 w-6 text-gray-300" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "border-green-200 bg-green-50"
    case "in-progress":
      return "border-blue-200 bg-blue-50"
    case "locked":
      return "border-gray-200 bg-gray-50"
    default:
      return "border-gray-200 bg-white"
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800"
    case "Intermediate":
      return "bg-blue-100 text-blue-800"
    case "Advanced":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function PersonalizedLearningPath() {
  const [selectedPath, setSelectedPath] = useState("sales-leader")
  const [selectedTimeframe, setSelectedTimeframe] = useState("8 weeks")

  const currentPath = learningPaths.find((path) => path.id === selectedPath)
  const completedCourses = currentPath?.courses.filter((course) => course.status === "completed").length || 0
  const totalCourses = currentPath?.courses.length || 0
  const overallProgress = totalCourses > 0 ? Math.round((completedCourses / totalCourses) * 100) : 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">My Learning Path</h1>
                <p className="text-gray-600 mt-1">Personalized Microsoft skills development roadmap</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm text-gray-600">Welcome back,</div>
                  <div className="font-semibold">{userData.name}</div>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>

            {/* User Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-600">Current Streak</span>
                </div>
                <div className="text-xl font-bold text-blue-900">{userData.currentStreak} days</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">Total Hours</span>
                </div>
                <div className="text-xl font-bold text-green-900">{userData.totalHours}h</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-purple-600">Completed</span>
                </div>
                <div className="text-xl font-bold text-purple-900">{userData.completedCourses} courses</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-orange-600">Certificates</span>
                </div>
                <div className="text-xl font-bold text-orange-900">{userData.certificates}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Path Selection */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Choose Your Learning Path</h2>
              <p className="text-gray-600">Select a path that aligns with your career goals</p>
            </div>
            <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
              <SelectTrigger className="w-40">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4 weeks">4 weeks</SelectItem>
                <SelectItem value="8 weeks">8 weeks</SelectItem>
                <SelectItem value="12 weeks">12 weeks</SelectItem>
                <SelectItem value="16 weeks">16 weeks</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {learningPaths.map((path) => (
              <Card
                key={path.id}
                className={`cursor-pointer transition-all ${
                  selectedPath === path.id ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
                }`}
                onClick={() => setSelectedPath(path.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{path.title}</CardTitle>
                      <p className="text-sm text-gray-600 mt-1">{path.description}</p>
                    </div>
                    <Badge className={getDifficultyColor(path.difficulty)}>{path.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {path.totalHours} hours
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {path.estimatedWeeks} weeks
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {path.courses.length} courses
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Path Overview */}
        {currentPath && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    {currentPath.title}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">{currentPath.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{overallProgress}%</div>
                  <div className="text-sm text-gray-600">Complete</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={overallProgress} className="h-3 mb-4" />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>
                  {completedCourses} of {totalCourses} courses completed
                </span>
                <span>Estimated completion: {currentPath.estimatedWeeks} weeks</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Learning Roadmap */}
        {currentPath && (
          <Card>
            <CardHeader>
              <CardTitle>Learning Roadmap</CardTitle>
              <p className="text-gray-600">Follow this structured path to achieve your learning goals</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {currentPath.courses.map((course, index) => {
                  const isLocked = course.status === "locked"
                  const canStart = course.prerequisites.every(
                    (prereqId) => currentPath.courses.find((c) => c.id === prereqId)?.status === "completed",
                  )

                  return (
                    <div key={course.id} className="relative">
                      {/* Connection Line */}
                      {index < currentPath.courses.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-200 z-0" />
                      )}

                      <div className={`relative z-10 border rounded-lg p-6 ${getStatusColor(course.status)}`}>
                        <div className="flex items-start gap-4">
                          {/* Status Icon */}
                          <div className="flex-shrink-0 mt-1">{getStatusIcon(course.status, course.progress)}</div>

                          {/* Course Content */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{course.description}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {course.duration}
                                  </span>
                                  <Badge className={getDifficultyColor(course.difficulty)} variant="outline">
                                    {course.difficulty}
                                  </Badge>
                                  {course.certificate && (
                                    <span className="flex items-center gap-1 text-orange-600">
                                      <Trophy className="h-4 w-4" />
                                      Certificate
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-600 mb-1">Week {index + 1}</div>
                                <div className="text-xs text-gray-500">{course.estimatedWeeks}w duration</div>
                              </div>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-1 mb-4">
                              {course.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>

                            {/* Prerequisites */}
                            {course.prerequisites.length > 0 && (
                              <div className="mb-4">
                                <div className="text-sm text-gray-600 mb-2">Prerequisites:</div>
                                <div className="flex items-center gap-2 text-sm">
                                  {course.prerequisites.map((prereqId, prereqIndex) => {
                                    const prereq = currentPath.courses.find((c) => c.id === prereqId)
                                    return (
                                      <div key={prereqId} className="flex items-center gap-1">
                                        {prereqIndex > 0 && <ArrowRight className="h-3 w-3 text-gray-400" />}
                                        <span
                                          className={`px-2 py-1 rounded text-xs ${
                                            prereq?.status === "completed"
                                              ? "bg-green-100 text-green-800"
                                              : "bg-gray-100 text-gray-600"
                                          }`}
                                        >
                                          {prereq?.title}
                                        </span>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            )}

                            {/* Progress Bar */}
                            {course.status === "in-progress" && (
                              <div className="mb-4">
                                <div className="flex items-center justify-between text-sm mb-1">
                                  <span>Progress</span>
                                  <span>{course.progress}%</span>
                                </div>
                                <Progress value={course.progress} className="h-2" />
                              </div>
                            )}

                            {/* Action Button */}
                            <div className="flex justify-end">
                              {course.status === "completed" ? (
                                <Button variant="outline" size="sm">
                                  <Star className="h-4 w-4 mr-2" />
                                  Review
                                </Button>
                              ) : course.status === "in-progress" ? (
                                <Button size="sm">
                                  <Play className="h-4 w-4 mr-2" />
                                  Continue
                                </Button>
                              ) : isLocked || !canStart ? (
                                <Button variant="outline" size="sm" disabled>
                                  <Lock className="h-4 w-4 mr-2" />
                                  Locked
                                </Button>
                              ) : (
                                <Button size="sm">
                                  <Play className="h-4 w-4 mr-2" />
                                  Start Course
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
