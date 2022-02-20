import React, { useState } from 'react'
import { Grid, Alert, Card, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import useStyles from './styles.js'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'; import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { transaction } from '../../util/index'

interface Trans {
    amount: number;
    refrence: number;
    income: boolean;
    date: string;
}
const Transaction: React.FC = () => {
    const classes = useStyles()
    const [select, setSelect] = useState('Today');
    const [transactions, setTransactions] = useState<Trans[] | []>(transaction);
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
                    <ReceiptLongOutlinedIcon className={classes.headerIcon} />
                    <Typography variant="h5">Your Transactions</Typography>
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
            {transactions.length ? transactions.map((trans) => (
                <Grid item xs={12} >
                    <Card className={classes.card}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Grid container alignItems="center">
                                    <ArrowRightAltIcon className={trans.income ? classes.cardIcon1 : classes.cardIcon2} />
                                    <Grid direction="column">
                                        <Typography variant="body1" gutterBottom className={classes.key}>Deposit the amount of <span className={classes.val}>Tomans {trans.amount}</span></Typography>
                                        <Typography variant="body1" className={classes.key}>Reference number <span className={classes.val}>{trans.refrence}</span> </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item className={classes.self}>
                                <Typography variant="subtitle2" className={classes.date}>{trans.date}</Typography>
                            </Grid>
                        </Grid>

                        <Grid>

                        </Grid>

                    </Card>
                </Grid>
            ))

                : <Grid item xs={12} >
                    <Alert severity="warning" >Sorry you not have any Transaction yet!</Alert>
                </Grid>

            }
        </Grid>
    )
}

export default Transaction