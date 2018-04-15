import Samask from './samask'

if (typeof window !== 'undefined') {
  const plugin = window.$ || window.jQuery || window.Zepto
  if (plugin) {
    plugin.fn.samask = function SamaskPlugin(maskText) {
      Samask(this, maskText)
      return this
    }
    plugin.samaskHtml = function SamaskHtmlPlugin() {
      var domElements = $('input')
      domElements.filter("*[data-samask]").each(function() {
        Samask($(this), this.getAttribute('data-samask'))
      })
    }
  }
}