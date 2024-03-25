import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import {InputLabel, MenuItem, FormControl} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function AppAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box className="flex-grow background-app">
      <AppBar
        position="static"
        elevation={0}
        className="bg-transparent border-b-2 border-gray-300"
      >
        <Toolbar className=" h-24">
          <Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className=""
            >
              <img
                className="border-solid border-r-[2px] border-r-[#D9D9D9] pr-[18px]"
                src="/icon/home_ico.svg"
                alt="Home"
              />
            </IconButton>
          </Box>
          <Box className="mr-2 hidden xs:flex md:flex font-mono font-bold tracking-wider text-inherit no-underline">
            <img
              className="w-[150px] h-[50px] cursor-pointer"
              src="../../img/olcer.svg"
              alt="logo of olcer"
            />
          </Box>
          <Box>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="company_select-label">Şirketler</InputLabel>
              <Select
                labelId="company_select-label"
                id="company_select"
                value={age}
                label="Şirketler"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="flex-grow xs:flex md:hidden">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className="mr-2 flex xs:flex md:hidden flex-grow font-mono font-bold tracking-wider text-inherit no-underline"
          ></Typography>
          <Box className="flex-grow" />
          <Box className="hidden xs:flex md:flex">
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              className="text-gray-600"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              className="text-gray-600"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className="text-gray-600"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box className="flex xs:flex md:hidden">
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
