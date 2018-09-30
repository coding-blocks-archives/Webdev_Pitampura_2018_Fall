const supportedTypes = ['zip', 'tar', 'gzip', 'rar']
/**
 * arguments -
 * 1. url to download
 * 2. callback
 *
 * conditions -
 * 1. url starts with http(s)
 *
 * return -
 * data (in string format)
 */
function download(url, done) {
  if (!url.startsWith('http')) {
    return done(new Error('URL format invalid'))
  }
  setTimeout(() => {
    done(null, 'The downloaded data')
  }, 1000)

}

/**
 * arguments -
 * 1. file name to compress
 * 2. compression mechanism
 * 3. callback
 *
 * conditions -
 * 1. mechanism is one of [zip, tar, gzip, rar]
 *
 * return -
 *  compressed file's name
 */
function compress(path, type, done) {
  if (supportedTypes.indexOf(type) === -1) {
    return done(new Error('We can only compress in ' + supportedTypes))
  }
  setTimeout(() => {
    let out = path.split('.')[0] + '.' + type
    done(null, out)
  }, 1000)
}

/**
 * arguments -
 * 1. site to upload to
 * 2. callback
 *
 * conditions -
 * 1. site url is in ftp:// format
 *
 * return -
 *  if it was successful (true/false)
 */
function upload(site, done) {
  if (!url.startsWith('ftl')) {
    return done(new Error('Site must support FTP'))
  }
  setTimeout(() => {
    done(null, true)
  }, 1000)

}
