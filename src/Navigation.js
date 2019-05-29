import React from "react";
import { Link, NavLink} from "react-router-dom" // 따옴표 상관 X. Babel이 처리해줌

const Navigation = () => {
    return (
        <div>
            <NavLink to = "/NavLink"> NavLink </NavLink>
            <Link to = "/Link"> Link </Link>
        </div>
    )
}
export default Navigation;