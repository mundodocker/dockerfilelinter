const errors = require('../constants/errors')
const warnings = require('../constants/warnings')

module.exports = (command, singleLine = true) => {
  if (singleLine && command.startsWith('[')) {
    return {
      valid: true
    }
  } else if (!singleLine && command.startsWith('[')) {
    return {
      valid: false,
      rule: errors.RUN001
    }
  }

  if (!singleLine) {
    return {
      valid: true
    }
  }

  return {
    valid: true
  }
}
