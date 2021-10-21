import * as React from 'react';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

const theme = createTheme();

const colors = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: deepPurple[900],
        },
    },
});

const useStyles = makeStyles({
    form: {
        width: '100%',
        marginBlockEnd: theme.spacing(3)
    },
    button: {
        marginBlockStart: theme.spacing(3)
    }
});

const SignUp = () => {
    const style = useStyles();

    return (
        <form className={style.form}>
            <ThemeProvider theme={colors}>
                <TextField
                    fullWidth
                    autoFocus
                    color='primary'
                    margin='normal'
                    variant='filled'
                    size='small'
                    label='Name'
                    name='name'
                />
                <TextField
                    fullWidth
                    color='primary'
                    margin='normal'
                    variant='filled'
                    size='small'
                    label='Email'
                    name='email'
                />
                <TextField
                    fullWidth
                    type='password'
                    color='primary'
                    margin='normal'
                    variant='filled'
                    size='small'
                    label='Password'
                    name='password'
                />
                <TextField
                    fullWidth
                    type='password'
                    color='primary'
                    margin='normal'
                    variant='filled'
                    size='small'
                    label='Confirm password'
                    name='password2'
                />
                <Button fullWidth variant="contained" color='primary' className={style.button}>
                    SIGN UP
                </Button>
            </ThemeProvider>
        </form>
    );
}

export default SignUp;
