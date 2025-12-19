import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Feed", path: "/feed" },
  { label: "Profile", path: "/profile" },
  { label: "Teams", path: "/teams" },
];

const SidebarContent = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* BRAND */}
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 800 }}>
        <span style={{ color: "#4f46e5" }}>Extra</span>
        <span style={{ color: "#111827" }}>Innings</span>
      </Typography>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              "&.active": {
                backgroundColor: "#eef2ff",
                color: "#4f46e5",
                fontWeight: 600,
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default SidebarContent;
