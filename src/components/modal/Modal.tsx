import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Alert, Checkbox } from '@mui/material';
import NumberFormat from 'react-number-format';
import useStyles from './styles.js'
import axios from 'axios';
import { Icon, ParentCompProps, Trans } from '../../util/types.js';






const Modal: React.FC<ParentCompProps> = ({ title, icon, vari, token }) => {
    const classes = useStyles()

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(title === 'Add Pay' ? 'outcome' : 'income');
    const [iconSelect, setIconSelect] = useState(1);
    const [checked, setChecked] = useState(true);
    const [error, setError] = useState(false);
    const [icons, setIcons] = useState<Icon[] | []>([]);

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        const fetchIcons = async () => {
            await axios.get(`http://localhost:8090/api/v1/type`, { headers: { 'Authorization': `Bearer ${token}` } })
                .then((res => {
                    for (let index = 0; index < res.data.length; index++) {
                        const icon = res.data[index];
                        icon.name = icon.name.toLowerCase()
                        icon.name = capitalizeFirstLetter(icon.name)
                    }
                    setIcons(res.data)
                }))
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
        fetchIcons()
    }, [token])

    const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const handleChangeIconSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIconSelect(parseInt((event.target as HTMLInputElement).value));
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        const addTrans = async ({ calculate_in_monthly, description, is_income, price, type_id }: Trans) => {
            await axios({
                method: 'post',
                url: 'http://localhost:8090/api/v1/transaction',
                data: {
                    calculate_in_monthly,
                    description,
                    is_income,
                    price,
                    type_id
                },
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(() => { setOpen(false) })
                .catch(() => { setError(true) })
        }
        const form = {
            // name: data.get('name'),
            price: (data.get('amount') && parseFloat((data.get('amount') as string).replace(/,/g, ''))) as number,
            description: data.get('description') as string,
            is_income: data.get('radVal') === 'income' ? true : false,
            calculate_in_monthly: data.get('check') !== null ? true : false,
            type_id: parseInt(data.get('iconSelect') as string),
        }
        console.log(form)
        addTrans({ ...form })

    };
    return (
        <div>
            <Button variant={vari} startIcon={icon} onClick={handleClickOpen}>
                {title}
            </Button>


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {error ? <Alert severity="error">Wrong Input</Alert> : null}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="Name"
                            type="text"
                            id="name"
                            autoComplete="current-name"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            multiline
                            rows={3}
                            name="description"
                            label="Description"
                            type="text"
                            id="description"
                            autoComplete="current-description"
                        />
                        <NumberFormat required
                            sx={{ mt: '1rem' }}
                            fullWidth
                            name="amount"
                            label="Amount"
                            id="amount"
                            autoComplete="current-amount"
                            customInput={TextField}
                            thousandSeparator={true} />

                        <FormControl>
                            <FormControlLabel sx={{ my: '1rem' }}
                                control={<Checkbox checked={checked} name="check"
                                    onChange={handleChangeCheck} color="primary" />}
                                label="Calculate in your monthly transactions"
                            />
                            <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="radVal"
                                id="radVal"
                                value={value}
                                onChange={handleChange}
                                defaultValue="outcome"
                            >
                                <FormControlLabel value="income" control={<Radio />} label="Income" />
                                <FormControlLabel value="outcome" control={<Radio />} label="Outcome" />

                            </RadioGroup>
                        </FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="iconSelect"
                            id="iconSelect"
                            value={iconSelect}
                            onChange={handleChangeIconSelect}
                        >
                            {icons.map(icon => (

                                <Radio sx={{
                                    "&:hover": {
                                        borderRadius: "0",
                                        background: 'none',
                                    },
                                    ":first-child": {
                                        paddingLeft: '0rem',
                                    }
                                }}
                                    icon={<img src={`icons/${icon.icon_name}.svg`} alt="" className={classes.icon} />}
                                    checkedIcon={<img src={`icons/${icon.icon_name}.svg`} alt="" className={classes.iconSelected} />}
                                    value={icon.id}
                                    disableRipple
                                    key={icon.id}
                                />
                            ))}

                        </RadioGroup>



                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div >
    );
}

export default Modal
