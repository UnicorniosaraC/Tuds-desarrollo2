import Menu from '@mui/icons-material/Menu';

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
    </div>
  );
};

export default TopHeader;
