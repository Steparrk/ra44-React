
function IconSwitch({icon, onSwitch}) {
    const newIcon = icon;
    return (
        <i className="material-icons" onClick = {onSwitch}>{newIcon}</i>
    );
  }
  
  export default IconSwitch;