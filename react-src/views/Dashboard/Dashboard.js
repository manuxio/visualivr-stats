import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import TimeChart from '../../components/TimeChart';
import CardBox from '../../components/CardBox';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <CardBox dataUrl="vivr/openedfilesalltime" icon="fa fa-files-o" className="text-white bg-primary" title="Contratti aperti" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <CardBox dataUrl="vivr/verifiedcodesalltime" icon="icon-user-following" className="text-white bg-warning" title="Contratti con autenticazione" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <CardBox dataUrl="vivr/failedpaymentsalltime" icon="icon-ban" className="text-white bg-danger" title="Contratti con pagamenti falliti" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <CardBox dataUrl="vivr/succededpaymentsalltime" icon="fa fa-credit-card" className="text-white bg-success" title="Contratti con pagamenti effettuati" />
          </Col>
        </Row>
        <Row>
          <Col>
            <TimeChart
              refreshInterval={10000}
              type="line"
              height={400}
              title="Pratiche Visual IVR"
              description="Pratiche aperte, autenticazioni concluse, pagamenti"
              dataUrls={[
                {
                  name: 'Contratti aperti',
                  url: '/vivr/openedfiles',
                  color: 'red'
                },
                {
                  name: 'Debitori autenticati',
                  url: '/vivr/verifiedcodes',
                  color: 'grey'
                },
                {
                  name: 'Pagamenti conclusi (pos o neg)',
                  url: '/vivr/completedpayments',
                  color: 'black'
                },
                {
                  name: 'Pagamenti falliti',
                  url: '/vivr/failedpayments',
                  color: 'navy'
                },
                {
                  name: 'Pagamenti riusciti',
                  url: '/vivr/succededpayments',
                  color: 'green'
                }
              ]}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

export default connect(mapStateToProps)(Dashboard);
