
export function error (err) {
  return { type: 'error', message: err };
}

export function gameInfo(info) {
  return { type: 'game-info', message: info };
}
