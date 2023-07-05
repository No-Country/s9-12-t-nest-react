import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
//import HomeIcon from "@mui/icons-material/HomeIcon"
//import StarIcon from './star.svg';
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"

const navLinks = [
  {
   icono: <InboxIcon />, title: "Home" , path:"#"
  },
  {
    icono: <DraftsIcon />, title: "Perfil" , path:"#perfil"
  },
  {
    icono: <DraftsIcon />, title: "Chat" , path:"#chat"
  },
  {
    icono: <DraftsIcon />, title: "Configuración" , path:"#configuracion"
  },
  {
    icono: <DraftsIcon />, title: "Ayuda" , path:"#ayuda"
  },
  {
    icono: <DraftsIcon />, title: "Cerrar Sesión" , path:"#cerrarsesion"
  }

]

export default function NavBar() {

  const [open, setOpen] = useState(false)

  return (
    <>

      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" size="large" onClick={() => setOpen(true)} sx={{display: {xs:"flex",sm:"none"}}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{flexGrow:1}}>Trueka</Typography>
          <Box sx={{display: {xs:"none",sm:"block"}}}>
          {
            navLinks.map(item => (<Button color="inherit" key={item.title} component="a" href={item.path}>{item.title}</Button>))
          }
          </Box>
         
        </Toolbar>
      </AppBar>

      {/* <Button variant="contained" onClick={() => setOpen(true)}>Open Drawer</Button> */}

      <Drawer open={open} anchor="left" onClose={()=>setOpen(false)} sx={{display: {xs:"flex",sm:"none"}}}>
        <NavListDrawer navLinks={navLinks} />
      </Drawer>



    </>
  )
}