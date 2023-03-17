class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `http://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAws = true
    server.awsInfo = function () {
        return server.url
    }
    return server
}

function azure(server) {
    server.isAzure = true
    server.port += 500
    return server
}

let s1 = aws(new Server('192.168.0.0', 8080))
let s2 = azure(new Server('192.168.0.1', 8080))
console.log(s1.isAws)
console.log(s1.awsInfo())

console.log(s2.url)