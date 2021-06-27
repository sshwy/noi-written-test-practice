export function render (text) {
  if (text instanceof Array) {
    return text.map(s => '<p>' + s + '</p>').join('')
  }
  return text
}