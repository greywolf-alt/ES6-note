export function $(selector) {
  return document.querySelectorAll(selector)
}
export function g_c(params) {
  if (params === null || params === undefined) return null
  return params.constructor
}
export function isHtml(ele){
  return ele instanceof Element
}