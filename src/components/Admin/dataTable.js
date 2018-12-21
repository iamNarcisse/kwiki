import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { getEntireCustomers } from '../../services/apiRequest';

class DatatablePage extends React.Component {

  state = {
    customers: []
  }

  componentDidMount() {
    this.getCustomers();
  }

  getCustomers = () => {
    getEntireCustomers()
      .then(axiosResponse => {
        if (axiosResponse && axiosResponse.data && axiosResponse.data.data) {
          this.setState({
            customers: axiosResponse.data.data
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    const datum = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Email',
          field: 'position',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Address',
          field: 'office',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Phone Number',
          field: 'age',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Registered',
          field: 'date',
          sort: 'asc',
          width: 150
        },
      ],

      rows: [
        {
          name: 'yea',
          position: 'System Architect',
          office: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
        },
        {
          name: 'Garrett Winters',
          position: 'Accountant',
          office: 'Tokyo',
          age: '63',
          date: '2011/07/25',
        },
      ]
    };

    return (
      <MDBDataTable
        striped
        bordered
        small
        data={datum}
      />
    );
  }
}

export default DatatablePage;