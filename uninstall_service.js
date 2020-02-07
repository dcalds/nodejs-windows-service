var Service = require('node-windows').Service;

var svc = new Service({
    name:'aaaaa_service',
    description: 'Serviço de teste GRUPO NATIVO',
    script: 'C:\\wservice2\\script\\watch.js'
});

svc.on('uninstall',function(){
    console.log('Serviço desistalado.');
});

svc.uninstall();