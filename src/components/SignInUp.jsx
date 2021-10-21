import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container, Paper, Tabs, Tab, Typography, Box, Divider, Chip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

// Importar componentes
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import SignInGoogle from '../components/SignInGoogle';

// Importar imagenes
import fondo from '../images/fondo.png';
import logo from '../images/logo.png';

const theme = createTheme();

const useStyles = makeStyles({
    root:{
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container: {
        opacity: '0.9',
        height: '75%',
        marginTop: theme.spacing(8),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(3),
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: '70%'
    }
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SingInUp = () => {
    const style = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container component='main' className={style.root}>
        <Container component={Paper} elevation={5} maxWidth='xs' className={style.container}>
            <div className={style.div}>
            <Box sx={{ width: '100%' }}>
                <figure className={style.images}>
                    <img className={style.logo} src={logo} alt="Logo"/>
                </figure>
                <Box>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="SIGN IN" {...a11yProps(0)} />
                        <Tab label="SIGN UP" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {/* Componente de Sign In */}
                    <SignIn/>
                    <Divider>
                        <Chip label="or" />
                    </Divider>
                    {/* Componente de Google */}
                    <SignInGoogle/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {/* Componente de Sign Up */}
                    <SignUp/>
                </TabPanel>
            </Box>
            </div>
        </Container>
        </Grid>
    );
}

export default SingInUp;
