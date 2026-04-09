# Spatial Career Narrative Todo

## Architecture Direction

- Keep the app web-native with `React + Vite + TypeScript + React Three Fiber`.
- Use `Three.js` for rendering, `GSAP` for authored motion, and add `@react-three/rapier` later for Bruno-style physics.
- Use `Blender` or `3ds Max` to create exportable `.glb` assets.
- Keep the project feature-first instead of scene-code living in one file.

## Folder Structure

```text
src/
  app/
    App.tsx
    styles.ts
    types.ts
  features/
    spatial-career-narrative/
      index.ts
      SpatialCareerNarrative.tsx
      constants.ts
      styles.ts
      types.ts
      components/
        Bridge.tsx
        CameraRig.tsx
        Character.tsx
        CloudLayer.tsx
        MiniIsland.tsx
        NavigationPlane.tsx
        OverlayHUD.tsx
        Scene.tsx
        Squad.tsx
        StoryOverlay.tsx
        islands/
          IslandCore.tsx
          LogisticsIsland.tsx
          NeuralSpireIsland.tsx
          OasisIsland.tsx
```

## Recommended Styling Strategy

- Use plain CSS for app-level layout, resets, overlays, and responsive behavior.
- Use colocated `styles.ts` files for scene tokens such as colors, camera offsets, distances, and semantic theme values.
- Avoid Tailwind for the 3D scene itself because most of the complexity is not DOM styling.
- If the HUD grows large later, consider CSS Modules or `vanilla-extract`, but plain CSS is the simplest strong default here.

## Build Phases

### Phase 1: Foundation

- Finalize the feature-based structure.
- Keep `types.ts`, `styles.ts`, and `constants.ts` colocated by feature.
- Separate overlay UI from 3D scene logic.

### Phase 2: Asset Pipeline

- Create `/public/models` for exported `.glb` files.
- Create source asset folders outside runtime code:
  - `assets-source/blender`
  - `assets-source/textures`
  - `assets-source/references`
- Model the truck, neon spire, benches, lanterns, crystals, plants, bridges, and props.
- Export optimized `.glb` files with shared materials when possible.

### Phase 3: World Design

- Replace procedural placeholder islands with custom modeled islands.
- Add sculpted roads, ramps, signs, checkpoints, and interaction zones.
- Add more supporting mini-islands and background skyline pieces.

### Phase 4: Bruno-Style Interaction

- Add `@react-three/rapier`.
- Replace click-to-move with vehicle or avatar physics controls.
- Add camera shake, collisions, boost pads, jump points, and recovery/respawn.

### Phase 5: Narrative Content

- Add interactive hotspots for:
  - Continental Expedited Services
  - UM-Flint MSAI / AI Agents / RAG / XR
  - Family / Sprouting / Urdu Poetry / Cybersecurity
- Add discoverable props that unlock story cards, sound, or motion.

### Phase 6: Polish

- Add postprocessing carefully: bloom, vignette, depth haze, and color grading.
- Add sound design with ambient loops and island-specific cues.
- Optimize bundle size with lazy-loaded models and route-level scene loading.

## Immediate Next Tasks

- Add a `/public/models` pipeline and a `Model` wrapper component.
- Add `@react-three/rapier` and prototype a drivable character or vehicle.
- Replace code-built truck and island forms with modeled assets.
- Add an intro scene with `Click to Start`.
- Add a loading screen, asset preloader, and scene transition states.
