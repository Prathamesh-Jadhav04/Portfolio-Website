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
