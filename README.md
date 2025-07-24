# DevOpsCanvas-dashboard

**Property of DevOpsCanvas**

## 📋 Project Overview

DevOpsCanvas-dashboard is a modern, professional DevOps dashboard built with Next.js, React, and TypeScript. This comprehensive dashboard provides real-time monitoring, pipeline management, observability metrics, service catalog, and incident management capabilities for DevOps teams.

## ✨ Features

### 🔐 Authentication System
- **🚪 Professional Login Page**: Clean, branded login interface at `/login`
- **🔑 Form Validation**: Email/password validation with Zod schema
- **👤 User Session Management**: Persistent authentication with localStorage
- **🚪 Logout Functionality**: Secure sign-out with session cleanup
- **🛡️ Route Protection**: Optional protected route components
- **📱 Responsive Login**: Mobile-optimized authentication flow

### 🎛️ Dashboard Features
- **📊 Real-time Dashboard**: Live metrics and status indicators
- **🔄 Pipeline Management**: CI/CD pipeline monitoring and control
- **📈 Observability**: System health and performance metrics with charts
- **📦 Service Catalog**: Service discovery and management
- **🚨 Incident Management**: Track and manage system incidents
- **👥 User Profile**: User info display in sidebar with logout option

### 🎨 UI/UX Features
- **🌙 Dark/Light Theme**: Seamless theme switching with next-themes
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🔧 Collapsible Sidebar**: Toggle navigation with keyboard shortcuts (Ctrl+B)
- **⚡ Fast Performance**: Built with Next.js 15 and React 19
- **🎭 Modern UI**: Glassmorphism effects and smooth animations
- **♿ Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Technology Stack

### Core Framework
- **Next.js**: 15.3.2 (React framework with App Router)
- **React**: 19.0.0 (UI library)
- **TypeScript**: 5.7.2 (Type safety)

### Styling & UI
- **Tailwind CSS**: 3.4.1 (Utility-first CSS framework)
- **Tailwind CSS Animate**: 1.0.7 (Animation utilities)
- **Tailwind Typography**: 0.5.15 (Typography plugin)
- **Class Variance Authority**: 0.7.1 (Component variants)
- **Tailwind Merge**: 2.5.2 (Class merging utility)
- **CLSX**: 2.1.1 (Conditional classes)

### UI Components
- **Radix UI**: Complete set of accessible UI primitives
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog
  - Dropdown Menu, Hover Card, Label, Navigation Menu
  - Popover, Progress, Radio Group, Scroll Area
  - Select, Separator, Slider, Switch, Tabs
  - Toast, Toggle, Tooltip, and more
- **Lucide React**: 0.511.0 (Icon library)
- **Sonner**: 1.5.0 (Toast notifications)
- **CMDK**: 1.0.0 (Command palette)
- **Vaul**: 0.9.3 (Drawer component)

### Data & Charts
- **Chart.js**: 4.4.9 (Chart library)
- **React Chart.js 2**: 5.3.0 (React wrapper for Chart.js)
- **Recharts**: 2.12.7 (Alternative chart library)
- **TanStack React Query**: 5.77.2 (Data fetching and caching)

### Forms & Validation
- **React Hook Form**: 7.53.0 (Form handling)
- **Hookform Resolvers**: 3.9.0 (Form validation resolvers)
- **Zod**: 3.23.8 (Schema validation)
- **Input OTP**: 1.2.4 (OTP input component)

### Date & Time
- **Date-fns**: 4.1.0 (Date utility library)
- **React Date Range**: 2.0.1 (Date range picker)
- **React Day Picker**: 8.10.1 (Calendar component)

### Additional Libraries
- **Next Themes**: 0.3.0 (Theme management)
- **Embla Carousel React**: 8.3.0 (Carousel component)
- **React Resizable Panels**: 2.1.3 (Resizable layout panels)

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **pnpm**: Package manager (recommended) or npm/yarn
- **Git**: For version control

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd devopscanvas-dashboard
   ```

2. **Install pnpm (if not already installed)**
   ```bash
   # Using npm
   npm install -g pnpm
   
   # Using curl (Unix/macOS)
   curl -fsSL https://get.pnpm.io/install.sh | sh
   
   # Using PowerShell (Windows)
   iwr https://get.pnpm.io/install.ps1 -useb | iex
   ```

3. **Install Dependencies**
   ```bash
   pnpm install
   ```

4. **Start Development Server**
   ```bash
   pnpm dev
   ```

5. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - The dashboard should load with the DevOpsCanvas interface

### Quick Start with Authentication

1. **Access Login Page**
   ```
   http://localhost:3000/login
   ```

2. **Use Demo Credentials**
   - **Email**: `admin@demo.com`
   - **Password**: `admin123`

3. **Test Features**
   - Login with validation
   - View user profile in sidebar
   - Test logout functionality
   - Experience responsive design

### Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## 🏗️ Project Structure

```
devopscanvas-dashboard/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Dashboard page
│   ├── pipeline/                # Pipeline management
│   ├── observability/           # Observability metrics
│   ├── catalog/                 # Service catalog
│   └── incidents/               # Incident management
├── src/
│   ├── components/              # React components
│   │   ├── common/              # Reusable components
│   │   ├── dashboard/           # Dashboard-specific components
│   │   ├── providers/           # Context providers
│   │   └── ui/                  # UI component library
│   ├── constants/               # Application constants
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility libraries
│   ├── pages/                   # Legacy page components
│   ├── services/                # API services
│   └── utils/                   # Utility functions
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

2. **Configure Build Settings**
   ```bash
   # Build command
   pnpm build
   
   # Output directory
   .next
   
   # Install command
   pnpm install
   ```

3. **Deploy**
   - Click "Deploy" and wait for the build to complete
   - Your dashboard will be available at the provided URL

### Other Platforms

**Netlify:**
```bash
# Build command
pnpm build

# Publish directory
.next
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# API Configuration
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_APP_ENV=production

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 🔐 Authentication System

### Demo Credentials
- **Email**: `admin@demo.com`
- **Password**: `admin123`

### Features
- **Professional Login Page**: Accessible at `/login` with branded design
- **Form Validation**: Real-time validation with Zod schema
- **Session Management**: Persistent sessions using localStorage
- **User Profile Display**: User info in sidebar with avatar
- **Secure Logout**: Complete session cleanup on sign out
- **Route Protection**: Optional protected route wrapper component

### Authentication Flow
1. **Login**: Navigate to `/login` and enter credentials
2. **Validation**: Form validates email format and password requirements
3. **Authentication**: Simulated API call with loading states
4. **Session**: User data stored in localStorage for persistence
5. **Dashboard Access**: Automatic redirect to dashboard on success
6. **Logout**: Click "Sign Out" in sidebar to clear session

### File Structure
```
app/login/
└── page.tsx                     # Login page route
src/
├── components/
│   ├── login/
│   │   └── LoginForm.tsx        # Login form component
│   └── auth/
│       └── ProtectedRoute.tsx   # Route protection wrapper
└── contexts/
    └── AuthContext.tsx          # Authentication context
```

## 🔧 Recent Improvements

### ✅ Hydration Issues Fixed
- **useIsMobile Hook**: Fixed server/client state mismatch
- **Sidebar Cookie Access**: Added proper client-side checks
- **Theme Provider**: Implemented mounting state management
- **Consistent SSR**: Removed unnecessary `suppressHydrationWarning`

### ✅ Performance Enhancements
- **Faster Build Times**: Optimized component loading
- **Reduced Bundle Size**: Eliminated unused dependencies
- **Better Caching**: Improved Next.js caching strategies

### ✅ UI/UX Improvements
- **Enhanced Sidebar**: User profile and logout functionality
- **Better Mobile Experience**: Improved responsive behavior
- **Loading States**: Better user feedback during operations
- **Error Handling**: More informative error messages

## 🎨 Customization

### Theming

The dashboard uses CSS custom properties for theming. Update `app/globals.css` to customize colors:

```css
:root {
  --background: 210 22% 9%;
  --foreground: 210 5% 85%;
  --primary: 210 100% 50%;
  /* Add your custom colors */
}
```

### Authentication Customization

To modify authentication behavior, edit `src/contexts/AuthContext.tsx`:

```typescript
// Change demo credentials
if (email === 'your-email@domain.com' && password === 'your-password') {
  // Login successful
}

// Modify user data structure
const userData = {
  email: email,
  name: 'Your User Name',
  role: 'admin', // Add custom fields
  avatar: '/path/to/avatar.png'
}
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update navigation in `src/constants/dashboard.ts`
4. Optionally wrap with `ProtectedRoute` for authentication

## 🤝 Contributing

This project is property of **DevOpsCanvas**. For internal development:

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## 📄 License

© 2024 DevOpsCanvas. All rights reserved.

## 🆘 Support

For support and questions, please contact the DevOpsCanvas development team.

---

**Made with ❤️ by DevOpsCanvas**
