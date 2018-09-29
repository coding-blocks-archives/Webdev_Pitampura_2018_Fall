(function (module, require) {

  function uglifier(thing) {
    return thing + " is ugly";
  }

  module.exports = {
    uglifier
  }

})(
  typeof window === 'undefined' ? module :
      (window.modules || (window.modules = {})) && (window.modules['./lib2'] = {})
  ,
  typeof window === 'undefined' ? require :
    function (path) {
      return window.modules[path].exports
    }
)


/**
 * check if window.modules exists
 *    if not, create it
 *    if yes,
 *      create window.modules[libname]
 *
 * return window.modules[libname]
 */
