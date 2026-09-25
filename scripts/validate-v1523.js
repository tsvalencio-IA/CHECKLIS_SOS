const fs=require('fs');
function fail(m){throw new Error(m)}
const model=JSON.parse(fs.readFileSync('data/checklist-model.json','utf8')),js=fs.readFileSync('js/checklist.js','utf8'),html=fs.readFileSync('index.html','utf8'),cfg=fs.readFileSync('js/config.js','utf8'),sw=fs.readFileSync('service-worker.js','utf8');
const sections=model.secoes||[],items=sections.flatMap(s=>Array.isArray(s.itens)?s.itens:[]);
if(sections.length!==16||items.length!==171) fail('Modelo incompleto: '+sections.length+' seções / '+items.length+' itens');
if(items.some(x=>!x||typeof x!=='object'||!x.id||!x.titulo||!Array.isArray(x.acoes))) fail('Item inválido'); if(new Set(items.map(x=>x.id)).size!==items.length) fail('IDs duplicados');
for(const req of ['MODEL_DOC_ID','checklis_sos_v15','readSaasSession','buscarOficinaComoSaas','adminEmails','autosaveRealtime','startLiveChecklistFromConsulta','dictateToItem','obsPorVoz','gerarPdfSalvo','normalizeSavedChecklistForReport','CHECKLIST — AÇÕES PARA A EQUIPE','CHECKLIST TÉCNICO — RESUMO PROFISSIONAL']) if(!js.includes(req)) fail('Recurso ausente: '+req);
if(js.includes("collection('checklistModelos').doc('default').set")) fail('Gravação proibida no modelo default'); if(/(?<!\$)\$\('\[data-/.test(js)) fail('Seletor data-* usa $ em vez de $$');
if(!html.includes('V15.23.1')||!html.includes('v=15.23.1')||!cfg.includes("version: '15.23.1'")||!sw.includes('v15.23.1-definitivo')) fail('Versão/cache inconsistente');
console.log(JSON.stringify({ok:true,secoes:16,itens:171,modeloRemoto:'checklis_sos_v15',versao:'15.23.1'},null,2));
