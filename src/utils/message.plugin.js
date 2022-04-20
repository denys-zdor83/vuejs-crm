export default {
  install (Vue, options) {
    Vue.prototype.$message = text => {
      window.M.toast({ html: text })
    }
    Vue.prototype.$error = text => {
      window.M.toast({ html: `Error ${text}` })
    }
  }
}
