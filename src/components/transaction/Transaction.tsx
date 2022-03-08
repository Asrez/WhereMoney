import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Grid, Alert, Card, MenuItem, Select, SelectChangeEvent, Typography, Button } from '@mui/material'
import useStyles from './styles.js'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'; import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Token, Trans } from '../../util/types'



const Transaction: React.FC<Token> = ({ token }) => {
    const classes = useStyles()
    const [select, setSelect] = useState('Today');
    const [transactions, setTransactions] = useState<Trans[] | []>([]);
    const [nextTransactions, setNextTransactions] = useState(true);
    const [page, setPage] = useState(0);


    const handleLoad = () => {
        setPage(prevState => prevState + 1)
    }

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSelect(event.target.value as string);
    };
    useEffect(() => {
        const fetchTransactions = async () => {

            await axios.get(`http://localhost:8090/api/v1/transaction?page=${page}&sort_by=createdDate&sort_dir=desc`, { headers: { 'Authorization': `Bearer ${token}` } })
                .then((res) => {
                    setTransactions(oldArr => [...oldArr, ...res.data])
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
            await axios.get(`http://localhost:8090/api/v1/transaction?page=${page + 1}&sort_by=createdDate&sort_dir=desc`, { headers: { 'Authorization': `Bearer ${token}` } })
                .then((res) => {
                    res.data.length ? setNextTransactions(true) : setNextTransactions(false)

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
        fetchTransactions()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])
    useEffect(() => {
        const fetchTransactions = async () => {

            const trans = await axios.get(`http://localhost:8090/api/v1/transaction?page=0&sort_by=createdDate&sort_dir=desc`, { headers: { 'Authorization': `Bearer ${token}` } })
            setTransactions(trans.data)

        }
        fetchTransactions()
    }, [token])

    return (
        <>
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
                    <Grid item xs={12} key={trans.id} >
                        <Card className={classes.card}>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Grid container alignItems="center">
                                        <ArrowRightAltIcon className={trans.is_income ? classes.cardIcon1 : classes.cardIcon2} />
                                        <Grid>
                                            <Typography variant="body1" gutterBottom className={classes.key}>Deposit the amount of <span className={classes.val}>Tomans {trans.price}</span></Typography>
                                            <Typography variant="body1" className={classes.key}>Reference number <span className={classes.val}>{trans.account_number}</span> </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.self}>
                                    <Typography variant="subtitle2" className={classes.date}>{trans.created_date}</Typography>
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
            <Grid container justifyContent="center" alignItems="center" sx={{ marginTop: '2rem' }}  >
                {/* <Stack spacing={2}>
                    <Pagination count={10} page={page} color="primary" onChange={handleChangePage} />
                </Stack> */}
                <Button disabled={!nextTransactions} onClick={handleLoad}>Load More</Button>
            </Grid>
        </>


    )
}

export default Transaction