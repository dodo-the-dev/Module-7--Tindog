// Create the Dog class here
class Dog {
  constructor(data){
    Object.assign(this, data)
  }

  getDogHtml() {
    const {name, avatar, age, bio} = this
    return `
    <div class="profile-picture">
      <img src="${avatar}" alt="${name}" class="profile-picture" />
      <img src="/images/badge-like.png" alt="like badge" class="badge" hidden>
      <img src="/images/badge-nope.png" alt="nope badge" class="badge" hidden>
    </div>
    <div class="profile-comments">
      <p class="dog-name">${name}, ${age}</p>
      <p class="dog-bio">${bio}</p>
    </div>
    `
  }
}

export default Dog