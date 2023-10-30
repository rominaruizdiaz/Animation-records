var likeBtn = document.getElementById('like-btn');
var isLiked = localStorage.getItem('isLiked') === 'true';

function handleClick() {
  isLiked = !isLiked;
  localStorage.setItem('isLiked', isLiked.toString());
  likeBtn.classList.toggle('clicked');
}

likeBtn.addEventListener('click', handleClick);

if (isLiked) {
  likeBtn.classList.add('clicked');
}
