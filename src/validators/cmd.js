const rules = require('../constants/rules')

module.exports = (cmd) => {
  if (!cmd.startsWith('[')) {
    return {
      valid: false,
      rule: rules.CMD001
    }
  }

  if (cmd.includes('\'')) {
    return {
      valid: false,
      rule: rules.CMD002
    }
  }

  const parsedCmd = JSON.parse(cmd)
  if (Array.isArray(parsedCmd)) {
    return { valid: true }
  }
}
