"use client"

import { useState } from "react"
import {
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  BookOpen,
  Award,
  BarChart3,
  Filter,
  Download,
  Calendar,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for team members
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    department: "Sales",
    role: "Sales Manager",
    completedCourses: 8,
    totalCourses: 12,
    avgScore: 87,
    lastActive: "2 days ago",
  },
  {
    id: 2,
    name: "Mike Chen",
    department: "IT",
    role: "System Admin",
    completedCourses: 15,
    totalCourses: 18,
    avgScore: 92,
    lastActive: "1 day ago",
  },
  {
    id: 3,
    name: "Emily Davis",
    department: "Marketing",
    role: "Marketing Lead",
    completedCourses: 6,
    totalCourses: 10,
    avgScore: 78,
    lastActive: "3 days ago",
  },
  {
    id: 4,
    name: "James Wilson",
    department: "Finance",
    role: "Financial Analyst",
    completedCourses: 4,
    totalCourses: 8,
    avgScore: 85,
    lastActive: "1 week ago",
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    department: "HR",
    role: "HR Manager",
    completedCourses: 9,
    totalCourses: 11,
    avgScore: 90,
    lastActive: "1 day ago",
  },
  {
    id: 6,
    name: "David Kim",
    department: "IT",
    role: "Developer",
    completedCourses: 12,
    totalCourses: 16,
    avgScore: 88,
    lastActive: "Today",
  },
]

// Department data with skills requirements
const departmentData = [
  {
    name: "Sales",
    members: 8,
    avgProgress: 72,
    criticalSkills: ["Microsoft 365", "Power Platform"],
    skillGaps: [
      { skill: "Power BI Analytics", gap: 65, priority: "High" },
      { skill: "Teams Collaboration", gap: 30, priority: "Medium" },
      { skill: "AI Tools", gap: 80, priority: "High" },
    ],
    recommendedPaths: [
      { title: "Sales Productivity with Microsoft 365", courses: 4, duration: "8 hours" },
      { title: "Data-Driven Sales with Power BI", courses: 3, duration: "6 hours" },
    ],
  },
  {
    name: "IT",
    members: 12,
    avgProgress: 85,
    criticalSkills: ["Azure", "AI", "Microsoft 365"],
    skillGaps: [
      { skill: "Azure Security", gap: 45, priority: "High" },
      { skill: "AI Implementation", gap: 55, priority: "Medium" },
      { skill: "Cost Management", gap: 25, priority: "Low" },
    ],
    recommendedPaths: [
      { title: "Azure Infrastructure Mastery", courses: 6, duration: "15 hours" },
      { title: "AI Solutions Architecture", courses: 5, duration: "12 hours" },
    ],
  },
  {
    name: "Marketing",
    members: 6,
    avgProgress: 58,
    criticalSkills: ["Power Platform", "AI", "Microsoft 365"],
    skillGaps: [
      { skill: "Marketing Automation", gap: 70, priority: "High" },
      { skill: "Customer Insights", gap: 60, priority: "High" },
      { skill: "Content AI", gap: 85, priority: "Medium" },
    ],
    recommendedPaths: [
      { title: "Digital Marketing with Power Platform", courses: 4, duration: "10 hours" },
      { title: "AI-Powered Marketing Analytics", courses: 3, duration: "7 hours" },
    ],
  },
  {
    name: "Finance",
    members: 5,
    avgProgress: 45,
    criticalSkills: ["Power Platform", "Azure", "Microsoft 365"],
    skillGaps: [
      { skill: "Financial Reporting", gap: 75, priority: "High" },
      { skill: "Data Analysis", gap: 65, priority: "High" },
      { skill: "Process Automation", gap: 50, priority: "Medium" },
    ],
    recommendedPaths: [
      { title: "Financial Analytics with Power BI", courses: 4, duration: "9 hours" },
      { title: "Automated Financial Processes", courses: 3, duration: "6 hours" },
    ],
  },
  {
    name: "HR",
    members: 4,
    avgProgress: 78,
    criticalSkills: ["Microsoft 365", "Power Platform", "AI"],
    skillGaps: [
      { skill: "HR Analytics", gap: 40, priority: "Medium" },
      { skill: "Employee Engagement Tools", gap: 35, priority: "Low" },
      { skill: "Compliance Management", gap: 55, priority: "High" },
    ],
    recommendedPaths: [
      { title: "HR Digital Transformation", courses: 3, duration: "7 hours" },
      { title: "People Analytics with Power BI", courses: 2, duration: "5 hours" },
    ],
  },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800"
    case "Medium":
      return "bg-yellow-100 text-yellow-800"
    case "Low":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getProgressColor = (progress: number) => {
  if (progress >= 80) return "text-green-600"
  if (progress >= 60) return "text-yellow-600"
  return "text-red-600"
}

export default function TrainingManagerDashboard() {
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 30 Days")

  const departments = ["All Departments", ...departmentData.map((d) => d.name)]
  const timeframes = ["Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year"]

  // Calculate overall metrics
  const totalMembers = teamMembers.length
  const avgCompletionRate = Math.round(
    teamMembers.reduce((acc, member) => acc + (member.completedCourses / member.totalCourses) * 100, 0) / totalMembers,
  )
  const totalCoursesCompleted = teamMembers.reduce((acc, member) => acc + member.completedCourses, 0)
  const avgScore = Math.round(teamMembers.reduce((acc, member) => acc + member.avgScore, 0) / totalMembers)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Training Manager Dashboard</h1>
                <p className="text-gray-600 mt-1">Team learning progress and skills development overview</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
                <Button size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Review
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timeframes.map((timeframe) => (
                    <SelectItem key={timeframe} value={timeframe}>
                      {timeframe}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Learners</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMembers}</div>
              <p className="text-xs text-muted-foreground">Across 5 departments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getProgressColor(avgCompletionRate)}`}>{avgCompletionRate}%</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCoursesCompleted}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Score</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgScore}%</div>
              <p className="text-xs text-muted-foreground">Assessment average</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Team Overview</TabsTrigger>
            <TabsTrigger value="skills-gaps">Skills Gap Analysis</TabsTrigger>
            <TabsTrigger value="learning-paths">Learning Paths</TabsTrigger>
            <TabsTrigger value="individual">Individual Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Department Progress Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Department Progress Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentData.map((dept) => (
                    <div key={dept.name} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{dept.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {dept.members} members
                            </span>
                            <span className={`font-medium ${getProgressColor(dept.avgProgress)}`}>
                              {dept.avgProgress}% avg progress
                            </span>
                          </div>
                        </div>
                        <Progress value={dept.avgProgress} className="h-2" />
                        <div className="flex gap-1 mt-2">
                          {dept.criticalSkills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills-gaps" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {departmentData.map((dept) => (
                <Card key={dept.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{dept.name} Skills Gaps</span>
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dept.skillGaps.map((gap, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{gap.skill}</span>
                            <div className="flex items-center gap-2">
                              <Badge className={getPriorityColor(gap.priority)}>{gap.priority}</Badge>
                              <span className="text-sm text-red-600 font-medium">{gap.gap}% gap</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: `${gap.gap}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learning-paths" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {departmentData.map((dept) => (
                <Card key={dept.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      {dept.name} Recommended Paths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dept.recommendedPaths.map((path, index) => (
                        <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <h4 className="font-semibold mb-2">{path.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              {path.courses} courses
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {path.duration}
                            </span>
                          </div>
                          <Button size="sm" className="w-full">
                            Assign to Department
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="individual" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Individual Team Member Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamMembers.map((member) => {
                    const completionRate = Math.round((member.completedCourses / member.totalCourses) * 100)
                    return (
                      <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h3 className="font-semibold">{member.name}</h3>
                              <p className="text-sm text-gray-600">
                                {member.role} • {member.department}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className={`font-semibold ${getProgressColor(completionRate)}`}>
                                {completionRate}% complete
                              </div>
                              <div className="text-sm text-gray-600">
                                {member.completedCourses}/{member.totalCourses} courses
                              </div>
                            </div>
                          </div>
                          <Progress value={completionRate} className="h-2 mb-2" />
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Avg Score: {member.avgScore}%</span>
                            <span>Last Active: {member.lastActive}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
