import React from 'react';
import axios from 'axios';


class UserForm extends React.Component {
    handleSubmit = (evt) => {
        evt.preventDefault();
        const payload = {};
        payload.first_name = evt.target.first_name.value;
        payload.id = evt.target.id.value;
        payload.avatar = evt.target.avatar.value;
        axios
            .post('http://localhost:9000/users', payload)
            .then((response) => this.props.onSubmitSuccess())
            .catch((error) => console.log(error));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="first_name" />
                <input name="id" type="number" />
                <input name="avatar" />
                <button> Submit </button>
            </form>
        )
    }
}

export default UserForm;
