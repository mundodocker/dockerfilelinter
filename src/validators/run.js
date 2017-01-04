const constants = require('../constants/constants')

module.exports = (command, singleLine = true) => {
  if (singleLine && command.startsWith('[')) {
    return {
      valid: true
    }
  } else if (!singleLine && command.startsWith('[')) {
    return {
      valid: false,
      rule: constants.RUN001
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
