import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Nav } from '../../util/types';
import { capitalizeFirstLetter } from '../../util';
import { Button } from '@mui/material';

const Navbar: React.FC<Nav> = ({ username,handleLogout }) => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            WhereMoney
                        </Link>
                    </Typography>
                    <div style={{ display: 'flex',alignItems: 'center',gap:'2rem'}}>

                    {username ?
                        <>
                            <Button color="inherit" onClick={handleLogout}  >Logout</Button>
                            <Typography variant="h6" >{capitalizeFirstLetter(username)}</Typography>
                        </>
                        : <Link color="inherit" to='/signin' style={{ textDecoration: 'none', color: 'white' }}>Sign In</Link>
                    }
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar
