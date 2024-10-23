import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {ShoppingCart} from "@phosphor-icons/react";

const TopHeader = ({ menuVisibility, setMenuVisibility }) => {
  function toggleMenuVisibility() {
    setMenuVisibility(!menuVisibility);
  }

  return (
    <div id="cabeza" className="TopHeader">
      <div id="menudeslizable">
        <Menu onClick={toggleMenuVisibility} />
      </div>
       <div id="login">
          Bienvenidos
        </div>
        <div id="Icarrito">
          <Link to ="/cart"> <ShoppingCart size={32}/></Link>
        </div>
    </div>
  );
};

export default TopHeader;
