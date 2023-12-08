export default {
  get (url) {
    return fetch('/api/v4' + url, { credentials: 'include' })
  }
}
