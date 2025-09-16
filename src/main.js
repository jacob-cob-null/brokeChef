import './globalStyle.css'
import { animate } from 'motion'
import { loginPage } from './login/loginUI'
import { dashboardPage } from './dashboard/dashboardUI'
import 'material-icons/iconfont/material-icons.css';
import 'preline'
import renderHome from './views/homeView';

const app = document.getElementById('app')
// app.append(loginPage())
app.append(renderHome())
