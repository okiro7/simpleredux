import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
    fetchTodos,
    getAllTickets
  } from '../store/actions'
import Ticket from './Ticket';

class  TicketList extends Component {

    componentDidMount() {
        const { getTodos } = this.props
        getTodos()
      }



    render() { 
        const { tickets = []} = this.props;
        return (  
        <>
          {
            tickets.map(ticket => (
              <Ticket
                key={ticket.idCA}
              
                {...ticket}
              />
            ))
          }
        </>
      );
    }
}

/**
 * Typechecking props
 */
TicketList.propTypes = {
    tickets: PropTypes.arrayOf(
      PropTypes.shape({
        idCA: PropTypes.string,
        refNum: PropTypes.string,
        description: PropTypes.string,
        openDate: PropTypes.string,
        status: PropTypes.string
    })
    ),
    getTodos: PropTypes.func.isRequired,
  }

/**
 * @description simple object, which will be combined in the props of the component
 * @param {*} state The store state.
 */
const mapStateToProps = (state, ownProps) => ({
    tickets: getAllTickets(state.tickets)
  })
  
  const mapDispatchToProps = {
    getTodos: fetchTodos
  };
 
export default connect(mapStateToProps, mapDispatchToProps)(TicketList)