/* ============ Data ============ */

const TICKER_ITEMS = [
  'HTML5 & CSS3', 'React Developer', 'Tailwind CSS', 'Node.js', 'AI Integration', 'Express.js',
  'Vite', 'Deployment — Railway · Vercel · Cloudflare', 'REST APIs',
  'Nodemailer', 'Supabase', 'Shopify',
];

const SKILLS = [
  { name: 'HTML5 & CSS3', pct: 95 },
  { name: 'React / Vite', pct: 92 },
  { name: 'JavaScript', pct: 88 },
  { name: 'Tailwind CSS', pct: 92 },
  { name: 'Node.js + Express', pct: 82 },
  { name: 'AI Integration', pct: 85 },
  { name: 'React Router', pct: 80 },
  { name: 'REST API Design', pct: 78 },
  { name: 'Deployment', pct: 85 },
];

const EXPERIENCE = [
  {
    period: '2026 — Present',
    role: 'Full-Stack Web Developer',
    company: 'Self-employed · Dubai, UAE',
    desc: 'Designing and building production-ready websites for clients across the UAE — law firm portals, professional profile sites, and trading company platforms. Managing the full project lifecycle from client briefing and design through to development and deployment.',
    tags: ['HTML5 & CSS3','React', 'Node.js', 'Tailwind CSS', 'Express', 'Vite'],
  },
  {
    period: '2022 — Present',
    role: 'Senior IT Consultant',
    company: 'Al Naqbi & Partners Advocates & Legal Consultants · Dubai, UAE',
    desc: "Sole technology lead for a UAE law firm — managing enterprise infrastructure including Windows Server, Active Directory, Hyper-V virtualisation, and Veeam backup & DR systems. Spearheaded the firm's digital presence by commissioning and delivering their client-facing website.",
    tags: ['Windows Server', 'Active Directory', 'Hyper-V', 'Office 365', 'IT Strategy'],
  },
  {
    period: '2011 — 2020',
    role: 'IT Administrator',
    company: 'Greenshield Insurance Brokers · Dubai, UAE',
    desc: 'Managed all IT operations for a UAE insurance brokerage over nearly a decade — overseeing server infrastructure, Active Directory, network security, patch management, and disaster recovery. Primary technology advisor to senior management on budgeting and infrastructure strategy.',
    tags: ['Server Management', 'Network Security', 'AD / GPO', 'Disaster Recovery', 'IT Budgeting'],
  },
];

const EDUCATION = [
  {
    degree: 'Diploma in Computer Science',
    institution: 'Sindh Board of Technical Education (SBTE)',
    period: '1996 — 1998',
    desc: 'Two-year technical diploma in Computer Science covering programming fundamentals, systems, and computing principles.',
    honor: 'First Division',
  },
  {
    degree: 'Bachelor of Commerce',
    institution: 'University of Karachi',
    period: '1993 — 1996',
    desc: 'Undergraduate degree in International Business, Trade & Commerce — building a strong foundation in business operations and client management.',
    honor: '',
  },
];

const CERTS = [
  { title: 'Fortinet Certified Associate in Cybersecurity', issuer: 'Fortinet · Dec 2025' },
  { title: 'Fortinet Certified Fundamentals in CyberSecurity', issuer: 'Fortinet · May 2025' },
];

const SERVICE_ICONS = {
  webdev: '<rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />',
  fullstack: '<polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />',
  business: '<rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />',
  itconsulting: '<rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />',
  maintenance: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />',
  email: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />',
};

const SERVICES = [
  {
    icon: SERVICE_ICONS.webdev,
    title: 'Web Design & Development',
    desc: 'Custom, responsive websites built from scratch — designed to look great, load fast, and represent your brand on every device.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    icon: SERVICE_ICONS.fullstack,
    title: 'Full-Stack Web Applications',
    desc: 'End-to-end web apps with React frontend and Node.js/Express backend — contact forms, APIs, email integration, and more.',
    tags: ['React', 'Node.js', 'Express'],
  },
  {
    icon: SERVICE_ICONS.business,
    title: 'Business Websites',
    desc: 'Professional online presence for law firms, trading companies, and SMEs — from concept to launch, with ongoing support.',
    tags: ['Landing Pages', 'Company Sites', 'Portals'],
  },
  {
    icon: SERVICE_ICONS.itconsulting,
    title: 'IT Consulting',
    desc: 'Infrastructure planning, Windows Server management, network security, and technology strategy — backed by 15+ years of hands-on experience.',
    tags: ['Windows Server', 'Active Directory', 'Networking'],
  },
  {
    icon: SERVICE_ICONS.maintenance,
    title: 'Website Care & Maintenance',
    desc: 'Ongoing updates, performance monitoring, security patches, and content changes — so your site stays fast, secure, and current.',
    tags: ['Updates', 'Security', 'Performance'],
  },
  {
    icon: SERVICE_ICONS.email,
    title: 'Email & Cloud Setup',
    desc: 'Office 365 and Google Workspace configuration, domain setup, email migration, and user management for your team.',
    tags: ['Office 365', 'Google Workspace', 'Domains'],
  },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Law Firm Project',
    description: 'A professional, conversion-focused website for a law firm — featuring practice area pages, attorney profiles, and a seamless intake form.',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Railway'],
    url: 'https://lawfirm.syedcodes.com/',
    video: 'Videos/lawfirm.mp4',
  },
  {
    id: 2,
    title: 'Adnan Law — Individual Lawyer',
    description: 'A sleek personal website for an individual lawyer — showcasing expertise, case results, and a direct client consultation booking experience.',
    tags: ['React', 'Tailwind CSS', 'Cloudflare Pages'],
    url: 'https://adnanlawfirm.pages.dev/',
    video: 'Videos/adnan.mp4',
  },
  {
    id: 3,
    title: 'G.O.P.E General Trading',
    description: 'A full-featured corporate website for an international oilfield equipment supplier operating across the Middle East, Africa, and Europe — featuring a 14-category product catalogue with deep-link filtering, image lightbox, multi-office contact system, and a hero slider.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'React Router'],
    url: 'https://gopeme.org/',
    video: 'Videos/gopeme.mp4',
  },
];

const CONTACT_LINKS = [
  { label: 'Email', val: 'queries@syedcodes.com', href: 'mailto:queries@syedcodes.com' },
  { label: 'Location', val: 'Dubai, UAE', href: null },
  { label: 'LinkedIn', val: 'linkedin.com/in/syedfaisal', href: 'https://www.linkedin.com/in/syed-faisal-naseem-4547a3362/' },
  { label: 'Contact', val: '+971 55 2803860', href: 'tel:+971552803860' },
];

const EMAILJS_PUBLIC_KEY = 'u4GEr9wOIZpvZ3ire';
const EMAILJS_SERVICE_ID = 'service_qgjcjkp';
const EMAILJS_TEMPLATE_ID = 'template_amoknnj';

/* ============ Lenis smooth scroll ============ */
// Touch devices are left on native scroll by default (Lenis only smooths
// wheel/trackpad input unless syncTouch is turned on), so mobile scrolling
// is unaffected.
const lenis = typeof Lenis !== 'undefined' ? new Lenis() : null;

if (lenis) {
  requestAnimationFrame(function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  });
}

function smoothScrollTo(target) {
  if (lenis) {
    lenis.scrollTo(target);
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }
}

// Intercept all in-page anchor links (nav, mobile menu, hero badge, logo, etc.)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  const targetId = link.getAttribute('href');
  if (targetId.length > 1 && document.querySelector(targetId)) {
    link.addEventListener('click', e => {
      e.preventDefault();
      smoothScrollTo(targetId);
    });
  }
});

/* ============ Custom cursor + spotlight ============ */
(function initCursorAndSpotlight() {
  if (window.matchMedia('(hover: none)').matches) return;

  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  const spot = document.getElementById('spotlight');

  let ox = 0, oy = 0, mx = 0, my = 0;

  function onMove(e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    spot.style.background = `radial-gradient(600px circle at ${mx}px ${my}px, rgba(255,107,53,.06) 0%, transparent 65%)`;
  }

  function animRing() {
    ox += (mx - ox) * 0.13;
    oy += (my - oy) * 0.13;
    ring.style.left = ox + 'px';
    ring.style.top = oy + 'px';
    requestAnimationFrame(animRing);
  }

  document.addEventListener('mousemove', onMove, { passive: true });
  animRing();
})();

/* ============ Nav scroll shrink ============ */
(function initNavScroll() {
  const nav = document.getElementById('nav');
  function onScroll() {
    nav.classList.toggle('nav-scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();

document.getElementById('hireBtn').addEventListener('click', () => {
  smoothScrollTo('#contact');
});

document.getElementById('mobileHireBtn')?.addEventListener('click', () => {
  closeMobileMenu();
  smoothScrollTo('#contact');
});

/* ============ Mobile hamburger menu ============ */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburgerBtn.classList.remove('active');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

(function initMobileMenu() {
  if (!hamburgerBtn || !mobileMenu) return;

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  mobileMenu.querySelectorAll('.mobile-menu-links a').forEach(a => {
    a.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMobileMenu();
  });
})();

/* ============ Scroll reveal ============ */
(function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left').forEach(el => obs.observe(el));
  }, 100);
})();

/* ============ Hero: 3D Badge mouse tracking ============ */
(function initBadge3D() {
  const badge = document.getElementById('heroBadge');
  if (!badge) return;

  let targetRotX = 8, targetRotY = -12;
  let currentRotX = 8, currentRotY = -12;
  let isHovering = false;

  const hero = document.getElementById('hero');

  hero.addEventListener('mouseenter', () => { isHovering = true; });
  hero.addEventListener('mouseleave', () => {
    isHovering = false;
    targetRotX = 8;
    targetRotY = -12;
  });

  hero.addEventListener('mousemove', (e) => {
    if (!isHovering) return;
    const rect = hero.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    
    targetRotY = -12 + deltaX * 20;
    targetRotX = 8 - deltaY * 15;
  });

  function animateBadge() {
    currentRotX += (targetRotX - currentRotX) * 0.08;
    currentRotY += (targetRotY - currentRotY) * 0.08;
    
    badge.style.transform = `translateY(-50%) perspective(800px) rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`;
    
    requestAnimationFrame(animateBadge);
  }

  animateBadge();
})();

/* ============ Ticker ============ */
(function initTicker() {
  const track = document.getElementById('tickerTrack');
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  track.innerHTML = doubled.map(item => `
    <div class="ticker-item">
      <span class="ticker-dot"></span>${item}
    </div>
  `).join('');
})();

/* ============ Skills grid + animate-on-view ============ */
(function initSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map(s => `
    <div class="shiny-card">
      <div class="skill-card-inner">
        <div class="skill-top-row">
          <span class="skill-name">${s.name}</span>
          <span class="skill-pct">${s.pct}%</span>
        </div>
        <div class="skill-track">
          <div class="skill-fill" data-pct="${s.pct}"></div>
        </div>
      </div>
    </div>
  `).join('');

  const col = document.getElementById('skillsCol');
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      grid.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.dataset.pct + '%';
      });
      obs.disconnect();
    }
  }, { threshold: 0.25 });
  obs.observe(col);
})();

/* ============ Resume: timeline, education, certs ============ */
(function initResume() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = EXPERIENCE.map((item, i) => `
    <div class="timeline-item">
      ${i < EXPERIENCE.length - 1 ? '<div class="timeline-line"></div>' : ''}
      <div class="timeline-dot"></div>
      <span class="timeline-period">${item.period}</span>
      <h4 class="timeline-role">${item.role}</h4>
      <p class="timeline-company">${item.company}</p>
      <p class="timeline-desc">${item.desc}</p>
      <div class="tag-row">
        ${item.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const eduList = document.getElementById('eduList');
  eduList.innerHTML = EDUCATION.map(e => `
    <div class="edu-card">
      <h4 class="edu-degree">${e.degree}</h4>
      <p class="edu-institution">${e.institution}</p>
      <p class="edu-period">${e.period}</p>
      <p class="edu-desc">${e.desc}</p>
      ${e.honor ? `<span class="edu-honor">${e.honor}</span>` : ''}
    </div>
  `).join('');

  const certsList = document.getElementById('certsList');
  certsList.innerHTML = CERTS.map(c => `
    <div class="cert-row">
      <div>
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">${c.issuer}</div>
      </div>
      <span class="cert-icon"><span class="cert-icon-dot"></span></span>
    </div>
  `).join('');
})();

/* ============ Services ============ */
(function initServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = SERVICES.map(s => `
    <div class="shiny-card">
      <div class="service-card-inner">
        <div class="service-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg>
        </div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
        <div class="tag-row">
          ${s.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
})();

/* ============ Portfolio ============ */
(function initPortfolio() {
  const list = document.getElementById('portfolioList');
  list.innerHTML = PROJECTS.map(p => `
    <div class="project-item" data-id="${p.id}">
      <div class="project-row">
        <div class="project-accent-bar"></div>
        <span class="project-number">${String(p.id).padStart(2, '0')}</span>
        <div>
          <div class="project-title">${p.title}</div>
          <div class="tag-row">
            ${p.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
          </div>
        </div>
        <button class="project-arrow" aria-label="Expand project">↗</button>
        <div class="project-preview">
          <video src="${p.video}" muted loop playsinline></video>
        </div>
      </div>
      <div class="project-panel">
        <div class="project-panel-inner">
          <p class="project-desc">${p.description}</p>
          <video class="project-video" src="${p.video}" muted loop playsinline></video>
          <div class="project-visit-row">
            <a class="project-visit-btn" href="${p.url}" target="_blank" rel="noopener noreferrer">Visit Site ↗</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const items = list.querySelectorAll('.project-item');

  items.forEach(item => {
    const row = item.querySelector('.project-row');
    const arrow = item.querySelector('.project-arrow');
    const hoverVideo = item.querySelector('.project-preview video');
    const expandVideo = item.querySelector('.project-video');
    const visitBtn = item.querySelector('.project-visit-btn');

    function toggle() {
      const isExpanded = item.classList.contains('expanded');
      items.forEach(i => i.classList.remove('expanded'));
      list.querySelectorAll('.project-video').forEach(v => { v.pause(); v.currentTime = 0; });
      if (!isExpanded) {
        item.classList.add('expanded');
        expandVideo.play().catch(() => {});
      }
    }

    row.addEventListener('click', toggle);
    arrow.addEventListener('click', e => { e.stopPropagation(); toggle(); });
    visitBtn.addEventListener('click', e => e.stopPropagation());

    row.addEventListener('mouseenter', () => { hoverVideo.play().catch(() => {}); });
    row.addEventListener('mouseleave', () => { hoverVideo.pause(); hoverVideo.currentTime = 0; });
  });
})();

/* ============ Contact: links + form (EmailJS) ============ */
(function initContact() {
  const linksWrap = document.getElementById('contactLinks');
  linksWrap.innerHTML = CONTACT_LINKS.map(l => {
    const tag = l.href ? 'a' : 'div';
    const hrefAttr = l.href ? `href="${l.href}"` : '';
    const targetAttr = l.href && !l.href.startsWith('mailto') ? 'target="_blank" rel="noopener noreferrer"' : '';
    return `
      <${tag} class="contact-link-row" ${hrefAttr} ${targetAttr}>
        <span class="contact-link-label">${l.label}</span>
        <span class="contact-link-val">${l.val}</span>
      </${tag}>
    `;
  }).join('');

  document.getElementById('footerCopy').textContent =
    `© ${new Date().getFullYear()} Syed Faisal Naseem — All rights reserved`;

  if (window.emailjs) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const form = document.getElementById('contactForm');
  const banner = document.getElementById('formBanner');
  const submitBtn = document.getElementById('submitBtn');
  const submitLabel = document.getElementById('submitLabel');
  const submitIcon = document.getElementById('submitIcon');

  function setBanner(type, msg) {
    banner.className = 'form-banner' + (type ? ' ' + type : '');
    banner.textContent = type === 'success' ? `✓ ${msg}` : type === 'error' ? `✕ ${msg}` : '';
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    setBanner(null, '');
    submitBtn.disabled = true;
    submitLabel.textContent = 'Sending…';
    submitIcon.innerHTML = '<span class="spin-icon"></span>';

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data)
      .then(() => {
        setBanner('success', 'Message sent!');
        form.reset();
      })
      .catch(() => {
        setBanner('error', 'Something went wrong. Please try again.');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitLabel.textContent = 'Send Message';
        submitIcon.textContent = '→';
      });
  });
})();