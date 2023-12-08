export default {
  get (url) {
    return fetch(`${window.location.origin}/api/v4${url}`, { credentials: 'include' })
  }
}
