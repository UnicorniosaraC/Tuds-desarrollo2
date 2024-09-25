import Menu from '@mui/icons-material/Menu';

const TopHeader = ({ menuVisibility, setMenuVisibility }) => {
  function toggleMenuVisibility() {
    setMenuVisibility(!menuVisibility);
  }

  return (
    <div className="TopHeader">
      <div id="menudeslizable">
        <Menu onClick={toggleMenuVisibility} />
      </div>
      <div id="login">
        Login
        </div>
    </div>
  );
};

export default TopHeader;
