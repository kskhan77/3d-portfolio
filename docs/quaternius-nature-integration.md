# Quaternius Nature Integration

## Current Status

- The project is scaffolded for Quaternius nature assets.
- Runtime asset folder:
  - `public/models/nature`
- Source asset folder:
  - `assets-source/quaternius/ultimate-stylized-nature`
- Reusable nature components live in:
  - `src/features/spatial-career-narrative/components/nature`

## How It Works

- The app currently uses procedural fallback meshes so the world still renders before real assets are added.
- Once optimized `.glb` files are placed in `public/models/nature`, switch:

```ts
natureKitConfig.enabled = true
```

in:

- `src/features/spatial-career-narrative/components/nature/styles.ts`

## Expected Runtime Files

- `tree-round.glb`
- `tree-pine.glb`
- `bush-round.glb`
- `rock-large.glb`
- `rock-small.glb`
- `flower-patch.glb`
- `grass-clump.glb`
- `log-small.glb`

## Next Recommended Step

- Import the Quaternius pack into Blender
- Export only the assets needed for the three islands
- Keep poly count and material count low for web delivery
