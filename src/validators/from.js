const from = () => {
  return {
    validate: (image) => {
      const matchedRules = []

      if (image === 'scratch') {
        return matchedRules
      }

      if (image.includes(':')) {
        const tag = image.split(':')[1]

        if (!tag) {
          matchedRules.push('FRM001')
        }

        if (tag === 'latest' || tag === 'LATEST') {
          matchedRules.push('WRN002')
        }
      }

      if (image.includes('@')) {
        const digest = image.split('@')[1]

        if (!digest) {
          matchedRules.push('FRM001')
        }
      }

      return matchedRules
    }
  }
}

module.exports = from()
