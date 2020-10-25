import React, { Component } from 'react';
import { ExamplePreview, Title } from "components/ExamplePreview";
import { LoadSpinner } from "components/Loader";
export class User extends Component {
    state = {
        user: [],
        loading: true
    }
    hideLoader = () => {
        this.setState({ loading: false });
      }
    
      showLoader = () => {
        this.setState({ loading: true });
      }
    componentDidMount() {
        this.showLoader();
        const  xhr = new XMLHttpRequest;
        xhr.open('GET', 'https://api.github.com/users/agatamagier', true);
        xhr.onload = () => {
          console.log(xhr.response);
          if(xhr.status === 200) {
              const user = JSON.parse(xhr.response);
              this.setState({user: user})
              this.hideLoader();
          }
        }
        xhr.send();
    };

    render() {
        const user = this.state.user;
        return (
            <div>
                 {(this.state.loading) ? <LoadSpinner />  : null}
                <Title>{user.name}</Title>
                <ExamplePreview src= {user.avatar_url} />
            </div>
        );
    }
}

