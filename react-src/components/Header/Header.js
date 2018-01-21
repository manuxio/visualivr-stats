import React, {Component} from 'react';
import { connect } from 'react-redux';
import { DATASET_CHANGE } from '../../reduxstore/constants/actionTypes';
import { debounce } from 'throttle-debounce';
import agent from '../../reduxstore/agent';
import moment from 'moment';

import PropTypes from 'prop-types';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  // NavItem,
  // NavLink,
  // Badge,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

// import HeaderDropdown from './HeaderDropdown';

class Header extends Component {
  static propTypes = {
    setDataset: PropTypes.func.isRequired,
    mandato: PropTypes.any,
    idcliente: PropTypes.any,
    start: PropTypes.date,
    end: PropTypes.date
  }

  constructor(props) {
    super(props);
    console.log('Props', props);
    this.state = {
      idcliente: props.idcliente,
      mandato: props.mandato,
      start: props.start || new Date(),
      end: props.end || new Date()
    };
    console.log('This.state', this.state);
  }

  componentWillReceiveProps(newProps) {
    console.log('Will Receive New Props at header!', newProps);
    if (
      newProps.mandato !== this.state.mandato ||
      newProps.idcliente !== this.state.idcliente ||
      typeof newProps.start !== 'undefined' && (!this.state.start || newProps.start.toString() !== this.state.start.toString()) ||
      typeof newProps.end !== 'undefined' && (!this.state.end || newProps.end.toString() !== this.state.end.toString())
    ) {
      console.log('Setting state!');
      this.setState({
        mandato: newProps.mandato || '',
        idcliente: newProps.idcliente || '',
        start: newProps.start,
        end: newProps.end
      });
    } else {
      console.log('Not setting state!');
    }
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  componentWillMount() {
  }

  setDataset() {
    this.props.setDataset(agent.requests.post('/dataset', {
      mandato: this.state.mandato,
      idcliente: this.state.idcliente,
      start: this.state.start,
      end: this.state.end
    }));
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Nav className="d-md-down-none" navbar>
          <Form action="" method="post" inline>
            <FormGroup>
              <Label htmlFor="idCliente" className="px-1"></Label>
              <Input value={this.state.idcliente} type="text" id="idCliente" placeholder="Cliente" onChange={(e) => {
                this.setState({
                  idcliente: e.target.value
                });
              }} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="idLotto" className="px-1">&nbsp;</Label>
              <Input value={this.state.mandato} type="text" id="idLotto" placeholder="Mandato" onChange={(e) => {
                this.setState({
                  mandato: e.target.value
                });
              }} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="startDate" className="px-1">Inizio</Label>
              <Input value={moment(this.state.start).format('YYYY-MM-DD')} type="date" name="start" id="startDate" placeholder="datetime placeholder" onChange={(e) => {
                console.log('Start', e.target.value);
                let s = moment(e.target.value, 'YYYY-MM-DD').startOf('day').toDate();
                let end = this.state.end;
                if (!moment(e.target.value, 'YYYY-MM-DD').isValid()) {
                  s = '';
                  end = '';
                } else if (moment(s).isAfter(end)) {
                  end = moment(s).endOf('day');
                }
                console.log('Setting start', s);
                this.setState({
                  start: s,
                  end
                });
              }} />
              <Label htmlFor="endDate" className="px-1">Fine</Label>
              <Input value={moment(this.state.end).format('YYYY-MM-DD')} type="date" name="end" id="endDate" placeholder="datetime placeholder" onChange={(e) => {
                console.log('End', e.target.value);
                let end = moment(e.target.value, 'YYYY-MM-DD').endOf('day').toDate();
                let start = this.state.start;
                if (!moment(e.target.value, 'YYYY-MM-DD').isValid()) {
                  end = '';
                  start = '';
                } else if (moment(end).isBefore(start)) {
                  start = moment(end).startOf('day');
                }
                this.setState({
                  start,
                  end
                });
              }} />
            </FormGroup>
            <FormGroup>
              <Button type="button" onClick={() => {
                this.setDataset();
              }} style={{ marginLeft: '10px' }}>Imposta</Button>
            </FormGroup>
          </Form>
          { /*
          <NavItem className="px-3">
            <NavLink href="#">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Users</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
          */ }
        </Nav>
        <Nav className="ml-auto" navbar>
          {
            /*
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          <HeaderDropdown/>
            */
          }
        </Nav>
        { /*
        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        */ }
        <span>&nbsp;</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    mandato: state.dataset.mandato,
    idcliente: state.dataset.idcliente,
    end: state.dataset.end,
    start: state.dataset.start
  };
};

const mapDispatchToProps = dispatch => ({
  setDataset: (payload) =>
    dispatch({ type: DATASET_CHANGE, payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
