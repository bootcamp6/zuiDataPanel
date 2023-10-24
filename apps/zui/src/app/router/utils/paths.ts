export const poolPath = (poolId: string) => {
  return `/pools/${poolId}`
}

export function queryPath(queryId: string, version: string) {
  return `/queries/${queryId}/versions/${version}`
}

export function releaseNotesPath() {
  return "/release-notes"
}

export function welcomePath() {
  return "/welcome"
}
