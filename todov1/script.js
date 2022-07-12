const ul = document.querySelectorAll('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  ul.prepend(li);
});

const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', e => {
    console.log('event in LI');
    e.target.remove();
  });
});

ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
});