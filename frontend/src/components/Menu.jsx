import {Link} from 'react-router-dom'

const Menu = ({menuVisibility, roles}) =>{

const items= [

  {
    key: 'login',
    to: 'login',
    label: 'Login',
    roles: []
  },
  {
    key: 'user-list',
    to: 'user-list',
    label: 'Usuarios',
    roles: ['admin'],
  },
];

let filteredItems;
if (!roles.length){
  filteredItems = items.filter(item => !item.roles.lenght);
} else{
  filteredItems = items.filter(item => item.roles.filter(role => roles.includes(role).length))
}
  const lista = filteredItems.map(item=> <li key={item.key}><Link to={item.to}>{item.label}</Link></li>);

return (
  <nav id="mainMenu" style={{display: menuVisibility? '': 'none'}}>
    <ul>
        {lista}
   </ul>  
  </nav>
)
}

export default Menu
