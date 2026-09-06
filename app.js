const machines = [
  {
    id:'g3-s30', model:'G3-S30-03', name:'Aura Lat Pulldown', pt:'Puxada alta / dorsal',
    image:'assets/images/G3-S30.webp',
    primary:'Latíssimo do dorso', secondary:'bíceps, braquial, redondo maior e estabilizadores escapulares',
    setup:['Regule o apoio das coxas para impedir que o corpo seja elevado pela carga.','Segure a barra com punhos neutros e simétricos; mantenha o tronco alto.','Inicie com as escápulas controladas, sem elevar excessivamente os ombros.'],
    execute:['Puxe os cotovelos para baixo, conduzindo a barra à parte superior do peito.','Use leve inclinação do tronco, sem transformar o movimento em uma remada.','Retorne devagar até alongar o dorsal, mantendo controle da pilha de pesos.'],
    bio:'O ombro realiza principalmente adução/extensão, enquanto a escápula participa com depressão e rotação inferior. Pensar em “baixar os cotovelos” costuma preservar melhor a trajetória do que puxar apenas com as mãos.',
    errors:['Balançar o tronco para vencer a carga.','Puxar atrás da nuca, aumentando uma amplitude que não é necessária.','Relaxar completamente o ombro ou bater as placas no retorno.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g3-s30-lat-pulldown',
    manual:'assets/manuals/G3-S30-03.pdf',
    video:'assets/videos/G3-S30.mp4'
  },
  {
    id:'g7-s23', model:'G7-S23', name:'Ultra Converging Shoulder Press', pt:'Desenvolvimento de ombros',
    image:'assets/images/G7-S23.webp',
    primary:'Deltoide anterior e medial', secondary:'tríceps e porção clavicular do peitoral maior',
    setup:['Ajuste o assento para que as manoplas iniciem aproximadamente na altura dos ombros.','Mantenha cabeça, coluna torácica e quadril apoiados.','Escolha a pegada mais confortável, sem forçar extensão excessiva do punho.'],
    execute:['Empurre para cima acompanhando a trajetória convergente dos braços.','Mantenha antebraços alinhados à direção da força.','Desça de forma controlada até a amplitude tolerada pelo ombro, sem perder o apoio.'],
    bio:'A máquina combina flexão/abdução do ombro com extensão do cotovelo. A trajetória convergente acompanha a aproximação natural dos braços acima da cabeça e reduz a necessidade de estabilização quando comparada aos pesos livres.',
    errors:['Assento baixo demais, deixando as manoplas muito acima dos ombros.','Arquear excessivamente a lombar e perder o contato com o encosto.','Encolher os ombros ou travar agressivamente os cotovelos.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s23-converging-shoulder-press',
    manual:'assets/manuals/G7-S23.pdf',
    video:'assets/videos/G7-S23.mp4'
  },
  {
    id:'g7-s34', model:'G7-S34', name:'Ultra Diverging Seated Row', pt:'Remada sentada',
    image:'assets/images/G7-S34.webp',
    primary:'Latíssimo e região média das costas', secondary:'romboides, trapézio médio/inferior, deltoide posterior e flexores do cotovelo',
    setup:['Regule o assento para alinhar o peito ao apoio e as manoplas a uma altura confortável.','Apoie os pés e mantenha o esterno no suporte.','Comece com braços alongados sem arredondar exageradamente a coluna.'],
    execute:['Conduza os cotovelos para trás, permitindo que os braços sigam a trajetória divergente.','Aproxime as escápulas sem projetar a cabeça à frente.','Retorne controlando a protração das escápulas e o alongamento das costas.'],
    bio:'A extensão do ombro e a retração escapular dividem o trabalho. O apoio torácico reduz a compensação lombar; a trajetória divergente abre os braços durante a puxada e favorece uma contração confortável da musculatura dorsal.',
    errors:['Retirar o peito do apoio para ganhar impulso.','Levar os ombros às orelhas.','Exagerar na retração e transformar o final em hiperextensão da coluna.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s34-diverging-seated-row',
    manual:'assets/manuals/G7-S34.pdf',
    video:'https://www.youtube.com/results?search_query=Matrix+Ultra+G7-S34+Seated+Row+movements'
  },
  {
    id:'g7-s51', model:'G7-S51', name:'Ultra Abdominal Crunch', pt:'Abdominal na máquina',
    image:'assets/images/G7-S51.webp',
    primary:'Reto abdominal', secondary:'oblíquos e estabilizadores do tronco',
    setup:['Sente-se com quadril e costas bem posicionados no encosto.','Acomode braços/cotovelos nos apoios e mantenha os pés estáveis.','Selecione carga que permita flexionar o tronco sem puxar com os braços.'],
    execute:['Aproxime gradualmente caixa torácica e pelve, flexionando a coluna.','Expire durante a fase de encurtamento.','Retorne até o alongamento confortável, sem deixar a pilha cair.'],
    bio:'O objetivo é produzir flexão segmentar do tronco, e não apenas dobrar o quadril. O reto abdominal aproxima caixa torácica e pelve; uma expiração ativa ajuda a reduzir a abertura das costelas durante a contração.',
    errors:['Mover somente os braços e manter o tronco rígido.','Usar impulso ou carga que impeça a flexão controlada.','Hiperestender a lombar no retorno.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s51-abdominal-crunch',
    manual:'assets/manuals/G7-S51.pdf',
    video:'https://www.youtube.com/results?search_query=Matrix+Ultra+G7-S51+Abdominal+Crunch+movements'
  },
  {
    id:'g7-s40', model:'G7-S40', name:'Ultra Independent Biceps Curl', pt:'Rosca bíceps independente',
    image:'assets/images/G7-S40.webp',
    primary:'Bíceps braquial', secondary:'braquial e braquiorradial',
    setup:['Ajuste o assento para apoiar completamente os braços, alinhando os cotovelos ao eixo de rotação da máquina.','Encoste o peito no apoio e mantenha os ombros baixos e estáveis.','Segure as manoplas com punhos neutros, sem quebrar o alinhamento com o antebraço.'],
    execute:['Flexione os cotovelos sem retirar os braços do apoio.','Use os dois lados juntos ou alternadamente, preservando a mesma amplitude.','Estenda os cotovelos de modo controlado, sem deixar a pilha de pesos bater.'],
    bio:'A máquina isola a flexão do cotovelo e reduz a ajuda do tronco. O apoio fixa o braço, enquanto o movimento independente permite observar assimetrias entre os lados; o bíceps recebe maior participação com a pegada supinada.',
    errors:['Elevar os ombros ou tirar os cotovelos do apoio.','Flexionar ou estender excessivamente os punhos.','Usar impulso do tronco para iniciar a repetição.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s40-independent-biceps-curl',
    manual:'assets/manuals/G7-S40.pdf',
    video:'https://www.youtube.com/results?search_query=Matrix+G7-S40+Independent+Biceps+Curl'
  },
  {
    id:'g7-s70', model:'G7-S70', name:'Ultra Leg Press', pt:'Leg press',
    image:'assets/images/G7-S70.webp',
    primary:'Quadríceps e glúteo máximo', secondary:'isquiotibiais, adutores e panturrilhas como estabilizadores',
    setup:['Ajuste o assento para iniciar com joelhos e quadris flexionados em amplitude confortável, sem retirar a pelve do encosto.','Posicione os pés inteiros na plataforma, aproximadamente na largura dos quadris.','Alinhe joelhos e pés e selecione uma carga que permita controle desde a primeira repetição.'],
    execute:['Empurre a plataforma estendendo joelhos e quadris ao mesmo tempo.','Mantenha joelhos acompanhando a direção dos pés e a lombar apoiada.','Retorne lentamente até a profundidade em que a pelve permaneça estável.'],
    bio:'É um movimento multiarticular de extensão de joelho e quadril. A plataforma e o encosto reduzem a exigência de equilíbrio; a posição dos pés e a profundidade alteram a distribuição de esforço, mas não isolam completamente um único músculo.',
    errors:['Deixar os joelhos colapsarem para dentro.','Descolar a pelve e arredondar a lombar no fundo do movimento.','Travar agressivamente os joelhos ou encurtar demais a amplitude.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s70-leg-press',
    manual:'assets/manuals/G7-S70.pdf',
    video:'https://www.youtube.com/results?search_query=Matrix+G7-S70+Ultra+Leg+Press'
  },
  {
    id:'g7-s72', model:'G7-S72', name:'Ultra Seated Leg Curl', pt:'Flexora sentada',
    image:'assets/images/G7-S72.webp',
    primary:'Isquiotibiais', secondary:'gastrocnêmio e musculatura estabilizadora do quadril',
    setup:['Alinhe o eixo do joelho ao pivô amarelo da máquina.','Apoie o rolo logo acima dos calcanhares e fixe a coxa com o apoio superior.','Ajuste a posição inicial para alongamento confortável, mantendo quadril no assento.'],
    execute:['Flexione os joelhos levando os calcanhares para baixo e para trás.','Mantenha quadril, coxas e tronco estáveis.','Retorne devagar sem perder o alinhamento do joelho com o pivô.'],
    bio:'Com o quadril flexionado, os isquiotibiais biarticulares iniciam em maior comprimento do que na versão deitada. Isso pode aumentar o estímulo em posição alongada, desde que a pelve permaneça estável e o eixo esteja bem ajustado.',
    errors:['Joelho fora do alinhamento com o pivô.','Rolo apoiado sobre o tendão de Aquiles ou alto demais na panturrilha.','Levantar o quadril para completar a repetição.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s72-seated-leg-curl',
    manual:'assets/manuals/G7-S72.pdf',
    video:'https://www.youtube.com/watch?v=FQvMkQQxX6U'
  },
  {
    id:'g7-s73', model:'G7-S73', name:'Ultra Prone Leg Curl', pt:'Mesa flexora',
    image:'assets/images/G7-S73.webp',
    primary:'Isquiotibiais', secondary:'gastrocnêmio e estabilizadores do quadril',
    setup:['Deite-se e alinhe os joelhos ao pivô da máquina.','Ajuste o rolo logo acima dos calcanhares.','Acomode quadril e tronco no apoio angulado e segure as manoplas.'],
    execute:['Flexione os joelhos aproximando os calcanhares dos glúteos.','Mantenha a pelve apoiada, sem elevar o quadril.','Desça controladamente até quase estender os joelhos.'],
    bio:'A flexão do joelho encurta os isquiotibiais. Como o quadril fica mais estendido que na versão sentada, eles começam relativamente menos alongados; o apoio divergente procura reduzir desconforto lombar e melhorar a estabilização.',
    errors:['Elevar o quadril e aumentar a extensão lombar.','Abrir ou fechar os pés de maneira assimétrica.','Soltar rapidamente a fase de descida.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s73-prone-leg-curl',
    manual:'assets/manuals/G7-S73.pdf',
    video:'https://www.youtube.com/results?search_query=Matrix+Ultra+G7-S73+Prone+Leg+Curl+movements'
  },
  {
    id:'g7-s74', model:'G7-S74', name:'Ultra Hip Adductor', pt:'Adutora de quadril',
    image:'assets/images/G7-S74.webp',
    primary:'Adutores do quadril', secondary:'grácil e estabilizadores do tronco e da pelve',
    setup:['Sente-se com costas e pelve apoiadas e posicione a face interna das coxas nos apoios.','Regule a abertura inicial em amplitude confortável, sem forçar virilha ou quadril.','Segure as alças e mantenha pés apoiados nos suportes.'],
    execute:['Aproxime as coxas de forma simétrica até a amplitude controlável.','Mantenha o tronco parado e evite girar os joelhos para ganhar força.','Retorne devagar, controlando a abertura das pernas.'],
    bio:'A adução aproxima o fêmur da linha média e recruta principalmente adutor longo, curto e magno, com participação do grácil e pectíneo. A estabilidade da pelve evita que a amplitude venha de inclinação ou rotação do tronco.',
    errors:['Selecionar abertura inicial maior que a mobilidade disponível.','Bater os apoios ou soltar rapidamente a fase de abertura.','Inclinar o tronco ou trabalhar com amplitude diferente entre os lados.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s74-hip-adductor',
    manual:'assets/manuals/G7-S74.pdf',
    video:'https://www.youtube.com/results?search_query=Matrix+G7-S74+Ultra+Hip+Adductor'
  },
  {
    id:'g7-s75', model:'G7-S75', name:'Ultra Hip Abductor', pt:'Abdutora de quadril',
    image:'assets/images/G7-S75.webp',
    primary:'Glúteo médio e glúteo mínimo', secondary:'tensor da fáscia lata e estabilizadores da pelve',
    setup:['Sente-se com costas e pelve apoiadas e posicione a face externa das coxas nos apoios.','Ajuste a posição inicial sem comprimir os joelhos e mantenha os pés nos suportes.','Segure as alças e escolha carga que permita abrir as pernas sem impulso.'],
    execute:['Afaste as coxas contra os apoios, mantendo a pelve estável.','Pare antes de compensar com rotação ou inclinação do tronco.','Retorne lentamente até os apoios se aproximarem, sem deixar a pilha bater.'],
    bio:'A abdução afasta o fêmur da linha média. Glúteo médio e mínimo contribuem para o movimento e para o controle frontal da pelve; a posição sentada reduz a demanda de equilíbrio, mas não elimina a necessidade de estabilizar o tronco.',
    errors:['Abrir as pernas com impulso e perder contato com o encosto.','Girar excessivamente os pés ou joelhos durante a repetição.','Soltar a carga na volta ou usar amplitude dolorosa.'],
    product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s75-hip-abductor',
    manual:'assets/manuals/G7-S75.pdf',
    video:'https://www.youtube.com/results?search_query=Matrix+G7-S75+Ultra+Hip+Abductor'
  },
  {id:'g7-s22',model:'G7-S22',name:'Ultra Pec Fly / Rear Delt',pt:'Voador / voador invertido',image:'assets/images/G7-S23.webp',primary:'Peitoral maior',secondary:'deltoide posterior e romboides',bio:'Permite adução horizontal dos braços no voador e abdução horizontal no voador invertido.',product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s22-pec-fly-rear-delt',manual:'',video:'https://www.youtube.com/results?search_query=Matrix+G7-S22'},
  {id:'g7-s13',model:'G7-S13',name:'Aura Converging Chest Press',pt:'Supino sentado',image:'assets/images/G7-S23.webp',primary:'Peitoral maior',secondary:'tríceps e deltoide anterior',bio:'A trajetória convergente combina adução horizontal do ombro com extensão do cotovelo.',product:'https://br.matrixfitness.com/ptb/strength/single-station/g7-s13-converging-chest-press',manual:'',video:'https://www.youtube.com/results?search_query=Matrix+G7-S13'},
  {id:'mg-pl12',model:'MG-PL12',name:'Magnum Vertical Bench Press',pt:'Supino vertical',image:'assets/images/G7-S23.webp',primary:'Peitoral maior',secondary:'tríceps e deltoide anterior',bio:'Equipamento plate-loaded para pressão horizontal/vertical com apoio das costas.',product:'https://world.matrixfitness.com/eng/strength/plate-loaded/mg-pl12-vertical-bench-press',manual:'',video:'https://www.youtube.com/results?search_query=Matrix+MG-PL12'},
  {id:'mg-pl70',model:'MG-PL70',name:'Magnum 45 Degree Leg Press',pt:'Leg press 45°',image:'assets/images/G7-S70.webp',primary:'Quadríceps e glúteos',secondary:'isquiotibiais e panturrilhas',bio:'Extensão combinada de joelhos e quadris; também usado para flexão plantar de panturrilhas.',product:'https://world.matrixfitness.com/eng/strength/plate-loaded/mg-pl70-45-degree-leg-press',manual:'',video:'https://www.youtube.com/results?search_query=Matrix+MG-PL70'},
  {id:'mg-pl62',model:'MG-PL62',name:'Magnum Smith Machine',pt:'Agachamento Smith',image:'assets/images/G7-S70.webp',primary:'Quadríceps e glúteos',secondary:'isquiotibiais e estabilizadores',bio:'A barra guiada permite agachamento com trajetória vertical controlada.',product:'https://world.matrixfitness.com/eng/strength/plate-loaded/mg-pl62-smith-machine',manual:'',video:'https://www.youtube.com/results?search_query=Matrix+MG-PL62'},
  {id:'g3-ms24',model:'G3-MS24',name:'Aura Adjustable Pulley',pt:'Polia ajustável',image:'assets/images/G3-S30.webp',primary:'Variável conforme o exercício',secondary:'tríceps, costas, ombros e braços',bio:'Duas colunas reguláveis permitem selecionar altura e vetor de força para diferentes exercícios.',product:'https://world.matrixfitness.com/eng/strength/multi-station/adjustable-pulley',manual:'',video:'https://www.youtube.com/results?search_query=Matrix+G3-MS24'},
  {id:'g7-s71',model:'G7-S71',name:'Ultra Leg Extension',pt:'Extensora sentada',image:'assets/images/G7-S72.webp',primary:'Quadríceps',secondary:'reto femoral e estabilizadores do joelho',bio:'Extensão do joelho com apoio das costas e eixo alinhado ao pivô da máquina.',product:'https://world.matrixfitness.com/eng/strength/single-station/g7-s71-leg-extension',manual:'',video:'https://www.youtube.com/results?search_query=Matrix+G7-S71'},
  {id:'g3-ms52',model:'G3-MS52',name:'Aura Triceps Pressdown',pt:'Tríceps na polia',image:'assets/images/G3-S30.webp',primary:'Tríceps braquial',secondary:'estabilizadores do ombro e antebraço',bio:'Extensão do cotovelo na polia alta, com corda ou barra.',product:'https://br.matrixfitness.com/ptb/strength/multi-station/triceps-pressdown',manual:'',video:'https://www.youtube.com/results?search_query=Matrix+G3-MS52'},
  {id:'g3-s52',model:'G3-S52',name:'Aura Back Extension',pt:'Extensor lombar',image:'assets/images/G7-S51.webp',primary:'Eretores da coluna',secondary:'glúteos, isquiotibiais e estabilizadores do tronco',bio:'Extensão controlada do quadril e da coluna no equipamento com apoio do tronco.',product:'https://world.matrixfitness.com/eng/strength/single-station/g3-s52-back-extension',manual:'',video:'https://www.youtube.com/results?search_query=Matrix+G3-S52'}
];

const catalog=document.querySelector('#catalog');
const nav=document.querySelector('#nav');
const esc=s=>s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const list=items=>`<ol class="steps">${items.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`;

function card(m){return `<article class="machine" id="${m.id}" data-search="${esc([m.model,m.name,m.pt,m.primary,m.secondary].join(' ').toLowerCase())}">
  <div class="machine-visual"><img src="${m.image}" alt="Imagem técnica do equipamento ${esc(m.name)}" loading="lazy"><span class="model-tag">${m.model}</span><button class="photo-button" data-photo="${m.image}" data-caption="Imagem do equipamento extraída do manual · ${esc(m.model)} · abrir em tamanho maior">Ampliar imagem do equipamento ↗</button></div>
  <div class="machine-content"><div class="machine-heading"><h2>${m.pt}<span>${m.name}</span></h2><p class="muscle">ALVO PRINCIPAL<b>${m.primary}</b>${m.secondary}</p></div>
  <div class="tabs" role="tablist" aria-label="Conteúdo de ${esc(m.pt)}">
    ${['Função','Biomecânica','Documentos'].map((x,i)=>`<button class="tab" role="tab" aria-selected="${i===0}" data-panel="${i}">${x}</button>`).join('')}
  </div>
  <section class="tab-panel" data-index="0"><h3>Grupo muscular e função</h3><p><strong>Principal:</strong> ${m.primary}</p><p><strong>Participação:</strong> ${m.secondary}</p></section>
  <section class="tab-panel" data-index="1" hidden><h3>Leitura biomecânica</h3><p>${m.bio}</p><p class="note">A trajetória da máquina orienta o movimento, mas não substitui ajuste individual nem avaliação profissional em caso de dor.</p></section>
  <section class="tab-panel" data-index="2" hidden><h3>Fontes e mídia</h3><div class="resources"><a class="resource" href="${m.product}" target="_blank" rel="noopener"><small>FABRICANTE</small><b>Página oficial Matrix ↗</b></a>${m.manual?`<a class="resource" href="${m.manual}" target="_blank" rel="noopener"><small>DOCUMENTAÇÃO INCORPORADA</small><b>Abrir manual / guia técnico ↗</b></a>`:''}<a class="resource" href="${m.video}" target="_blank" rel="noopener"><small>VÍDEO</small><b>Demonstração do movimento ↗</b></a></div></section>
  </div></article>`}

catalog.innerHTML=machines.map(card).join('');
nav.innerHTML=machines.map(m=>`<a href="#${m.id}">${m.model}</a>`).join('');

catalog.addEventListener('click',e=>{
  const tab=e.target.closest('.tab');
  if(tab){const machine=tab.closest('.machine');machine.querySelectorAll('.tab').forEach(b=>b.setAttribute('aria-selected','false'));tab.setAttribute('aria-selected','true');machine.querySelectorAll('.tab-panel').forEach(p=>p.hidden=p.dataset.index!==tab.dataset.panel);}
  const photo=e.target.closest('[data-photo]');
  if(photo){document.querySelector('#dialog-image').src=photo.dataset.photo;document.querySelector('#dialog-image').alt=photo.dataset.caption;document.querySelector('#dialog-caption').textContent=photo.dataset.caption;document.querySelector('#photo-dialog').showModal();}
});
document.querySelector('.dialog-close').addEventListener('click',()=>document.querySelector('#photo-dialog').close());
document.querySelector('#photo-dialog').addEventListener('click',e=>{if(e.target.id==='photo-dialog')e.currentTarget.close()});
document.querySelector('#search').addEventListener('input',e=>{const q=e.target.value.toLowerCase().trim();let n=0;document.querySelectorAll('.machine').forEach(el=>{const show=el.dataset.search.includes(q);el.hidden=!show;if(show)n++});document.querySelector('#count').textContent=n;document.querySelector('#empty').hidden=n>0});
document.querySelector('.menu-button').addEventListener('click',e=>{const open=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))});
nav.addEventListener('click',()=>nav.classList.remove('open'));
