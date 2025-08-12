# Baaz Jhaj's Portfolio Website

A modern, responsive portfolio showcasing AI engineering projects, built with Next.js 15 and TypeScript.

## About This Project

This is my personal portfolio website where I showcase my work in AI engineering, edge AI systems, and machine learning deployment. The site features detailed project pages with custom animations, responsive design, and optimized performance.

### Featured Projects

- **DistillKit** - PyTorch toolkit for model optimization with knowledge distillation and quantization
- **SmokeNet** - Edge AI system for early wildfire smoke detection in remote environments  
- **Translatica** - Speech-to-speech translation platform preserving voice and tone
- **SelfAlign** - Framework for transparent, user-controlled AI alignment

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image component
- **SEO**: Structured data, OpenGraph, and Twitter Cards

## Key Features

- ✨ **Custom Animations** - Smooth, interactive visualizations for complex AI concepts
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Performance Optimized** - Fast loading with Next.js optimization
- 🎨 **Modern Design** - Clean, professional aesthetic with dark theme
- 🔍 **SEO Optimized** - Comprehensive metadata and structured data
- ♿ **Accessible** - ARIA labels and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bjhaj/personalwebsite.git
cd personalwebsite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── projects/          # Project showcase pages
│   │   ├── distillkit/    # DistillKit project detail
│   │   ├── selfalign/     # SelfAlign project detail
│   │   ├── smokenet/      # SmokeNet project detail
│   │   └── translatica/   # Translatica project detail
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ConditionalNavigation.tsx
│   └── Navigation.tsx
public/
├── images/               # Project images and assets
└── [static files]        # Favicons, PDFs, etc.
```

## Custom Animations

The site features several custom CSS animations and React components:

- **Knowledge Distillation Visualization** - SVG-based animation showing AI model compression
- **Results Charts** - Dynamic bar charts comparing model performance
- **Cinematic Transitions** - Smooth page transitions and reveals
- **Interactive Elements** - Hover effects and micro-interactions

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Projects

1. Create a new directory in `src/app/projects/[project-name]/`
2. Add `page.tsx` with project details
3. Update the projects array in `src/app/projects/page.tsx`
4. Add project banner image to `public/images/`

## Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bjhaj/personalwebsite)

## Contact

- **Email**: baazjhaj@gmail.com
- **GitHub**: [@bjhaj](https://github.com/bjhaj)
- **LinkedIn**: [baaz-jhaj](https://www.linkedin.com/in/baaz-jhaj/)
- **Website**: [baazjhaj.com](https://baazjhaj.com)

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ by Baaz Jhaj*