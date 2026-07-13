"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, XMark } from "./Icons";
import { AcademicVisual, CampaignVisual, RwaVisual, StablecoinVisual } from "./WorkVisuals";

const projects = [
  {
    id: "rwa",
    number: "01",
    category: "Markets",
    kind: "Research",
    title: "Mapping where real-world value meets onchain rails.",
    description:
      "Research into tokenized assets, issuance models, market structure, and the infrastructure turning ownership into programmable information.",
    note: "Thesis → systems over speculation",
    visual: <RwaVisual />,
  },
  {
    id: "stablecoins",
    number: "02",
    category: "Markets",
    kind: "Analysis",
    title: "Following money at internet speed.",
    description:
      "Clear-eyed analysis of reserves, regulation, payments, and the cross-border utility making stablecoins a new settlement layer.",
    note: "Focus → adoption, trust, distribution",
    visual: <StablecoinVisual />,
  },
  {
    id: "campaigns",
    number: "03",
    category: "Campaigns",
    kind: "Visual systems",
    title: "Turning infrastructure into stories people stop to read.",
    description:
      "Premium editorial campaigns for Skey and XBIT—translating IoT, access, prediction markets, and trading infrastructure into sharp visual narratives.",
    note: "Output → research-led campaign graphics",
    visual: <CampaignVisual />,
  },
  {
    id: "academic",
    number: "04",
    category: "Academic",
    kind: "Materials science",
    title: "Studying tin oxidation at the atomic scale.",
    description:
      "A reactive molecular dynamics study of Sn²⁺ oxidation suppression in α-FASnI₃ perovskite—connecting atomic mechanisms to more stable lead-free solar materials.",
    note: "Method → reactive molecular dynamics",
    visual: <AcademicVisual />,
  },
];

const filters = ["All", "Markets", "Campaigns", "Academic"];

const proofOfWork = [
  { name: "MEXC", descriptor: "Content campaign", logo: "/project-logos/MEXC-logo.png", accent: "#1677ff", href: "https://x.com/StanleyCrypt_/status/2075520980835774584?s=20" },
  { name: "Umbra Privacy", descriptor: "Privacy narrative", logo: "/project-logos/Umbra-Privacy-logo.png", accent: "#36bde9", href: "https://x.com/StanleyCrypt_/status/2075575937635082359?s=20" },
  { name: "SollPay", descriptor: "Payments campaign", logo: "/project-logos/SollPay-logo.png", accent: "#7954f6", href: "https://x.com/StanleyCrypt_/status/2074760533702590606?s=20" },
  { name: "XBIT", descriptor: "Market content", logo: "/project-logos/XBIT-logo.png", accent: "#9133f5", href: "https://x.com/StanleyCrypt_/status/2068779109824819527?s=20" },
  { name: "SKEY Network", descriptor: "Infrastructure campaign", logo: "/project-logos/SKEY-Network-logo.png", accent: "#5648f4", href: "https://x.com/StanleyCrypt_/status/2068015503482753247?s=20" },
  { name: "5th Kingdom", descriptor: "Ecosystem narrative", logo: "/project-logos/5th-Kingdom-logo.png", accent: "#c99832", href: "https://x.com/StanleyCrypt_/status/2064785422673187104?s=20" },
  { name: "BOB Protocol", descriptor: "Bitcoin infrastructure", logo: "/project-logos/BOB-Protocol-logo.png", accent: "#f75b00", href: "https://x.com/StanleyCrypt_/status/2060004611205812576?s=20" },
  { name: "CoinEx", descriptor: "Exchange content", logo: "/project-logos/CoinEx-logo.png", accent: "#00c9ac", href: "https://x.com/StanleyCrypt_/status/2058971596459561419?s=20" },
];

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Stanley Chukwuka, home">
        <span className="brand-mark"><img src="/stanley-web3-pfp.png" alt="" /></span>
        <span className="brand-copy">Stanley Chukwuka<small>Research & visual systems</small></span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span /><span />
      </button>
      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
        <a href="#proof" onClick={() => setMenuOpen(false)}>Proof of work</a>
        <a href="#practice" onClick={() => setMenuOpen(false)}>Practice</a>
        <a className="nav-social" href="https://x.com/StanleyCrypt_" target="_blank" rel="noreferrer">
          <XMark size={16} /> @StanleyCrypt_
        </a>
      </nav>
    </header>
  );
}

function SignalRoom() {
  return (
    <div className="signal-room" aria-label="Research focus areas: real-world assets, stablecoins, and materials science">
      <div className="signal-header">
        <span>Signal room</span>
        <span className="live-mark"><i /> Research index</span>
      </div>
      <div className="signal-stack">
        <div className="signal-card card-rwa">
          <span className="signal-index">01 / MARKET SYSTEMS</span>
          <strong>Real-world<br />assets</strong>
          <div className="signal-line"><span /><span /><span /></div>
        </div>
        <div className="signal-card card-stable">
          <span className="signal-index">02 / MONEY RAILS</span>
          <strong>Stablecoin<br />analysis</strong>
          <div className="signal-ring">$</div>
        </div>
        <div className="signal-card card-science">
          <span className="signal-index">03 / ATOMIC SCALE</span>
          <strong>Materials<br />science</strong>
          <div className="signal-atom"><i /><i /><i /></div>
        </div>
      </div>
      <div className="signal-footer"><span>Lagos, NG</span><span>Independent research practice</span></div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span>RWA + Stablecoin Research</span><i />Nigeria → Global markets</p>
        <h1>I research the <em>rails</em><br />beneath the market.</h1>
        <p className="hero-intro">
          I’m Stanley Chukwuka—an independent researcher and visual storyteller turning complex markets, infrastructure, and materials science into clear, credible narratives.
        </p>
        <div className="hero-profile" aria-label="Stanley Chukwuka, RWA and stablecoin researcher">
          <img src="/stanley-web3-pfp.png" alt="Stanley Chukwuka’s Web3 avatar" />
          <span><strong>Stanley Chukwuka</strong><small>RWA & stablecoin researcher · @StanleyCrypt_</small></span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore selected work <ArrowDown size={17} /></a>
          <a className="button button-quiet" href="https://x.com/StanleyCrypt_" target="_blank" rel="noreferrer">Follow the research <ArrowUpRight size={17} /></a>
        </div>
      </div>
      <SignalRoom />
      <div className="hero-footnote"><span>Research / Analysis / Narrative / Design</span><span>Portfolio 2026</span></div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-aside">
        <p className="section-kicker">Profile / 0xStanley</p>
        <div className="about-portrait"><img src="/stanley-web3-pfp.png" alt="Stanley Chukwuka’s Web3 avatar" /></div>
        <p className="about-role">Independent researcher<br />& visual storyteller</p>
      </div>
      <div className="about-story">
        <p className="about-lead">I stayed in Web3 because I saw infrastructure capable of solving problems traditional finance has carried for decades.</p>
        <div className="about-columns">
          <div>
            <p>Today, my work focuses on real-world assets, stablecoins, and the onchain rails connecting blockchain technology to everyday economic activity. I study how tokenized assets and programmable money can make markets more accessible, transparent, and efficient.</p>
            <p>Across Solana and the broader Web3 ecosystem, I’ve helped protocols turn technical products and emerging narratives into research, content, and campaigns people can understand—and trust.</p>
          </div>
          <div>
            <p>My process is research-first. Before I shape a narrative, I learn how the product works, why it exists, and which problem it solves. The result is communication that earns attention without sacrificing technical accuracy.</p>
            <p>I’m looking to work with ambitious teams building the future of finance, particularly across RWAs, stablecoins, and onchain capital markets.</p>
          </div>
        </div>
        <div className="about-principle"><span>My operating principle</span><strong>Understand the system.<br />Then make it clear.</strong></div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card project-${project.id}`}>
      <div className="project-visual-wrap">{project.visual}</div>
      <div className="project-copy">
        <div className="project-meta"><span>{project.number}</span><span>{project.kind}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-note"><span>{project.note}</span><ArrowUpRight size={17} /></div>
      </div>
    </article>
  );
}

function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="work section" id="work">
      <div className="section-heading">
        <div><p className="section-kicker">01 / Selected intelligence</p><h2>Four lenses.<br />One point of view.</h2></div>
        <p>Markets are easier to understand when you can see the systems underneath them. This portfolio follows the infrastructure, incentives, and ideas that matter.</p>
      </div>
      <div className="filter-row" role="group" aria-label="Filter selected work">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={activeFilter === filter ? "filter-button is-active" : "filter-button"}
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}<span>{filter === "All" ? projects.length : projects.filter((project) => project.category === filter).length}</span>
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {visibleProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
      </div>
    </section>
  );
}

function ProofOfWork() {
  return (
    <section className="proof section" id="proof">
      <div className="proof-heading">
        <div>
          <p className="section-kicker">02 / Selected proof of work</p>
          <h2>Published work.<br /><em>Open receipts.</em></h2>
        </div>
        <p>A selection of research-led content and campaign work for Web3 teams. Every engagement links directly to the published work.</p>
      </div>
      <div className="proof-grid">
        {proofOfWork.map((project, index) => (
          <a
            className="proof-card"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            key={project.name}
            style={{ "--project-accent": project.accent }}
            aria-label={`View published work for ${project.name} on X`}
          >
            <div className="proof-card-top">
              <span className="proof-index">{String(index + 1).padStart(2, "0")}</span>
              <ArrowUpRight size={18} />
            </div>
            <div className="project-logo"><img src={project.logo} alt={`${project.name} logo`} /></div>
            <div className="proof-card-copy">
              <h3>{project.name}</h3>
              <p>{project.descriptor}</p>
            </div>
            <span className="proof-link">View published work <i>↗</i></span>
          </a>
        ))}
      </div>
      <p className="proof-note"><i /> Eight public examples. One consistent standard: make complex Web3 products clear, credible, and worth attention.</p>
    </section>
  );
}

function Practice() {
  const steps = [
    ["01", "Research", "Find the signal, verify the claim, understand the system."],
    ["02", "Synthesis", "Connect technical detail to the question people actually care about."],
    ["03", "Narrative", "Build a thesis with a strong hook and a credible throughline."],
    ["04", "Visual system", "Give the idea a clear, premium form that earns attention."],
  ];

  return (
    <section className="practice section" id="practice">
      <div className="practice-top">
        <p className="section-kicker light">03 / The practice</p>
        <h2>Clarity is the<br /><em>real deliverable.</em></h2>
        <p className="practice-lead">The work sits between deep research and strong communication—because a valuable idea should be rigorous enough to trust and clear enough to travel.</p>
      </div>
      <div className="process-map" aria-label="Process flow: research to synthesis to narrative to visual system">
        <div className="process-rail"><i /></div>
        <div className="process-node node-research">
          <span><b /><b /><b /></span><small>Discover</small>
        </div>
        <div className="process-node node-synthesis">
          <span><b /><b /><b /></span><small>Connect</small>
        </div>
        <div className="process-node node-narrative">
          <span><b /><b /><b /></span><small>Structure</small>
        </div>
        <div className="process-node node-visual">
          <span><b /><b /><b /><b /></span><small>Express</small>
        </div>
      </div>
      <div className="practice-steps">
        {steps.map(([number, title, copy]) => (
          <div className="practice-step" key={number}>
            <span>{number}</span><h3>{title}</h3><p>{copy}</p>
          </div>
        ))}
      </div>
      <div className="contact-band">
        <div>
          <span className="availability"><i /> Open to serious collaborations</span>
          <h3>Have a complex story<br />worth making clear?</h3>
        </div>
        <a className="contact-link" href="https://x.com/StanleyCrypt_" target="_blank" rel="noreferrer">
          Start a conversation <ArrowUpRight size={22} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a className="footer-brand" href="#top"><span><img src="/stanley-web3-pfp.png" alt="" /></span> Stanley Chukwuka</a>
      <p>Researching the assets, rails, and ideas reshaping value.</p>
      <div><a href="https://x.com/StanleyCrypt_" target="_blank" rel="noreferrer">X / Twitter</a><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    const revealItems = document.querySelectorAll(".about-aside, .about-story, .section-heading, .project-card, .proof-heading, .proof-card, .proof-note, .practice-top, .practice-step, .contact-band");
    revealItems.forEach((item) => item.classList.add("reveal-item"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#work">Skip to selected work</a>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Work />
        <ProofOfWork />
        <Practice />
      </main>
      <Footer />
    </>
  );
}
