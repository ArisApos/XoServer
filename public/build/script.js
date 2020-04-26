const socket = io('http://localhost:5000')

let socketData;

socket.on('connection', (data) => { console.log(socket.id, data);socketData = data;})

socket.emit('UPDATE_PLAYERS', {
    message: 'HOHOHOHOH from super simply client(sun of server)',
    data: { name: 'SUN', password:'123', token: '98y45438758930195y489hrjk4lnk98y34t' }
   });

// Server emits ping event every 25000 ms
// Client listens the ping event and emit the pong event
// Server emediatly emits the pong event with the latency
// Client listens to the servers pong event

socket.on('ping',() => console.log('Ping from server'));
socket.on('pong', (latency) => console.log('Pong from server with latency', latency));