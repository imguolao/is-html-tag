function isHTMLTag(tag: string): boolean {
  return !!tag && document.createElement(tag.toUpperCase()).toString() !== '[object HTMLUnknownElement]'
}

export { isHTMLTag }

export default isHTMLTag
