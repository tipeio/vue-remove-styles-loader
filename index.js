module.exports = loader

function loader (source) {
  this.cacheable()
  const check = /<style[\s\S]*?>([\s\S]*?)<\/style>/
  if (check.test(source)) {
    return source.replace(check, '')
  }
  return source
}
