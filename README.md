# Human Trace Lab MVP (Euman)

A public-facing MVP landing page for Human Trace Lab, a verified human reasoning dataset platform.

## 🚀 Features

- **Interactive Demo Section**: 3 engaging demos showing AI vs Human differentiation
  - Flip card comparison
  - "Spot the human" game
  - Hanover-style scanning animation with 50 human vs 50 AI traces
- **Dual Audience Forms**: Separate forms for Contributors and Labs/Enterprises with inline expansion
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Fully responsive with Tailwind CSS
- **FastAPI Backend**: Type-safe Python backend with Supabase integration

## 🛠 Tech Stack

### Frontend
- **Next.js 15** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React** for UI components

### Backend
- **FastAPI** for API endpoints
- **Supabase** for database
- **Python 3.9+**

## 📁 Project Structure

```
human-trace-lab/
├── frontend/                 # Next.js React app
│   ├── src/
│   │   ├── app/             # Next.js app router
│   │   │   ├── globals.css  # Global styles + 3D flip card CSS
│   │   │   └── page.tsx     # Main landing page
│   │   └── components/      # Reusable React components
│   │       ├── Header.tsx
│   │       ├── HeroSection.tsx
│   │       ├── DemoShowcase.tsx
│   │       ├── ContentSections.tsx
│   │       ├── SplitFormsSection.tsx
│   │       └── Footer.tsx
├── backend/                 # FastAPI backend
│   ├── main.py             # FastAPI app
│   ├── requirements.txt    # Python dependencies
│   ├── schema.sql         # Database schema
│   └── .env.example       # Environment variables template
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- Supabase account

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

### Backend Setup

1. Install Python dependencies:
```bash
cd backend
pip install -r requirements.txt
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your Supabase credentials
```

3. Set up Supabase database:
- Create a new Supabase project
- Run the SQL from `schema.sql` in the Supabase SQL Editor
- Copy your project URL and anon key to `.env`

4. Start FastAPI server:
```bash
python main.py
```

The API will be available at [http://localhost:8000](http://localhost:8000)

## 📊 Database Schema

```sql
-- Contributors table
CREATE TABLE contributors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  background VARCHAR(100) NOT NULL,
  motivation TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Labs/Enterprise table  
CREATE TABLE labs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  industry VARCHAR(255) NOT NULL,
  dataset_needs TEXT NOT NULL,
  budget VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🎨 Key Components

### Header
Sticky navigation bar with smooth animations and responsive design.

### Hero Section
Main value proposition with call-to-action buttons that smoothly scroll to relevant sections.

### Demo Showcase
Three interactive demonstrations:
1. **AI vs Human Flip Card**: Click to see reasoning differences
2. **Spot the Human Game**: Hover to reveal labels
3. **Authenticity Scan**: Auto-cycling traces with scanning animation

### Content Sections
- **Problem**: Why synthetic data is polluting AI
- **Solution**: Benefits of verified human data
- **Research**: Expert quotes and citations
- **Data Samples**: JSONL format, visualizations, and quality metrics

### Split Forms Section
Two-panel layout with expandable forms:
- **Contributors**: For individuals wanting to contribute
- **Labs/Enterprise**: For organizations needing datasets

### Footer
Simple footer with links and company information.

## 🔧 API Endpoints

- `POST /submit-contributor` - Submit contributor form
- `POST /submit-lab` - Submit lab/enterprise form
- `GET /` - Health check

## 🚢 Deployment

### Frontend (Vercel)
1. Connect your GitHub repo to Vercel
2. Deploy with default Next.js settings

### Backend (Railway/Render)
1. Connect your repo to Railway or Render
2. Set environment variables
3. Deploy Python application

## 📝 Environment Variables

Create `.env` in the backend directory:
```
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## 🧪 Development Notes

- The frontend uses client-side components for interactivity
- Forms submit to the FastAPI backend
- Database operations use Supabase client
- All animations use Framer Motion
- Responsive design with mobile-first approach

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
