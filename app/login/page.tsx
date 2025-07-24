import { LoginForm } from '@/components/login/LoginForm'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image
                src="/DevOpsCanvasLogo.png"
                alt="DevOps Canvas Logo"
                width={120}
                height={120}
                className="h-24 w-auto drop-shadow-lg"
                priority
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 -z-10 h-24 w-24 mx-auto bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-xl" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
            Welcome to DevOps Canvas
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Login Form */}
        <LoginForm />
        
        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 DevOps Canvas. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
