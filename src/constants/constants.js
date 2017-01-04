const types = {
  ERROR: 'error',
  WARN: 'warning'
}

module.exports = {
  FRM001: {
    code: 'frm001',
    type: types.ERROR,
    message: 'Invalid FROM directive'
  },
  FROM002: {
    code: 'frm001',
    type: types.WARN,
    message: 'Tag or digest is missing or defined as `latest`'
  },
  RUN001: {
    code: 'run001',
    type: types.ERROR,
    message: 'Invalid RUN directive'
  }
}
