const cardBox = document.querySelector('#card-box')

cardBox.addEventListener('mouseover', function (e) {
    var card = e.target.parentElement.parentElement;
    var text = document.createElement('h5');
    text.innerHTML = e.target.getAttribute('alt');
    text.classList.add('title')
    card.appendChild(text)
    e.preventDefault();
    console.log("in")
})
cardBox.addEventListener('mouseout', function (e) {
    var cardTitle = document.querySelector('.title')
    e.target.parentElement.parentElement.removeChild(cardTitle)
    e.preventDefault()
    console.log('out')
})