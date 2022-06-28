import { Link } from "react-router-dom";
import { NavMenu, MenuList, MenuListItem } from "../styles/GameNav.styles";
import { appRoutes } from "../appRoutes";

export default function GameNav() {
  return (
    <NavMenu>
      <MenuList>
        <MenuListItem>
          <Link to={appRoutes.STATISTICS}>Statystyki</Link>
        </MenuListItem>
      </MenuList>
    </NavMenu>
  );
}
