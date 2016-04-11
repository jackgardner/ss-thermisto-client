import io from 'socket.io-client';
export default io('ws://localhost:3000/1001', {
  reconnection: true
});
