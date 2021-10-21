const LinksSocialMedia = {
  github: 'rildodev',
  youtube: 'RildoMaciel',
  facebook: 'rildomaciel',
  instagram: 'rildoberto',
  twitter: 'rildoberto'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

/* API do GITHUB */

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url).then(response => response.json())/* pega info da api na json do git*/
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userAvatar.src = data.avatar_url
    userNick.textContent = data.login
  })
}
getGitHubProfileInfos()
