import React, { useEffect, useState } from 'react'
import { Card, Grid, Typography } from '@mui/material'
import useStyles from './styles'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'; import AddIcon from '@mui/icons-material/Add';
import Modal from '../modal/Modal';
import { Token, Balance } from '../../util/types'
import axios from 'axios'

const Wallet: React.FC<Token> = ({ token }) => {
    const [balance, setBalance] = useState<Balance>({
        total_income: 0,
        balance: 0
    })

    useEffect(() => {
        const fetchBalance = async () => {
            await axios.get('http://localhost:8090/api/v1/transaction/balance', { headers: { 'Authorization': `Bearer ${token}` } })
                .then((res) => {

                    setBalance(res.data)
                })
                .catch((error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                }))
        }
        fetchBalance()
    }, [token])


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
                        <Typography variant="body1" className={classes.bold}>Tomans {balance.total_income}</Typography>
                        <Typography variant="caption">Total harvests this month</Typography>
                    </Grid>

                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card className={classes.card}>
                    <AccountBalanceWalletOutlinedIcon className={classes.cardIcon1} />
                    <Grid container direction="column">
                        <Typography variant="body1" className={classes.bold}>Tomans {balance.balance}</Typography>
                        <Typography variant="caption">Wallet balance</Typography>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Grid container
                    justifyContent='flex-end'
                    alignItems="center">
                    <Modal icon={<PaidOutlinedIcon />} title="Add Pay" vari="outlined" token={token}>
                    </Modal>

                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Modal icon={<ReceiptOutlinedIcon />} title="Add Receive" vari="contained" token={token}>
                </Modal>
            </Grid>
        </Grid>

    )
}

export default Wallet