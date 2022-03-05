import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' style={{ textDecoration: 'none',color:'white' }}>
                            WhereMoney
                        </Link>
                    </Typography>
                    <Link color="inherit" to='/signup' style={{ textDecoration: 'none',color:'white' }}>SignUp</Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
