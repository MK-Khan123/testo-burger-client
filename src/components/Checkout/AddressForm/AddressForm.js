import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useReduxState from '../../../hooks/useReduxState';

const AddressForm = () => {

    const {
        handleName,
        handleAddressLine,
        handleZipCode,
        handleCity
    } = useReduxState();

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleName(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Address line"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleAddressLine(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleCity(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        variant="standard"
                        onChange={(event) => handleZipCode(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="primary" name="saveAddress" value="yes" defaultChecked />}
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default AddressForm;