import React, {Component} from 'react';
import { connect } from 'react-redux';
import { DATASET_CHANGE } from '../../reduxstore/constants/actionTypes';
import { debounce } from 'throttle-debounce';
import agent from '../../reduxstore/agent';

import PropTypes from 'prop-types';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  // NavItem,
  // NavLink,
  // Badge,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

// import HeaderDropdown from './HeaderDropdown';

class Header extends Component {
  static propTypes = {
    onLoad: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.debounced = debounce(500, (value) => {
      console.log('Val', value);
    });
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
    this.props.onLoad(Promise.all([
      agent.requests.get('/asdasd').then(res => res.body)
    ]));
    console.log('requests', agent.requests);
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
          <Form action="" method="post" inline>
            <FormGroup>
              <Input type="text" id="exampleInputName2" placeholder="Mandante" onChange={(event) => {
                const val = event.target.value;
                this.debounced(val);
              }} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="exampleInputEmail2" className="px-1">&nbsp;</Label>
              <Input type="email" id="exampleInputEmail2" placeholder="Lotto"/>
            </FormGroup>
          </Form>
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

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: DATASET_CHANGE, payload }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
