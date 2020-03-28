const socket = io('http://localhost:5000')

socket.on('sConnectionReply', (data)=>{
    console.log(data);
    socket.emit('cConnectionReply', {data:'Dude!!! This is awesome'});
});