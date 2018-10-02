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
 * saved File name
 */
function download(url, done) {
  if (!url.startsWith('http')) {
    return done(new Error('URL format invalid'))
  }
  setTimeout(() => {
    done(null, url.split('/').pop())
    console.log('Downloaded ' + url + ' to ' + url.split('/').pop())
  }, 1000)

}

function downloadPromise (url) {
  return new Promise((resolve, reject) => {
    function resolveOrReject(err, arg1) {
      if (err) reject(err)
      else resolve (arg1)
    }
    download()
  })
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
    console.log('Compressed ' + path + ' to ' + out)
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
function upload(site, file, done) {
  if (!site.startsWith('ftp')) {
    return done(new Error('Site must support FTP'))
  }
  setTimeout(() => {
    done(null, true)
    console.log('Uploaded to ' + site + '/' + file)
  }, 1000)

}

download('http://website.com/logo.png', (err, file) => {
  if (err) throw err
  compress(file, 'zip', (err, compressedFile) => {
    if (err) {
      console.log(err)
      compressedFile = file
    }
    upload('ftp://disk.com', compressedFile, (err, success) => {
      console.log('all done')
    })
  })
})

console.log('Doing some tasks')
