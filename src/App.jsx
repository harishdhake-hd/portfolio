import React, { useEffect, useState } from "react";

const profile = {
  name: "Harish Dhake",
  role: "BCA Student | Cybersecurity & Network Security",
  location: "Pune, Maharashtra, India",
  education: "BCA — Modern College Ganeshkhind, Pune",
  github: "https://github.com/harishdhake-hd",
  linkedin: "https://www.linkedin.com/in/harish-dhake1275",
  email: "harishdhake4@gmail.com",
  resume: "/resume.pdf", // put your resume at public/resume.pdf
};

const skillGroups = [
  ["Network Analysis", ["Networking", "Wireshark", "Scapy", "Nmap"]],
  ["Security & SOC", ["Cybersecurity", "SOC", "NDR", "Burp Suite", "Linux"]],
  ["Programming & Web", ["Python", "FastAPI", "React", "Node.js"]],
  ["Data & Tools", ["PostgreSQL", "MongoDB", "Git / GitHub"]],
];
const skillCount = skillGroups.reduce((n, [, items]) => n + items.length, 0);

const certifications = [
  { name: "Introduction to Network Analysis", org: "CENTRI", date: "Aug 2026", image: "/certificates/network-analysis.png", type: "course" },
  { name: "Cybersecurity Analyst Job Simulation", org: "Tata (via Forage)", date: "Sep 2025", image: "/certificates/cybersecurity-analyst.png", type: "simulation" },
  { name: "Introduction to Cybersecurity Job Simulation", org: "Commonwealth Bank (via Forage)", date: "Feb 2026", image: "/certificates/cybersecurity-intro.png", type: "simulation" },
  { name: "Cyber Job Simulation", org: "Deloitte (via Forage)", date: "Sep 2025", image: "/certificates/deloitte-cyber.png", type: "simulation" },
  { name: "Cybersecurity Job Simulation", org: "Mastercard (via Forage)", date: "Sep 2026", image: "/certificates/mastercard-cyber.png", type: "simulation" },
];

const projects = [
  {
    title: "NetSentry",
    type: "Network Security Operations Platform",
    description:
      "Real-time network monitoring, threat detection, incident investigation and SOC-inspired security workflows.",
    stack: ["Python", "FastAPI", "Scapy", "SQLite", "WebSocket"],
    highlights: [
      "Live packet capture with flow tracking and a real-time browser dashboard.",
      "Detects ARP spoofing and man-in-the-middle activity by correlating passive signals.",
      "Stateful detection rules, with AI-written alert explanations guarded against prompt injection.",
      "Auto-detects the capture interface on Windows and shows capture errors instead of crashing.",
    ],
    repo: "https://github.com/harishdhake-hd/NetSentry",
    image: "/netsentry-preview.png",
    featured: true,
  },
  {
    title: "Port Scanner",
    type: "Network Security",
    description: "A practical utility for understanding ports, services and network reconnaissance.",
    stack: ["Python", "TCP/IP"],
    highlights: [
      "Checks which TCP ports are open on a target host.",
      "Built to understand reconnaissance from the defender's side.",
    ],
    repo: "https://github.com/harishdhake-hd/Port-Scanner",
    image: "/port-scanner.png",
  },
  {
    title: "Firewall Simulator",
    type: "Security Engineering",
    description: "A learning project that demonstrates allow/deny traffic decisions.",
    stack: ["Python", "Networking"],
    highlights: [
      "Applies allow/deny rules to simulated traffic.",
      "Shows how rule order changes what gets blocked.",
    ],
    repo: "https://github.com/harishdhake-hd/Firewall-Simulator",
    image: "/firewall-simulator.png",
  },
  {
    title: "Password Strength Analyzer",
    type: "Security Utility",
    description: "A Python utility that scores password strength and provides improvement feedback.",
    stack: ["Python", "Regex", "Security"],
    highlights: [
      "Scores passwords with pattern checks.",
      "Gives specific feedback on how to make a password stronger.",
    ],
    repo: "https://github.com/harishdhake-hd/Password-Strength-Analyzer",
    image: "/password-analyzer.png",
  },
];

const learning = [
  ["Security Operations", "Telemetry, detection, investigation, evidence and response."],
  ["Networking Foundations", "TCP/IP, DNS, ARP, routing, subnetting and packet flow."],
  ["Practical Security", "Wireshark, Nmap, Burp Suite, ZAP, tcpdump and Scapy."],
  ["Programming for Security", "Python and web technologies for security automation."],
];

function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    document.title = "Harish Dhake | BCA Student, Cybersecurity & Network Security";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = "BCA student focused on network defense, threat detection and SOC work. Projects, certifications and contact details.";
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home", "about", "journey", "certifications", "projects", "skills", "contact"];
      const y = window.scrollY + 150;
      let current = "home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site">
      <style>{`
        :root{
          --navy:#102544;
          --blue:#1264d6;
          --blue2:#2b86ef;
          --sky:#eaf4ff;
          --ink:#14233b;
          --muted:#66758b;
          --line:#dce6f2;
          --bg:#f7faff;
          --white:#ffffff;
          --shadow:0 18px 55px rgba(26,62,103,.10);
          --radius:18px;
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
        button,input,textarea{font:inherit}
        button{cursor:pointer}
        a{text-decoration:none;color:inherit}
        .site{min-height:100vh;background:linear-gradient(180deg,#fff 0%,#f7faff 42%,#f3f8fd 100%);overflow:hidden}
        .container{width:min(1380px,calc(100% - 72px));margin:auto}
        .nav{position:fixed;top:0;left:0;right:0;z-index:50;height:74px;background:rgba(255,255,255,.94);backdrop-filter:blur(18px);border-bottom:1px solid var(--line)}
        .nav-inner{height:100%;display:flex;align-items:center;justify-content:space-between;gap:28px}
        .brand{border:0;background:none;display:flex;align-items:center;gap:12px;color:var(--navy);text-align:left}
        .brand-mark{width:39px;height:39px;border-radius:11px;display:grid;place-items:center;background:var(--blue);color:white;font-weight:900;font-size:15px;box-shadow:0 8px 22px rgba(18,100,214,.22)}
        .brand strong{display:block;font-size:17px;letter-spacing:-.03em}
        .brand small{display:block;color:#6f7f95;font-size:10px;letter-spacing:.16em;margin-top:2px}
        .nav-links{display:flex;align-items:center;gap:5px}
        .nav-links button{border:0;background:transparent;color:#263954;padding:10px 13px;border-radius:9px;font-size:13px;font-weight:600}
        .nav-links button:hover,.nav-links button.active{color:var(--blue);background:#f0f6ff}
        .connect{background:var(--navy)!important;color:white!important;border-radius:10px!important;padding:11px 17px!important}
        .nav-links a.connect{display:inline-block;font-size:13px;font-weight:600;cursor:pointer}
        .nav-links a.connect:hover{background:var(--blue)!important}
        .menu{display:none;border:1px solid var(--line);background:white;color:var(--navy);padding:9px 12px;border-radius:9px}
        section{scroll-margin-top:95px}

        .hero{padding:128px 0 30px}
        .hero-grid{display:grid;grid-template-columns:1.02fr .98fr;min-height:590px;align-items:center;border-radius:0 0 28px 28px;overflow:hidden}
        .hero-copy{padding:55px 15px 55px 10px}
        .pill{display:inline-flex;align-items:center;gap:9px;padding:9px 14px;border-radius:999px;background:#e5f2ff;color:#075abf;font-size:12px;font-weight:800;letter-spacing:.03em}
        .pill-dot{width:8px;height:8px;border-radius:50%;background:#1680ee}
        h1{font-size:clamp(48px,6.4vw,86px);line-height:.95;letter-spacing:-.065em;margin:25px 0 17px;color:var(--navy)}
        h1 span{color:var(--blue)}
        .hero-role{font-size:20px;font-weight:750;color:#203554;margin-bottom:22px}
        .availability{color:var(--muted);font-size:14px;margin:-12px 0 20px}
        .hero-text{max-width:660px;color:var(--muted);font-size:17px;line-height:1.7;margin:0 0 28px}
        .actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1px solid var(--line);background:white;color:var(--navy);min-height:45px;padding:0 18px;border-radius:10px;font-size:13px;font-weight:800;box-shadow:0 5px 15px rgba(23,55,92,.05)}
        .btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(23,55,92,.10)}
        .btn-primary{background:var(--navy);border-color:var(--navy);color:white}
        .hero-visual{height:100%;min-height:590px;position:relative;display:flex;align-items:flex-end;justify-content:center;background:linear-gradient(135deg,#e9f4ff,#cfe7ff 52%,#f8fbff)}
        .hero-visual:before{content:"";position:absolute;inset:0;background:
          radial-gradient(circle at 74% 28%,rgba(24,117,224,.22),transparent 26%),
          linear-gradient(110deg,transparent 48%,rgba(255,255,255,.5) 49%,transparent 50%);
        }
        .hero-photo{position:relative;z-index:2;width:min(78%,510px);height:590px;object-fit:cover;object-position:center top;align-self:end;mask-image:linear-gradient(to bottom,#000 92%,transparent 100%);filter:saturate(.98)}
        .stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);margin-top:12px}
        .stat{padding:18px 22px;border-right:1px solid var(--line)}
        .stat:last-child{border-right:0}
        .stat strong{display:block;color:#075fc8;font-size:27px}
        .stat span{font-size:12px;color:var(--muted)}

        .section{padding:74px 0}
        .section-title{display:flex;align-items:end;justify-content:space-between;gap:25px;margin-bottom:25px}
        .section-title h2{margin:0;color:var(--navy);font-size:30px;letter-spacing:-.04em}
        .section-title p{margin:0;color:var(--muted);font-size:13px;max-width:520px;line-height:1.6}
        .eyebrow-small{color:var(--blue);font-size:11px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;margin-bottom:8px}

        .three-grid{display:grid;grid-template-columns:1fr 1.6fr;gap:18px}
        .card{background:white;border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow)}
        .card-pad{padding:25px}
        .about-card p{color:#5d6d82;line-height:1.75;font-size:13px}
        .facts{margin-top:20px;background:#f3f8fd;border-radius:13px;padding:14px}
        .fact{display:grid;grid-template-columns:22px 1fr;gap:7px;padding:8px 0;color:#5c6c80;font-size:11px}
        .fact b{color:var(--blue)}
        .featured{background:#0e1b2c;color:white;overflow:hidden}
        .featured-top{padding:25px 25px 20px}
        .featured h3{font-size:24px;margin:5px 0 8px}
        .featured-type{color:#52b1ff;font-size:13px;font-weight:700}
        .featured p{color:#b6c4d5;font-size:13px;line-height:1.65}
        .project-preview{height:190px;margin:0 18px 18px;border-radius:12px;overflow:hidden;border:1px solid #263b54;background:#08111d}
        .project-preview img{width:100%;height:100%;object-fit:cover;opacity:.92}
        .tag-row{display:flex;gap:7px;flex-wrap:wrap;margin-top:14px}
        .tag{padding:6px 9px;border-radius:999px;background:#eef5fc;color:#315273;font-size:10px;font-weight:750}
        .featured .tag{background:#17304a;color:#a9d9ff}
        .project-actions{display:flex;gap:9px;margin-top:16px}
        .small-btn{padding:9px 12px;border-radius:8px;border:1px solid #31506e;background:transparent;color:white;font-size:11px;font-weight:800}
        .small-btn.primary{background:#1680ee;border-color:#1680ee}

        .journey-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
        .journey{padding:22px}
        .journey-number{color:var(--blue);font-weight:900;font-size:11px}
        .journey h3{font-size:15px;margin:10px 0 7px}
        .journey p{font-size:12px;line-height:1.65;color:var(--muted);margin:0}

        .cert-group + .cert-group{margin-top:34px}
        .cert-group-title{margin:0 0 14px;font-size:15px;color:var(--navy)}
        .cert-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:15px}
        .cert-card{overflow:hidden;cursor:pointer;transition:.2s;text-align:left;padding:0}
        .cert-card:hover{transform:translateY(-3px);box-shadow:0 22px 60px rgba(26,62,103,.14)}
        .cert-card:focus-visible{outline:2px solid var(--blue);outline-offset:2px}
        .cert-image-wrap{position:relative;aspect-ratio:4/3;background:#eef5fc;border-bottom:1px solid var(--line)}
        .cert-image{width:100%;height:100%;object-fit:cover;display:block}
        .cert-fallback{display:none;position:absolute;inset:0;align-items:center;justify-content:center;text-align:center;padding:14px;color:#9fb0c4;font-size:11px;line-height:1.6;font-weight:700}
        .cert-info{padding:16px 17px}
        .cert-info h3{margin:0 0 5px;font-size:13px;line-height:1.4;color:var(--navy)}
        .cert-info p{margin:0;color:var(--muted);font-size:11px}
        .cert-modal-backdrop{position:fixed;inset:0;z-index:60;display:grid;place-items:center;padding:24px;background:rgba(16,37,68,.55);backdrop-filter:blur(6px)}
        .cert-modal{width:min(680px,100%);max-height:88vh;overflow:auto;background:white;border-radius:var(--radius);box-shadow:var(--shadow)}
        .cert-modal-head{display:flex;justify-content:space-between;gap:20px;padding:22px 24px;border-bottom:1px solid var(--line)}
        .cert-modal-head h3{margin:0 0 4px;color:var(--navy);font-size:17px}
        .cert-modal-head p{margin:0;color:var(--muted);font-size:12px}
        .cert-modal-close{border:0;background:#f0f6ff;color:var(--navy);width:32px;height:32px;border-radius:9px;font-size:17px;flex:0 0 auto}
        .cert-modal-image{width:100%;display:block;background:#eef5fc;max-height:65vh;object-fit:contain}
        .cert-modal-fallback{display:none;min-height:220px;align-items:center;justify-content:center;text-align:center;color:var(--muted);font-size:12px;padding:30px;line-height:1.7}
        .cert-modal-fallback code{color:var(--blue)}

        .projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}
        .project-card{padding:0;overflow:hidden}
        .project-card-image{height:210px;background:#08111d;border-bottom:1px solid var(--line);overflow:hidden}
        .project-card-image img{width:100%;height:100%;object-fit:cover;display:block}
        .project-card-content{padding:21px}
        .project-card h3{margin:8px 0 6px;font-size:17px}
        .project-card p{color:var(--muted);font-size:12px;line-height:1.65}
        .project-card.featured-small{grid-column:span 2}
        .highlights{margin:12px 0 0;padding-left:18px;color:var(--muted);font-size:12px;line-height:1.7}
        .project-link{display:inline-block;margin-top:16px;color:var(--blue);font-size:12px;font-weight:800}
        .project-link:hover{text-decoration:underline}

        .skills-wrap{display:grid;gap:16px;padding:25px}
        .skill-row{display:grid;grid-template-columns:170px 1fr;gap:14px;align-items:center;padding-bottom:16px;border-bottom:1px solid var(--line)}
        .skill-row:last-child{border-bottom:0;padding-bottom:0}
        .skill-label{font-size:13px;font-weight:800;color:var(--navy)}
        .skill-items{display:flex;gap:9px;flex-wrap:wrap}
        .skill-pill{padding:10px 14px;border-radius:999px;background:#eef5fc;color:#21466e;font-size:12px;font-weight:750;border:1px solid #dfebf7}

        .contact{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .contact-card{padding:28px}
        .contact-card h3{margin:0 0 10px}
        .contact-card p{color:var(--muted);line-height:1.7;font-size:13px}
        .contact-link{display:flex;justify-content:space-between;gap:20px;padding:13px 0;border-bottom:1px solid var(--line);font-size:12px}
        .contact-link span{color:var(--muted)}
        .contact-link a{color:var(--blue);font-weight:700}
        .footer{border-top:1px solid var(--line);padding:25px 0;color:#738298;font-size:11px}
        .footer-inner{display:flex;justify-content:space-between;gap:20px}

        @media(max-width:1000px){
          .nav-links{display:none;position:absolute;top:68px;left:18px;right:18px;background:white;border:1px solid var(--line);border-radius:12px;padding:8px;box-shadow:var(--shadow);flex-direction:column;align-items:stretch}
          .nav-links.open{display:flex}.nav-links button{text-align:left}.nav-links a.connect{text-align:center}.menu{display:block}
          .hero-grid{grid-template-columns:1fr}.hero-copy{padding:45px 0}.hero-visual{min-height:500px}.hero-photo{height:500px}.three-grid{grid-template-columns:1fr}.journey-grid{grid-template-columns:repeat(2,1fr)}.cert-grid{grid-template-columns:repeat(2,1fr)}.projects-grid{grid-template-columns:1fr}.project-card.featured-small{grid-column:auto}.contact{grid-template-columns:1fr}
        }
        @media(max-width:600px){
          .container{width:min(100% - 28px,1380px)}.hero{padding-top:105px}.hero-visual{min-height:390px}.hero-photo{height:390px;width:88%}.stats{grid-template-columns:repeat(3,1fr)}.stat{padding:14px 10px}.stat strong{font-size:22px}.journey-grid{grid-template-columns:1fr}.cert-grid{grid-template-columns:1fr}.section{padding:55px 0}.footer-inner{flex-direction:column}.skill-row{grid-template-columns:1fr;gap:10px}h1{font-size:49px}
        }
      `}</style>

      <header className="nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => goTo("home")}>
            <span className="brand-mark">HD</span>
            <span><strong>HARISH DHAKE</strong><small>SECURITY PORTFOLIO</small></span>
          </button>
          <button className="menu" onClick={() => setMenuOpen(v => !v)}>MENU</button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              ["home","Home"],["about","About"],["journey","Focus"],
              ["certifications","Certifications"],["projects","Projects"],
              ["skills","Skills"],["contact","Contact"]
            ].map(([id,label]) =>
              <button key={id} className={active === id ? "active" : ""} onClick={() => goTo(id)}>{label}</button>
            )}
            <a
              className="connect"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Let's Connect →
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="pill"><span className="pill-dot"/> OPEN TO ENTRY-LEVEL SOC ROLES</div>
                <h1>HARISH <span>DHAKE</span></h1>
                <div className="hero-role">{profile.role}</div>
                <div className="availability">Graduating 2027 · Based in Pune, India</div>
                <p className="hero-text">
                  I build hands-on defensive security skills: network traffic analysis, threat
                  detection and incident investigation. I create SOC-style tools like NetSentry to
                  learn how attacks show up in network data and how to stop them.
                </p>
                <div className="actions">
                  <button className="btn btn-primary" onClick={() => goTo("projects")}>View My Work →</button>
                  <a className="btn" href={profile.resume} download>Download Resume ↓</a>
                  <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
                <div className="stats">
                  <div className="stat"><strong>{projects.length}</strong><span>Projects</span></div>
                  <div className="stat"><strong>{certifications.length}</strong><span>Certificates & Simulations</span></div>
                  <div className="stat"><strong>{skillCount}</strong><span>Tools & Skills</span></div>
                </div>
              </div>

              <div className="hero-visual">
                <img className="hero-photo" src="/profile-photo.png" alt="Harish Dhake" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-title">
              <div><div className="eyebrow-small">Profile</div><h2>About Me</h2></div>
              <p>A defense-focused student who turns security fundamentals into working tools.</p>
            </div>
            <div className="three-grid">
              <article className="card about-card card-pad">
                <div className="eyebrow-small">Who I Am</div>
                <p>I am a third-year BCA student at Modern College Ganeshkhind, Pune, focused on defensive security and aiming for an entry-level SOC Analyst role.</p>
                <p>My approach is hands-on: understand a protocol, inspect traffic, reproduce behavior, identify weaknesses and build ways to detect and defend them.</p>
                <div className="facts">
                  <div className="fact"><b>●</b><span>{profile.location}</span></div>
                  <div className="fact"><b>◆</b><span>{profile.education}</span></div>
                  <div className="fact"><b>↗</b><span>{profile.role}</span></div>
                </div>
              </article>

              <article className="card featured">
                <div className="featured-top">
                  <div className="eyebrow-small" style={{color:"#56b5ff"}}>Featured Project</div>
                  <h3>NetSentry</h3>
                  <div className="featured-type">Network Security Operations Platform</div>
                  <p>Real-time network monitoring, threat detection, incident investigation and SOC-inspired security workflows.</p>
                  <div className="tag-row">{["Python","FastAPI","Scapy","SQLite","WebSocket"].map(x => <span className="tag" key={x}>{x}</span>)}</div>
                  <div className="project-actions">
                    <button className="small-btn primary" onClick={() => goTo("projects")}>View Project →</button>
                    <a className="small-btn" href={projects[0].repo} target="_blank" rel="noreferrer">GitHub ↗</a>
                  </div>
                </div>
                <div className="project-preview">
                  <img src="/netsentry-preview.png" alt="NetSentry project preview" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                </div>
              </article>

            </div>
          </div>
        </section>

        <section id="journey" className="section" style={{background:"#fff"}}>
          <div className="container">
            <div className="section-title">
              <div><div className="eyebrow-small">Focus Areas</div><h2>Defensive Security Focus</h2></div>
              <p>What I practice in labs and apply in my projects.</p>
            </div>
            <div className="journey-grid">
              {learning.map(([t,p],i) =>
                <article className="card journey" key={t}>
                  <div className="journey-number">0{i+1}</div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </article>
              )}
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="container">
            <div className="section-title">
              <div><div className="eyebrow-small">Credentials</div><h2>Certifications</h2></div>
              <p>Completed certifications and job simulations. Click a card to view the certificate.</p>
            </div>
            {[["Courses & Certificates", "course"], ["Job Simulations", "simulation"]].map(([label, type]) =>
              <div className="cert-group" key={type}>
                <h3 className="cert-group-title">{label}</h3>
                <div className="cert-grid">
                  {certifications.filter((c) => c.type === type).map((cert) =>
                    <article
                      className="card cert-card"
                      key={cert.name}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedCert(cert)}
                      onKeyDown={(e) => { if (e.key === "Enter") setSelectedCert(cert); }}
                    >
                      <div className="cert-image-wrap">
                        <img
                          className="cert-image"
                          src={cert.image}
                          alt={cert.name}
                          loading="lazy"
                          onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
                        />
                        <div className="cert-fallback">Add<br/>{cert.image.split("/").pop()}</div>
                      </div>
                      <div className="cert-info">
                        <h3>{cert.name}</h3>
                        <p>{cert.org} · {cert.date}</p>
                      </div>
                    </article>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="projects" className="section" style={{background:"#fff"}}>
          <div className="container">
            <div className="section-title">
              <div><div className="eyebrow-small">Selected Work</div><h2>Projects</h2></div>
              <p>Security projects built to understand systems, investigate behavior and practice defensive engineering.</p>
            </div>
            <div className="projects-grid">
              {projects.map((p) =>
                <article className={`card project-card ${p.featured ? "featured-small" : ""}`} key={p.title}>
                  {p.image && <div className="project-card-image"><img src={p.image} alt={`${p.title} project output`} loading="lazy" /></div>}
                  <div className="project-card-content">
                    <div className="eyebrow-small">{p.type}</div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    {p.highlights && <ul className="highlights">{p.highlights.map(h => <li key={h}>{h}</li>)}</ul>}
                    <div className="tag-row">{p.stack.map(x => <span className="tag" key={x}>{x}</span>)}</div>
                    <a className="project-link" href={p.repo || profile.github} target="_blank" rel="noreferrer">View code on GitHub ↗</a>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-title">
              <div><div className="eyebrow-small">Capabilities</div><h2>Technical Skills</h2></div>
              <p>Technologies and security concepts I am actively learning and applying.</p>
            </div>
            <div className="card skills-wrap">
              {skillGroups.map(([label, items]) =>
                <div className="skill-row" key={label}>
                  <div className="skill-label">{label}</div>
                  <div className="skill-items">
                    {items.map(s => <span className="skill-pill" key={s}>{s}</span>)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="contact" className="section" style={{background:"#fff"}}>
          <div className="container">
            <div className="section-title">
              <div><div className="eyebrow-small">Connect</div><h2>Let's Work Together</h2></div>
              <p>Hiring for a SOC or security analyst role? Message me on LinkedIn.</p>
            </div>
            <div className="contact">
              <article className="card contact-card">
                <h3>Harish Dhake</h3>
                <p>BCA student focused on network defense, threat detection and security operations, with hands-on projects and certifications.</p>
                <div className="contact-link"><span>Location</span><strong>Pune, India</strong></div>
                <div className="contact-link"><span>Education</span><strong>BCA — Modern College</strong></div>
                <div className="contact-link"><span>GitHub</span><a href={profile.github} target="_blank" rel="noreferrer">harishdhake-hd ↗</a></div>
                <div className="contact-link"><span>LinkedIn</span><a href={profile.linkedin} target="_blank" rel="noreferrer">Message me ↗</a></div>
                {profile.email && <div className="contact-link"><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>}
              </article>
              <article className="card contact-card">
                <h3>What I'm Looking For</h3>
                <p>An entry-level SOC Analyst role where I can apply network analysis, detection and incident investigation skills.</p>
                <div className="actions">
                  <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noreferrer">Message on LinkedIn →</a>
                  <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
                  <a className="btn" href={profile.github} target="_blank" rel="noreferrer">View GitHub ↗</a>
                  <button className="btn" onClick={() => goTo("home")}>Back to Top ↑</button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Harish Dhake</span>
          <span>Cybersecurity • Network Defense • SOC</span>
        </div>
      </footer>

      {selectedCert && (
        <div className="cert-modal-backdrop" onMouseDown={() => setSelectedCert(null)}>
          <div className="cert-modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="cert-modal-head">
              <div>
                <h3>{selectedCert.name}</h3>
                <p>{selectedCert.org} · {selectedCert.date}</p>
              </div>
              <button className="cert-modal-close" onClick={() => setSelectedCert(null)} aria-label="Close">×</button>
            </div>
            <img
              className="cert-modal-image"
              src={selectedCert.image}
              alt={selectedCert.name}
              onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }}
            />
            <div className="cert-modal-fallback">
              Certificate image not found.<br/>
              Add a file at <code>public{selectedCert.image}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
