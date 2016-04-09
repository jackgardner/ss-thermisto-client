import io from 'socket.io-client';
export default io('ws://localhost:3000', {
  reconnection: true,
  query: 'gameId=1234'
});
