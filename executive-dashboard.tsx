"use client"

import { useState } from "react"
import {
  TrendingUp,
  DollarSign,
  Users,
  Award,
  BarChart3,
  PieChart,
  Calendar,
  Target,
  ArrowUpRight,
  Clock,
  Download,
  Filter,
  Zap,
  Building,
  ArrowRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock executive data
const executiveMetrics = {
  totalInvestment: 125000,
  calculatedROI: 340,
  productivityGains: 28,
  timesSaved: 1250,
  employeesTrained: 85,
  certificationsEarned: 42,
  averageScoreImprovement: 23,
  customerSatisfactionIncrease: 15,
}

// Department ROI data
const departmentROI = [
  {
    department: "Sales",
    investment: 35000,
    roi: 420,
    productivityGain: 35,
    revenueImpact: 147000,
    employeeCount: 18,
    certifications: 12,
    keyMetrics: {
      dealClosureTime: { before: 45, after: 32, improvement: 29 },
      customerEngagement: { before: 72, after: 89, improvement: 24 },
      pipelineAccuracy: { before: 68, after: 85, improvement: 25 },
    },
  },
  {
    department: "IT",
    investment: 45000,
    roi: 380,
    productivityGain: 42,
    revenueImpact: 171000,
    employeeCount: 22,
    certifications: 18,
    keyMetrics: {
      incidentResolution: { before: 4.2, after: 2.8, improvement: 33 },
      systemUptime: { before: 97.2, after: 99.1, improvement: 2 },
      deploymentSpeed: { before: 72, after: 48, improvement: 33 },
    },
  },
  {
    department: "Marketing",
    investment: 25000,
    roi: 290,
    productivityGain: 31,
    revenueImpact: 72500,
    employeeCount: 12,
    certifications: 8,
    keyMetrics: {
      campaignROI: { before: 3.2, after: 4.8, improvement: 50 },
      leadQuality: { before: 65, after: 82, improvement: 26 },
      contentProduction: { before: 12, after: 18, improvement: 50 },
    },
  },
  {
    department: "Finance",
    investment: 20000,
    roi: 250,
    productivityGain: 25,
    revenueImpact: 50000,
    employeeCount: 8,
    certifications: 4,
    keyMetrics: {
      reportingTime: { before: 8, after: 5, improvement: 38 },
      dataAccuracy: { before: 92, after: 98, improvement: 7 },
      processAutomation: { before: 25, after: 65, improvement: 160 },
    },
  },
]

// Certification tracking data
const certificationData = [
  {
    certification: "Microsoft 365 Certified: Fundamentals",
    earned: 28,
    inProgress: 12,
    businessValue: "Improved collaboration and productivity",
    avgSalaryIncrease: 8,
  },
  {
    certification: "Microsoft Certified: Azure Fundamentals",
    earned: 15,
    inProgress: 18,
    businessValue: "Cloud migration and cost optimization",
    avgSalaryIncrease: 12,
  },
  {
    certification: "Microsoft Certified: Power Platform Fundamentals",
    earned: 12,
    inProgress: 8,
    businessValue: "Process automation and efficiency",
    avgSalaryIncrease: 10,
  },
  {
    certification: "Microsoft Certified: Security, Compliance, and Identity",
    earned: 8,
    inProgress: 6,
    businessValue: "Enhanced security posture",
    avgSalaryIncrease: 15,
  },
]

// Productivity improvements over time
const productivityTrends = [
  { month: "Jan", baseline: 100, withTraining: 105 },
  { month: "Feb", baseline: 100, withTraining: 112 },
  { month: "Mar", baseline: 100, withTraining: 118 },
  { month: "Apr", baseline: 100, withTraining: 125 },
  { month: "May", baseline: 100, withTraining: 132 },
  { month: "Jun", baseline: 100, withTraining: 138 },
]

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

const formatPercentage = (value: number) => {
  return `${value > 0 ? "+" : ""}${value}%`
}

export default function ExecutiveDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 12 Months")
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments")

  const timeframes = ["Last 6 Months", "Last 12 Months", "Last 24 Months"]
  const departments = ["All Departments", ...departmentROI.map((d) => d.department)]

  const totalROIValue = departmentROI.reduce((acc, dept) => acc + dept.revenueImpact, 0)
  const avgROIPercentage = Math.round(departmentROI.reduce((acc, dept) => acc + dept.roi, 0) / departmentROI.length)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Training ROI Executive Dashboard</h1>
                <p className="text-gray-600 mt-1">Strategic insights on Microsoft technology training investments</p>
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
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
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

              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-48">
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
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Executive Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-100">Total ROI</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-100" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgROIPercentage}%</div>
              <p className="text-xs text-green-100">
                <ArrowUpRight className="h-3 w-3 inline mr-1" />
                {formatCurrency(totalROIValue)} revenue impact
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-100">Training Investment</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-100" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(executiveMetrics.totalInvestment)}</div>
              <p className="text-xs text-blue-100">
                <ArrowUpRight className="h-3 w-3 inline mr-1" />
                {formatCurrency(executiveMetrics.totalInvestment / executiveMetrics.employeesTrained)} per employee
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-100">Productivity Gains</CardTitle>
              <Zap className="h-4 w-4 text-purple-100" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatPercentage(executiveMetrics.productivityGains)}</div>
              <p className="text-xs text-purple-100">
                <Clock className="h-3 w-3 inline mr-1" />
                {executiveMetrics.timesSaved} hours saved
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-100">Certifications</CardTitle>
              <Award className="h-4 w-4 text-orange-100" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{executiveMetrics.certificationsEarned}</div>
              <p className="text-xs text-orange-100">
                <Users className="h-3 w-3 inline mr-1" />
                {executiveMetrics.employeesTrained} employees trained
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="roi-analysis" className="space-y-6">
          <TabsList>
            <TabsTrigger value="roi-analysis">ROI Analysis</TabsTrigger>
            <TabsTrigger value="productivity">Productivity Impact</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="department-performance">Department Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="roi-analysis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ROI by Department */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    ROI by Department
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departmentROI.map((dept) => (
                      <div key={dept.department} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{dept.department}</span>
                          <div className="text-right">
                            <div className="font-bold text-green-600">{dept.roi}% ROI</div>
                            <div className="text-sm text-gray-600">{formatCurrency(dept.revenueImpact)}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>Investment: {formatCurrency(dept.investment)}</span>
                          <span>•</span>
                          <span>{dept.employeeCount} employees</span>
                          <span>•</span>
                          <span>{dept.certifications} certifications</span>
                        </div>
                        <Progress value={(dept.roi / 500) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Investment vs Returns */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Investment vs Returns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {formatCurrency(totalROIValue - executiveMetrics.totalInvestment)}
                      </div>
                      <div className="text-sm text-gray-600">Net Profit from Training</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                        <span className="text-red-800 font-medium">Total Investment</span>
                        <span className="text-red-900 font-bold">
                          {formatCurrency(executiveMetrics.totalInvestment)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-green-800 font-medium">Revenue Impact</span>
                        <span className="text-green-900 font-bold">{formatCurrency(totalROIValue)}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-blue-800 font-medium">ROI Multiplier</span>
                        <span className="text-blue-900 font-bold">
                          {(totalROIValue / executiveMetrics.totalInvestment).toFixed(1)}x
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="productivity" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Productivity Trends */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Productivity Improvement Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {formatPercentage(executiveMetrics.productivityGains)}
                      </div>
                      <div className="text-sm text-gray-600">Average Productivity Increase</div>
                    </div>

                    {productivityTrends.map((trend, index) => (
                      <div key={trend.month} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{trend.month}</span>
                        <div className="flex items-center gap-4">
                          <div className="text-sm text-gray-600">Baseline: {trend.baseline}%</div>
                          <div className="text-sm font-medium text-blue-600">With Training: {trend.withTraining}%</div>
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Performance Improvements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Key Performance Improvements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-green-800">Customer Satisfaction</span>
                        <span className="text-green-900 font-bold">
                          {formatPercentage(executiveMetrics.customerSatisfactionIncrease)}
                        </span>
                      </div>
                      <div className="text-sm text-green-700">
                        Improved through better Microsoft 365 collaboration tools
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-blue-800">Process Efficiency</span>
                        <span className="text-blue-900 font-bold">
                          {formatPercentage(executiveMetrics.productivityGains)}
                        </span>
                      </div>
                      <div className="text-sm text-blue-700">Automation and AI tools reducing manual work</div>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-purple-800">Time Savings</span>
                        <span className="text-purple-900 font-bold">{executiveMetrics.timesSaved} hours</span>
                      </div>
                      <div className="text-sm text-purple-700">
                        Equivalent to {Math.round(executiveMetrics.timesSaved / 40)} weeks of work
                      </div>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-orange-800">Skill Assessment Scores</span>
                        <span className="text-orange-900 font-bold">
                          {formatPercentage(executiveMetrics.averageScoreImprovement)}
                        </span>
                      </div>
                      <div className="text-sm text-orange-700">Average improvement across all assessments</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Certification Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Certification Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certificationData.map((cert) => (
                      <div key={cert.certification} className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm">{cert.certification}</h4>
                            <p className="text-xs text-gray-600 mt-1">{cert.businessValue}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold">{cert.earned} earned</div>
                            <div className="text-xs text-gray-600">{cert.inProgress} in progress</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={(cert.earned / (cert.earned + cert.inProgress)) * 100}
                            className="flex-1 h-2"
                          />
                          <Badge variant="outline" className="text-xs">
                            +{cert.avgSalaryIncrease}% salary
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Certification Business Impact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Business Impact of Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {executiveMetrics.certificationsEarned}
                      </div>
                      <div className="text-sm text-gray-600">Total Certifications Earned</div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <div className="font-medium text-green-800">Employee Retention</div>
                          <div className="text-xs text-green-600">Certified employees</div>
                        </div>
                        <div className="text-green-900 font-bold">+18%</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <div className="font-medium text-blue-800">Internal Promotions</div>
                          <div className="text-xs text-blue-600">From certified pool</div>
                        </div>
                        <div className="text-blue-900 font-bold">67%</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div>
                          <div className="font-medium text-purple-800">Project Success Rate</div>
                          <div className="text-xs text-purple-600">With certified team members</div>
                        </div>
                        <div className="text-purple-900 font-bold">+24%</div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div>
                          <div className="font-medium text-orange-800">Client Confidence</div>
                          <div className="text-xs text-orange-600">In certified capabilities</div>
                        </div>
                        <div className="text-orange-900 font-bold">+31%</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="department-performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {departmentROI.map((dept) => (
                <Card key={dept.department}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{dept.department} Department</span>
                      <Badge className="bg-green-100 text-green-800">{dept.roi}% ROI</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">Investment</div>
                          <div className="font-bold">{formatCurrency(dept.investment)}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Revenue Impact</div>
                          <div className="font-bold text-green-600">{formatCurrency(dept.revenueImpact)}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Employees</div>
                          <div className="font-bold">{dept.employeeCount}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Certifications</div>
                          <div className="font-bold">{dept.certifications}</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Key Performance Improvements</h4>
                        {Object.entries(dept.keyMetrics).map(([metric, data]) => (
                          <div key={metric} className="flex items-center justify-between text-sm">
                            <span className="capitalize">{metric.replace(/([A-Z])/g, " $1").trim()}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">
                                {typeof data.before === "number" && data.before < 10
                                  ? `${data.before.toFixed(1)}${metric.includes("Time") ? "h" : metric.includes("Uptime") ? "%" : ""}`
                                  : `${data.before}${metric.includes("Uptime") || metric.includes("Accuracy") ? "%" : metric.includes("Time") ? "h" : ""}`}
                              </span>
                              <ArrowRight className="h-3 w-3 text-gray-400" />
                              <span className="font-medium">
                                {typeof data.after === "number" && data.after < 10
                                  ? `${data.after.toFixed(1)}${metric.includes("Time") ? "h" : metric.includes("Uptime") ? "%" : ""}`
                                  : `${data.after}${metric.includes("Uptime") || metric.includes("Accuracy") ? "%" : metric.includes("Time") ? "h" : ""}`}
                              </span>
                              <Badge variant="outline" className="text-xs text-green-600">
                                {formatPercentage(data.improvement)}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
