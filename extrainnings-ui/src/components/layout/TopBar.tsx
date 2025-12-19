import { Box, Button, TextField } from "@mui/material";

const TopBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <TextField
        placeholder="Search..."
        size="small"
        sx={{
          maxWidth: 320,
          backgroundColor: "#f9fafb",
          borderRadius: 2,
        }}
      />

      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          fontWeight: 600,
          px: 3,
        }}
      >
        Create Post
      </Button>
    </Box>
  );
};

export default TopBar;
