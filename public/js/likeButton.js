var likeBtn = document.getElementById('like-btn');
var isLiked = localStorage.getItem('isLiked') === 'true';

function handleClick() {
    isLiked = !isLiked;
    localStorage.setItem('isLiked', isLiked);
    likeBtn.classList.toggle('like-active');
}

likeBtn.addEventListener('click', handleClick);

if (isLiked) {
    likeBtn.classList.add('like-active');
}