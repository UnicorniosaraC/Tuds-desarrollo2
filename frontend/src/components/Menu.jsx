import {Link} from 'react-router-dom'
const Menu = ({menuVisibility, roles}) =>{

const items= [
  {
    key: 'login',
    to: 'login',
    label: 'Iniciar sesion',
    roles: []
  },
  
  {
    key: 'Catalogo',
    to: 'Catalogo',
    label: 'Catalogo',
    roles: []
  },
  {
    key: 'user-list',
    to: 'user-list',
    label: 'Usuarios',
    roles: ['admin',],
  },
];

let filteredItems;
if (!roles.length){
  filteredItems = items.filter(item => !item.roles.lenght);
} else{
  filteredItems = items.filter(item => item.roles.filter(role => roles.includes(role).length))
}
  const lista = filteredItems.map(item=> <button key={item.key}><Link to={item.to}>{item.label}</Link></button>);

return (
  <nav id="mainMenu" style={{display: menuVisibility? '': 'none'}}>
    <li>
      {lista}
    </li>  
  </nav>
)
}
export default Menu
