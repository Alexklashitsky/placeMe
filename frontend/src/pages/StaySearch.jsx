import { Component } from 'react';
import { connect } from 'react-redux';
import { loadStays } from '../store/stay.action.js';
import { StayList } from '../cmps/StayList';
import { StayFilter } from '../cmps/StayFilterContainer';

class _StaySearch extends Component {
  state = {};
  componentDidMount() {
    this.props.loadStays();
  }

  render() {
    if (!this.props.stays) return 'no stays';

    return (
      <section>
        <StayFilter />
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

export const StaySearch = connect(mapStateToProps, mapDispatchToProps)(_StaySearch);
