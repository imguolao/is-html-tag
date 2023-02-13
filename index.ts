function isHTMLTag(elName: string): boolean {
  return !!elName && document.createElement(elName.toUpperCase()).toString() !== '[object HTMLUnknownElement]'
}

export { isHTMLTag }

export default isHTMLTag
