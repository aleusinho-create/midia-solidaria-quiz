/* ================= DADOS ================= */
const questions = [
  { theme:'🤝 Cooperação', text:'Em trabalhos em grupo, o que mais se aproxima de você?',
    options:[
      {text:'Prefiro fazer sozinho para garantir o resultado.', points:1},
      {text:'Ajudo quando sou solicitado.', points:2},
      {text:'Gosto de dividir tarefas e decisões.', points:3},
      {text:'Incentivo o grupo a definir junto metas e responsabilidades.', points:4}
    ]},
  { theme:'🗳️ Autogestão', text:'Em um coletivo ou cooperativa, decisões importantes devem ser tomadas por:',
    options:[
      {text:'Uma liderança experiente.', points:1},
      {text:'Coordenação com consulta pontual.', points:2},
      {text:'Votação em assembleia.', points:3},
      {text:'Processos circulares, com transparência e prestação de contas.', points:4}
    ]},
  { theme:'🛒 Consumo consciente', text:'Na hora de comprar, você prioriza:',
    options:[
      {text:'Preço e praticidade, sem considerar a origem.', points:1},
      {text:'Ocasionalmente produtos locais.', points:2},
      {text:'Produtos de cooperativas e negócios solidários quando possível.', points:3},
      {text:'O consumo consciente como critério habitual e divulgo essas alternativas.', points:4}
    ]},
  { theme:'🌱 Associativismo', text:'Sua relação com cooperativas e associações é:',
    options:[
      {text:'Não conheço ou não participo.', points:1},
      {text:'Já ouvi falar, mas não me envolvo.', points:2},
      {text:'Participo eventualmente de feiras, grupos ou encontros.', points:3},
      {text:'Sou membro ativo, apoiador recorrente ou articulador.', points:4}
    ]},
  { theme:'⚖️ Justiça social', text:'Para você, as sobras e resultados de um empreendimento coletivo devem:',
    options:[
      {text:'Ficar com quem investiu mais.', points:1},
      {text:'Ser distribuídas conforme decisão da diretoria.', points:2},
      {text:'Ser partilhadas com critérios acordados coletivamente.', points:3},
      {text:'Priorizar justiça social, fundo coletivo e transparência.', points:4}
    ]},
  { theme:'🔄 Reciprocidade', text:'Quando você aprende algo útil, você:',
    options:[
      {text:'Guarda para si.', points:1},
      {text:'Compartilha se alguém pedir.', points:2},
      {text:'Compartilha com pessoas próximas.', points:3},
      {text:'Cria espaços de troca e formação para multiplicar.', points:4}
    ]},
  { theme:'🌍 Sustentabilidade', text:'Suas escolhas cotidianas consideram o impacto ambiental?',
    options:[
      {text:'Raramente.', points:1},
      {text:'Às vezes.', points:2},
      {text:'Frequentemente.', points:3},
      {text:'Sempre que possível e influencio coletivos.', points:4}
    ]},
  { theme:'💬 Diálogo e conflitos', text:'Diante de um conflito no grupo, você:',
    options:[
      {text:'Evita ou impõe sua posição.', points:1},
      {text:'Espera alguém resolver.', points:2},
      {text:'Conversa para buscar acordo.', points:3},
      {text:'Facilita mediação e acordos restaurativos.', points:4}
    ]},
  { theme:'🔍 Transparência', text:'A comunicação em coletivos deve ser:',
    options:[
      {text:'Restrita à liderança.', points:1},
      {text:'Informada apenas no fim.', points:2},
      {text:'Compartilhada nas reuniões.', points:3},
      {text:'Transparente, acessível e com prestação de contas contínua.', points:4}
    ]},
  { theme:'🏘️ Apoio local', text:'Você apoia iniciativas solidárias da sua comunidade?',
    options:[
      {text:'Não costumo acompanhar.', points:1},
      {text:'Quando lembro, curto e compartilho.', points:2},
      {text:'Compro ou participo eventualmente.', points:3},
      {text:'Apoio, divulgo e articulo parcerias.', points:4}
    ]},
  { theme:'📣 Comunicação solidária', text:'Seu negócio ou projeto comunica seus valores solidários?',
    options:[
      {text:'Não comunico.', points:1},
      {text:'Comunico de forma improvisada.', points:2},
      {text:'Tenho algumas ações de comunicação.', points:3},
      {text:'Uso a comunicação como estratégia de mobilização e venda solidária.', points:4}
    ]},
  { theme:'✊ Engajamento', text:'Seu envolvimento com a Economia Solidária hoje é:',
    options:[
      {text:'Nenhum.', points:1},
      {text:'Curiosidade inicial.', points:2},
      {text:'Prática pessoal ou coletiva.', points:3},
      {text:'Liderança, formação ou advocacy.', points:4}
    ]}
];

const levels = [
  { min:12, max:20, number:1, name:'Semente Solidária', tagline:'Curioso em Descoberta',
    description:'Você está no começo da aproximação com a Economia Popular e Solidária. Seu potencial é grande: pequenas escolhas já podem abrir portas para redes mais justas, cooperativas e sustentáveis.',
    steps:['Assine o Blog Mídia Solidária e receba conteúdos introdutórios.','Leia o artigo "O que é Economia Popular e Solidária?".','Visite uma feira ou cooperativa local.','Comece a observar a origem do que você consome.']},
  { min:21, max:27, number:2, name:'Broto Cooperativo', tagline:'Simpatizante em Prática Inicial',
    description:'Você já reconhece os valores da cooperação e do associativismo, mas ainda está testando como colocá-los no cotidiano. Seu próximo passo é transformar curiosidade em participação.',
    steps:['Participe de um grupo, feira ou assembleia.','Conheça a Campanha Mídia Solidária.','Indique uma pessoa para este quiz.','Experimente um consumo mais consciente.']},
  { min:28, max:34, number:3, name:'Rede em Ação', tagline:'Participante Ativo',
    description:'Você já pratica vários princípios da Economia Solidária: cooperação, consumo consciente e apoio local. Agora o foco é fortalecer a comunicação e a gestão do seu projeto ou coletivo.',
    steps:['Aprofunde autogestão e prestação de contas.','Use o marketing solidário para dar visibilidade ao seu negócio.','Participe da Campanha Mídia Solidária.','Compartilhe seu resultado nas redes.']},
  { min:35, max:41, number:4, name:'Agente de Transformação', tagline:'Articulador de Rede',
    description:'Você é uma pessoa que conecta pessoas, valores e práticas. Já exerce liderança cooperativa e pode ajudar outras iniciativas a crescer com comunicação, gestão e articulação.',
    steps:['Agende um diagnóstico com a Mídia Sol Mktg Solidário.','Leve sua iniciativa para a Campanha Mídia Solidária.','Compartilhe seu case no Blog Mídia Solidária.','Mentore alguém que está no nível Semente.']},
  { min:42, max:48, number:5, name:'Referência Solidária', tagline:'Guardião do Bem Viver',
    description:'Seu engajamento é consistente e transformador. Você já inspira outras pessoas e pode se tornar embaixador da Economia Solidária, conectando comunicação, cooperativismo e impacto comunitário.',
    steps:['Seja embaixador da Campanha Mídia Solidária.','Construa uma parceria com a Mídia Sol Mktg Solidário.','Publique seu case no Blog Mídia Solidária.','Ajude a formar novas redes cooperativas.']}
];

/* ================= ESTADO ================= */
const state = { current:0, answers:[], themeScores:{} };
const CIRCUMFERENCE = 2 * Math.PI * 85;
const $ = (id) => document.getElementById(id);

/* ================= NAVEGAÇÃO ================= */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function startQuiz(){
  state.current = 0;
  state.answers = new Array(questions.length).fill(null);
  state.themeScores = {};
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion(){
  const q = questions[state.current];
  $('currentNum').textContent = state.current + 1;
  $('progressFill').style.width = (state.current / questions.length * 100) + '%';
  $('progressBar').setAttribute('aria-valuenow', state.current + 1);
  $('themeTag').textContent = q.theme;
  $('questionText').textContent = q.text;

  const container = $('optionsContainer');
  container.innerHTML = '';
  const letters = ['A','B','C','D'];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option';
    btn.innerHTML = `<span class="option-letter" aria-hidden="true">${letters[i]}</span><span class="option-text">${opt.text}</span>`;
    btn.addEventListener('click', () => selectOption(i, opt.points, btn));
    container.appendChild(btn);
  });

  const body = $('questionBody');
  body.style.animation = 'none';
  void body.offsetWidth;
  body.style.animation = 'slideIn .4s ease both';
}

function selectOption(index, points, btn){
  document.querySelectorAll('.option').forEach(o => {
    if (o !== btn) o.classList.add('dimmed');
  });
  btn.classList.add('selected');
  state.answers[state.current] = { index, points };
  $('progressFill').style.width = ((state.current + 1) / questions.length * 100) + '%';

  setTimeout(() => {
    if (state.current < questions.length - 1){
      state.current++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 420);
}

function goBack(){
  if (state.current === 0){ showScreen('intro'); return; }
  state.current--;
  renderQuestion();
}

/* ================= RESULTADO ================= */
function showResult(){
  let score = 0;
  const themeScores = {};

  state.answers.forEach((ans, i) => {
    if (!ans) return;
    score += ans.points;
    const theme = questions[i].theme.replace(/^[^\s]+\s/, '');
    themeScores[theme] = (themeScores[theme] || 0) + ans.points;
  });

  const level = levels.find(l => score >= l.min && score <= l.max) || levels[0];

  $('levelBadge').textContent = 'Nível ' + level.number;
  $('levelName').textContent = level.name;
  $('levelTagline').textContent = level.tagline;
  $('levelDescription').textContent = level.description;

  const sorted = Object.entries(themeScores).sort((a,b) => b[1] - a[1]).slice(0, 3);
  const icons = {
    'Cooperação':'🤝','Autogestão':'🗳️','Consumo consciente':'🛒','Associativismo':'🌱',
    'Justiça social':'⚖️','Reciprocidade':'🔄','Sustentabilidade':'🌍','Diálogo e conflitos':'💬',
    'Transparência':'🔍','Apoio local':'🏘️','Comunicação solidária':'📣','Engajamento':'✊'
  };
  $('strengthChips').innerHTML = sorted.map(([t]) =>
    `<span class="chip">${icons[t] || '✨'} ${t}</span>`).join('');

  $('nextSteps').innerHTML = level.steps.map((s,i) =>
    `<li><span class="num">${i+1}</span><span>${s}</span></li>`).join('');

  showScreen('result');

  const gauge = $('gaugeFill');
  gauge.style.strokeDasharray = CIRCUMFERENCE;
  gauge.style.strokeDashoffset = CIRCUMFERENCE;
  const percent = Math.max(0, Math.min(1, (score - 12) / (48 - 12)));
  requestAnimationFrame(() => {
    setTimeout(() => {
      gauge.style.strokeDashoffset = CIRCUMFERENCE * (1 - percent);
    }, 200);
  });
  animateScore(score);
  window._lastResult = { score, level };
}

function animateScore(target){
  const el = $('gaugeScore');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce){ el.textContent = target; return; }
  const duration = 1400, start = performance.now();
  function tick(now){
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ================= EMAIL ================= */
function submitEmail(e){
  e.preventDefault();
  const input = $('emailInput');
  const email = input.value.trim();
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!ok){
    input.focus();
    input.style.boxShadow = '0 0 0 3px rgba(224,122,95,.6)';
    setTimeout(() => { input.style.boxShadow = ''; }, 1800);
    return;
  }
  $('emailForm').style.display = 'none';
  $('emailSuccess').classList.add('show');
  // TODO: integrar com RD Station, Mailchimp, Brevo, etc.
  console.log('E-mail capturado:', email);
}

/* ================= COMPARTILHAR ================= */
function shareWhatsApp(){
  const r = window._lastResult;
  if (!r) return;
  const text = encodeURIComponent(`Descobri meu Nível de Solidariedade: ${r.level.name} (${r.score}/48). Faça o quiz você também! 💚`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}
function shareLinkedIn(){
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}
function copyLink(){
  const btn = $('shareCopy');
  const original = btn.textContent;
  navigator.clipboard.writeText(window.location.href).then(() => {
    btn.textContent = '✓ Copiado!';
    setTimeout(() => btn.textContent = original, 1800);
  });
}

/* ================= EVENTOS ================= */
document.addEventListener('DOMContentLoaded', () => {
  $('startBtn').addEventListener('click', startQuiz);
  $('backBtn').addEventListener('click', goBack);
  $('restartBtn').addEventListener('click', () => showScreen('intro'));
  $('emailForm').addEventListener('submit', submitEmail);
  $('shareWa').addEventListener('click', shareWhatsApp);
  $('shareLi').addEventListener('click', shareLinkedIn);
  $('shareCopy').addEventListener('click', copyLink);

  document.addEventListener('keydown', (e) => {
    if (!$('quiz').classList.contains('active')) return;
    if (['1','2','3','4'].includes(e.key)){
      const opts = document.querySelectorAll('.option');
      const target = opts[parseInt(e.key) - 1];
      if (target && !target.classList.contains('dimmed')) target.click();
    }
    if (e.key === 'Backspace') goBack();
  });
});