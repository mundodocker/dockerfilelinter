const rules = require('../constants/rules')

module.exports = (command) => {
  const isMultiLine = Array.isArray(command)

  if (isMultiLine) {
    return {
      valid: true
    }
  }

  if (!command.startsWith('[')) {
    return {
      valid: true
    }
  }

  if (command.includes('\'')) {
    return {
      valid: false,
      rule: rules.RUN001
    }
  }

  if (command.includes('\\')) {
    return {
      valid: false,
      rule: rules.RUN002
    }
  }

  try {
    const parsedArray = JSON.parse(command)

    if (Array.isArray(parsedArray)) {
      return {
        valid: true
      }
    }
  } catch (e) {
    return {
      valid: false,
      rule: rules.RUN003
    }
  }
}
