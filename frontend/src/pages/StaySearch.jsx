import { Component } from 'react'
import { connect } from 'react-redux'
import { stayService } from '../services/stay.service.js'
import { loadStays } from '../store/stay.action.js'
import { StayList } from '../cmps/StayList'



class _StaySearch extends Component {
    state = {}

    componentDidMount() {
        // stayService._createDemoData()
        this.props.loadStays()

    }

    render() {
        if (!this.props.stays) return "no stays"
        console.log('this.props.stays:', this.props.stays);

        return (
            <section>
                <h1>StaySearch111</h1>
                <StayList stays={this.props.stays} />
            </section>

        )
    }

}

function mapStateToProps({ staysModule }) {
    return {
        stays: staysModule.stays
    }
}
const mapDispatchToProps = {
    loadStays
}


export const StaySearch = connect(mapStateToProps, mapDispatchToProps)(_StaySearch)