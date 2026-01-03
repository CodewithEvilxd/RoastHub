# 🔥 RoastHub - Resume Roasting Platform

> A fun, community-driven platform where developers share their resumes and get constructive feedback through "roasts" in a comic-book style interface.

## ✨ Features

### 🎯 **Core Functionality**
- **Resume Upload & Sharing** - Upload PDFs/images up to 10MB
- **Community Roasts** - Get honest feedback on your resume
- **Like System** - Show appreciation for great resumes
- **Comment Threads** - Nested discussions with replies
- **Vote on Comments** - Upvote/downvote feedback quality

### 🎨 **Unique Design**
- **Comic Book Aesthetic** - Bold borders, drop shadows, vibrant colors
- **Mobile-First** - Responsive design that works on all devices
- **Smooth Animations** - Hover effects and transitions
- **Dark/Light Mode** - Coming soon

### 🔐 **Security & Auth**
- **Google OAuth** - Secure authentication via NextAuth.js
- **Row Level Security** - Database-level access control
- **File Validation** - Type and size restrictions
- **User Profiles** - Personal dashboards and stats

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - App Router, Server Components
- **React 19** - Latest React features
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library

### **Backend**
- **Supabase** - PostgreSQL database + Auth + Storage
- **NextAuth.js** - Authentication
- **Row Level Security** - Data protection

### **Dev Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm package manager
- Supabase account

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/codewithevilxd/roasthub.git
   cd roasthub
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```

   Add your keys:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-here

   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret

   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

4. **Database Setup**
   - Create a new Supabase project
   - Run the SQL from `supabase-schema.sql` in your Supabase SQL editor

5. **Start Development**
   ```bash
   pnpm dev
   ```

6. **Open** [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
roasthub/
├── app/                          # Next.js App Router
│   ├── (roasthub)/              # Main routes
│   │   ├── page.tsx             # Home page
│   │   ├── profile/             # User profile
│   │   ├── resume/[id]/         # Resume details
│   │   └── upload/              # Upload page
│   ├── api/                     # API routes
│   │   ├── auth/                # NextAuth
│   │   ├── resumes/             # Resume CRUD
│   │   ├── comments/            # Comments
│   │   └── upload/              # File upload
│   ├── globals.css              # Global styles
│   └── layout.tsx               # Root layout
├── components/                  # React components
│   ├── ui/                      # shadcn/ui components
│   ├── footer.tsx               # Site footer
│   ├── navbar.tsx               # Navigation
│   └── *-modal.tsx              # Modal components
├── lib/                         # Utilities
│   ├── store/                   # State management
│   ├── api.ts                   # API client
│   ├── auth.ts                  # Auth config
│   └── utils.ts                 # Helper functions
├── public/                      # Static assets
├── types/                       # TypeScript types
└── supabase-schema.sql          # Database schema
```

## 🎨 Design Philosophy

RoastHub embraces a **comic book aesthetic** to make resume feedback less intimidating:

- **Bold Borders** - 3px+ thick borders everywhere
- **Drop Shadows** - Consistent shadow patterns
- **Vibrant Colors** - Carefully chosen palette
- **Typography** - Bangers + Kalam fonts
- **Animations** - Subtle hover effects

## 🔧 API Overview

### Authentication
```typescript
GET/POST /api/auth/[...nextauth]
```

### Resumes
```typescript
GET    /api/resumes           # List resumes
POST   /api/resumes           # Create resume
GET    /api/resumes/[id]      # Get resume
PUT    /api/resumes/[id]      # Update resume
DELETE /api/resumes/[id]      # Delete resume
POST   /api/resumes/[id]/like # Toggle like
```

### Comments
```typescript
POST   /api/resumes/[id]/comments  # Add comment
GET    /api/comments/[id]          # Get comment
PUT    /api/comments/[id]          # Update comment
DELETE /api/comments/[id]          # Delete comment
POST   /api/comments/[id]/vote     # Vote on comment
```

## 🚀 Deployment

### Vercel (Recommended)
1. Fork this repo
2. Connect to Vercel
3. Add environment variables
4. Deploy!

### Manual Deployment
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a PR

### Guidelines
- Use TypeScript for all new code
- Follow existing code style
- Test your changes
- Update documentation

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Credits

- **Built by** [Nishant Dev](https://nishantdev.space)
- **Framework** [Next.js](https://nextjs.org/)
- **Database** [Supabase](https://supabase.com/)
- **UI** [shadcn/ui](https://ui.shadcn.com/)
- **Icons** [React Icons](https://react-icons.github.io/react-icons/)

## 📞 Contact

- **Portfolio:** [nishantdev.space](https://nishantdev.space)
- **GitHub:** [@codewithevilxd](https://github.com/codewithevilxd)

---

**Made with 🔥 by Nishant Dev**
