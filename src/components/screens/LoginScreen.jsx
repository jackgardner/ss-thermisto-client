import React from 'react';
import request from 'superagent';
import store from '../../stores/GameStore';
import { USER_AUTH } from '../../actions/gameActions';

class LoginScreen extends React.Component {

  constructor() {

    super();

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(e) {
    e.preventDefault();
    request
      .post('http://localhost:3000/login')
      .send({ email: this.refs.email.value , password:  this.refs.password.value })
      .end(function (err, response) {
        console.log(arguments);

        store.dispatch({ type: 'USER_LOGIN', account: response.body })
      });


  }

  render () {
    return (<div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
            <div className="content">
              Log-in to your account
            </div>
        </h2>
        <form className="ui large form" onSubmit={this.onLogin}>
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input ref="email" type="text" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input ref="password" type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <input type="submit" className="ui fluid large teal submit button" value="Login"/>
          </div>

          <div className="ui error message"></div>

        </form>

        <div className="ui message">
          New to us? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>);
  }
}


export default LoginScreen;
