import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import './App.css';
import UserForm from './UserForm';

class App extends Component {
  state = {
    users: [],
    loading: true,
  };

  componentDidMount() {
    axios.get('http://localhost:9000')
      .then((response) => {
        this.setState({
          users: response.data.users,
          loading: false
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onUpdateUsers = () => {
    axios.get('http://localhost:9000')
      .then((response) => {
        this.setState({
          users: response.data.users,
          loading: false
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderUsers = () => {
    const { users } = this.state;
    const userComponents = users.map((user) => {
      return (
        <User key={user.id} imageUrl={user.avatar} id={user.id} name={user.first_name} />
      )
    });
    return userComponents;
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <div>Loading..</div>;
    }
    return (
      <div>
        {this.renderUsers()}
        <UserForm onSubmitSuccess={this.onUpdateUsers} />
      </div>
    );
  }
}

export default App;
