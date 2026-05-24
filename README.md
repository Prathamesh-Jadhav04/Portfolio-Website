# Cyberpunk Mission Control Portfolio

An immersive, highly interactive, and hardware-accelerated personal portfolio website built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**. 

Designed to mimic a high-tech hacker terminal and "Mission Control" dashboard, this portfolio goes beyond a static website to deliver a cinematic user experience featuring custom audio, real-time GitHub repository fetching, and an integrated Admin panel for live edits.

![Portfolio Preview](/public/bg-city-2.png)

## 🚀 Key Features

### 🎬 Cinematic UI & Aesthetics
- **Hardware-Accelerated Parallax:** A buttery smooth 60fps parallax background powered by CSS `translate3d`, keeping DOM rendering lightning fast.
- **Global CRT Scanlines:** Authentic retro monitor scanline effects and vignette filters that tie the visual aesthetic together.
- **Dynamic Spotlights & Glowing Nodes:** Project cards feature pixel-perfect mouse-tracking radial spotlights. Skills and Experience sections utilize staggered, glowing terminal nodes and vertical data streams.
- **Hacker Text Scramble:** Cinematic decoding effects on titles during page load, providing an authentic terminal boot-up sequence.

### 🎧 Immersive Audio System
- **Gatekeeper Intro:** A `SYSTEM_LOCKED` overlay bypasses browser autoplay restrictions, unlocking an immersive audio context upon user entry.
- **Global Sound Effects:** Mechanical keystroke sounds trigger globally on all input fields. Subtle synthesized click and hover sounds are mapped across interactive UI elements.

### ⚙️ Live GitHub Integration & Overrides
- **Real-Time Data:** Projects are fetched directly from the GitHub API, automatically sorting your repositories by stars and recent commits.
- **Admin Mission Control:** A secure `/admin` route (Passcode: `admin`) allows you to hide specific GitHub repositories, override project titles/descriptions, and directly upload your `resume.pdf`—all without pushing new code. Data is saved locally to `lib/data.json`.

### 🤖 Prathamesh.AI (Cyberpunk Chatbot)
- Integrated backend API route ready to hook into Google's Gemini LLM. Designed to act as an edgy, intelligent assistant that answers recruiter questions based purely on your portfolio data.

### 🖱️ Custom Framer Motion Cursor
- A dual-layered custom cursor featuring an exact-tracking inner dot and a smooth-lerping outer diamond that morphs when hovering over interactive elements or vanishes entirely when typing.

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + Custom CSS Variables
- **Animations:** Framer Motion & CSS Keyframes
- **Icons:** Lucide React
- **Language:** TypeScript
- **State/Data:** Local JSON datastore (`lib/data.json`) & GitHub API

## 📦 Local Development

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Used for the Prathamesh.AI terminal chatbot
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Main Site: [http://localhost:3000](http://localhost:3000)
   - Mission Control: [http://localhost:3000/admin](http://localhost:3000/admin) (Passcode: `admin`)

## 📂 Project Structure

- `/app`: Next.js App Router endpoints (`/`, `/admin`, `/api/*`).
- `/components`: Reusable, animated UI elements (`HeroSection`, `TiltCard`, `CustomCursor`, `PremiumBackground`, etc.).
- `/public`: Static assets including parallax background images and the user-uploaded `resume.pdf`.
- `/lib`: Internal configurations and the `data.json` datastore for admin overrides.
- `/utils`: Helper scripts, including the Web Audio API wrappers (`sounds.ts`).

## 🖥️ Deploying to Production

This project is fully optimized and ready to be deployed on platforms like **Vercel** or **Netlify**. 

*Important Hosting Note:* The Admin "Mission Control" relies on local JSON file mutations (`fs.writeFileSync`) for saving overrides. Serverless environments like Vercel have a read-only filesystem in production. For a seamless production Admin panel, you will need to swap `lib/data.json` read/writes with a hosted database (like Vercel KV, Supabase, or MongoDB). 

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
