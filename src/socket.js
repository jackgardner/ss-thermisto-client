import io from 'socket.io-client';
var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzUsImVtYWlsIjoiYWNjb3VudDJAYWNjb3VudHMuY29tIiwicGFzc3dvcmQiOiJwYXNzMiIsImlhdCI6MTQ2MDE0OTk2MSwiZXhwIjoxNDYwMTY3OTYxfQ.qzAnLGLL4qIepuSvfUdtt4SNrjCPml49wpSWVKZhueA';
export default io('ws://localhost:3000', { reconnection: false, query: 'token=' + token });
