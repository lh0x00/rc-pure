export function handleError(...arg): any {
  console.error('[rc-pure]', ...arg) // eslint-disable-line no-console
}

export function handleWarning(...arg): any {
  console.warn('[rc-pure]', ...arg) // eslint-disable-line no-console
}

export const createHandlerCompare = (
  handler: Function,
  { prev, next }: THandlerData,
  keys?: [string],
): boolean => (
  !keys ? !handler(prev, next) :
    (keys || []).some(key => !handler(prev && prev[key], next && next[key]))
)
