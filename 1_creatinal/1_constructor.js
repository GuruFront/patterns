// function Server(name, ip){
//     this.name = name
//     this.ip = ip
// }
//
// Server.prototype.getUrl = function (){
//     return `http://${this.ip}:80`
// }


class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `http://${this.ip}:80`
    }
}


const aws = new Server('AWS German', '192.168.0.0')
console.log(aws.getUrl())