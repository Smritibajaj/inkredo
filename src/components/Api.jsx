import React, { useState } from 'react';
import '../stylesheets/API.scss';
import logo from '../images/Vector.png';
import CodeFormat from './CodeFormat';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ScrollHandler from "./ScrollHandler";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
import DynamicTable from './DynamicTable';
import CodeHeaders from './CodeHeaders';
import { menuItems, borrower, create } from '../i18n/menuItems';
import Introduction from './Introduction';
import Authentication from './Authentication';
import CreateBorrower from './CreateBorrower';
import SupportBanks from './SupportBanks';
import Errors from './Errors';
import ParserV1 from './ParserV1';
import ParserV2 from './ParserV2';
import ExtractPii from './ExtractPii';
import GenerateExcel from './GenerateExcel';
import AnalyseStatement from './AnalyseStatement';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: 'white',
  },
  toolbar: theme.mixins.toolbar,
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center'
  },
  toolbar1: {
    justifyContent: 'space-around',
  },
  links: {
    color: 'black'
  },
  menuItemss: {
    borderBottom: 'none',
    color: 'red'
  },
  type: {
    padding: '4px',
  },
  paper: {
    border: 'solid 1px black',
    width: '500px',
  }
}));



export default function API() {
  const classes = useStyles();
  const [listState, updateListState] = useState([]);


  const handleClick = function (item) {
    updateListState(prevState => (
      { [item]: !prevState[item] }
    ))
  }

  const handleListItems = function (children) {
    const list = children.map(suboptions => suboptions.children ? (
      <div key={suboptions.name}>
        <ListItem
          button
          onClick={e => handleClick(suboptions.name)}
        >
          <ListItemText
            inset
            primary={suboptions.name}
          />
          {listState[suboptions.name] ?
            <ExpandLess /> :
            <ExpandMore />}
        </ListItem>
        <Collapse
          in={listState[suboptions.name]}
          timeout="auto"
          unmountOnExit
        >
          {handleListItems(suboptions.children)}
        </Collapse>
      </div>
    ) : (
        <div key={suboptions.name}>
          <ListItem
            button
            key={suboptions.name}
          >
            <Link
              to={suboptions.url}
              className={classes.links}>
              <ListItemText
                inset
                primary={suboptions.name}
              />
            </Link>
          </ListItem>
        </div>
      ))
    return list;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar className={classes.toolbar1}>
          <div className={classes.logo}>
            <img alt="logo" src={logo} />
            <h6 className="Logo-text">INKREDO</h6>
            <Typography variant="h6" className={classes.type} noWrap>API</Typography>
          </div>
          <Paper component="form" className={classes.paper} >
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search the docs"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
          </Paper>

          <TextField
            id="filled-select-currency"
            select
            label=""
            value={'V1.0'}
          >
            {['V1.0', 'V1.1'].map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <ScrollHandler />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            {handleListItems(menuItems.data)}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid item xs={10}>
            <div className="boxes" id={`#introduction`}>
              <Introduction />
            </div>
            <div className="boxes" id={`#authentication`}>
              <Authentication />
            </div>
            <div className="boxes" id={`#bank-statement-analysis`}>
              <h1 className="titles">Bank statement analysis</h1>
                <div id={`#create-borrower`}><CreateBorrower /></div>
                <div id={`#supported-banks`}> <SupportBanks /></div>
                <div id={`#parser-v1`}><ParserV1 /></div>
                <div id={`#parser-v2`}><ParserV2 /></div>
                <div id={`#reanalyse-bank-statement`}><AnalyseStatement /></div>
                <div id={`#generate-excel-report-link`}><GenerateExcel /></div>
                <div id={`#extract-pii`}><ExtractPii /></div>
            </div>
            <div className="boxes" id={`#errors`}>
              <Errors />
            </div>
          </Grid>
        </main>
      </BrowserRouter>
    </div>
  );
}