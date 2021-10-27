const LinksSocialMedia = {
  github: 'DeboraMelo-dev',
  youtube: 'channel/UC_6Kwcw3f4GvpEKw1prALKQ',
  instagram: 'deboraholandas2',
  facebook: 'debora.mello.792',
  twitter: 'deboramelo07'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })


}

getGitHubProfileInfos()