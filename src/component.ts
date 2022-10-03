import WebpackLogo from './assets/images/webpack.png';

console.log('src logo', WebpackLogo);

const logo = document.querySelector('.logo');

logo ? (logo.innerHTML = `<img class="logo__img" src="${WebpackLogo}">`) : null;
