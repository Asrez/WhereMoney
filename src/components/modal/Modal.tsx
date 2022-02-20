import React from 'react';
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
import { Checkbox } from '@mui/material';
import NumberFormat from 'react-number-format';
import useStyles from './styles.js'
import icons from '../../util/icons'


interface ParentCompProps {
    title: string;
    icon: JSX.Element;
    vari: "outlined" | "contained"
}

const Modal: React.FC<ParentCompProps> = ({ title, icon, vari }) => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('income');
    const [iconSelect, setIconSelect] = React.useState('book');
    const [checked, setChecked] = React.useState(true);

    const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    const handleChangeIconSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIconSelect((event.target as HTMLInputElement).value);
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
        console.log({
            name: data.get('name'),
            amount: data.get('amount') && parseFloat((data.get('amount') as string).replace(/,/g, '')),
            description: data.get('description'),
            type: data.get('radVal'),
            check: data.get('check'),
            iconSelect: data.get('iconSelect'),
        });
    };
    return (
        <div>
            <Button variant={vari} startIcon={icon} onClick={handleClickOpen}>
                {title}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
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
                            <FormLabel  id="demo-row-radio-buttons-group-label">Type</FormLabel>
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
                                    icon={<icon.icon className={classes.icon} />}
                                    checkedIcon={<icon.icon className={classes.iconSelected} />}
                                    value={icon.value}
                                    disableRipple
                                />
                            ))}

                        </RadioGroup>



                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </div >
    );
}

export default Modal
