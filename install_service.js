var Service = require('node-windows').Service;

var svc = new Service({
    name:'aaaaa_service',
    description: 'Serviço de teste GRUPO NATIVO',
    script: 'C:\\wservice2\\script\\watch.js'
});

svc.on('install', function(){
    svc.start();
});

svc.install();