document.getElementById('like-button').addEventListener('click', function() {
    var icon = this.querySelector('i');
    icon.classList.toggle('liked');
  });
  