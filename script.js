const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const data={
ai:{tag:'AI · Documentation',title:'AI Readiness Assessment',lead:'A practical documentation-focused application built with Claude Code and AI-assisted development.',body:`<div class="case-label">The idea</div><p>The project explores whether technical documentation is structured and written in a way that AI systems can consume effectively.</p><div class="case-label">How it works</div><ul><li>Accepts PDF, XML/text, and URL inputs.</li><li>Evaluates documentation across multiple AI-consumability criteria.</li><li>Produces an AI-readiness score and highlights documentation problems.</li><li>Explains the potential impact of gaps and provides improvement recommendations.</li></ul><div class="case-label">My role</div><p>Defined the documentation-focused requirements, shaped the evaluation workflow, reviewed AI-generated outputs, and refined the application through AI-assisted development with Claude Code.</p>`},
kb:{tag:'Knowledge Base',title:'SaaS Knowledge Base',lead:'Documentation work driven by problems users were actually bringing to Customer Support.',body:`<div class="case-label">The challenge</div><p>Users were relying on Support for answers that could be addressed through stronger product documentation.</p><div class="case-label">The approach</div><ul><li>Worked with Customer Support to identify recurring documentation gaps.</li><li>Strengthened knowledge-base coverage around common product questions and issues.</li><li>Focused content on making answers easier to find and act on independently.</li></ul><div class="case-label">Outcome</div><p>The improved SaaS knowledge base contributed to a <strong>50% reduction in support tickets</strong>.</p>`},
api:{tag:'API Documentation',title:'API & Use-Case Content',lead:'Developer-facing content that connects endpoint reference information with practical use cases.',body:`<div class="case-label">The work</div><p>Created API documentation and use-case articles for key endpoints, using Swagger and Postman as part of the documentation workflow.</p><div class="case-label">Focus</div><ul><li>Clear endpoint descriptions and supporting context.</li><li>Practical use cases that help readers understand how APIs fit into real workflows.</li><li>Documentation structured for developers who need concise, actionable information.</li></ul>`},
help:{tag:'Content Improvement',title:'Help Center Revamp',lead:'Turning stale product information into clearer, more useful help content.',body:`<div class="case-label">The challenge</div><p>Existing help-center information needed restructuring and improvement to make it more useful for users.</p><div class="case-label">The approach</div><ul><li>Reviewed and restructured outdated information.</li><li>Improved content clarity and usability.</li><li>Focused on making product information easier to understand and navigate.</li></ul><div class="case-label">Outcome</div><p>The revamp contributed to a <strong>30% improvement in user satisfaction and usability</strong>.</p>`}
};

const modal=document.getElementById('projectModal');
const modalTag=document.getElementById('modalTag');
const modalTitle=document.getElementById('modalTitle');
const modalLead=document.getElementById('modalLead');
const modalBody=document.getElementById('modalBody');

document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('click',()=>{
    const d=data[card.dataset.project];
    modalTag.textContent=d.tag; modalTitle.textContent=d.title; modalLead.textContent=d.lead; modalBody.innerHTML=d.body;
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('no-scroll');
  });
});
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('no-scroll')}
document.querySelector('.modal-close').addEventListener('click',closeModal);
document.querySelector('.modal-backdrop').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
