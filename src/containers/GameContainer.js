import { connect } from 'react-redux';
import Game from '../components/Game.jsx';

const mapStateToProps = (state) => {

  console.log(state)
  return {
    info: state.game.info,
    game: state.game.state,
    users: state.users,

    account: state.account
  }
};

export default connect(mapStateToProps)(Game);
