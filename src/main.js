import './globalStyle.css'
import { animate } from 'motion'
import { loginPage } from './login/loginUI'
import { dashboardPage } from './dashboard/dashboardUI'
import 'preline'

const app = document.getElementById('app')
app.append(loginPage())
