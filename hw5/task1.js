/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>
*/

function Comment(name, massageText, AvatarLink) {
  this.name = name;
  this.text = massageText;
  if (AvatarLink) this.AvatarLink = AvatarLink;
  this.likes = 0;
}

Comment.prototype = {
  AvatarLink: 'https://expertphotography.com/wp-content/uploads/2011/06/how-to-take-good-pictures-waterlilly.jpg',
  likesIncreaser: function () {
    this.likes++;
  }
};
let firtsComment = new Comment('i`m the First', 'i comment everything around');

let secondComment = new Comment('i`m the Second', 'i comment everything around just because', 'https://www.mlive.com/resizer/UEaVb0UEZ-FOOmU5sH-jaAPzEgI=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/ETSJBFFEBNBCDG6BVGJWPZMVPI.jpg');

let thirdComment = new Comment('i`m the Third', 'i comment everything around just because im third', 'https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-v2/64/matrix-neo-man-white-512.png');

let fourthComment = new Comment('i`m the Fourth', 'i comment everything around just because im fourth', 'https://fourthsurfboards.com/wp-content/uploads/2016/03/fourth-logo.png');


let myComments = [firtsComment, secondComment, thirdComment, fourthComment];
let commentsContainer = document.querySelector("#CommentsFeed");

function anotherComments(myComments) {
  this.myComments = myComments;

  this.Render = function(){
    this.myComments.forEach( comment => {
      let block = document.createElement('div');

      let title = document.createElement('h3');
      title.innerText = comment.name;
      block.appendChild(title);

      let description = document.createElement('p');
      description.innerText = comment.text;
      block.appendChild(description); 

      let avatar = document.createElement('img');
      avatar.src = comment.AvatarLink;
      block.appendChild(avatar);

      let likes = document.createElement('div');
      likes.className = 'like';
      likes.innerText = comment.likes;
      block.appendChild(likes);

      block.addEventListener('click', function() {
        comment.likesIncreaser();
        block.querySelector('.like').innerHTML = comment.likes;
      })
      commentsContainer.appendChild(block);      
    })
  }

  this.Render();
}

let users = new anotherComments(myComments);