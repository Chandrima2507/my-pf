const DATA={
email:"chandimachawdhury07@gmail.com",linkedin:"",github:"https://github.com/Chandrima2507",
stats:[["CGPA",7.76,"Overall, out of 10"],["SGPA",7.4,"First semester"],["SGPA",8.46,"Latest semester"]],
sgpa:[["Sem I",7.4],["Sem II",7.5],["Sem III",7.76],["Sem IV",8.46]],
skills:[["Programming Languages",["Python","C","C++","Java","JavaScript","HTML","CSS"]],
["AI & Machine Learning",["Machine Learning","Natural Language Processing","Scikit-learn","NLTK","TF-IDF","NumPy","Pandas"]],
["Full-Stack Development",["Flask","REST APIs","React","Vercel"]],
["Database & Tools",["MongoDB","Git","GitHub","VS Code","LaTeX"]],
["Embedded Systems & Robotics",["ESP32","Raspberry Pi","Embedded Programming","Hardware-Software Integration"]]],
projects:[
{t:"EmoLyrics",s:"Song lyrics emotion classification system",
 p:"Emotion in song lyrics is hard to sort by hand, and listeners can’t easily find music that matches a mood.",
 sol:"A machine-learning application that analyses lyrics with NLP, classifies them into emotional categories and connects users with relevant music experiences.",
 a:"Lyrics input → NLTK text processing → TF-IDF features → ML classifier → Flask web interface.",
 f:["Classifies lyrics into multiple emotional categories","Web interface for user interaction","Links users to relevant music experiences"],
 tech:["Python","Flask","NLP","Machine Learning","TF-IDF","NLTK"],gh:"https://github.com/Chandrima2507/SONG_LYRICS_EMOTION_CLASSIFICATION07"},
{t:"NOVA",s:"AI-powered stair-climbing fire safety & rescue robot",
 p:"Emergency teams face hazardous conditions in multi-storey fire environments.",
 sol:"A robotic system to support responders through fire detection, gas monitoring, human detection, obstacle navigation and rescue assistance.",
 a:"Sensors → ESP32 controller with edge AI → motor control for navigation and stair climbing.",
 f:["Fire detection","Gas monitoring","Human detection","Obstacle navigation","Rescue assistance"],
 tech:["Embedded Systems","ESP32","Sensors","Robotics","Edge AI","Motor Control"]},
{t:"H₂S-SAFE Band",s:"Intelligent wearable hydrogen sulphide monitor",
 p:"Workers in industrial settings can be exposed to hazardous hydrogen sulphide (H₂S).",
 sol:"A wearable safety device that detects H₂S exposure through sensors, raises alerts and communicates wirelessly.",
 a:"H₂S sensor → ESP32-S3 processing → on-device alert and BLE wireless link.",
 f:["Sensor-based H₂S detection","Alert mechanisms","Wireless communication"],
 tech:["ESP32-S3","Sensors","Embedded Systems","BLE","IoT"]},
{t:"Smart Helmet",s:"Accident-detecting safety helmet",
 p:"Riders involved in accidents need faster emergency response.",
 sol:"An IoT-based helmet that detects accidents with a motion sensor and reports GPS location.",
 a:"MPU6050 motion sensor + NEO-6M GPS module → ESP32 (C++) → location report.",
 f:["Accident detection with MPU6050","GPS location reporting via NEO-6M"],
 tech:["ESP32","MPU6050","NEO-6M","C++"]},
{t:"Fitness Club Portal",s:"Web portal for fitness services",
 p:"Fitness clubs need an organised digital way to manage members and trainers.",
 sol:"A responsive web portal for member registration and trainer management.",
 a:"Front-end web application built with HTML, CSS and JavaScript.",
 f:["Member registration","Trainer management","Responsive layout"],
 tech:["HTML","CSS","JavaScript"]}],
timeline:[
["Jun 2026 – Jul 2026","Application Developer Internship","EssPorM Academy, Kolkata. Worked on application development and software design."],
["Jun 2026 – Jul 2026","3D Printing Internship","Adamas Robotics & AI Club. Practical 3D printing and additive manufacturing for robotics prototyping."],
["2025","IBM Participation Certificate","Participation certificate from IBM."],
["Jun 2025 – Jul 2025","C++ Development Internship","CodeAlpha. Hands-on C++ programming, debugging and problem-solving."],
["","NASSCOM Certification","Date to be added."]],
research:[["Applied Machine Learning","Models that solve practical problems"],["Natural Language Processing","Language, emotion and text"],["Intelligent Robotics","Machines that sense and act"],["Autonomous Systems","Navigation without supervision"],["Embedded Intelligence","AI on small devices"],["AI-Driven Applications","Research turned into products"]],
edu:[["Diploma in Music","Bangyo Kala Bhavan · Aug 2022 – Mar 2024"],["Class XII (WBCHSE)","Techno India Group Public School"],["Class X (WBBSE)","Techno India Group Public School"]],
acts:{"Technical Certifications":[["IBM Participation Certificate","2025"],["NASSCOM Certification","Date to be added"],["C++ Internship Certificate","CodeAlpha, 2025"]],
"Internships":[["Application Developer Intern","EssPorM Academy, 2026"],["3D Printing Intern","Adamas Robotics & AI Club, 2026"],["C++ Development Intern","CodeAlpha, 2025"]],
"Robotics & AI Activities":[["Robotics prototyping","3D printing and additive manufacturing, Adamas Robotics & AI Club"]],
"Hackathons & Innovation":[]}};
const $=s=>document.querySelector(s),el=(h)=>{const d=document.createElement('div');d.innerHTML=h;return d.firstElementChild};
const E=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const secs=[["about","About"],["skills","Skills"],["projects","Projects"],["experience","Experience"],["research","Research"],["education","Education"],["activities","Activities"],["contact","Contact"]];
$('#lk').innerHTML=secs.map(([i,l])=>`<li><a href="#${i}">${l}</a></li>`).join('');
const mb=$('#mb'),lk=$('#lk');mb.onclick=()=>{const o=lk.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
lk.onclick=e=>{if(e.target.tagName==='A'){lk.classList.remove('open');mb.setAttribute('aria-expanded',false)}};
$('#stats').innerHTML=DATA.stats.map(([a,v,l])=>`<div><span>${a}<br>${l}</span><strong data-v="${v}">0.00</strong></div>`).join('');
$('#sk').innerHTML=DATA.skills.map(([h,t])=>`<div class="c rv"><h3>${h}</h3><div class="tg">${t.map(x=>`<span class="t">${x}</span>`).join('')}</div></div>`).join('');
$('#pj').innerHTML=DATA.projects.map((p,i)=>`<article class="pj"><button class="ph2" aria-expanded="false" aria-controls="pb${i}"><span class="n">${i+1}</span><span><h3>${E(p.t)}</h3><small>${E(p.s)}</small></span><span class="pm" aria-hidden="true">+</span></button>
<div class="pb" id="pb${i}"><div><div class="pi"><div><h4>Problem</h4><p>${p.p}</p></div><div><h4>Solution</h4><p>${p.sol}</p></div><div><h4>Technical architecture</h4><p>${p.a}</p></div><div><h4>Key features</h4><ul>${p.f.map(x=>`<li>${x}</li>`).join('')}</ul></div>
<div class="f"><h4>Technologies</h4><div class="tg">${p.tech.map(x=>`<span class="t">${x}</span>`).join('')}</div>${p.gh?`<a class="gh" href="${p.gh}" target="_blank" rel="noopener">View on GitHub</a>`:''}</div></div></div></div></article>`).join('');
document.querySelectorAll('.ph2').forEach(b=>b.onclick=()=>{const a=b.parentElement,o=a.classList.toggle('o');b.setAttribute('aria-expanded',o)});
$('#tl').innerHTML=DATA.timeline.map(([d,t,x])=>`<div class="ti rv">${d?`<time>${d}</time>`:'<time>Date to be confirmed</time>'}<h3>${t}</h3><p>${x}</p></div>`).join('');
$('#ri').innerHTML=DATA.research.map(([t,s])=>`<div class="ri"><h3>${t}</h3><span>${s}</span></div>`).join('');
$('#bars').innerHTML=DATA.sgpa.map(([l,v])=>`<div class="bar"><span>${l}</span><i style="--v:${v/10}"></i><b>${v}</b></div>`).join('');
$('#el').innerHTML=DATA.edu.map(([a,b])=>`<li>${a}<small>${b}</small></li>`).join('');
const names=Object.keys(DATA.acts);$('#tb').innerHTML=names.map((n,i)=>`<button role="tab" aria-selected="${i==0}">${n}</button>`).join('');
const show=n=>{const r=DATA.acts[n];$('#cl').innerHTML=r.length?r.map(([a,b])=>`<div class="c"><h3>${E(a)}</h3><p>${E(b)}</p></div>`).join(''):'<div class="em">Nothing listed yet. Add entries to DATA.acts to show them here.</div>'};
show(names[0]);$('#tb').onclick=e=>{if(e.target.tagName!=='BUTTON')return;document.querySelectorAll('#tb button').forEach(b=>b.setAttribute('aria-selected',b===e.target));show(e.target.textContent)};
$('#ci').innerHTML=`<li><span>Email</span><a href="mailto:${DATA.email}">${DATA.email}</a></li><li><span>LinkedIn</span>${DATA.linkedin?`<a href="${DATA.linkedin}" target="_blank" rel="noopener">Profile</a>`:'<em>Link coming soon</em>'}</li><li><span>GitHub</span><a href="${DATA.github}" target="_blank" rel="noopener">Chandrima2507</a></li><li><span>Location</span>West Bengal, India</li>`;
$('#yr').textContent=new Date().getFullYear();
$('#f').onsubmit=e=>{e.preventDefault();const f=$('#fs'),v=['n','e','s','m'].map(i=>$('#'+i).value.trim());
 if(v.some(x=>!x)||!/^\S+@\S+\.\S+$/.test(v[1])){f.textContent='Fill in all four fields and use a valid email address.';return}
 location.href=`mailto:${DATA.email}?subject=${encodeURIComponent(v[2])}&body=${encodeURIComponent(v[3]+'\n\n'+v[0]+' ('+v[1]+')')}`;f.textContent='Your email app should open with the message ready to send.'};
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const cnt=el0=>{const t=+el0.dataset.v;if(rm){el0.textContent=t.toFixed(2);return}const s=performance.now();(function k(n){const p=Math.min(1,(n-s)/1200);el0.textContent=(t*(1-Math.pow(1-p,3))).toFixed(2);if(p<1)requestAnimationFrame(k)})(s)};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const t=x.target;t.classList.add('in','vis');if(t.id==='stats')t.querySelectorAll('strong').forEach(cnt);io.unobserve(t)}),{threshold:.2});
document.querySelectorAll('.rv,#stats,#edu').forEach(x=>io.observe(x));
const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)document.querySelectorAll('.links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
secs.forEach(([i])=>so.observe($('#'+i)));
if(matchMedia('(pointer:fine)').matches&&!rm){const c=$('#cur');addEventListener('mousemove',e=>{c.style.opacity=1;c.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
document.addEventListener('mouseover',e=>c.classList.toggle('h',!!e.target.closest('a,button,.c,.ri')))}
