import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Table, Link } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

    chip: {
        marginRight: '5px',
    },

    card: {
        width: '100%',
        margin: '8px',
    },

    loader: {
        float: 'right'
    },

    userAvatar: {
        width: 30,
        height: 30,
        margin: '3px',
        marginBottom: '7px'
    },

    avatar: {
        fontSize: '11px',
        color: '#fff',
        backgroundColor: '#3f51b5',
    },
});

class ResultCard extends React.Component {

    render() {
        const { ticketList, classes } = this.props;

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Ticket</TableCell>
                        <TableCell>Summary</TableCell>
                        <TableCell>Assignee</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ticketList.map(ticket => (
                        <TableRow hover key={ticket.num}>
                            <TableCell align="right" component="th" scope="row"><Link target="_blank" href={`https://jira.leapset.com/browse/${ticket.num}`}>
                                {ticket.status === 'Resolved' || ticket.status === 'Dev Complete'
                                    ? <strike>{ticket.num}</strike>
                                    : ticket.num}
                            </Link></TableCell>
                            <TableCell>{ticket.summary}</TableCell>
                            <TableCell>{ticket.assignee}</TableCell>
                            <TableCell>{ticket.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default withStyles(styles)(ResultCard);
