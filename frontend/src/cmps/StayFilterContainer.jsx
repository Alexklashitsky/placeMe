import { Component } from 'react';
import { connect } from 'react-redux';
import { TestCal } from './Calendar';
import { GuestsFilter } from './GuestsFilter';
import { AdditionalFilter } from '../cmps/AdditionalFilters';


import 'react-day-picker/lib/style.css';

// import { Button } from "@material-ui/core";

export class _StayFilter extends Component {
  state = {
    currModalShown: '',
    filterBy: {
      specialStay: ''

    }
  };

  onOpenModal(value) {
    this.setState({ currModalShown: value });
  }
  handelFilterByChange = (field, value) => {
    console.log('field:', field);
    console.log('value:', value);




    this.setState(prevState => ({ ...prevState, filterBy: { ...prevState.filterBy, [field]: value } }))


  }

  handelDateChange() {


  }

  render() {
    const { currModalShown } = this.state;
    return (
      <section className='filter-header flex '>
        <div></div>
        {currModalShown && <div className='screen' onClick={() => this.onOpenModal('')}></div>}
        <section className='special-stay '>
          <div onClick={() => this.handelFilterByChange('specialStay', 'Houseboats')}>Houseboats</div>
          <div onClick={() => this.handelFilterByChange('specialStay', 'Beachfront')} >Beachfront</div>
          <div onClick={() => this.handelFilterByChange('specialStay', 'Cabins')} >Cabins</div>
          <div onClick={() => this.handelFilterByChange('specialStay', 'Treehouse')} >Treehouse</div>
          <div onClick={() => this.handelFilterByChange('specialStay', 'Ski in/Ski out')} >Ski in/Ski out</div>
          <div onClick={() => this.handelFilterByChange('specialStay', 'Amazing Places')}>Amazing Places</div>
          <div onClick={() => this.handelFilterByChange('specialStay', 'farms')}>farms</div>
        </section>

        <div className='round-button'>
          {/* <Button variant="outlined">Primary</Button> */}
          <button onClick={() => this.onOpenModal('cal')}>Anytime </button>
          <button onClick={() => this.onOpenModal('guests')}>Guests</button>
          <button onClick={() => this.onOpenModal('filters')}>Filters</button>
        </div>
        <div className={'cal-modal' + ' ' + `${this.state.currModalShown === 'cal' ? ' shown' : ''}`}>
          {/* <CalendarComp /> */}
          <TestCal />
          <button className='save' onClick={() => this.onOpenModal('')}>
            save
          </button>
        </div>
        <div className={'guests-modal' + ' ' + `${this.state.currModalShown === 'guests' ? 'shown' : ''}`}>
          <GuestsFilter handelFilterByChange={this.handelFilterByChange} />
        </div>
        <div className={'filters-modal' + ' ' + `${this.state.currModalShown === 'filters' ? 'shown' : ''}`}>
          <AdditionalFilter handelFilterByChange={this.handelFilterByChange} />
        </div>
      </section>
    );
  }
}

function mapStateToProps({ stayModule }) {
  return {
    // filterBy: stayModule.filterBy

  }
}

const mapDispatchToProps = {

}

export const StayFilter = connect(mapStateToProps, mapDispatchToProps)(_StayFilter)
