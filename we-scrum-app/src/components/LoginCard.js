import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    paper: {
        width: '350px',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 5,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: 1,
    },
    submit: {
        margin: "3, 0, 2",
    }
});

class LoginCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'safwanm',
            email: 'safwanmoha@gmail.com',
            password: '',
            sprint: 'Titans - Sprint 10'
        }
    }

    handleChange = name => event => {
        const { value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { classes, error, onLoginClicked } = this.props;
        const { username, email, password, sprint } = this.state;

        return (
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in to Sprint
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={username}
                        onChange={this.handleChange('username')}
                        id="username"
                        label="Jira Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={email}
                        onChange={this.handleChange('email')}
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        value={password}
                        onChange={this.handleChange('password')}
                        name="password"
                        label="Jira Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        value={sprint}
                        onChange={this.handleChange('sprint')}
                        fullWidth
                        name="sprint"
                        label="Sprint Name"
                        type="text"
                        id="sprint"
                        autoComplete="current-sprint"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        fullWidth
                        onClick={() => onLoginClicked({ username, email, password, sprint })}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Check In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Forgot password?"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                <div style={{color: 'red'}}>{error ? 'ERROR!' : ''}</div>
            </div>
        )
    }
}

export default withStyles(styles)(LoginCard);
