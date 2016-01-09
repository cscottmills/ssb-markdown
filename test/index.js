var input = [
{
  "previous": "%+blprDKtrFtH+Rul4ZN7tSUZv7xSCwsHs5Dze+hi0wY=.sha256",
  "author": "@uikkwUQU4dcd/ZrHU7JstnkTgncxQB2A8PDLHV9wDAs=.ed25519",
  "sequence": 177,
  "timestamp": 1452296709277,
  "hash": "sha256",
  "content": {
    "type": "post",
    "text": "i was hoping this would be [ultrabrowser](https://github.com/breach) but it hasn't turned out that great.  But image a good base would look something like [Surf](http://surf.suckless.org/)",
    "root": "%FpyJIZY+0UdtalQ3FzvGLVOeima5v1w/aKOQolcmfrY=.sha256",
    "branch": "%86tNewQHTTcQ/f1aHLs4aAlBpgo7T1ZENuPRnuiH31E=.sha256",
    "channel": "patchwork-dev"
  },
  "signature": "jOUkNbBcZFadkqkBxs79sIc2zdUzOH2MYx7Px4Isy308eiSsG4vabKCW2RkOpWtevUownOKNXqGULSsYplFZDQ==.sig.ed25519"
},
{
  "previous": "%Ioq0Te9I1IDBXgvFlEvdq3CYQuZcHPdfsA9CnXPm2d8=.sha256",
  "author": "@uikkwUQU4dcd/ZrHU7JstnkTgncxQB2A8PDLHV9wDAs=.ed25519",
  "sequence": 172,
  "timestamp": 1452262929977,
  "hash": "sha256",
  "content": {
    "type": "post",
    "text": "At Pidgon River nature preserve in Indiana\n![IMG_20160107_170558 (1).jpg](&RRELXJAxum631eq1ikj7+qngd3f6Dvz7eA1mZNHBPQ0=.sha256)",
    "mentions": [
      {
        "link": "&RRELXJAxum631eq1ikj7+qngd3f6Dvz7eA1mZNHBPQ0=.sha256",
        "name": "IMG_20160107_170558 (1).jpg",
        "size": 3175065,
        "type": "image/jpeg",
        "width": 5312,
        "height": 2988
      }
    ],
    "channel": "nature"
  },
  "signature": "KYSLJ+ezILUUN3NGOmCBl1ctXgqNvP7Z67mIEWPDnyeCndZFSuafGUpIknW48I7o07WjrWRBi5strZZWCKFHAw==.sig.ed25519"
},
{
  "previous": "%S4N3qwNI/Uaf2U8DgsBhyhRJ5A6H4KFEEuwP7XF0SSA=.sha256",
  "author": "@EMovhfIrFk4NihAKnRNhrfRaqIhBv1Wj8pTxJNgvCCY=.ed25519",
  "sequence": 482,
  "timestamp": 1451900123101,
  "hash": "sha256",
  "content": {
    "type": "post",
    "text": "@paul @mixmix in the latest version there isn't anyway to see who is on a thread until you see them reply. In previous versions the other recipients where in the reply form, but that is gone now. I can imagine some unfortunate things being said because someone doesn't realize who else is on that thread.",
    "mentions": [
      {
        "link": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
        "name": "paul"
      },
      {
        "link": "@ye+QM09iPcDJD6YvQYjoQc7sLF/IFhmNbEqgdzQo3lQ=.ed25519",
        "name": "mixmix"
      }
    ],
    "channel": "patchwork-design"
  },
  "signature": "33Vk5hGu1jtaoEyLx7xwv1EpqZGz3wU8OZfKcSa5X3jI1k+H8zYlE7ZyyBcfEdBB/CYsKOVS1nPcCwJB9wsJBA==.sig.ed25519"
},

{
  "previous": "%9mklNzxeb2XoH22jVVP5CDQrCfkMgEChyVpGke/g1bc=.sha256",
  "author": "@hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE=.ed25519",
  "sequence": 1974,
  "timestamp": 1452284976299,
  "hash": "sha256",
  "content": {
    "type": "post",
    "text": "If somebody's looking for a UI task to hack on, the [Expand threads in-place](https://github.com/ssbc/patchwork/issues/218) is a moderate-sized item that I'd love to get in. I'm going to work on the social and onboarding bits now, so I won't be able to get to it for a bit.\n\nThere will be :cake: and :cookie:s and :heart:s as a reward",
    "channel": "patchwork-dev"
  },
  "signature": "3NSPu1MDxKTil1WqWWNcoD3f2IZlLpzy0kJY1UDf9EsOZ8IEsm1kC9kVzZCP3bxm1wmU66e0DSIneuGnlFNwAg==.sig.ed25519"
}

]

var output = [
'<p>i was hoping this would be <a href="https://github.com/breach" target="_blank">ultrabrowser</a> but it hasn&#39;t turned out that great.  But image a good base would look something like <a href="http://surf.suckless.org/" target="_blank">Surf</a></p>',
'<p>At Pidgon River nature preserve in Indiana<br><a href="#/webview/%26RRELXJAxum631eq1ikj7%2Bqngd3f6Dvz7eA1mZNHBPQ0%3D.sha256"><img src="http://localhost:7777/&RRELXJAxum631eq1ikj7+qngd3f6Dvz7eA1mZNHBPQ0=.sha256?fallback=img" alt="IMG_20160107_170558 (1).jpg"></a></p>',
'<p><a href="#/profile/%40hxGxqPrplLjRG2vtjQL87abX4QKqeLgCwQpS730nNwE%3D.ed25519">@paul</a> <a href="#/profile/%40ye%2BQM09iPcDJD6YvQYjoQc7sLF%2FIFhmNbEqgdzQo3lQ%3D.ed25519">@mixmix</a> in the latest version there isn&#39;t anyway to see who is on a thread until you see them reply. In previous versions the other recipients where in the reply form, but that is gone now. I can imagine some unfortunate things being said because someone doesn&#39;t realize who else is on that thread.</p>',
'<p>If somebody&#39;s looking for a UI task to hack on, the <a href="https://github.com/ssbc/patchwork/issues/218" target="_blank">Expand threads in-place</a> is a moderate-sized item that I&#39;d love to get in. I&#39;m going to work on the social and onboarding bits now, so I won&#39;t be able to get to it for a bit.</p>\n<p>There will be <img src="./img/emoji/cake.png" alt=":cake:" title=":cake:" class="emoji" align="absmiddle" height="16" width="16"> and <img src="./img/emoji/cookie.png" alt=":cookie:" title=":cookie:" class="emoji" align="absmiddle" height="16" width="16">s and <img src="./img/emoji/heart.png" alt=":heart:" title=":heart:" class="emoji" align="absmiddle" height="16" width="16">s as a reward</p>'
]

var outputInline = [
"i was hoping this would be ultrabrowser but it hasn't turned out that great.  But image a good base would look something like Surf ",
"At Pidgon River nature preserve in Indiana IMG_20160107_170558 (1).jpg ",
"@paul @mixmix in the latest version there isn't anyway to see who is on a thread until you see them reply. In previous versions the other recipients where in the reply form, but that is gone now. I can imagine some unfortunate things being said because someone doesn't realize who else is on that thread. ",
"If somebody's looking for a UI task to hack on, the Expand threads in-place is a moderate-sized item that I'd love to get in. I'm going to work on the social and onboarding bits now, so I won't be able to get to it for a bit. There will be <img src=\"./img/emoji/cake.png\" alt=\":cake:\" title=\":cake:\" class=\"emoji\" align=\"absmiddle\" height=\"12\" width=\"12\"> and <img src=\"./img/emoji/cookie.png\" alt=\":cookie:\" title=\":cookie:\" class=\"emoji\" align=\"absmiddle\" height=\"12\" width=\"12\">s and <img src=\"./img/emoji/heart.png\" alt=\":heart:\" title=\":heart:\" class=\"emoji\" align=\"absmiddle\" height=\"12\" width=\"12\">s as a reward "
]


var markdown = require('../')

var tests = [
  'message with link',
  'message with image',
  'message with "@" mentions',
  'message with emoji'
]

var tape = require('tape')

//run tests over input and output for current defaults.

tests.forEach(function (e, i) {
  tape(e, function (t) {
    t.equal(
      output[i].trim(),
      markdown.block(
        input[i].content.text,
        input[i].content.mentions
      ).trim()
    )
    t.end()
  })
  tape(e, function (t) {
    t.equal(
      outputInline[i].trim(),
      markdown.inline(input[i].content.text).trim()
    )
    t.end()
  })
})








