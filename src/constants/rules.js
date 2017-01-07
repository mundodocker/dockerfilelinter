const types = require('./types')

module.exports = {
  FRM001: {
    code: 'frm001',
    type: types.ERROR,
    message: 'Invalid FROM directive'
  },
  FRM002: {
    code: 'frm001',
    type: types.WARN,
    message: 'Tag or digest is missing or defined as `latest`'
  },
  RUN001: {
    code: 'run001',
    type: types.ERROR,
    message: 'Invalid RUN directive'
  },
  RUN002: {
    code: 'run002',
    type: types.ERROR,
    message: 'Command has unescaped back lashes'
  },
  RUN003: {
    code: 'run003',
    type: types.ERROR,
    message: 'Invalid JSON with `exec` form, command will be executed as `shell` form'
  },
  CMD001: {
    code: 'cmd001',
    type: types.WARN,
    message: '`Exec`form (CMD ["executable","param1","param2"]) is prefered over `shell` form'
  },
  CMD002: {
    code: 'cmd002',
    type: types.ERROR,
    message: 'Invalid JSON array in `exec` form'
  }
}
