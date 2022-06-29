import React from "react";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { Box, Container, IconButton, Menu, Toolbar, Typography, Link, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface INavbarProps {

}
interface INavbarStates {
    currentAnchorEl: Element | null
}
class Navbar extends React.Component<INavbarProps, INavbarStates> {
    constructor(props: INavbarProps) {
        super(props)
        this.state = {
            currentAnchorEl: null
        }

        this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this)
        this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this)
    }

    handleOpenNavMenu(event: any) {
        this.setState({ currentAnchorEl: event.currentTarget })
    }

    handleCloseNavMenu(event: any) {
        this.setState({ currentAnchorEl: null })
    }

    render(): React.ReactNode {
        const { currentAnchorEl } = this.state

        return (
            <Box sx={{ width: '100%', height: 'auto', backgroundColor: 'primary.main' }}>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Typography variant='h6' noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                            Starter App
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-appbar'
                                aria-haspopup='true'
                                onClick={this.handleOpenNavMenu}
                                color='inherit'>
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={currentAnchorEl}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(currentAnchorEl)}
                                onClose={this.handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {routes.map((route) => (
                                    <Link
                                        key={route.key}
                                        component={NavLink}
                                        to={route.path}
                                        color="black"
                                        underline="none"
                                        variant="button"
                                    >
                                        <MenuItem onClick={this.handleCloseNavMenu}>
                                            <Typography textAlign="center">{route.title}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>

                        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            React Starter App
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    marginLeft: "1rem",
                                }}
                            >
                                {routes.map((route) => (
                                    <Link
                                        key={route.key}
                                        component={NavLink}
                                        to={route.path}
                                        color="black"
                                        underline="none"
                                        variant="button"
                                        sx={{ fontSize: "large", marginLeft: "2rem" }}
                                    >
                                        {route.title}
                                    </Link>
                                ))}
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </Box>
        )
    }
}

export default Navbar

// import React, { FC, ReactElement } from "react";
// import {
//     Box,
//     Link,
//     Container,
//     IconButton,
//     Menu,
//     MenuItem,
//     Toolbar,
//     Typography,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { routes } from "../routes";
// import { NavLink } from "react-router-dom";

// const Navbar: FC = (): ReactElement => {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);

//     const handleOpenNavMenu = (event: any) => {
//         console.log(event)
//         console.log(event.currentTarget)

//         setAnchorElNav(event.currentTarget);
//     };

//     const handleCloseNavMenu = (event: any) => {
//         setAnchorElNav(null);
//     };

//     return (
//         <Box
//             sx={{
//                 width: "100%",
//                 height: "auto",
//                 backgroundColor: "primary.main",
//             }}
//         >
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         sx={{
//                             mr: 2,
//                             display: { xs: "none", md: "flex" },
//                         }}
//                     >
//                         Starter App
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: "bottom",
//                                 horizontal: "left",
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: "top",
//                                 horizontal: "left",
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: "block", md: "none" },
//                             }}
//                         >
//                             {routes.map((page) => (
//                                 <Link
//                                     key={page.key}
//                                     component={NavLink}
//                                     to={page.path}
//                                     color="black"
//                                     underline="none"
//                                     variant="button"
//                                 >
//                                     <MenuItem onClick={handleCloseNavMenu}>
//                                         <Typography textAlign="center">{page.title}</Typography>
//                                     </MenuItem>
//                                 </Link>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="div"
//                         sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
//                     >
//                         React Starter App
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 flexDirection: "row",
//                                 justifyContent: "flex-start",
//                                 alignItems: "center",
//                                 marginLeft: "1rem",
//                             }}
//                         >
//                             {routes.map((page) => (
//                                 <Link
//                                     key={page.key}
//                                     component={NavLink}
//                                     to={page.path}
//                                     color="black"
//                                     underline="none"
//                                     variant="button"
//                                     sx={{ fontSize: "large", marginLeft: "2rem" }}
//                                 >
//                                     {page.title}
//                                 </Link>
//                             ))}
//                         </Box>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </Box>
//     );
// };

// export default Navbar;