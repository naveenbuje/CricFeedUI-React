import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const menuItems = [
  "Feed",
  "Profile",
  "Teams",
  "Friends",
  "Tournaments",
  "Rewards",
];

const SidebarContent = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h6"
        sx={{ mb: 3, fontWeight: 700, color: "#4f46e5" }}
      >
        ExtraInnings
      </Typography>

      <List>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={item}
            selected={index === 0} // Feed active
            sx={{
              borderRadius: 2,
              mb: 0.5,
            }}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default SidebarContent;

