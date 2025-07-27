"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Zap, Shield, Rocket, Layers, Settings } from "lucide-react"

export default function Component() {
  const handleDownload = () => {
    // Redirect to GitHub releases page
    window.open("https://github.com/Executor-GG/vxpe-gg/releases/tag/mains", "_blank")
  }

  const products = [
    {
      name: "Multilauncher",
      description: "Advanced multi-platform launcher with enhanced features and customization options.",
      icon: Layers,
      fileName: "multilauncher-v2.1.exe",
      features: ["Multi-platform support", "Custom themes", "Advanced scripting"],
    },
    {
      name: "Quatix",
      description: "High-performance executor with cutting-edge technology and superior reliability.",
      icon: Settings,
      fileName: "quatix-pro-v1.8.exe",
      features: ["Lightning fast execution", "Enhanced security", "Premium features"],
    },
    {
      name: "VxpeCore",
      description: "Core execution engine with maximum compatibility and stability.",
      icon: Zap,
      fileName: "vxpecore-v3.0.exe",
      features: ["Universal compatibility", "Rock-solid stability", "Lightweight design"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center border-b border-gray-800/50 backdrop-blur-sm bg-black/20">
        <div className="flex items-center justify-center">
          <Zap className="h-8 w-8 text-purple-300" />
          <span className="ml-2 text-2xl font-bold text-white">vxpe.gg</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#products" className="text-sm font-medium text-purple-200 hover:text-white transition-colors">
            Products
          </a>
          <a href="#features" className="text-sm font-medium text-purple-200 hover:text-white transition-colors">
            Features
          </a>
          <a href="#download" className="text-sm font-medium text-purple-200 hover:text-white transition-colors">
            Download
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative bg-black/10">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-2xl opacity-5"></div>

          {/* Animated particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-30 animation-delay-500"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-300 rounded-full animate-pulse opacity-20 animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-25 animation-delay-1500"></div>
          <div className="absolute bottom-1/4 right-20 w-1 h-1 bg-pink-300 rounded-full animate-pulse opacity-30 animation-delay-2000"></div>

          {/* Moving gradient lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-20 animate-pulse animation-delay-1000"></div>

          {/* Floating geometric shapes */}
          <div
            className="absolute top-1/4 left-10 w-4 h-4 border border-purple-400 rotate-45 animate-spin opacity-10"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-16 w-6 h-6 border border-pink-400 rotate-12 animate-spin opacity-10"
            style={{ animationDuration: "25s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/3 w-3 h-3 border border-purple-300 animate-spin opacity-15"
            style={{ animationDuration: "15s" }}
          ></div>
        </div>

        <section className="relative z-10 w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-black/40 backdrop-blur-sm px-4 py-2 text-sm border border-purple-500/50">
                  <span className="text-purple-200">🚀 Next Generation Technology</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Better{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Executors
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-purple-200 md:text-xl lg:text-2xl">
                  Experience the most advanced and reliable execution platform. Built for performance, designed for
                  excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-400 text-purple-200 hover:bg-purple-600/30 hover:text-white hover:border-purple-300 px-8 py-6 text-lg backdrop-blur-sm bg-black/20 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="products"
          className="relative z-10 w-full py-12 md:py-24 lg:py-32 bg-black/40 backdrop-blur-sm border-y border-gray-800/50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Our Products</h2>
              <p className="max-w-[900px] text-purple-200 md:text-xl">
                Choose from our premium collection of execution tools designed for different needs.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2">
              {products.map((product, index) => {
                const IconComponent = product.icon
                return (
                  <Card
                    key={index}
                    className="bg-black/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <IconComponent className="h-16 w-16 text-purple-400" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-white">{product.name}</CardTitle>
                      <CardDescription className="text-purple-200 text-lg">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-purple-200">
                            <Zap className="h-4 w-4 text-purple-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        onClick={handleDownload}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 transition-all duration-300 hover:scale-105"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download {product.name}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="relative z-10 w-full py-12 md:py-24 lg:py-32 bg-black/60 backdrop-blur-sm border-y border-gray-800/50"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Why Choose VXPE?
              </h2>
              <p className="max-w-[900px] text-purple-200 md:text-xl">
                Built with cutting-edge technology for unmatched performance and reliability.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <Shield className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Secure & Safe</h3>
                <p className="text-purple-200">
                  Advanced security measures to keep your experience protected and worry-free.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <Rocket className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Lightning Fast</h3>
                <p className="text-purple-200">Optimized for speed and performance with minimal resource usage.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <Zap className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Powerful Features</h3>
                <p className="text-purple-200">Comprehensive toolset with advanced capabilities for all your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="relative z-10 w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[600px] text-purple-200 md:text-xl">
                  Join thousands of users who trust VXPE for their execution needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {products.map((product, index) => (
                  <Button
                    key={index}
                    onClick={handleDownload}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download {product.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800/50 backdrop-blur-sm bg-black/40">
        <p className="text-xs text-purple-300">© 2024 vxpe.gg. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs text-purple-300 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-xs text-purple-300 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#support" className="text-xs text-purple-300 hover:text-white transition-colors">
            Support
          </a>
        </nav>
      </footer>
      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
