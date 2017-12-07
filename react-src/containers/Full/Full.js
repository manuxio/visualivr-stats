import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import { connect } from 'react-redux';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
// import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import StatsDashboard from '../../views/StatsDashboard/';
import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';

import { DATASET_CHANGE } from '../../reduxstore/constants/actionTypes';
import agent from '../../reduxstore/agent';


// Components
import Buttons from '../../views/Components/Buttons/';
import Cards from '../../views/Components/Cards/';
import Forms from '../../views/Components/Forms/';
import Modals from '../../views/Components/Modals/';
import SocialButtons from '../../views/Components/SocialButtons/';
import Switches from '../../views/Components/Switches/';
import Tables from '../../views/Components/Tables/';
import Tabs from '../../views/Components/Tabs/';

// Icons
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';

class Full extends Component {
  static propTypes = {
    datasetLoading: PropTypes.bool,
    getDataset: PropTypes.func.isRequired
  }

  componentDidMount() {
    console.log('this.props', this.props);
    this.props.getDataset(agent.requests.get('/dataset'));
  }

  render() {
    const props = this.props;
    return (
      <div className={`app ${props.datasetLoading ? 'spinning' : ''}`}>
        <Header />
        <div className={`app-body ${props.datasetLoading ? 'd-none' : 'd-block'}`}>
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/dashboard2" name="Dashboard2" component={StatsDashboard}/>
                <Route path="/components/buttons" name="Buttons" component={Buttons}/>
                <Route path="/components/cards" name="Cards" component={Cards}/>
                <Route path="/components/forms" name="Forms" component={Forms}/>
                <Route path="/components/modals" name="Modals" component={Modals}/>
                <Route path="/components/social-buttons" name="Social Buttons" component={SocialButtons}/>
                <Route path="/components/switches" name="Swithces" component={Switches}/>
                <Route path="/components/tables" name="Tables" component={Tables}/>
                <Route path="/components/tabs" name="Tabs" component={Tabs}/>
                <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome}/>
                <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
                <Route path="/widgets" name="Widgets" component={Widgets}/>
                <Route path="/charts" name="Charts" component={Charts}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          { /* <Aside /> */ }
        </div>
        <div className={`app-spinner ${ props.datasetLoading ? 'd-block' : 'd-none' }`}>
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state/* , ownProps*/) => {
  return {
    datasetLoading: state.dataset.changing
  };
};

const mapDispatchToProps = dispatch => ({
  getDataset: (payload) =>
    dispatch({ type: DATASET_CHANGE, payload })
});

export default connect(mapStateToProps, mapDispatchToProps)(Full);
