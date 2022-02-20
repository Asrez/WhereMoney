import React from 'react'
import { Button, Card, Grid, Typography } from '@mui/material'
import useStyles from './styles'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'; import AddIcon from '@mui/icons-material/Add';
import Modal from '../Modal';
const Wallet: React.FC = () => {
    const classes = useStyles()

    return (
        <Grid container
            justifyContent="space-between"
            spacing={3}
            alignItems="center"
            className={classes.padding}
        >
            <Grid item sm={6}>
                <Grid container
                    alignItems="center">
                    <AccountBalanceWalletOutlinedIcon className={classes.headerIcon} />
                    <Typography variant="h5" >Your Wallet</Typography>
                </Grid>
            </Grid>

            <Grid item sm={6}>
                <Grid container
                    justifyContent='flex-end'
                    alignItems="center">
                    <AddIcon className={classes.headerIcon} />
                    <Typography variant="body1" className={classes.add} >Add</Typography>
                </Grid>

            </Grid>
            <Grid item xs={12} md={6} >
                <Card className={classes.card}>
                    <AccountBalanceWalletOutlinedIcon className={classes.cardIcon2} />
                    <Grid container direction="column">
                        <Typography variant="body1" className={classes.bold}>Tomans 10,000,000</Typography>
                        <Typography variant="caption">Total harvests this month</Typography>
                    </Grid>

                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <AccountBalanceWalletOutlinedIcon className={classes.cardIcon1} />
                    <Grid container direction="column">
                        <Typography variant="body1" className={classes.bold}>Tomans 10,000,000</Typography>
                        <Typography variant="caption">Wallet balance</Typography>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Grid container
                    justifyContent='flex-end'
                    alignItems="center">
                    <Modal icon={<PaidOutlinedIcon />} title="Add Pay" vari="outlined">
                    </Modal>

                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Modal icon={<ReceiptOutlinedIcon />} title="Add Receive" vari="contained">
                </Modal>
            </Grid>
        </Grid>

    )
}

export default Wallet