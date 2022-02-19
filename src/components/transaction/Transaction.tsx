import { Grid, Card, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React, { useState } from 'react'
import useStyles from './styles.js'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
            <Grid item >
                <Grid container
                    alignItems="center">
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={select}
                        onChange={handleChange}
                        IconComponent={KeyboardArrowDownIcon}
                        className={classes.select}
                    >
                        <MenuItem value={'Today'}>Today</MenuItem>
                        <MenuItem value={'Tomorrow'}>Tomorrow</MenuItem>
                        <MenuItem value={'Yesterday'}>Yesterday</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <Grid item xs={12} >
                <Card className={classes.card}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Grid container alignItems="center">
                                <ArrowRightAltIcon className={classes.cardIcon1} />
                                <Grid direction="column">
                                    <Typography variant="body1" gutterBottom className={classes.key}>Deposit the amount of <span className={classes.val}>Tomans 2000</span></Typography>
                                    <Typography variant="body1" className={classes.key}>Reference number <span className={classes.val}>2193</span> </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.self}>
                            <Typography variant="subtitle2"  className={classes.date}>2022/10/8</Typography>
                        </Grid>
                    </Grid>

                    <Grid>

                    </Grid>

                </Card>
            </Grid>
            <Grid item xs={12} >
                <Card className={classes.card}>
                    <Grid container justifyContent="space-between" alignItems="center" >
                        <Grid item>
                            <Grid container alignItems="center">
                                <ArrowRightAltIcon className={classes.cardIcon2} />
                                <Grid direction="column">
                                    <Typography variant="body1" gutterBottom className={classes.key}>Deposit the amount of <span className={classes.val}>Tomans 2000</span></Typography>
                                    <Typography variant="body1" className={classes.key}>Reference number <span className={classes.val}>2193</span> </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.self}>
                            <Typography variant="subtitle2"  className={classes.date}>2022/10/8</Typography>
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