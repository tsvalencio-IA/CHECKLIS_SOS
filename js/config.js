'use strict';

window.CHECKLIST_APP = {
  version: '15.21.1',
  appName: 'OFICIN-IA Checklist',
  appId: 'br.com.thiaguinhosolucoes.oficinia.checklist.v15githubpages',
  footer: 'Powered by thIAguinho Soluções Digitais',
  saasBaseUrl: 'https://tsvalencio-ia.github.io/SAAS-2/', // SaaS oficial atual: repositório tsvalencio-IA/SAAS-2
  firebaseConfig: {
    apiKey: 'AIzaSyBqIuCsHHuy_f-mBWV4JBkbyOorXpqQvqg',
    authDomain: 'hub-thiaguinho.firebaseapp.com',
    projectId: 'hub-thiaguinho',
    storageBucket: 'hub-thiaguinho.firebasestorage.app',
    messagingSenderId: '453508098543',
    appId: '1:453508098543:web:305f4d48edd9be40bd6e1a'
  },
  saasFallbackUrls: [
    'https://tsvalencio-ia.github.io/SAAS-2/'
  ],
  rolesPermitidos: [
    'mecanico','mecânico','tecnico','técnico','gerente','gestor','dono','proprietario','proprietário',
    'administrativo','admin','admin master','adminmaster','admin_master','admin-oficina','admin oficina','superadmin','master'
  ],
  rolesGestao: ['gerente','gestor','dono','proprietario','proprietário','administrativo','admin','admin master','adminmaster','admin_master','admin-oficina','admin oficina','superadmin','master']
};
