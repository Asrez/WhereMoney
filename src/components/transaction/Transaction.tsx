import { FormControl, Grid, Card, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React, { useState } from 'react'
import useStyles from './styles.js'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
const Transaction: React.FC = () => {
    const classes = useStyles()
    const [select, setSelect] = useState('Today');

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSelect(event.target.value as string);
    };
    return (
        <Grid container
            justifyContent="space-between"
            spacing={3}
            alignItems="center"
        >
            <Grid item sm={6}>
                <Grid container
                    alignItems="center">
                    <AccountBalanceWalletOutlinedIcon className={classes.headerIcon} />
                    <Typography variant="h5">Your Transaction</Typography>
                </Grid>
            </Grid>
            <Grid item md={2}>
                <Grid container
                    alignItems="center">
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={select}
                            onChange={handleChange}
                        >
                            <MenuItem value={'Today'}>Today</MenuItem>
                            <MenuItem value={'Tomorrow'}>Tomorrow</MenuItem>
                            <MenuItem value={'Yesterday'}>Yesterday</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={12} >
                <Card className={classes.card}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container alignItems="center">
                                <ArrowUpwardOutlinedIcon className={classes.cardIcon1} />
                                <Grid direction="column">
                                    <Typography variant="body1" gutterBottom>Tomans 10,000,000</Typography>
                                    <Typography variant="caption">Reference number <span className={classes.bold}>2193</span> </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" gutterBottom>2022/10/8</Typography>
                        </Grid>
                    </Grid>

                    <Grid>

                    </Grid>

                </Card>
            </Grid>
            <Grid item xs={12} >
                <Card className={classes.card}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container alignItems="center">
                                <ArrowDownwardOutlinedIcon className={classes.cardIcon2} />
                                <Grid direction="column">
                                    <Typography variant="body1" gutterBottom>Tomans 10,000,000</Typography>
                                    <Typography variant="caption">Reference number <span className={classes.bold}>2193</span> </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2" gutterBottom>2022/10/8</Typography>
                        </Grid>
                    </Grid>

                    <Grid>

                    </Grid>

                </Card>
            </Grid>
        </Grid>
    )
}

export default Transaction