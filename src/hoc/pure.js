import pureComponent from 'rc-pure-component'
import isEqual from 'lodash.isequal'
import { createHandlerCompare } from 'lib/util'

const compareDefault = isEqual

export default (config?: TConfig) => (WrappedComponent: any) => {
  WrappedComponent.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component' // eslint-disable-line no-param-reassign

  const { compare = compareDefault, updateByKeys } = config || {}

  const handleCompare = (
    prevProps: TProps,
    nextProps: TProps,
  ): boolean => createHandlerCompare(compare, { prev: prevProps, next: nextProps }, updateByKeys)

  const Pure = pureComponent(WrappedComponent, handleCompare)
  Pure.displayName = 'Pure' // eslint-disable-line no-param-reassign

  return Pure
}
