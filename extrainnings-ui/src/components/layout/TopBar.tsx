import { Box, Button, TextField } from "@mui/material";

const TopBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <TextField
        placeholder="Search..."
        size="small"
        sx={{ maxWidth: 300, flex: 1 }}
      />

      <Button variant="contained">
        Create Post
      </Button>
    </Box>
  );
};

export default TopBar;

