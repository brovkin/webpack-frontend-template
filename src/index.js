import './styles/index.scss';
import './assets/fonts/Roboto-Regular.ttf';
import './component.js';

const app = document.getElementById('app');

const greeting = 'Hello World';

app.innerHTML = `
    <strong class="main-title">
        ${greeting}. Webpack работает!
    </strong>
`;
