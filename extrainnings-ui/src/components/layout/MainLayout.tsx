import {
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

import SidebarContent from "./Sidebar";
import TopBar from "./TopBar";

const drawerWidth = 260;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f7fb" }}>
      {/* SIDEBAR */}
      {isMobile ? (
        <Drawer open={open} onClose={() => setOpen(false)}>
          <SidebarContent />
        </Drawer>
      ) : (
        <Paper
          elevation={0}
          sx={{
            width: drawerWidth,
            borderRight: "1px solid #e5e7eb",
          }}
        >
          <SidebarContent />
        </Paper>
      )}

      {/* MAIN COLUMN */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* TOP BAR */}
        <Paper
          elevation={0}
          sx={{
            height: 64,
            display: "flex",
            alignItems: "center",
            px: 2,
            borderBottom: "1px solid #e5e7eb",
            backgroundColor: "#ffffff",
          }}
        >
          {isMobile && (
            <IconButton onClick={() => setOpen(true)} sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
          )}

          <TopBar />
        </Paper>

        {/* PAGE CONTENT */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            py: 4,
            px: { xs: 1, sm: 2 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
