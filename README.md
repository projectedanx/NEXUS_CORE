<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Nexus Core App

Welcome to the Nexus Core App repository. This is an advanced AI Studio template configured with React, Vite, and Tailwind CSS.

## Purpose

The application is a showcase of building stylized user interfaces using functional React components. It renders simulated data streams, network nodes, and telemetry visualizations with a cyberpunk-inspired aesthetic. This project serves as a starting point for developers who want to integrate AI capabilities securely with beautifully crafted components.

## Setup & Usage

**Prerequisites:** Node.js (version 18 or above recommended)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   Create a `.env.local` file by copying the provided example, and set your `GEMINI_API_KEY`:
   ```bash
   cp .env.example .env.local
   # Edit .env.local to include your Gemini API key
   ```

3. **Run the app locally:**
   ```bash
   npm run dev &
   ```
   Navigate to `http://localhost:3000` to view the app in action.

## Development Commands

- `npm run dev`: Starts the local development server.
- `npm run build`: Compiles the application for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs TypeScript compilation checks.

## Architecture

- **Atoms**: Basic UI units (e.g., `DataNode`).
- **Molecules**: Compound UI elements (e.g., `NavRib`).

- **Organisms**: Complex sections combining multiple components (e.g., `NavigationMatrix`, `HeroDataVis`, `IsomorphicBridgeViewer`, `StigmergicMonitor`).

### Agentic Emergence Strategy

As articulated in `agentic_emergence/VISION.md`, this application operates on an inverted agentic strategy. The application itself provides the Stigmergic environment (Symbolic Scars and virtual pheromones), providing the structural constraints required by AI models (VULCAN) to navigate complex domain mappings without suffering from mode collapse or topological drift.
The `StigmergicMonitor` component serves as a visual bridge for this process.


Every public function, component, and configuration block contains standard JSDoc/TSDoc comments explaining its inputs, functionality, and output.
