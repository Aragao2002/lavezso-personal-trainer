"use client";

import { useEffect, useState } from "react";
import {
  Activity, ArrowDown, ArrowRight, BarChart3, Check, ChevronDown,
  Camera, ClipboardCheck, Dumbbell, Menu, MessageCircle,
  Play, ShieldCheck, Target, TrendingUp, X,
} from "lucide-react";

const CONFIG = {
  whatsapp: "5516992836571",
  instagram: "https://instagram.com/vicalefit",
};

const messages = {
  default: "Olá! Vi seu site e gostaria de saber mais sobre a consultoria e agendar minha avaliação física.",
  monthly: "Olá! Vi seu site e tenho interesse no Plano Mensal da consultoria online de R$ 80. Gostaria de saber como começar.",
  quarterly: "Olá! Vi seu site e tenho interesse no Plano Trimestral da consultoria online de R$ 210. Gostaria de agendar minha avaliação.",
  assessment: "Olá! Vi seu site e gostaria de agendar minha avaliação física na Vicale Fit.",
  inPerson: "Olá! Vi seu site e gostaria de saber mais sobre o acompanhamento presencial e os horários disponíveis.",
};

const whatsappURL = (message = messages.default) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

const benefits = [
  [Target, "Treino 100% personalizado", "Feito para seu objetivo"],
  [ShieldCheck, "Execução correta", "Mais segurança e eficiência"],
  [MessageCircle, "Acompanhamento", "Feedback durante sua evolução"],
  [TrendingUp, "Resultados", "Estratégia, disciplina e constância"],
];

const profiles = [
  [ArrowDown, "Emagrecimento", "Para quem deseja reduzir gordura corporal com treinamento estruturado e acompanhamento."],
  [Dumbbell, "Hipertrofia", "Para quem busca ganhar massa muscular e desenvolver o físico."],
  [Activity, "Performance", "Para quem deseja melhorar força, condicionamento, desempenho e qualidade de vida."],
  [ClipboardCheck, "Organização", "Para quem quer parar de treinar sem direção e seguir um planejamento profissional."],
];

const steps = [
  ["Avaliação inicial", "Primeiro entendemos seus objetivos, sua rotina, histórico, experiência e estilo de vida."],
  ["Avaliação física", "Na Vicale Fit, coletamos medidas corporais com fita métrica e adipômetro para acompanhar sua evolução."],
  ["Mobilidade e alongamento", "Testes ajudam a identificar pontos importantes para a montagem do treino."],
  ["Planejamento personalizado", "Com todas as informações, desenvolvemos um treino específico para você."],
  ["Treino no MFit Personal", "Seu planejamento fica organizado e disponível diretamente no aplicativo."],
  ["Acompanhamento", "Durante o processo, fazemos ajustes conforme sua evolução e suas necessidades."],
];

const appFeatures = ["Exercícios organizados", "Vídeos demonstrativos", "Séries e repetições", "Tempo de descanso", "Orientações", "Progressão do treino"];

const results = Array.from({ length: 6 }, (_, i) => `/assets/resultado-0${i + 1}.webp`);

const assessment = ["Conversa inicial", "Objetivos e histórico", "Medidas corporais", "Dobras cutâneas", "Teste de mobilidade", "Montagem do treino"];

const checklist = [
  "Compareça com roupas leves e confortáveis, como short, bermuda, top ou camiseta.",
  "Evite exercícios físicos intensos nas 24 horas anteriores.",
  "Não consuma bebidas alcoólicas nas 24 horas anteriores.",
  "Evite refeições muito pesadas entre duas e três horas antes da avaliação.",
  "Mantenha sua hidratação normalmente, evitando muita água imediatamente antes.",
  "Procure urinar cerca de 30 minutos antes da avaliação.",
  "Durma aproximadamente 7 a 8 horas na noite anterior.",
  "Não utilize cremes ou óleos corporais no dia da avaliação.",
];

const faqs = [
  ["Preciso treinar na Vicale Fit?", "A avaliação inicial é realizada presencialmente na Vicale Fit. Depois disso, a consultoria permite que você siga seu planejamento de acordo com as orientações recebidas."],
  ["Como recebo meu treino?", "Seu treino fica disponível no aplicativo MFit Personal, com exercícios, vídeos, séries, repetições e intervalos."],
  ["O treino é personalizado?", "Sim. O planejamento considera seus objetivos, rotina, experiência e as informações coletadas durante a avaliação."],
  ["Posso treinar em outra academia?", "Na consultoria online, o planejamento pode ser executado de acordo com a estrutura disponível e as orientações definidas."],
  ["Quanto custa?", "O plano mensal custa R$ 80 e o plano trimestral R$ 210."],
  ["Como começo?", "Entre em contato pelo WhatsApp para conversar e agendar sua avaliação física."],
];

function WhatsAppLink({ children, message, className = "button button-primary" }: { children: React.ReactNode; message?: string; className?: string }) {
  return <a className={className} href={whatsappURL(message)} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Lavezso Personal Trainer — início"><strong>LAVEZSO</strong><span>PERSONAL TRAINER</span></a>
        <nav className={menuOpen ? "open" : ""} aria-label="Navegação principal">
          <a href="#inicio" onClick={closeMenu}>Início</a><a href="#consultoria" onClick={closeMenu}>Consultoria</a><a href="#como-funciona" onClick={closeMenu}>Como funciona</a><a href="#resultados" onClick={closeMenu}>Resultados</a><a href="#planos" onClick={closeMenu}>Planos</a><a href="#avaliacao" onClick={closeMenu}>Avaliação</a>
          <WhatsAppLink className="mobile-nav-cta">Falar no WhatsApp</WhatsAppLink>
        </nav>
        <WhatsAppLink className="header-cta">Falar no WhatsApp</WhatsAppLink>
        <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy reveal is-visible">
            <span className="eyebrow"><i /> Personal trainer • Consultoria online</span>
            <h1>TREINO INTELIGENTE.<br /><em>RESULTADOS</em> DE VERDADE.</h1>
            <p>Treinos personalizados para o seu objetivo, sua rotina e seu nível. Acompanhamento profissional presencial ou online para você evoluir com segurança, estratégia e constância.</p>
            <div className="hero-actions"><WhatsAppLink>Quero começar <ArrowRight size={18} /></WhatsAppLink><a className="button button-secondary" href="#consultoria">Conhecer a consultoria</a></div>
            <ul className="hero-checks"><li>Treino personalizado</li><li>Avaliação física</li><li>Acompanhamento profissional</li></ul>
          </div>
          <div className="hero-visual"><div className="hero-number" aria-hidden="true">01</div><img src="/assets/personal-hero.webp" alt="Lavezso, personal trainer, de braços cruzados na academia" fetchPriority="high" /><div className="visual-tag"><span>FOCO</span><span>DISCIPLINA</span><span>CONSTÂNCIA</span></div></div>
        </section>

        <section className="benefit-strip" aria-label="Benefícios do acompanhamento">
          {benefits.map(([Icon, title, text]) => <article key={String(title)}><Icon /><div><h3>{String(title)}</h3><p>{String(text)}</p></div></article>)}
        </section>

        <section className="section split about" id="sobre">
          <div className="photo-frame reveal"><span className="frame-label">TREINO COM PROPÓSITO</span><img src="/assets/personal-dumbbells.webp" alt="Lavezso realizando exercício com halteres" loading="lazy" /></div>
          <div className="section-copy reveal"><span className="kicker">Individualidade</span><h2>SEU TREINO NÃO DEVERIA SER <em>IGUAL AO DE TODO MUNDO.</em></h2><p>Cada pessoa possui objetivos, rotina, limitações, experiência e necessidades diferentes.</p><p>Por isso, todo planejamento começa entendendo você. A partir da avaliação física, é desenvolvido um treino específico para seu objetivo, buscando evolução inteligente, segura e sustentável.</p><div className="signature-line"><span>01</span><i /></div></div>
        </section>

        <section className="section online" id="consultoria">
          <div className="section-heading reveal"><span className="kicker">Treine onde estiver</span><h2>CONSULTORIA <em>ONLINE</em></h2><p>SEU TREINO. SUA ROTINA. SEUS RESULTADOS.</p></div>
          <div className="online-grid">
            <div className="creative-card reveal"><img src="/assets/consultoria.webp" alt="Apresentação visual da consultoria online Lavezso" loading="lazy" /></div>
            <div className="online-content reveal"><p>Uma consultoria pensada para quem quer treinar com planejamento profissional mesmo à distância.</p><p>Depois da avaliação inicial, seu treino é desenvolvido individualmente e disponibilizado no aplicativo MFit Personal.</p><WhatsAppLink>Quero meu treino personalizado <ArrowRight size={18} /></WhatsAppLink></div>
          </div>
          <div className="audience reveal"><span className="kicker">Para quem é?</span><div className="card-grid four">{profiles.map(([Icon, title, text], index) => <article className="icon-card" key={String(title)}><span className="card-index">0{index + 1}</span><Icon /><h3>{String(title)}</h3><p>{String(text)}</p></article>)}</div></div>
        </section>

        <section className="section process" id="como-funciona">
          <div className="section-heading reveal"><span className="kicker">Passo a passo</span><h2>COMO FUNCIONA <em>A CONSULTORIA.</em></h2></div>
          <div className="timeline">{steps.map(([title, text], index) => <article className="step reveal" key={title}><div className="step-number">{String(index + 1).padStart(2, "0")}</div><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </section>

        <section className="section mfit">
          <div className="phone reveal" aria-label="Representação do aplicativo MFit Personal"><div className="phone-top" /><div className="phone-screen"><span>MFIT PERSONAL</span><h3>TREINO A</h3><div className="exercise"><Play fill="currentColor" /><div><strong>Supino reto</strong><small>4 séries • 10 repetições</small></div></div><div className="exercise"><Play fill="currentColor" /><div><strong>Remada baixa</strong><small>3 séries • 12 repetições</small></div></div><div className="exercise"><Play fill="currentColor" /><div><strong>Elevação lateral</strong><small>4 séries • 12 repetições</small></div></div></div></div>
          <div className="section-copy reveal"><span className="kicker">MFit Personal</span><h2>SEU TREINO NA <em>PALMA DA SUA MÃO.</em></h2><p>Todo o planejamento fica disponível no aplicativo MFit Personal.</p><div className="feature-list">{appFeatures.map((item) => <span key={item}><Check /> {item}</span>)}</div><strong className="app-statement">Você chega na academia sabendo exatamente o que precisa fazer.</strong></div>
        </section>

        <section className="section results" id="resultados">
          <div className="section-heading reveal"><span className="kicker">Evolução mensurável</span><h2>RESULTADOS QUE <em>FALAM POR SI.</em></h2><p>Estratégia + acompanhamento + constância.</p></div>
          <div className="result-signals reveal"><span>↓ GORDURA CORPORAL</span><span>↑ MASSA MAGRA</span><span>↓ MEDIDAS</span><span>↑ PERFORMANCE</span></div>
          {/* IMPORTANTE: Publicar avaliações de clientes somente mediante autorização. Caso não exista autorização, ocultar nome, foto e demais dados identificáveis. */}
          <div className="results-gallery">{results.map((src, index) => <figure className="result-card reveal" key={src}><img src={src} alt={`Comparação de avaliação física ${index + 1}`} loading="lazy" /><figcaption>ACOMPANHAMENTO • EVOLUÇÃO</figcaption></figure>)}</div>
          <p className="privacy-note">Resultados individuais variam. Imagens de avaliações devem ser publicadas somente com autorização dos clientes.</p>
        </section>

        <section className="section in-person" id="presencial">
          <div className="creative-card reveal"><img src="/assets/presencial.webp" alt="Apresentação do acompanhamento presencial Lavezso" loading="lazy" /></div>
          <div className="section-copy reveal"><span className="kicker">Aulas particulares</span><h2>ACOMPANHAMENTO <em>PRESENCIAL.</em></h2><h3>ATENÇÃO TOTAL. TREINO INTELIGENTE. RESULTADOS REAIS.</h3><p>Para quem busca acompanhamento ainda mais próximo. Execução, intensidade, ajustes e evolução acompanhados de perto.</p><div className="feature-list compact">{["Treino 100% personalizado", "Correção da execução", "Acompanhamento durante o treino", "Ajustes imediatos", "Mais segurança", "Mais consistência"].map(item => <span key={item}><Check /> {item}</span>)}</div><WhatsAppLink message={messages.inPerson}>Consultar horários <ArrowRight size={18} /></WhatsAppLink></div>
        </section>

        <section className="section plans" id="planos">
          <div className="section-heading reveal"><span className="kicker">Comece sua evolução</span><h2>ESCOLHA COMO <em>VOCÊ QUER COMEÇAR.</em></h2></div>
          <div className="plans-grid">
            <article className="price-card reveal"><span className="plan-label">Plano mensal</span><div className="price"><small>R$</small><strong>80</strong><span>/ mês</span></div><PlanBenefits /><WhatsAppLink message={messages.monthly}>Começar agora <ArrowRight size={18} /></WhatsAppLink></article>
            <article className="price-card featured reveal"><span className="best-badge">Melhor custo-benefício</span><span className="plan-label">Plano trimestral</span><div className="price"><small>R$</small><strong>210</strong></div><p className="equivalent">Equivalente a <strong>R$ 70/mês</strong></p><div className="saving"><span>Mensal por 3 meses <s>R$ 240</s></span><strong>VOCÊ ECONOMIZA R$ 30</strong></div><PlanBenefits /><WhatsAppLink message={messages.quarterly}>Quero o trimestral <ArrowRight size={18} /></WhatsAppLink></article>
          </div>
        </section>

        <section className="section assessment" id="avaliacao">
          <div className="section-heading reveal"><span className="kicker">Ponto de partida</span><h2>ANTES DO TREINO, <em>NÓS CONHECEMOS VOCÊ.</em></h2><p>Para iniciar a consultoria é realizada uma avaliação física presencial na academia Vicale Fit.</p></div>
          <div className="assessment-flow">{assessment.map((item, index) => <article className="reveal" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></article>)}</div>
          <div className="center reveal"><WhatsAppLink message={messages.assessment}>Agendar minha avaliação <ArrowRight size={18} /></WhatsAppLink></div>
        </section>

        <section className="section checklist-section">
          <div className="checklist-title reveal"><span className="kicker">Prepare-se</span><h2>CHECKLIST <em>PRÉ-AVALIAÇÃO FÍSICA.</em></h2><p>Para tornar os resultados da sua avaliação o mais precisos possível, siga estas orientações:</p></div>
          <div className="checklist reveal">{checklist.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><Check /><p>{item}</p></div>)}</div>
        </section>

        <section className="section proof">
          <div className="proof-copy reveal"><span className="kicker">Sem atalhos</span><h2>RESULTADO NÃO É SORTE. <em>É PROCESSO.</em></h2><p>Treinar mais não significa necessariamente evoluir mais. O objetivo é fazer você treinar melhor: com planejamento, execução correta, progressão e constância.</p></div>
          <div className="proof-cards">{[[ClipboardCheck,"Planejamento"],[Dumbbell,"Execução"],[MessageCircle,"Acompanhamento"],[BarChart3,"Evolução"]].map(([Icon,label]) => <article className="reveal" key={String(label)}><Icon /><h3>{String(label)}</h3></article>)}</div>
        </section>

        <section className="section faq" id="faq">
          <div className="section-heading reveal"><span className="kicker">Dúvidas frequentes</span><h2>ANTES DE COMEÇAR.</h2></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <article className={`faq-item reveal ${faqOpen === index ? "open" : ""}`} key={question}><button type="button" aria-expanded={faqOpen === index} onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span>{String(index + 1).padStart(2, "0")}</span>{question}<ChevronDown /></button><div><p>{answer}</p></div></article>)}</div>
        </section>

        <section className="final-cta">
          <div className="cta-lines" aria-hidden="true" />
          <div className="reveal"><span className="kicker">Sua próxima fase começa agora</span><h2>SEU CORPO É<br />SEU MAIOR PROJETO.</h2><h3>EU TE AJUDO <em>A CONSTRUIR ELE.</em></h3><p>Você não precisa continuar treinando sem saber se está fazendo a coisa certa. Tenha um planejamento criado para você e acompanhamento durante sua evolução.</p><WhatsAppLink>Quero começar minha evolução <ArrowRight size={20} /></WhatsAppLink><small><MessageCircle size={15} /> Falar diretamente pelo WhatsApp</small></div>
        </section>

        <section className="instagram-section reveal"><Camera /><div><span>ACOMPANHE TAMBÉM</span><h2>NO INSTAGRAM</h2></div><a className="button button-secondary" href={CONFIG.instagram} target="_blank" rel="noopener noreferrer">Seguir no Instagram <ArrowRight size={18} /></a></section>
      </main>

      <footer><a className="brand" href="#inicio"><strong>LAVEZSO</strong><span>PERSONAL TRAINER</span></a><p>FOCO <i /> DISCIPLINA <i /> CONSTÂNCIA <i /> RESULTADOS</p><div><a href={whatsappURL()} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></div><small>© 2026. Todos os direitos reservados.</small></footer>

      <WhatsAppLink className="whatsapp-float"><MessageCircle fill="currentColor" /><span>Falar no WhatsApp</span></WhatsAppLink>
    </>
  );
}

function PlanBenefits() {
  return <ul className="plan-benefits">{["Avaliação inicial", "Treino personalizado", "Acesso pelo MFit Personal", "Vídeos dos exercícios", "Séries e repetições", "Tempo de descanso", "Orientações", "Acompanhamento e ajustes"].map(item => <li key={item}><Check /> {item}</li>)}</ul>;
}
