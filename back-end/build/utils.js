const path = require('path')

function resolve (dir, dir2) {
  if (dir2 == null) {
    return path.join(__dirname, dir)
  } else {
    return path.join(dir, dir2)
  }
}

module.exports = {
  resolve: resolve,
  assetsPath: function (_path) {
    return path.posix.join('static', _path)
  }
}
