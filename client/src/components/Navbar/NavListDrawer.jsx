import { Box } from "@mui/system";
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

export default function NavListDrawer({ navLinks }) {
    return (
        <Box sx={{ width: 250 }}>

            <nav>
                <List>
                    {
                        navLinks.map(item => (
                            <ListItem disablePadding key={item.title}>

                                <ListItemButton component="a" href={item.path}>
                                    <ListItemIcon>
                                        {item.icono}
                                    </ListItemIcon>
                                    <ListItemText>{item.title}</ListItemText>


                                </ListItemButton>


                            </ListItem>

                        ))

                    }

                </List>
            </nav>
        </Box>
    )
}