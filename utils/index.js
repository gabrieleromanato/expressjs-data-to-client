'use strict';

module.exports = {
    getIP(request) {
        let realIP = request.get('x-real-ip');
        let ip = '';
        if (realIP) {
            ip = realIP;
        } else {
            ip = request.socket.remoteAddress;
        }
        return ip;
    }
};