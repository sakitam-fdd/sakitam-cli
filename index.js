const download = require('download-git-repo');

const template = 'direct:https://github.com/sakitam-fdd/maptalks.plot';

download(template, 'example', {
  clone: true
}, err => {
  if (err) console.error('Failed to download repo ' + template + ': ' + err.message.trim());
  console.log('success')
});
