import { AppBar,  Link, Toolbar, Typography } from "@mui/material"


export const Header = $ => {
  return <><AppBar position="absolute">
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" nowrapr="true">
        NETLIST
      </Typography>
      <Link href="../" underline="hover">
        Home
      </Link>
      <Link href="../favorites" underline="hover">
        Favorites
      </Link>
  </Toolbar>
  </AppBar>
    <br />
    <br />
    <br />
    <br />
    
  </>
}