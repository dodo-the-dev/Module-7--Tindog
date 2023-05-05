// Create the Dog class here
class Dog {
  constructor(data){
    Object.assign(this, data)
  }

  getDogHtml() {
    const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped} = this
    return `
    <div class="profile-picture">
      <img src="${avatar}" alt="${name}" class="profile-picture" />
      <img src="/images/badge-like.png" alt="like badge" class="badge" id="like" hidden>
      <img src="/images/badge-nope.png" alt="nope badge" class="badge" id="reject" hidden>
    </div>
    <div class="profile-comments">
      <p class="dog-name">${name}, ${age}</p>
      <p class="dog-bio">${bio}</p>
    </div>
    `
  }
}

export default Dog