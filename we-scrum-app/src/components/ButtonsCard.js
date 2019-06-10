import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: 20,
    },
});

class ResultCard extends React.Component {

    render() {
        const { link, createExcel, classes } = this.props;

        return (
            <div>
                {!link
                    ? <Button variant="contained" color="secondary" onClick={createExcel} className={classes.button}>
                        Create Excel</Button>
                    : <Link target="_blank" href={link}>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Open Excel
                        </Button></Link>
                }
                <Button variant="contained" className={classes.button}>
                    View Changes
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(ResultCard);
