import './globalStyle.css'
import { animate } from 'motion'
import { loginPage } from './login/loginUI'
import renderHome from './views/homeView';
import 'material-icons/iconfont/material-icons.css';
import 'preline'

//app container
const app = document.getElementById('app')

// entry point
app.append(loginPage())

// menu testing
// app.append(renderHome())

