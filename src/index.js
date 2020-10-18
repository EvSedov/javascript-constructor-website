import {model} from './model';
import getHTML from './tempates';
import './styles/main.css';

const $site = document.querySelector('#site');
model.forEach((block) => $site.insertAdjacentHTML('beforeend', getHTML(block)));
