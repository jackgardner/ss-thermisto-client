import { connect } from 'react-redux';
import Game from '../components/Game.jsx';

const mapStateToProps = (state) => {
  return {
    info: state.game.info,
    game: state.game.state,
    users: state.users
  }
};

export default connect(mapStateToProps)(Game);
