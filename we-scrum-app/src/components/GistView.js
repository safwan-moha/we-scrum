import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchContainer from '../containers/LoginContainer';
import ResultCard from './ResultCard';
import ButtonsCard from './ButtonsCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/Assessment';
import { CssBaseline, Typography } from '@material-ui/core';


const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`
  },
  loader: {
    marginLeft: '46%',
    marginTop: '10px'
  },
  resultDivMove: {
    margin: '0 auto',
    marginTop: '20px'
  },
  resultDiv: {
    transition: 'margin 700ms',
    margin: '0 auto',
    marginTop: '40px'
  },
  animater: {
    marginTop: '20px'
  },
  animaterTop: {
    marginTop: '20px'
  },
  defaultText: {
    color: '#555555',
    width: '100%',
    textAlign: 'center',
    marginTop: '70px',
  },
});

const GistView = (props) => {
  const { classes, ticketList, loading, logged, link, createExcel, sprint, username } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon style={styles.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            WeScrum
      </Typography>
        </Toolbar>
      </AppBar>


      <div className={classes.container}>
        <div
          className={classes.resultDiv}
          style={{ gridColumnEnd: 'span 12' }}>
          {!logged
            ? <SearchContainer />
            : null}
          {loading
            ? <CircularProgress className={classes.loader} />
            : null}
          {logged
            ? ticketList.length > 0
              ? <div>
                <ButtonsCard link={link} createExcel={() => createExcel({ ticketList, sprint, username })} />
                <ResultCard ticketList={ticketList} />
              </div>
              : <div className={classes.defaultText}>{'No any matches'}</div>
            : null}
        </div>
      </div>
    </React.Fragment>

  )
}

GistView.propTypes = {
  onClick: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default withStyles(styles)(GistView);
