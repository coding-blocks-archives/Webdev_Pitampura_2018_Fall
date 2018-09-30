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
function download(url) {

  return new Promise((resolve, reject) => {
    if (!url.startsWith('http')) {
      return reject(new Error('URL format invalid'))
    }
    setTimeout(() => {
      resolve(url.split('/').pop())
      console.log('Downloaded ' + url + ' to ' + url.split('/').pop())
    }, 1000)
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
function compress(path, type = 'zip') {
  return new Promise((resolve, reject) => {
    if (supportedTypes.indexOf(type) === -1) {
      return reject(new Error('We can only compress in ' + supportedTypes))
    }
    setTimeout(() => {
      let out = path.split('.')[0] + '.' + type
      resolve(out)
      console.log('Compressed ' + path + ' to ' + out)
    }, 1000)
  })

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
function upload(file, site = 'ftp://site.com') {
  return new Promise((resolve, reject) => {
    if (!site.startsWith('ftp')) {
      return reject(new Error('Site must support FTP'))
    }
    setTimeout(() => {
      resolve(true)
      console.log('Uploaded to ' + site + '/' + file)
    }, 1000)
  })

}

async function alltasks() {
  try {
    let file = await download('http://website.com/logo.png')
    let output = await compress(file, 'zip')
    let success = await upload(output, 'ftp://site.com')
  } catch (err) {
    console.error(err)
  }
}

// alltasks()

download('http://website.com/logo.png')
  .then(compress)
  .then(upload)
  .catch(console.error)
