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
        if (err) throw err;
        store.dispatch(response.body)
      });


  }

  render () {

    let error = null;

    if (this.props.auth.error) {
      error = (<div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">
          Oops
        </div>
        <p>{this.props.auth.error}
        </p></div>);
    }
    return (<div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
            <div className="content">
              Log-in to your account
            </div>
        </h2>
        {error}
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
