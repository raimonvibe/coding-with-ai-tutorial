import { useState } from 'react'
import { Brain, Code, Zap, Menu, X, BookOpen, Sparkles, Star, Play, Target } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Textarea } from './components/ui/textarea'
import { Progress } from './components/ui/progress'

import './App.css'

function App() {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [lessonDialogOpen, setLessonDialogOpen] = useState(false)
  const [userSolution, setUserSolution] = useState('')
  const [feedback, setFeedback] = useState('')
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const lessons = [
    {
      id: 1,
      title: "Solving Error Messages Step by Step",
      description: "You solve error messages step by step by copying error codes and asking AI how to fix them. This way you also immediately learn what the problem was.",
      topics: ["Error codes", "Debugging", "Learning from errors"]
    },
    {
      id: 2,
      title: "Generate Basic HTML Structure",
      description: "You let AI generate a basic HTML structure, with head and body, so you can start building a webpage faster.",
      topics: ["HTML structure", "Quick start", "Web development"]
    },
    {
      id: 3,
      title: "Analyze Screenshots with AI",
      description: "You take screenshots of error messages or explanations in web services, and ask AI what's going on and what you should do. This gives you targeted help.",
      topics: ["Visual debugging", "Screenshot analysis", "Targeted help"]
    },
    {
      id: 4,
      title: "Navigate Complex Tools",
      description: "With complex tools like the Google Cloud Console, you navigate with AI's help. You tell where you are and ask what your next step should be to find the right settings.",
      topics: ["Cloud platforms", "Navigation help", "Tool mastery"]
    },
    {
      id: 5,
      title: "Query Syntax and Commands",
      description: "When you don't know the right syntax - for example in the terminal or when writing code - you ask AI for the right commands or examples.",
      topics: ["Syntax help", "Terminal commands", "Code examples"]
    },
    {
      id: 6,
      title: "AI as Learning Partner and Guide",
      description: "You don't just use AI as a problem solver, but also as a learning partner, guide and starter motor in your projects. Really an efficient and smart workflow.",
      topics: ["Workflow optimization", "Learning partner", "Efficient working"]
    }
  ]

  const progressPercentage = (completedLessons.length / lessons.length) * 100

  const errorExample = {
    title: "Missing Closing Tag Error",
    errorMessage: "Error: Unclosed element 'div' at line 5",
    brokenCode: `<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to my site</h1>
        <p>This is some content</p>
    <!-- Missing closing </div> tag -->
</body>
</html>`,
    correctCode: `<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to my site</h1>
        <p>This is some content</p>
    </div>
</body>
</html>`,
    steps: [
      "1. Copy the error message: 'Error: Unclosed element 'div' at line 5'",
      "2. Ask AI: 'I'm getting this HTML error: [paste error]. Here's my code: [paste code]. How do I fix this?'",
      "3. AI will identify the missing closing tag",
      "4. Add the missing </div> tag before </body>",
      "5. Test your fix to ensure the error is resolved"
    ]
  }

  const checkSolution = (solution: string) => {
    const normalizedSolution = solution.toLowerCase().replace(/\s+/g, ' ').trim()
    const hasClosingDiv = normalizedSolution.includes('</div>')
    const hasProperStructure = normalizedSolution.includes('<div') && normalizedSolution.includes('</div>')
    
    if (hasClosingDiv && hasProperStructure) {
      setFeedback('✅ Correct! You successfully added the missing closing </div> tag. Great job following the AI-assisted debugging process!')
    } else if (hasClosingDiv) {
      setFeedback('✅ Good! You added the closing </div> tag. Make sure it\'s in the right position before </body>.')
    } else {
      setFeedback('❌ Not quite right. Look for the missing closing tag. Hint: Check what element is opened but not closed.')
    }
  }

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
                AI Tips Academy
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tutorials" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Tutorials</a>
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
              <span className="text-sm font-medium text-cyan-300">The Future of Programming with AI</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Smart AI Tips
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              for Programmers
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover how to use AI effectively in programming. Our practical tips teach you how to use artificial intelligence to become a 
            <span className="text-cyan-400 font-semibold"> 10x more efficient</span> and 
            <span className="text-emerald-400 font-semibold"> effective programmer</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg">
              <BookOpen className="mr-3 h-6 w-6" />
              View Tips
            </Button>
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
                      {completedLessons.length * 100}
                    </div>
                    <div className="text-sm text-gray-400">Score</div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <p className="text-gray-400">Keep learning to unlock your full potential!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Use AI in Programming?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the revolutionary approach that's transforming how developers learn and build.
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

      {/* Tutorials Section */}
      <section id="tutorials" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Smart AI Tips for Programmers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how to use AI in multiple smart ways when programming to work more efficiently
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
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-cyan-500 to-purple-600 text-white">
                          {lesson.id}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-white text-xl lg:text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                            {lesson.title}
                          </CardTitle>
                          {lesson.id === 1 && (
                            <div className="flex gap-2 mt-2">
                              <Dialog open={lessonDialogOpen} onOpenChange={setLessonDialogOpen}>
                                <DialogTrigger asChild>
                                  <Button 
                                    size="sm" 
                                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                                  >
                                    <Play className="mr-2 h-4 w-4" />
                                    Start Lesson
                                  </Button>
                                </DialogTrigger>
                              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 to-slate-800 border-purple-500/30 text-white">
                                <DialogHeader>
                                  <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    Interactive Lesson: {lesson.title}
                                  </DialogTitle>
                                </DialogHeader>
                                
                                <div className="grid lg:grid-cols-2 gap-6 mt-6">
                                  <div className="space-y-6">
                                    <div className="bg-slate-800/50 rounded-lg p-4 border border-red-500/30">
                                      <h3 className="text-lg font-semibold text-red-400 mb-3">
                                        {errorExample.title}
                                      </h3>
                                      <div className="bg-red-900/20 rounded p-3 mb-4">
                                        <code className="text-red-300 text-sm">
                                          {errorExample.errorMessage}
                                        </code>
                                      </div>
                                      <div className="bg-slate-900/50 rounded p-3">
                                        <h4 className="text-sm font-medium text-gray-300 mb-2">Broken Code:</h4>
                                        <pre className="text-xs text-gray-300 overflow-x-auto">
                                          <code>{errorExample.brokenCode}</code>
                                        </pre>
                                      </div>
                                    </div>
                                    
                                    <div className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/30">
                                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                                        Step-by-Step Solution Process
                                      </h3>
                                      <ol className="space-y-2">
                                        {errorExample.steps.map((step, index) => (
                                          <li key={index} className="text-sm text-gray-300 leading-relaxed">
                                            {step}
                                          </li>
                                        ))}
                                      </ol>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-6">
                                    <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/30">
                                      <h3 className="text-lg font-semibold text-purple-400 mb-3">
                                        Your Solution
                                      </h3>
                                      <p className="text-sm text-gray-300 mb-4">
                                        Fix the HTML code by adding the missing closing tag. Paste your corrected code below:
                                      </p>
                                      <Textarea
                                        value={userSolution}
                                        onChange={(e) => setUserSolution(e.target.value)}
                                        placeholder="Paste your corrected HTML code here..."
                                        className="min-h-[200px] bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 font-mono text-sm"
                                      />
                                      <div className="flex gap-3 mt-4">
                                        <Button 
                                          onClick={() => checkSolution(userSolution)}
                                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                                        >
                                          Check Solution
                                        </Button>
                                        <Button 
                                          variant="outline"
                                          onClick={() => {
                                            setUserSolution('')
                                            setFeedback('')
                                          }}
                                          className="border-slate-600 text-gray-300 hover:bg-slate-700"
                                        >
                                          Reset
                                        </Button>
                                      </div>
                                      
                                      {feedback && (
                                        <div className={`mt-4 p-3 rounded-lg ${
                                          feedback.startsWith('✅') 
                                            ? 'bg-green-900/20 border border-green-500/30' 
                                            : 'bg-yellow-900/20 border border-yellow-500/30'
                                        }`}>
                                          <p className={`text-sm ${
                                            feedback.startsWith('✅') ? 'text-green-300' : 'text-yellow-300'
                                          }`}>
                                            {feedback}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                    
                                    <div className="bg-slate-800/50 rounded-lg p-4 border border-emerald-500/30">
                                      <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                                        Expected Result
                                      </h3>
                                      <div className="bg-slate-900/50 rounded p-3">
                                        <pre className="text-xs text-gray-300 overflow-x-auto">
                                          <code>{errorExample.correctCode}</code>
                                        </pre>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </DialogContent>
                              </Dialog>
                              <Button 
                                size="sm" 
                                onClick={() => {
                                  if (!completedLessons.includes(lesson.id)) {
                                    setCompletedLessons([...completedLessons, lesson.id])
                                  }
                                }}
                                className={`${
                                  completedLessons.includes(lesson.id) 
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
                                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                                } text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                                disabled={completedLessons.includes(lesson.id)}
                              >
                                {completedLessons.includes(lesson.id) ? '✅ Completed' : 'Complete Lesson'}
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <CardDescription className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {lesson.description}
                      </CardDescription>
                      

                      
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
                  AI Tips Academy
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
                &copy; {new Date().getFullYear()} AI Tips Academy. All rights reserved. Built with ❤️ by Raimon @ <a href="https://raimonvibe.eu" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">raimonvibe</a>.
              </p>

            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
