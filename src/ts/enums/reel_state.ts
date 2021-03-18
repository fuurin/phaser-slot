const ReelState = {
  moving: 'moving',
  slipping: 'slipping',
  stop: 'stop'
} as const
type ReelState = typeof ReelState[keyof typeof ReelState]

export default ReelState
