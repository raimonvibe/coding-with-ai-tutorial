import { useState } from 'react'
import { Brain, Code, Zap, CheckCircle, Menu, X, Play, BookOpen, Target, Sparkles, Rocket, Star } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Progress } from './components/ui/progress'
import './App.css'

function App() {

  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const lessons = [
    {
      id: 1,
      title: "Introduction to AI-Assisted Programming",
      description: "Learn the fundamentals of coding with AI tools and understand how they can accelerate your development process.",
      duration: "15 min",
      difficulty: "Beginner",
      topics: ["AI Tools Overview", "Setting up your environment", "First AI-generated code"]
    },
    {
      id: 2,
      title: "Prompt Engineering for Code Generation",
      description: "Master the art of writing effective prompts to get better code suggestions from AI assistants.",
      duration: "25 min",
      difficulty: "Beginner",
      topics: ["Prompt structure", "Context setting", "Iterative refinement"]
    },
    {
      id: 3,
      title: "Debugging with AI Assistance",
      description: "Learn how to leverage AI tools to identify, understand, and fix bugs in your code efficiently.",
      duration: "30 min",
      difficulty: "Intermediate",
      topics: ["Error analysis", "AI debugging strategies", "Code review with AI"]
    },
    {
      id: 4,
      title: "Building Full Applications with AI",
      description: "Create complete web applications using AI assistance for both frontend and backend development.",
      duration: "45 min",
      difficulty: "Advanced",
      topics: ["Project planning", "Component generation", "API development"]
    },
    {
      id: 5,
      title: "Best Practices and Ethics",
      description: "Understand the responsible use of AI in programming and learn industry best practices.",
      duration: "20 min",
      difficulty: "Intermediate",
      topics: ["Code quality", "Security considerations", "Ethical AI use"]
    }
  ]

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-cyan-400" />,
      title: "AI-Powered Learning",
      description: "Interactive tutorials that adapt to your learning pace using cutting-edge AI technology.",
      gradient: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20"
    },
    {
      icon: <Code className="h-10 w-10 text-emerald-400" />,
      title: "Hands-On Coding",
      description: "Write real code from day one with AI assistance and immediate feedback on your progress.",
      gradient: "from-emerald-500 to-green-600",
      bgColor: "bg-gradient-to-br from-emerald-900/20 to-green-900/20"
    },
    {
      icon: <Zap className="h-10 w-10 text-amber-400" />,
      title: "Accelerated Learning",
      description: "Learn programming concepts 10x faster with AI-guided tutorials and personalized explanations.",
      gradient: "from-amber-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-900/20 to-orange-900/20"
    }
  ]

  const markLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const progressPercentage = (completedLessons.length / lessons.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-slate-800/95 via-purple-800/10 to-slate-800/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-cyan-400" />
                <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Code Academy
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tutorials" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Tutorials</a>
              <a href="#progress" className="text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:scale-105">Progress</a>
              <Button variant="outline" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300">
                <Rocket className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-slate-800/95 to-slate-900/95 backdrop-blur-sm border-t border-purple-500/20">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="#tutorials" className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-300">Tutorials</a>
              <a href="#progress" className="block px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-all duration-300">Progress</a>
              <Button variant="outline" className="w-full mt-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300">
                <Rocket className="mr-2 h-4 w-4" />
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium text-cyan-300">The Future of Programming Education</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Learn Programming
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Master the art of coding with AI assistance. Our interactive tutorials teach you how to leverage artificial intelligence to become a 
            <span className="text-cyan-400 font-semibold"> 10x more efficient</span> and 
            <span className="text-emerald-400 font-semibold"> effective programmer</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg">
              <Play className="mr-3 h-6 w-6" />
              Start Learning Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg">
              <BookOpen className="mr-3 h-6 w-6" />
              View Curriculum
            </Button>
          </div>
          

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Learn Programming with AI?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the revolutionary approach to coding education that's transforming how developers learn and build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Card key={index} className={`${feature.bgColor} border-2 border-transparent hover:border-gradient-to-r hover:border-opacity-50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-2xl mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section id="progress" className="py-20 px-4 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Your Learning Progress
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Track your journey to becoming an AI-powered developer
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-2 border-emerald-500/30 shadow-2xl shadow-emerald-500/10 mb-8 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-2xl">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 mr-4">
                  <Target className="h-8 w-8 text-emerald-400" />
                </div>
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Overall Progress
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-lg">Completed Lessons</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-emerald-400">{completedLessons.length}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-xl text-gray-300">{lessons.length}</span>
                  </div>
                </div>
                
                <div className="relative">
                  <Progress 
                    value={progressPercentage} 
                    className="h-4 bg-slate-700 rounded-full overflow-hidden"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 rounded-xl border border-emerald-500/20">
                    <div className="text-2xl font-bold text-emerald-400">{Math.round(progressPercentage)}%</div>
                    <div className="text-sm text-gray-400">Complete</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
                    <div className="text-2xl font-bold text-purple-400">{lessons.length - completedLessons.length}</div>
                    <div className="text-sm text-gray-400">Remaining</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-500/20">
                    <div className="text-2xl font-bold text-amber-400">
                      {completedLessons.length > 0 ? Math.round((completedLessons.length / lessons.length) * 100) : 0}
                    </div>
                    <div className="text-sm text-gray-400">Score</div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  {progressPercentage === 100 ? (
                    <p className="text-lg text-emerald-400 font-semibold flex items-center justify-center">
                      <Star className="mr-2 h-5 w-5 text-yellow-400" />
                      🎉 Congratulations! You've mastered AI programming!
                    </p>
                  ) : (
                    <p className="text-gray-400">
                      Keep going! You're <span className="text-cyan-400 font-semibold">{Math.round(progressPercentage)}%</span> of the way to becoming an AI programming expert.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Interactive Tutorials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Master AI programming through hands-on tutorials designed to transform you into a coding expert
            </p>
          </div>
          
          <div className="grid gap-8">
            {lessons.map((lesson) => (
              <Card key={lesson.id} className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-2 border-transparent hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 group relative overflow-hidden backdrop-blur-sm">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 group-hover:scale-110 ${
                          lesson.difficulty === 'Beginner' ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white' :
                          lesson.difficulty === 'Intermediate' ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-white' :
                          'bg-gradient-to-br from-red-500 to-pink-600 text-white'
                        }`}>
                          {lesson.id}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-white text-xl lg:text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                            {lesson.title}
                          </CardTitle>
                          {completedLessons.includes(lesson.id) && (
                            <div className="flex items-center text-emerald-400">
                              <CheckCircle className="h-5 w-5 mr-2" />
                              <span className="text-sm font-medium">Completed</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <CardDescription className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {lesson.description}
                      </CardDescription>
                      
                      <div className="flex flex-wrap gap-3 mb-6">
                        <Badge variant="secondary" className="bg-gradient-to-r from-slate-600 to-slate-700 text-gray-200 px-3 py-1 text-sm font-medium">
                          ⏱️ {lesson.duration}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className={`px-3 py-1 text-sm font-medium text-white ${
                            lesson.difficulty === 'Beginner' ? 'bg-gradient-to-r from-emerald-500 to-green-600' :
                            lesson.difficulty === 'Intermediate' ? 'bg-gradient-to-r from-amber-500 to-orange-600' :
                            'bg-gradient-to-r from-red-500 to-pink-600'
                          }`}
                        >
                          📊 {lesson.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {lesson.topics.map((topic, topicIndex) => (
                          <Badge 
                            key={topicIndex} 
                            variant="outline" 
                            className="border-purple-500/30 text-purple-300 hover:border-purple-400 hover:text-purple-200 text-xs px-2 py-1 transition-colors duration-300"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[140px]">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105 px-6 py-3"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Start Lesson
                      </Button>
                      {!completedLessons.includes(lesson.id) && (
                        <Button 
                          size="lg"
                          variant="outline"
                          className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 px-6 py-3"
                          onClick={() => markLessonComplete(lesson.id)}
                        >
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Mark Complete
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-purple-500/20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="relative">
                  <Brain className="h-8 w-8 text-cyan-400" />
                  <Sparkles className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Code Academy
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                Empowering the next generation of developers to code smarter, faster, and more efficiently with cutting-edge AI assistance.
              </p>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
                  <Code className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
          
          {/* Raimon's Social Media Section */}
          <div className="border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 pt-8 mb-8">
            <div className="mt-12 sm:mt-16 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 sm:p-8">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">Connect with Raimon</h3>
                <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 icons social-grid">
                  <li>
                    <a href="https://x.com/raimonvibe/" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-110">
                      <i className="fab fa-x-twitter text-base sm:text-lg"></i>
                      <span className="sr-only">X</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/" target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110">
                      <i className="fab fa-youtube text-base sm:text-lg"></i>
                      <span className="sr-only">YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 hover:scale-110">
                      <i className="fab fa-tiktok text-base sm:text-lg"></i>
                      <span className="sr-only">TikTok</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110">
                      <i className="fab fa-instagram text-base sm:text-lg"></i>
                      <span className="sr-only">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@raimonvibe/" target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white hover:from-gray-600 hover:to-gray-700 transition-all duration-300 hover:scale-110">
                      <i className="fab fa-medium text-base sm:text-lg"></i>
                      <span className="sr-only">Medium</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/raimonvibe/" target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center text-white hover:from-gray-500 hover:to-gray-600 transition-all duration-300 hover:scale-110">
                      <i className="fab fa-github text-base sm:text-lg"></i>
                      <span className="sr-only">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/raimonvibe/" target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110">
                      <i className="fab fa-linkedin-in text-base sm:text-lg"></i>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61563450007849" target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110">
                      <i className="fab fa-facebook-f text-base sm:text-lg"></i>
                      <span className="sr-only">Facebook</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2024 AI Code Academy. All rights reserved. Built with ❤️ and AI.
              </p>

            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
