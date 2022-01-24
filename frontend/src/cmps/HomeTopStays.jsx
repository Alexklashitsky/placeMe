import { Component } from 'react';
import { connect } from 'react-redux';
import { loadStays } from '../store/stay.action.js';
import { StayList } from './StayList';


class _HomeTopStays extends Component {
  state = {};
  componentDidMount() {
    this.props.loadStays();
  }
  render() {
    if (!this.props.stays) return 'no stays';

    return (
    <section className='center-layout'>
      <StayList stays={this.props.stays} />
    </section>
    );
  }
}

function mapStateToProps({ staysModule }) {
  return {
    stays: staysModule.stays,
  };
}
const mapDispatchToProps = {
  loadStays,
};

export const HomeTopStays = connect(mapStateToProps, mapDispatchToProps)(_HomeTopStays);
