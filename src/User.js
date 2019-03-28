import React from 'react';

class User extends React.Component {
    render() {
        const { imageUrl, id, name } = this.props;
        return (
            <div>
                <img src={imageUrl} alt="user" />
                <h1>{id}</h1>
                <h3>{name}</h3>
            </div>
        )
    }
}

export default User;
