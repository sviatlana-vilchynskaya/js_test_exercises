const iframe = document.querySelector('#iframe');

const keyInput = document.querySelector('#key');
const valueInput = document.querySelector('#value');

const setBtn = document.querySelector('#set');
const getBtn = document.querySelector('#get');
const deleteBtn = document.querySelector('#delete');

iframe.onload = () => {
  console.log('iframe was loaded');
};
iframe.onerror = () => {
  console.log('Something went wrong!');
};

window.onmessage = ({ data }) => {
  if (data === 'reply') {
    console.log('fire callback!');
  }
};

const postMessageHandler = (method, key = keyInput.value, value = valueInput.value) => {
  if (method === 'set' && (!key || !value)) {
    console.log('Key or Value is empty');
  } else if ((method === 'get' || method === 'delete') && !key) {
    console.log('Key is empty');
  } else {
    const messageData = JSON.stringify({ method, key, value });

    iframe.contentWindow.postMessage(messageData, '*');
  }
};

setBtn.addEventListener('click', () => {
  postMessageHandler('set');
});

getBtn.addEventListener('click', () => {
  postMessageHandler('get');
});

deleteBtn.addEventListener('click', () => {
  postMessageHandler('delete');
});
