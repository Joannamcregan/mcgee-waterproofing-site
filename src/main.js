const body = document.querySelector('body');
const test = document.getElementById('test');

test.addEventListener('click', lightenBackground.bind(this));

function lightenBackground(){
    body.classList.remove('bg-gray-300');
    body.classList.add('bg-gray-50');
}