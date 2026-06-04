# 📈 Plan: In-Place Expanding Timeline Cards (Origin Section)

This document outlines the architectural plan for the **In-Place Expanding Timeline Cards** in the [AboutSection.tsx](file:///D:/Portfolio/src/components/AboutSection.tsx).

---

## ⚡ Visual & User Experience (UX) Impact

1. **Curiosity Loop & Interactive Feel**:
   * Instead of a static block of text, each timeline card acts like an interactive data block. 
   * When unhovered, it remains compact, keeping the page clean and easy to scan.
   * When hovered, it smoothly grows, lighting up in amber and revealing deep systems specs, metrics, and custom diagram schematics.
2. **Context Preservation**:
   * The user never leaves the timeline. The giant sticky year on the right remains active and updates as they scroll, while the left cards expand inline.
3. **No Heavy Sidebar Overlay**:
   * By bringing metrics and diagrams directly inside the expanding cards, we don't need a separate sidebar drawer. This keeps the visitor's focus 100% on the scroll narrative.

---

## 🛠️ Implementation Plan

### 1. Card States Design
*   **Compact State (Default)**:
    *   **Height**: Small (`~100px` to `120px` height).
    *   **Content**: Only the Year, a small status dot, the Milestone Title, and a 1-line teaser.
    *   **Aesthetics**: Low opacity (`0.35` to `0.4`), thin grey border, no diagrams or tech badges visible.
*   **Expanded State (On Cursor Hover)**:
    *   **Height**: Auto-expands smoothly (using CSS transition on max-height/grid-rows).
    *   **Content**: Reveals full description, key metrics (highlighted in amber), technical specs (tech badges), and the custom vector/systems SVG schematic diagram.
    *   **Aesthetics**: Full opacity (`1.0`), glowing amber border, soft drop-shadow backdrop.

### 2. Transition Mechanism (Smooth Animations)
To prevent sudden layout jumps when a card expands, we will use a CSS Grid transition trick for height interpolation:
```css
.timeline-card {
  display: grid;
  grid-template-rows: 0fr; /* Collapsed state for details */
  transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s, opacity 0.4s;
}

.timeline-card:hover {
  grid-template-rows: 1fr; /* Expands to full height of content */
}
```
This enables hardware-accelerated, butter-smooth height expansions without any lag or performance drops during Lenis scrolling.

### 3. Integrated SVG Diagrams
Each card will contain its own custom inline SVG schematic directly under the details section, representing that specific milestone:
*   **2022 (College)**: Visual of a neural network layer mapping foundations.
*   **2022 (First Code)**: Console screen mockup with `print("Hello World")`.
*   **2023 (First Deployment)**: Client-Server network node graph.
*   **2024 (Data Science Intern)**: Dynamic data cleanup filter flow.
*   **2025 (GenAI & APIs)**: LLM integration prompt mapping.
*   **2026 (NuroSearch Vector DB)**: Custom HNSW multi-layer index tree graph.

---

## 📱 Mobile Adaptation
On mobile viewports (`<992px`), cards will remain in their fully expanded states automatically so mobile visitors don't have to deal with touch-hover issues, keeping readability high.

---

# 🌌 Plan: Interactive Cinematic Fire Ember Background

This section outlines options and implementation paths to transform the static cinematic ember backdrop ([Background.png](file:///D:/Portfolio/Resume/Background.png)) into a responsive, premium interactive experience.

---

## ⚡ Visual & User Experience (UX) Concept
The image displays a premium dark theme containing rising fire embers, glowing sparks, and a smoky/foggy lower half. By converting this into an interactive background, we can give the website a living, breathing, game-like menu aesthetic (reminiscent of *Jujutsu Kaisen* or high-end brutalist websites) that responds to user input (mouse moves, clicks, and scroll velocity).

---

## 🛠️ Interactive Design Options

### Option 1: Canvas-Based Interactive Particle Emitter (Recommended)
This approach layers a lightweight `<canvas>` element on top of `Background.png` to generate matching dynamic embers that respond to the mouse.
*   **Mechanism**:
    *   `Background.png` is applied as the CSS backdrop of the section with low opacity (`0.4 - 0.6`), a subtle CSS blur, and brightness adjustments.
    *   A full-screen `<canvas>` overlay runs an optimized particle system rendering orange-red ember circles/sparks of varying sizes, opacities, and speeds.
*   **Interactivity**:
    *   **Mouse Wind Force (Attraction/Repulsion)**: The cursor acts as a wind force. When the mouse moves, it alters the velocity vectors of particles within a `200px` radius, making the embers swirl around the mouse.
    *   **Spark Burst (Click Trigger)**: Clicking anywhere on the screen generates a burst of `15–20` small sparks radiating outwards from the cursor.
    *   **Scroll Acceleration**: Scrolling down the page increases the upward velocity of the particles temporarily, creating a sense of falling deeper into the fire.
*   **Pros**: Highly dynamic, 60fps butter-smooth performance, and matches the exact embers in the static image.

### Option 2: 3D Holographic CSS Parallax Layers
A pure CSS + minimal JS option that splits the screen into depth layers using the static image, avoiding real-time canvas rendering.
*   **Mechanism**:
    *   We create three layers:
        1.  **Backdrop Layer**: The raw `Background.png` with a dark tint.
        2.  **Smoke Layer**: A secondary CSS overlay containing animated mist/fog (using CSS keyframes).
        3.  **Foreground Spark Layer**: Large, blurred, floating sparks that sit closer to the camera.
*   **Interactivity**:
    *   **Holographic Mouse Tilt**: On mouse move, a JS listener tracks the cursor position and translates/rotates the container slightly (`transform: rotateY(X deg) translate3d(...)`) creating a premium 3D depth-of-field effect.
    *   **Hover Glow**: Moving the cursor over interactive cards shifts the ambient orange background glow towards that card.
*   **Pros**: Extremely light on the CPU, zero canvas rendering overhead, uses hardware-accelerated CSS transforms.

### Option 3: WebGL Fluid Smoke & Distortion Shader
A AAA visual effect that simulates fluid dynamics on the smoke and sparks in the image.
*   **Mechanism**:
    *   **Canvas Shader**: `Background.png` is rendered inside a WebGL context (via a lightweight canvas shader, or a library like Pixi.js).
    *   A distortion/fluid-displacement shader maps mouse movements to coordinate offsets.
*   **Interactivity**:
    *   **Fluid Ripples**: Dragging the cursor across the screen behaves like moving a hand through water or thick smoke, causing the smoky parts of `Background.png` to swirl and ripple dynamically.
    *   **Flame Turbulences**: The embers bend and travel along the fluid currents created by the cursor trail.
*   **Pros**: The absolute highest possible visual fidelity.
*   **Cons**: Higher GPU usage on mobile/older devices, larger bundle sizes.

---

## 📋 Implementation Recommendation

To maintain **maximum performance (under 60fps check)** while delivering a **premium wow-factor**, we should proceed with **Option 1 (Canvas-Based Particle Emitter)**. 
1.  It is self-contained and highly performant.
2.  It allows us to use `Background.png` directly as a fallback background.
3.  It can be easily toggled off on low-power devices.

### Next Steps for Implementation:
*   [ ] Place `Background.png` into `/public` as `/background-interactive.png` for Next.js accessibility.
*   [ ] Create a reusable `<InteractiveEmberCanvas />` React component in `src/components/ui/InteractiveEmberCanvas.tsx`.
*   [ ] Replace the default Mixkit video container in [HeroSection.tsx](file:///D:/Portfolio/src/components/HeroSection.tsx) with this new interactive background.
