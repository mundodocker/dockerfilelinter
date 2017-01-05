const rules = require('../constants/rules')

module.exports = (image) => {
  if (image === 'scratch') {
    return {
      valid: true
    }
  }

  if (image.includes(':')) {
    const tag = image.split(':')[1]

    if (!tag) {
      return {
        valid: false,
        rule: rules.FRM001
      }
    }

    if (tag.toLowerCase() === 'latest') {
      return {
        valid: false,
        rule: rules.FROM002
      }
    }

    return {
      valid: true
    }
  }

  if (image.includes('@')) {
    const digest = image.split('@')[1]

    if (!digest) {
      return {
        valid: false,
        rule: rules.FRM001
      }
    }

    return {
      valid: true
    }
  }

  return {
    valid: false,
    rule: rules.FROM002
  }
}
