export default function getRunnerTagsFromMatrix (stage, key) {
  if (!stage.parallel?.matrix) return null

  return stage.parallel.matrix.map(i => i[key])
}
