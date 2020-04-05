const socket = io('http://localhost:5000')

socket.on('connect', () => console.log(socket.id))

socket.on('sConnectionReply', (data)=>{
    console.log(data);
    socket.emit('cConnectionReply', {data:'Dude!!! This is awesome'});
});

//Server emits ping event every 25000 ms
//Client listens the ping event and emit the pong event
//Server emediatly emits the pong event with the latency
//Client listens to the servers pong event

socket.on('ping',() => console.log('Ping from server'));
socket.on('pong', (latency) => console.log('Pong from server with latency', latency));