import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle
} from 'reactstrap';
import TrafficChart from '../../components/TrafficChart';

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
          <Col>
            <Card>
              <CardBody>
                <CardTitle className="mb-0">Sessions</CardTitle>
                <TrafficChart />
              </CardBody>
            </Card>
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
