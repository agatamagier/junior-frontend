import React, { Component } from 'react';
import { ExamplePreview, Title } from "components/ExamplePreview";
export class User extends Component {
    state = {
        user: []
    }
    componentDidMount() {
        const  xhr = new XMLHttpRequest;
        xhr.open('GET', 'https://api.github.com/users/agatamagier', true);
        xhr.onload = () => {
          console.log(xhr.response);
          if(xhr.status === 200) {
              const user = JSON.parse(xhr.response);
              this.setState({user: user})
          }
        }
        xhr.send();
    };

    render() {
        const user = this.state.user;
        return (
            <div>
                <Title>{user.name}</Title>
                <ExamplePreview src= {user.avatar_url} />
                <image src={user.avatar_url} />
            </div>
        );
    }
}

