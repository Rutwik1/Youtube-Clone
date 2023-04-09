import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center", flex: 1 }}>
      <img src={logo} alt="logo" height={45} />
      <p style={{ color: '#fff', marginLeft: 8, fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'Roboto' }}>RK Media</p>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
