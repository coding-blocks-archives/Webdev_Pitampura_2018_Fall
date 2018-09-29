(function (module, require) {

  const lib = require('./lib')
  const lib2 = require('./lib2')
  console.log(lib.awesomifier("Javascript"))
  console.log(lib2.uglifier("Php"))


})(
  typeof window === 'undefined' ? module :
      (window.modules || (window.modules = {})) && (window.modules['./script'] = {})
  ,
  typeof window === 'undefined' ? require :
    function (path) {
      return window.modules[path].exports
    }
)
