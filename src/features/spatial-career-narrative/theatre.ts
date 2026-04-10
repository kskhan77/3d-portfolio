import { getProject, types } from '@theatre/core'

export const spatialCareerProject = getProject('Spatial Career Narrative')
export const worldSheet = spatialCareerProject.sheet('World')

export const worldEnvironmentObject = worldSheet.object('Environment', {
  ambientIntensity: types.number(0.9, { range: [0.2, 2.5], nudgeMultiplier: 0.05 }),
  hemisphereIntensity: types.number(0.8, { range: [0.2, 2.5], nudgeMultiplier: 0.05 }),
  directionalIntensity: types.number(2.4, { range: [0.5, 4], nudgeMultiplier: 0.05 }),
  fogNear: types.number(28, { range: [10, 60], nudgeMultiplier: 0.5 }),
  fogFar: types.number(70, { range: [30, 120], nudgeMultiplier: 0.5 }),
  shadowOpacity: types.number(0.42, { range: [0, 1], nudgeMultiplier: 0.02 }),
  trailArcHeight: types.number(2.6, { range: [0.8, 5], nudgeMultiplier: 0.05 }),
  trailThickness: types.number(0.06, { range: [0.02, 0.2], nudgeMultiplier: 0.01 }),
  sparkleSpeed: types.number(0.14, { range: [0.02, 1], nudgeMultiplier: 0.01 }),
  worldFloat: types.number(1, { range: [0.8, 1.3], nudgeMultiplier: 0.01 }),
})

export type WorldEnvironmentValues = typeof worldEnvironmentObject.value
