import { Link } from 'react-router-dom';

const Menu = ({ menuVisibility, roles }) => {
  const items = [
    {
      key: 'login',
      to: 'login',
      label: 'Iniciar sesión',
      roles: []
    },
    {
      key: 'user-list',
      to: 'user-list',
      label: 'Usuarios',
      roles: ['admin']
    },
    {
      key: 'Catalogo',
      to: 'Catalogo',
      label: 'Catálogo',
      roles: ['User','admin']
    }
  ];

  const filteredItems = items.filter(item => 
    !item.roles.length || item.roles.some(role => roles.includes(role))
  );

  const lista = filteredItems.map(item => (
    <a key={item.key}>
      <Link to={item.to}>
        <button>{item.label}</button>
      </Link>
    </a>
  ));

  return (
    <nav id="mainMenu" style={{ display: menuVisibility ? '' : 'none' }}>
      <ul>
        {lista}
      </ul>
    </nav>
  );
};

export default Menu;