import React from 'react';
import clsx from 'clsx'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {BalooTypo} from '../components/FontStyles'

import { ReactComponent as Facebook } from '../assets/img/Facebook.svg'
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  normal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const StyledAppBar = withStyles({root: {
  color: '#000',
  backgroundColor: 'unset',
  boxShadow: 'unset'
}})(AppBar)

const HeaderFont = withStyles({
  root: {
    color: '#4D6A7B',
    textTransform: 'capitalize',
    textAlign:'center',
    fontSize: '0.85rem'
  }
})(Typography)

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar variant='dense'>
          <BalooTypo variant="h6" className={clsx([classes.root, classes.title])}>
            Logo Batako
          </BalooTypo>
          <div className={classes.normal}>
            <Button href="http://localhost:3000/home" color="inherit">
              <HeaderFont variant="body2" className={classes.title}>
                Home
              </HeaderFont>
            </Button>
            <Button href="http://localhost:3000/why-us" color="inherit">
            <HeaderFont variant="body2" className={classes.title}>
              Produk
            </HeaderFont>
            </Button>
            <Button href="http://localhost:3000/hasil-uji" color="inherit">
            <HeaderFont variant="body2" className={classes.title}>
              Hasil
            </HeaderFont>
            </Button>
            <Button href="http://localhost:3000/about-us" color="inherit">
            <HeaderFont variant="body2" className={classes.title}>
              Tentang Kami
            </HeaderFont>
            </Button>
            <Button href="http://localhost:3000/contact-us" color="inherit">
            <HeaderFont variant="body2" className={classes.title}>
              Hubungi Kami
            </HeaderFont>
            </Button>
            <IconButton>
              <Facebook height="18" style={{width: '1em'}}/>
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </div>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}