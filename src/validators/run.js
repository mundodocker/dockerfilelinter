const constants = require('../constants/constants')

module.exports = (command) => {
  const isSingleLine = Array.isArray(command)

  if (!isSingleLine) {
    return {
      valid: true
    }
  }

  try {
    const parsedCmd = Array.from(command)

    return {
      valid: true
    }
  } catch (e) {
    return {
      valid: false,
      rule: constants.RUN001
    }
  }
}
