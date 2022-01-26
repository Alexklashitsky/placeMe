import { Component } from 'react';
import { connect } from 'react-redux';
import { loadOrders } from '../../store/order.action';

class _UserOrders extends Component {
  state = {};
  componentDidMount() {
    this.props.loadOrders();
  }

  render() {
    if (!this.props.orders) return 'no orders';
    console.log('this.props.orders:', this.props.orders);

    return (
      <div>
        <section>
          <h1>Order</h1>
          <pre>{this.props.orders[0]._id}</pre>
          <pre>{this.props.orders[0].buyer.fullname}</pre>
          <pre>{this.props.orders[0].stay.name}</pre>
        </section>
      </div>
    );
  }
}

function mapStateToProps({ ordersModule }) {
  return {
    orders: ordersModule.orders,
  };
}
const mapDispatchToProps = {
  loadOrders,
};

export const UserOrders = connect(mapStateToProps, mapDispatchToProps)(_UserOrders);
