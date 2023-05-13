"use client"

import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Zixin Deng
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
