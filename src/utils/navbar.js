import Course from '../pages/Course';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Team from '../pages/Team';

export const navbarData = [
    {id:1, title:'Asosiy', path: '/home', component: <Home/>},
    {id:2, title:'Kurslarimiz', path: '/course', component: <Course/>},
    {id:3, title:'Jamoa', path: '/team', component: <Team/>},
    {id:4, title:'Kursga yozilish', path: '/register', component: <Register/>},
]