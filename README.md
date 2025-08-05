# 📝 Todo App

A modern, full-stack Todo application built with Next.js 14, featuring authentication, task management, and a beautiful responsive UI.

## ✨ Features

### 🔐 Authentication & User Management

- **NextAuth.js** integration with credentials provider
- User registration and login system
- Secure password hashing with bcrypt
- Protected routes with middleware
- User profile management with avatar upload

### 📋 Task Management

- Create, edit, and delete tasks
- Mark tasks as completed or important
- Set due dates and descriptions
- Task filtering and search functionality
- Bulk operations (delete completed tasks)
- Task organization with directories

### 🗂️ Directory System

- Create custom directories to organize tasks
- Assign tasks to specific directories
- Directory-based task filtering
- Hierarchical task organization

### 🎨 Modern UI/UX

- **Responsive design** - works on desktop, tablet, and mobile
- **Dark/Light theme** support with theme switching
- **Grid and List view** modes for tasks
- **Real-time search** and filtering
- **Pagination** for large task lists
- **Smooth animations** and transitions
- **Accessible** components with Radix UI

### 🛠️ Developer Experience

- **TypeScript** for type safety
- **Storybook** for component development
- **ESLint** for code quality
- **Vitest** for testing
- **Prisma** for database management
- **Redux Toolkit** for state management

## 🚀 Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend & Database

- **Next.js API Routes** - Backend API
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **NextAuth.js** - Authentication
- **bcryptjs** - Password hashing

### State Management & Tools

- **Redux Toolkit** - Global state management
- **React Context** - Local state management
- **Storybook** - Component development
- **Vitest** - Unit testing
- **Playwright** - E2E testing

## 📦 Installation

### Prerequisites

- Node.js 18+
- PostgreSQL database
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/todo_app"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   pnpm prisma generate

   # Run database migrations
   pnpm prisma db push
   ```

5. **Start Development Server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Database
pnpm prisma generate    # Generate Prisma client
pnpm prisma db push     # Push schema to database
pnpm prisma studio      # Open Prisma Studio

# Storybook
pnpm storybook         # Start Storybook
pnpm build-storybook   # Build Storybook

# Testing
pnpm test              # Run Vitest tests
```

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (app)/             # Protected app routes
│   ├── (auth)/            # Authentication routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   └── form-auth/        # Authentication forms
├── context/              # React Context providers
├── lib/                  # Utility libraries
├── redux/                # Redux store and slices
├── stories/              # Storybook stories
├── types/                # TypeScript type definitions
└── utils/                # Utility functions
```

## 🗄️ Database Schema

### Users

- Authentication and profile management
- One-to-many relationship with tasks and directories

### Tasks

- Core task data with title, description, due date
- Status flags (completed, important)
- Optional directory assignment
- User ownership

### Directories

- Custom task organization
- User-specific directories
- One-to-many relationship with tasks

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   ```env
   DATABASE_URL="your-postgresql-connection-string"
   NEXTAUTH_SECRET="your-random-secret-key"
   NEXTAUTH_URL="https://your-domain.vercel.app"
   NEXT_PUBLIC_SITE_URL="https://your-domain.vercel.app"
   ```
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Railway** - Easy PostgreSQL integration
- **Netlify** - Static site hosting
- **AWS/GCP/Azure** - Cloud platforms

## 🔧 Configuration

### Environment Variables

| Variable               | Description                  | Required |
| ---------------------- | ---------------------------- | -------- |
| `DATABASE_URL`         | PostgreSQL connection string | ✅       |
| `NEXTAUTH_SECRET`      | Secret key for NextAuth      | ✅       |
| `NEXTAUTH_URL`         | Your app's URL               | ✅       |
| `NEXT_PUBLIC_SITE_URL` | Public site URL              | ✅       |

### Database Providers

The app is configured for PostgreSQL but can be adapted for:

- **Supabase** - PostgreSQL with real-time features
- **Neon** - Serverless PostgreSQL
- **PlanetScale** - MySQL-compatible
- **Railway** - Easy PostgreSQL hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Use Storybook for component development
- Follow the existing code style
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Vercel** for the deployment platform
- **Radix UI** for accessible components
- **Tailwind CSS** for the utility-first approach
- **Prisma** for the excellent ORM

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
