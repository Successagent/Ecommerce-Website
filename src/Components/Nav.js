
function Nav({visibility}) {
  
  return (
    <ul className={visibility===false?"menu" : "menu-close"}>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
}

export default Nav;
