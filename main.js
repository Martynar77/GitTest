const cardBox = document.querySelector('#card-box')

cardBox.addEventListener('mouseover', function (e) {
    var card = e.target.parentElement.parentElement;
    e.preventDefault();
    var text = document.createElement('h5');
    text.innerHTML = e.target.getAttribute('alt');
    text.classList.add('title')
    card.appendChild(text)
})
cardBox.addEventListener('mouseout', function (e) {
    var title = document.querySelector('.title')
    // console.log(e.target.parentElement)
    console.log(e.target.parentElement.parentElement)
    e.target.parentElement.parentElement.removeChild(title)
    e.preventDefault()
})