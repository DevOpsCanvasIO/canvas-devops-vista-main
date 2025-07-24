import { LoginForm } from '@/components/login/LoginForm'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/DevOpsCanvasLogo.png"
              alt="DevOps Canvas Logo"
              width={160}
              height={160}
              className="w-40 h-auto mx-auto mb-6 drop-shadow-lg"
              priority
            />
          </div>
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
