const validateLabels = (labels) => {
  labels.forEach(label => {
    const invalidLabel = label.split('=').length !== 2

    if (invalidLabel) {
      return false
    }
  })

  return true
}

module.exports = (label) => {
  if (label.startsWith('[')) {
    const parsedLabels = JSON.parse(label)

    const allLabelsAreValid = validateLabels(parsedLabels)

    if (allLabelsAreValid) {
      return { valid: true }
    }

    return {
      valid: false
    }
  }

  const labelCount = label.match(/=/g) || []

  if (labelCount.length) {
    const splittedLabels = label.split(' ')

    const allLabelsAreValid = validateLabels(splittedLabels)

    if (allLabelsAreValid) {
      return { valid: true }
    }

    return {
      valid: false
    }
  }

  return { valid: true }
}
