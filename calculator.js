/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"audit","title":"AUDIT (teste de identificação de problemas com álcool)","fields":[["q1","1. Com que frequência você consome bebidas alcoólicas?","sel",{"opts":{"0":"Nunca","1":"Mensalmente ou menos","2":"De 2 a 4 vezes por mês","3":"De 2 a 3 vezes por semana","4":"4 ou mais vezes por semana"}}],["q2","2. Quantas doses alcoólicas você consome tipicamente ao beber? (1 dose: 1 lata de cerveja de 350 mL, 1 taça de vinho de 150 mL ou 1 dose de destilado de 40 mL)","sel",{"opts":{"0":"0 ou 1","1":"2 ou 3","2":"4 ou 5","3":"6 ou 7","4":"8 ou mais"}}],["q3","3. Com que frequência você consome cinco ou mais doses de uma vez?","sel",{"opts":{"0":"Nunca","1":"Menos do que uma vez ao mês","2":"Mensalmente","3":"Semanalmente","4":"Todos ou quase todos os dias"}}],["q4","4. Quantas vezes ao longo dos últimos 12 meses você achou que não conseguiria parar de beber uma vez tendo começado?","sel",{"opts":{"0":"Nunca","1":"Menos do que uma vez ao mês","2":"Mensalmente","3":"Semanalmente","4":"Todos ou quase todos os dias"}}],["q5","5. Quantas vezes ao longo dos últimos 12 meses você, por causa do álcool, não conseguiu fazer o que era esperado de você?","sel",{"opts":{"0":"Nunca","1":"Menos do que uma vez ao mês","2":"Mensalmente","3":"Semanalmente","4":"Todos ou quase todos os dias"}}],["q6","6. Quantas vezes ao longo dos últimos 12 meses você precisou beber pela manhã para poder se sentir bem ao longo do dia após ter bebido bastante no dia anterior?","sel",{"opts":{"0":"Nunca","1":"Menos do que uma vez ao mês","2":"Mensalmente","3":"Semanalmente","4":"Todos ou quase todos os dias"}}],["q7","7. Quantas vezes ao longo dos últimos 12 meses você se sentiu culpado(a) ou com remorso depois de ter bebido?","sel",{"opts":{"0":"Nunca","1":"Menos do que uma vez ao mês","2":"Mensalmente","3":"Semanalmente","4":"Todos ou quase todos os dias"}}],["q8","8. Quantas vezes ao longo dos últimos 12 meses você foi incapaz de lembrar o que aconteceu devido à bebida?","sel",{"opts":{"0":"Nunca","1":"Menos do que uma vez ao mês","2":"Mensalmente","3":"Semanalmente","4":"Todos ou quase todos os dias"}}],["q9","9. Você já causou ferimentos ou prejuízos a você mesmo(a) ou a outra pessoa após ter bebido?","sel",{"opts":{"0":"Não","2":"Sim, mas não nos últimos 12 meses","4":"Sim, nos últimos 12 meses"}}],["q10","10. Algum parente, amigo ou médico já se preocupou com o fato de você beber ou sugeriu que você parasse?","sel",{"opts":{"0":"Não","2":"Sim, mas não nos últimos 12 meses","4":"Sim, nos últimos 12 meses"}}]],"config":{"unit":"de 40","label":"AUDIT","fields":[["q1","sel",0],["q2","sel",0],["q3","sel",0],["q4","sel",0],["q5","sel",0],["q6","sel",0],["q7","sel",0],["q8","sel",0],["q9","sel",0],["q10","sel",0]],"bands":[[0,"low","Zona I (0 a 7): uso de baixo risco","Educação em saúde sobre álcool."],[8,"mid","Zona II (8 a 15): uso de risco","Orientação básica (intervenção breve) sobre redução do consumo."],[16,"high","Zona III (16 a 19): uso nocivo","Intervenção breve com aconselhamento e acompanhamento continuado."],[20,"high","Zona IV (20 a 40): provável dependência","Encaminhar a serviço especializado (CAPS AD ou especialista) para avaliação diagnóstica e tratamento."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
