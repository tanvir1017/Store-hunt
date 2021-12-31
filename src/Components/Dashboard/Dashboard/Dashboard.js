import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Dashboard.css";

const drawerWidth = 240;

function Dashboard(props) {
  const { admin, logout, user } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar />

      <List className="photoURL">
        <img src={user.photoURL} className="shadow" alt="" />
      </List>
      <List className="userName">
        <p>{user.displayName}</p>
      </List>
      <List className="text-left link-list">
        <Link to="/">
          <i className="fas fa-home"></i> Menu
        </Link>
      </List>
      <List className="text-left link-list">
        <Link to="/dashboard/myOrders">
          <i className="fab fa-shopify"></i> MyOrders
        </Link>
      </List>
      {admin && (
        <Box>
          <List className="text-left link-list">
            <Link to="/dashboard/manageProducts">
              {" "}
              <i className="fas fa-store-alt"></i> Mange Products
            </Link>
          </List>
          <List className="text-left link-list">
            <Link to="/dashboard/mangeOrders">
              <i className="fas fa-tasks"></i> Manage Orders
            </Link>
          </List>
          <List className="text-left link-list">
            <Link to="/dashboard/makeAdmin">
              {" "}
              <i className="fas fa-user-shield "></i> Make Admin
            </Link>
          </List>
          <List className="text-left link-list add-prduct">
            <Link to="/dashboard/addProduct">
              <i className="far fa-plus-square"></i> Add-Product
            </Link>
          </List>
        </Box>
      )}
      <List className="text-left link-list">
        <Link to="/dashboard/addProduct" onClick={logout}>
          <i className="fas fa-sign-out-alt "></i> Logout
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#f53333",
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* laptop view or pc */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#f53333 ",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
