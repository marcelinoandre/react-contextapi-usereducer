import * as authTypes from './types'

function reducer (_, action) {
  switch (action.type) {
    case authTypes.LOGIN:
      return true
    case authTypes.LOGOUT:
      return false

    default:
      throw new Error()
  }
}

export default reducer
