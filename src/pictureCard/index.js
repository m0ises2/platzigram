let yo = require('yo-yo');
let moment = require('moment');

module.exports = function(picture) {
  let el;
  function render (pic) {
    return yo`
      <div class="card ${pic.liked ? 'liked' : ''}">
        <div class="card-image">
          <img class="activator" src="${pic.url}">
        </div>
        <div class="card-content">
          <span class="card-title">${pic.description}</span>
          <a href="/user/${pic.user.username}" class="card-title">
            <img src="${pic.user.avatar}" class="avatar"/>
            <span class="username">${pic.user.username}</span>
          </a>
          <small class="right time"> ${moment(pic.createdAt).fromNow()} </small>
          <p>
            <a class="left" href="#" onclick=${like.bind(null, pic, true)}> <i class="fa fa-heart-o" aria-hidden="true"></i> </a>
            <a class="left" href="#" onclick=${like.bind(null, pic, false)}> <i class="fa fa-heart" aria-hidden="true"></i> </a>
            <span class="left likes"> ${pic.likes} me gusta </span>
          </p>
        </div>
      </div>`;
  }

  function like(picture, liked) {
      picture.liked = liked;
      picture.likes += liked ? 1 : -1;
      let newElem = render(picture);

      yo.update(el, newElem);

      //console.log(picture);

      return false;
  }

  el = render(picture);

  return el;
}
