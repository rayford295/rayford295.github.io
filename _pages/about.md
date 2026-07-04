---
permalink: /
title: "Yifan Yang"
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>{{ page.title }}</title>
  <!-- 如果你有全局的样式表，也一并加载： -->
  <!-- <link rel="stylesheet" href="/assets/css/main.css" /> -->

  <!-- 把你的局部 CSS 放到这里 -->
  <style>
    /* 每条记录的容器 */
    .item {
      display: flex;
      align-items: center;    /* ← 垂直居中 */
      margin-bottom: 0.6em;
    }
    /* logo 大小统一 */
    img.logo {
      width: 2.5em;
      height: 2.5em;
      object-fit: contain;
      vertical-align: middle;
      margin-right: 0.5em;
    }
    .item .text {
      line-height: 1.5;
    }

    #presentation .presentation-timeline {
      list-style: none;
      margin: 0.9em 0 0 0;
      padding: 0;
    }

    #presentation .presentation-year {
      display: grid;
      grid-template-columns: 4.4rem minmax(0, 1fr);
      column-gap: 1.15rem;
      list-style: none;
      margin: 0;
      padding: 1rem 0 1.1rem;
      border-top: 1px solid #dbe7f3;
    }

    #presentation .presentation-year:first-child {
      border-top: 0;
      padding-top: 0.2rem;
    }

    #presentation .presentation-year-label {
      color: #005fa3;
      font-size: 1.18em;
      font-weight: 800;
      letter-spacing: 0.02em;
      line-height: 1;
      padding-top: 0.16rem;
    }

    #presentation .presentation-year-label::after {
      content: "";
      display: block;
      width: 2.8rem;
      height: 2px;
      margin-top: 0.45rem;
      background: #9cc7e8;
    }

    #presentation .presentation-items {
      list-style: none;
      margin: 0;
      padding: 0 0 0 1.15rem;
      border-left: 2px solid #dbe7f3;
    }

    #presentation .presentation-items > li {
      position: relative;
      list-style: none;
      margin: 0 0 0.85rem;
      padding-left: 1rem;
      line-height: 1.55;
    }

    #presentation .presentation-items > li:last-child {
      margin-bottom: 0;
    }

    #presentation .presentation-items > li::before {
      content: "";
      position: absolute;
      left: -1.36rem;
      top: 0.62em;
      width: 0.42rem;
      height: 0.42rem;
      border: 0;
      border-radius: 50%;
      background: #79add4;
      box-shadow: none;
    }

    #presentation .presentation-subitems {
      margin: 0.35rem 0 0;
      padding-left: 1.1rem;
    }

    #presentation .presentation-subitems li {
      margin: 0.25rem 0;
    }

    @media (max-width: 640px) {
      #presentation .presentation-year {
        grid-template-columns: 1fr;
        row-gap: 0.45rem;
      }

      #presentation .presentation-year-label::after {
        width: 3.2rem;
      }
    }

    .industry-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
      margin-top: 12px;
    }

    .industry-card {
      background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
      border: 1px solid #dbe7f3;
      border-radius: 14px;
      padding: 16px 18px;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
    }

    .industry-kicker {
      display: inline-block;
      font-size: 0.72em;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #1d4ed8;
      background: #e0edff;
      border-radius: 999px;
      padding: 4px 10px;
      margin-bottom: 10px;
    }

    .industry-card h3 {
      margin: 0 0 8px 0;
      font-size: 1.05em;
      line-height: 1.35;
    }

    .industry-card p {
      margin: 0;
      color: #374151;
      line-height: 1.6;
      font-size: 0.95em;
    }

    .industry-links {
      margin-top: 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .industry-links a {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      font-size: 0.86em;
      font-weight: 600;
      color: #0f3d91;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 999px;
      padding: 6px 11px;
      transition: all 0.18s ease;
    }

    .industry-links a:hover {
      background: #eff6ff;
      border-color: #93c5fd;
      color: #1d4ed8;
    }

    .writing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-top: 12px;
    }

    .writing-card {
      background: linear-gradient(180deg, #ffffff 0%, #fcfcff 100%);
      border: 1px solid #e5e7eb;
      border-radius: 14px;
      padding: 18px 20px;
      box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);
    }

    .writing-card-featured {
      border-color: #d8dffe;
      background: linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%);
    }

    .writing-kicker {
      display: inline-block;
      font-size: 0.72em;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #4338ca;
      background: #eef2ff;
      border-radius: 999px;
      padding: 4px 10px;
      margin-bottom: 10px;
    }

    .writing-card h3 {
      margin: 0 0 8px 0;
      font-size: 1.08em;
      line-height: 1.4;
    }

    .writing-card p {
      margin: 0;
      color: #374151;
      line-height: 1.65;
      font-size: 0.95em;
    }

    .writing-meta {
      margin-top: 12px;
      font-size: 0.84em;
      color: #6b7280;
    }

    .writing-links {
      margin-top: 14px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .writing-links a {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;
      font-size: 0.86em;
      font-weight: 600;
      color: #312e81;
      background: #ffffff;
      border: 1px solid #c7d2fe;
      border-radius: 999px;
      padding: 6px 11px;
      transition: all 0.18s ease;
    }

    .writing-links a:hover {
      background: #eef2ff;
      border-color: #a5b4fc;
      color: #4338ca;
    }

    /* Keep the visitor-map fallback inline so stale cached CSS still renders it. */
    .visitor-map-wrap {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      overflow: hidden;
    }

    .visitor-map-widgets {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 22px;
      width: 100%;
    }

    .visitor-map-widgets > div {
      width: min(100%, 420px);
      display: flex;
      justify-content: center;
    }

    /* The MapMyVisitors flat map renders an <a><img>; keep it responsive
       within its container without forcing dimensions. */
    .visitor-map-widgets > div img {
      max-width: 100%;
      height: auto;
    }

    .visitor-map-fallback {
      width: min(100%, 420px);
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 16px;
      background: #ffffff;
      border: 1px solid #d8dee8;
      border-radius: 8px;
      box-shadow: 0 4px 14px rgba(15, 23, 42, .08);
      color: #2f3a4a;
    }

    .visitor-map-fallback[hidden] {
      display: none;
    }

    .visitor-map-fallback__map {
      flex: 0 0 116px;
      width: 116px;
      max-width: 34%;
      height: auto;
      fill: #dbeafe;
      stroke: #3b82f6;
      stroke-width: 3;
    }

    .visitor-map-fallback__map circle {
      fill: #ef4444;
      stroke: #ffffff;
      stroke-width: 2;
    }

    .visitor-map-fallback strong {
      display: block;
      color: #1f2937;
      font-size: .92rem;
      line-height: 1.25;
    }

    .visitor-map-fallback span {
      display: block;
      margin-top: 4px;
      color: #52525b;
      font-size: .82rem;
      line-height: 1.35;
    }

    @media (max-width: 520px) {
      .visitor-map-fallback {
        align-items: flex-start;
      }

      .visitor-map-fallback__map {
        flex-basis: 96px;
      }
    }
  </style>
</head>


<section id="about-me">
  <h2>🗨 About Me</h2>

  <div>
<p>
  I am <strong>Yifan Yang</strong>, a Ph.D. student in the Department of Geography at
  <a href="https://www.tamu.edu" target="_blank" rel="noopener">Texas&nbsp;A&amp;M University</a>,
  advised by <a href="https://www.geoearlab.com/people" target="_blank" rel="noopener">Dr. Lei Zou</a>
  in the <a href="https://www.geoearlab.com" target="_blank" rel="noopener">Geospatial Exploration and Resolution (GEAR) Lab</a>.
  My research centers on Responsible GeoAI and Autonomous GeoAI, with a focus on explainable and trustworthy systems for spatial decision-making.
  Beyond my research, I founded
  <a href="https://autogeoai4sci.github.io/" target="_blank" rel="noopener"><strong>AutonomousGeoAI4Science</strong></a>,
  an open community hub for papers, tools, benchmarks, and collaboration. My doctoral committee members are
  <a href="https://artsci.tamu.edu/geography/contact/profiles/heng-cai.html" target="_blank" rel="noopener">Dr. Heng Cai</a>,
  <a href="https://artsci.tamu.edu/geography/contact/profiles/andrew-klein.html" target="_blank" rel="noopener">Dr. Andrew Klein</a>, and
  <a href="https://vztu.github.io/" target="_blank" rel="noopener">Dr. Zhengzhong Tu</a>.
</p>

    <!-- 🌟 Added Vision Statement -->
    <p style="font-style: italic; color: #4b5563; border-left: 4px solid #93c5fd; padding-left: 12px; margin-top: 10px;">
      🔭 Vision: To transcend the boundaries of screens and make the real world our playground of intelligence — 
      where AI, space, and humanity coexist and co-create.
    </p>
    <!-- End Vision -->
    
    <p>
     Before starting my Ph.D. studies, I earned a master’s degree in Spatial Data Science from the 
     <a href="https://www.usc.edu" target="_blank" rel="noopener">University of Southern California</a>.  
     During my master’s, I worked with 
     <a href="https://dornsife.usc.edu/spatial/profile/john-p-wilson/" target="_blank" rel="noopener">Dr. John P. Wilson</a> on the 
     <a href="https://publicexchange.usc.edu/urban-trees-initiative/" target="_blank" rel="noopener">Urban Trees Initiative</a>, 
     where I explored geospatial approaches to urban sustainability.  
     Under the mentorship of 
     <a href="https://dornsife.usc.edu/spatial/profile/siqin-sisi-wang/" target="_blank" rel="noopener">Dr. Siqin Wang</a>,  
     I also completed a research internship at the 
     <a href="https://sdl.gis.harvard.edu/" target="_blank" rel="noopener">Spatial Data Lab, Harvard University</a>,  
     which further strengthened my expertise in Geospatial AI and interdisciplinary data science.
     </p>

    <p>
      Prior to graduate school, I received a bachelor’s degree in Software Engineering from 
      <a href="https://www.hainanu.edu.cn/" target="_blank" rel="noopener">Hainan University</a> in China.  
      I hope to use computer science and spatial science to make a positive contribution to the world.  
      I’m also an AI4Science enthusiast, and my hobbies are basketball🏀, football⚽, golf🏌️‍♀️, poker🎴, and talk shows🎆.
    </p>

<p>
  📄 <strong>Curriculum Vitae:</strong> 
  <a href="https://drive.google.com/file/d/1YND_1Yaf2yoktBEhzV7hauO4I2DF1wJ7/view?usp=sharing" target="_blank">
    View CV
  </a>
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 35px;">
  <img 
    src="https://raw.githubusercontent.com/rayford295/rayford295.github.io/main/images/Autonomous%20GeoAI%20Research%20Pathway%20for%20Disaster%20Resilience.png"
    alt="Autonomous GeoAI Research Pathway"
    style="max-width: 900px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);"
  >
</div>

<p style="margin-bottom: 10px;"><strong>Research interests:</strong></p>
<div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
  <span style="display:inline-block; padding:5px 14px; border-radius:999px; background:#eef4fb; color:#005fa3; border:1px solid #cfe0f1; font-size:0.92em; font-weight:500;">AI4Science</span>
  <a href="https://scholar.google.com/citations?view_op=search_authors&amp;hl=zh-CN&amp;mauthors=label:spatial_data_science" target="_blank" rel="noopener" style="text-decoration:none;">
    <span style="display:inline-block; padding:5px 14px; border-radius:999px; background:#eef4fb; color:#005fa3; border:1px solid #cfe0f1; font-size:0.92em; font-weight:500;">Spatial Data Science</span>
  </a>
  <span style="display:inline-block; padding:5px 14px; border-radius:999px; background:#eef4fb; color:#005fa3; border:1px solid #cfe0f1; font-size:0.92em; font-weight:500;">GeoAI</span>
  <span style="display:inline-block; padding:5px 14px; border-radius:999px; background:#eef4fb; color:#005fa3; border:1px solid #cfe0f1; font-size:0.92em; font-weight:500;">GIScience</span>
  <span style="display:inline-block; padding:5px 14px; border-radius:999px; background:#eef4fb; color:#005fa3; border:1px solid #cfe0f1; font-size:0.92em; font-weight:500;">Multimodal AI</span>
  <span style="display:inline-block; padding:5px 14px; border-radius:999px; background:#eef4fb; color:#005fa3; border:1px solid #cfe0f1; font-size:0.92em; font-weight:500;">Disaster Resilience</span>
  <span style="display:inline-block; padding:5px 14px; border-radius:999px; background:#eef4fb; color:#005fa3; border:1px solid #cfe0f1; font-size:0.92em; font-weight:500;">Generative AI</span>
</div>



<!-- ✅ Fancy Update Time Button -->
<div style="text-align:center; margin-top:40px;">
  <button 
    onclick="showUpdateTime()" 
    style="background:linear-gradient(90deg,#0078d7,#005fa3); color:white; border:none; border-radius:8px; padding:10px 22px; cursor:pointer; font-size:15px; font-weight:500; box-shadow:0 4px 10px rgba(0,0,0,0.25); transition:0.3s;">
    💫 Show Last Update Time
  </button>
  <p id="update-time" style="margin-top:12px; font-size:14px; color:#666; opacity:0; transition:opacity 0.6s ease;"></p>
</div>

<script>
  function showUpdateTime() {
    const t = new Date(document.lastModified);
    const formatted = t.toLocaleString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
    const p = document.getElementById('update-time');
    p.innerHTML = "Last updated on " + formatted;
    p.style.opacity = 1;
  }
</script>
  </div>


</section>

<section id="news">
  <h2>📰 News</h2>

  <div class="news-container">

<div class="news-item">
  <div class="news-date">Jul 2026</div>
  <div class="news-text">
    Honored to receive the <strong>2026 Cartography and Geographic Information Society (CaGIS) Doctoral Scholarship Award</strong>
    with <strong>$1,000</strong> in scholarship support. I am grateful to the CaGIS Scholarship Committee for recognizing my
    academic achievements and research contributions to cartography and geographic information science.
  </div>
</div>

<div class="news-item">
  <div class="news-date">Jun 2026</div>
  <div class="news-text">
    On <strong>June 24, 2026</strong>, I passed my <strong>preliminary examination</strong>.
    The date made the milestone especially meaningful: it is both Lionel Messi's birthday and
    <a href="https://artsci.tamu.edu/geography/contact/profiles/heng-cai.html" target="_blank" rel="noopener">
      <strong>Dr. Heng Cai</strong>
    </a>'s birthday. In the most Ph.D. way possible, I advanced from Ph.D. student to, somehow,
    still <strong>Ph.D. student</strong>.
  </div>
</div>

<div class="news-item">
  <div class="news-date">Jun 2026</div>
  <div class="news-text">
    Heading to the <strong>2026 Symposium on Spatiotemporal Data Science</strong>
    (August 7–8, 2026, Virginia Tech Academic Building One, Alexandria, VA): organizing the session
    <strong>“Spatiotemporal AI for Urban and Environmental Intelligence: Sensing, Inference, and Human-Centered Applications,”</strong>
    and presenting an accepted onsite oral talk,
    <strong>“Satellite-to-Street: Synthesizing Post-Disaster Views from Satellite Imagery via Generative Vision Models.”</strong>
  </div>
</div>

<div class="news-item">
  <div class="news-date">May 2026</div>
  <div class="news-text">
    Our paper <strong>“RAPIDMap: Rapid multi-Agent Pipeline for Interpretable Disaster Mapping from Satellite and Street-view Imagery”</strong>
    has been accepted for presentation at the <strong>CaGIS 2026 Conference</strong>
    in <strong>St. Louis, Missouri</strong> (September 8–11, 2026).
  </div>
</div>

<div class="news-item">
  <div class="news-date">May 2026</div>
  <div class="news-text">
    The <strong>IGARSS 2026</strong> technical program scheduled our paper
    <a href="https://2026.ieeeigarss.org/view_paper.php?PaperNum=2585" target="_blank" rel="noopener">
      <strong>“Satellite-to-Street: Synthesizing Post-Disaster Views from Satellite Imagery via Generative Vision Models”</strong>
    </a>
    as <strong>Paper TH3.R6.4</strong> in Session <strong>TH3.R6</strong>,
    with presentation time <strong>Thursday, August 13, 2026, 14:30–14:45</strong>
    in Washington, D.C.
  </div>
</div>

<div class="news-item">
  <div class="news-date">May 2026</div>
  <div class="news-text">
    Received the <strong>Selected Travel Award</strong> for attending
    <a href="https://i-guide.io/summer-school/summer-school-2026/" target="_blank" rel="noopener">
      <strong>I-GUIDE Summer School 2026: Spatial AI &amp; Convergence Science</strong>
    </a>
    at the <strong>University of Illinois, Urbana-Champaign</strong> (July 13–17, 2026),
    an NSF-supported summer school.
  </div>
</div>

<div class="news-item">
  <div class="news-date">Apr 2026</div>
  <div class="news-text">
    Received an <strong>IEEE GRSS Travel Grant</strong> to support my attendance and paper presentation at <strong>IGARSS 2026</strong> in Washington, D.C., with <strong>US $500</strong> in conference travel funding.
  </div>
</div>

<div class="news-item">
  <div class="news-date">Apr 2026</div>
  <div class="news-text">
    Featured by <strong>Mosaic</strong> in the article 
    <a href="https://www.mosaic51.com/featured/how-texas-am-is-pioneering-damage-assessment-using-mosaic-imagery-from-hurricane-milton/" target="_blank" rel="noopener">
      <strong>“How Texas A&amp;M is Pioneering Damage Assessment Using Mosaic Imagery from Hurricane Milton”</strong>
    </a>, 
    highlighting my research on hyperlocal disaster damage assessment using bi-temporal street-view imagery and GeoAI.
  </div>
</div>

<div class="news-item">
  <div class="news-date">Mar 2026</div>
  <div class="news-text">
    Our paper <strong>“Satellite-to-Street: Synthesizing Post-Disaster Views from Satellite Imagery via Generative Vision Models”</strong> 
    has been <strong>accepted</strong> for presentation at <strong>IGARSS 2026</strong>.
  </div>
</div>

  <div class="news-item">
  <div class="news-date">Mar 2026</div>
  <div class="news-text">
    Received the <strong>2026 AAG-IGIF Scholarship Award</strong> from the 
    <strong>AAG International Geographic Information Fund (IGIF)</strong>, and was awarded 
    <strong>2nd Place</strong> in the <strong>2026 AAG-GISSG Student Honors Paper Competition</strong>, 
    recognizing contributions to GeoAI-driven disaster research and spatial intelligence.
  </div>
</div>
    
    <div class="news-item">
     <div class="news-date">Mar 2026</div>
     <div class="news-text">
    Invited by <strong>Niantic Spatial</strong> to visit its San Francisco office for an 
    academic exchange on <strong>GeoAI, multimodal spatial intelligence, and disaster-related spatial analytics</strong>, 
    with discussions focused on bridging academic research and large-scale spatial systems in industry.
    <a href="/images/niantic.png" target="_blank" rel="noopener">[Invitation Letter]</a>
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Mar 2026</div>
      <div class="news-text">
        Will attend the 
        <strong>American Association of Geographers (AAG) Annual Meeting 2026</strong> 
        in San Francisco and participate in multiple GeoAI and GIScience sessions.
      </div>
    </div>

    <div class="news-item">
      <div class="news-date">Mar 2026</div>
      <div class="news-text">
        Organized the TAMU Data Science Ambassador seminar 
        <strong>“From Signals to Society: Data Science for Understanding the Earth and Human Dynamics”</strong> 
        at Texas A&M University.
        <a href="https://tamids.tamu.edu/event/from-signals-to-society-data-science-for-understanding-the-earth-and-human-dynamics/" target="_blank">
          [Event Link]
        </a>
      </div>
    </div>

  </div>
</section>

<section id="educations">
  <h2>📖 Educations</h2>

  <div class="item">
    <img class="logo" src="images/tamu_logo.webp" alt="Texas A&M logo">
    <div class="text">
      <strong>Texas A&amp;M University</strong><br>
      Ph.D. in Geography, Aug. 2024 – Present<br>
      Advisor: Prof. Lei Zou, GEAR Lab
    </div>
  </div>

  <div class="item">
    <img class="logo" src="images/USC-Logo-cropped.png" alt="USC logo">
    <div class="text">
      <strong>University of Southern California</strong><br>
      M.S. in Spatial Data Science, Aug. 2022 – May 2024<br>
      Advisors: Prof. John Wilson, Prof. Siqin Wang
    </div>
  </div>

  <div class="item">
    <img class="logo" src="images/hainan_logo.jpeg" alt="Hainan University logo">
    <div class="text">
      <strong>Hainan University</strong><br>
      B.S. in Software Engineering, Aug. 2018 – May 2022<br>
      Advisors: Prof. Jieren Cheng, Prof. Qi Qi
    </div>
  </div>
</section>

<section id="experiences">
  <h2>💻 Experiences</h2>

  <div class="item">
    <img class="logo" src="images/gearlab_logo.png" alt="GEAR Lab logo">
    <div class="text">
      <strong>Texas A&amp;M University</strong><br>
      Graduate Research Assistant, Jan. 2025 – Present<br>
      Advisor: Prof. Lei Zou, GEAR Lab
    </div>
  </div>

<div class="item">
  <img class="logo" src="images/harvard_logo.webp" alt="Harvard logo">
  <div class="text">
    <strong>Harvard University</strong><br>
    Spatial Data Lab Research Intern, Mar. 2025 – Aug. 2025<br>
    Center for Geographic Analysis<br>
    <a href="images/Harvard sds.png" target="_blank" rel="noopener">Certificate of Completion</a><br>
    Mentor: Dr. Siqin Wang
  </div>
</div>

<div class="item">
  <img class="logo" src="images/USC-Logo-cropped.png" alt="USC logo">
  <div class="text">
    <strong>Spatial Sciences Institute, USC</strong><br>
    Master Student Researcher, Sept. 2023 – Apr. 2024<br>
    <a href="https://storymaps.arcgis.com/stories/7f5c570fa0ff4d2eb918f933d869a2d6"
       target="_blank" rel="noopener">
      Urban Tree Shade Model
    </a><br>
    Advisors: Prof. John Wilson, Prof. Yi Qi, Beau MacDonald
  </div>
</div>

  
 <div class="item">
  <img class="logo" src="images/vitally.png" alt="Vitally AI logo">
  <div class="text">
    <strong>
      <a class="exp-link" href="https://app.vitally-ai.com/" target="_blank" rel="noopener noreferrer">
        Vitally AI
      </a>
    </strong><br>
    Data Engineering and AI Model Fine-tuning Intern, Feb. 2023 – May 2023<br>
    Industry Internship (Generative AI)
  </div>
</div>
</section>

<section id="founder-initiatives">
  <h2>🚀 Founder &amp; Initiatives</h2>

  <div class="item">
    <img class="logo" src="images/autogeoai.png" alt="Autonomous GeoAI4Science logo">
    <div class="text">
      <strong>
        <a class="exp-link" href="https://autogeoai4sci.github.io/" target="_blank" rel="noopener noreferrer">
          Autonomous GeoAI4Science
        </a>
      </strong><br>
      Founder, Jan. 2026 – Present<br>
      An open research initiative advancing autonomous GeoAI agents for scientific discovery.
    </div>
  </div>
</section>

<section id="teaching">
  <h2>🖥 Teaching</h2>

  <div class="item">
    <img class="logo" src="images/tamu_logo.webp" alt="Texas A&M logo">
    <div class="text">
      <strong>Texas A&amp;M University</strong><br>
      Graduate Teaching Assistant, Aug. 2024 – Dec. 2024<br>
      GEOG232, lab sections 501, 502, 505
    </div>
  </div>

  <div class="item">
    <img class="logo" src="images/tamu_logo.webp" alt="Texas A&M logo">
    <div class="text">
      <strong>Texas A&amp;M University</strong><br>
      Guest Lecturer, 2025 – 2026<br>
      &nbsp;&nbsp;· GEOG 475: Advanced GIS, Spring 2026 — Geographically Weighted Regression (GWR)
      <a href="https://github.com/rayford295/Tutorial_Geographically-Weighted-Regression" target="_blank" rel="noopener">💻</a><br>
      &nbsp;&nbsp;· GEOG 659: GeoDatabase, Fall 2025 — Spatial Query Lab: Interactive Spatial SQL &amp; PostGIS
      <a href="https://github.com/rayford295/Tutorial_SpatialQueryLab" target="_blank" rel="noopener">💻</a><br>
      &nbsp;&nbsp;· GEOG 476: GIS Practicum, Spring 2026 — Git, GitHub &amp; Personal Websites for GIS Researchers
      <a href="https://github.com/rayford295/Tutorial_Github4GIS" target="_blank" rel="noopener">💻</a>
    </div>
  </div>
</section>

<section id="publications">
  <h2>📕 Selected Publications</h2>
  <p style="font-size: 0.95em; color: #6b7280; margin-top: -6px; margin-bottom: 18px; font-style: italic;">
    I do not really have a single representative work; I love all of my first-author papers equally, because each of them records a part of my growth.
  </p>

  <!-- RAPID Paper(preprint)-->
  <div class="paper-box">
    <div class="paper-box-image">
      <div class="badge">Preprint</div>
      <img src="images/rapid_framework.png" alt="RAPID Framework" width="75%">
    </div>
    <div class="paper-box-text">
      <a href="https://arxiv.org/abs/2606.21819"
         target="_blank" rel="noopener">
        RAPID: A Reproducible Multi-Agent Pipeline for Interpretable Disaster Damage Assessment from Satellite and Street-View Imagery
      </a>
      — <strong>Yang, Yifan</strong>, Wenjing Gong, Kaili Zhang, Lei Zou, Zhengzhong Tu, Hao Li, Zongrong Li, Xinyue Ye.<br>
      <em>arXiv preprint</em>, 2026.

      <div class="paper-links">
        <a href="https://arxiv.org/abs/2606.21819"
           target="_blank" rel="noopener"
           class="paper-link link-paper">📄 Paper</a>

        <a href="https://github.com/rayford295/RAPID"
           target="_blank" rel="noopener"
           class="paper-link link-code">💻 GitHub</a>
      </div>
    </div>
  </div>

  <!-- Satellite-to-Street Paper -->
<div class="paper-box">
  <div class="paper-box-image">
    <div class="badge">Conference Paper</div>
    <img src="images/3rd_RS2SVI.png" alt="Satellite-to-Street Framework" width="75%">
  </div>
  <div class="paper-box-text">
    <a href="https://arxiv.org/abs/2603.20697"
       target="_blank" rel="noopener">
      Satellite-to-Street: Synthesizing Post-Disaster Views from Satellite Imagery via Generative Vision Models
    </a>
    — <strong>Yang, Yifan</strong>, Lei Zou, Wendy Jepson. <br>
    <em>Accepted to IGARSS 2026 — IEEE International Geoscience and Remote Sensing Symposium</em>. <br>

    <div class="paper-links">
      <a href="https://arxiv.org/abs/2603.20697"
         target="_blank" rel="noopener"
         class="paper-link link-paper">📄 Paper</a>

      <a href="https://github.com/rayford295/Sat2Street-DisasterGen"
         target="_blank" rel="noopener"
         class="paper-link link-code">💻 GitHub</a>
    </div>
  </div>
</div>
  
  <!-- DamageArbiter Paper(preprint)-->
  <div class="paper-box">
    <div class="paper-box-image">
      <div class="badge">Preprint</div>
      <img src="images/2nd_disasterclip.png" alt="DamageArbiter Framework" width="75%">
    </div>
    <div class="paper-box-text">
      <a href="https://arxiv.org/abs/2603.14837"
         target="_blank" rel="noopener">
        DamageArbiter: A Multimodal Arbitration Framework for Disaster Damage Assessment from Street-View Imagery
      </a>
      — <strong>Yang, Yifan</strong>, Lei Zou, Wenjing Gong, Kani Fu, Zongrong Li, Siqin Wang, Bing Zhou, Heng Cai, Hao Tian.<br>
      <em>arXiv preprint</em>, 2026. <br>
      <span style="font-weight:500;">
        🏆 2nd Place — AAG GIS Specialty Group (GISSG) Student Honors Paper Competition, 2026
      </span>

      <div class="paper-links">
        <a href="https://arxiv.org/abs/2603.14837"
           target="_blank" rel="noopener"
           class="paper-link link-paper">📄 Paper</a>

        <a href="https://github.com/rayford295/DamageArbiter"
           target="_blank" rel="noopener"
           class="paper-link link-code">💻 GitHub</a>
      </div>
    </div>
  </div>

  <!-- CEUS Journal Paper -->
  <div class="paper-box">
    <div class="paper-box-image">
      <div class="badge">Journal Article</div>
      <img src="images/1st_dual_channel.png" alt="Hyperlocal Disaster" width="75%">
    </div>
    <div class="paper-box-text">
      <a href="https://www.sciencedirect.com/science/article/pii/S0198971525000882"
         target="_blank" rel="noopener">
        Hyperlocal Disaster Damage Assessment Using Bi-temporal Street-view Imagery and Pre-trained Vision Models
      </a>
      — <strong>Yang, Yifan</strong>, Lei Zou, Bing Zhou, Daoyang Li, Binin Lin, Joynal Abedin, Mengyang Yang. <br>
      <em>Computers, Environment and Urban Systems</em>, Volume 121, 102335, 2025.
      <span style="font-weight:500;">
        <br>💐 Honorable Mention — AAG GIS Specialty Group (GISSG) Student Honors Paper Competition, 2025
      </span>

      <div class="paper-links">
        <a href="https://www.sciencedirect.com/science/article/pii/S0198971525000882"
           target="_blank" rel="noopener"
           class="paper-link link-paper">📄 Paper</a>

        <a href="https://doi.org/10.1016/j.compenvurbsys.2025.102335"
           target="_blank" rel="noopener"
           class="paper-link link-doi">🔗 DOI</a>

        <a href="https://github.com/rayford295/Bi-Temporal-StreetView"
           target="_blank" rel="noopener"
           class="paper-link link-code">💻 GitHub</a>

        <a href="https://www.mosaic51.com/featured/how-texas-am-is-pioneering-damage-assessment-using-mosaic-imagery-from-hurricane-milton/"
           target="_blank" rel="noopener"
           class="paper-link link-blog">📝 Blog</a>

        <a href="https://mp.weixin.qq.com/s/I_5YYTeRy9UWIrApRzBU2A"
           target="_blank" rel="noopener"
           class="paper-link link-wechat">💬 WeChat</a>
      </div>
    </div>
  </div>


  <!-- ICC Conference Paper -->
  <div class="paper-box">
    <div class="paper-box-image">
      <div class="badge">Conference Paper</div>
      <img src="images/disasterVLP.png" alt="DisasterVLP Conference Paper" width="75%">
    </div>
    <div class="paper-box-text">
      <a href="https://doi.org/10.5194/ica-abs-10-310-2025"
         target="_blank" rel="noopener">
        Perceiving Multidimensional Disaster Damages from Street-View Images Using Visual-Language Models
      </a>
      — <strong>Yang, Yifan</strong>, Lei Zou. <br>
      <em>Abstracts of the International Cartographic Association</em>, Volume 10, 310, 2025. <br>
      <span style="font-weight:600;">
        🏆 Best Student Paper Award — ICC 2025, Vancouver, Canada
      </span>

      <div class="paper-links">
        <a href="https://doi.org/10.5194/ica-abs-10-310-2025"
           target="_blank" rel="noopener"
           class="paper-link link-paper">📄 Paper</a>

        <a href="https://doi.org/10.5194/ica-abs-10-310-2025"
           target="_blank" rel="noopener"
           class="paper-link link-doi">🔗 DOI</a>

        <a href="https://github.com/rayford295/DisasterVLP"
           target="_blank" rel="noopener"
           class="paper-link link-code">💻 GitHub</a>
      </div>
    </div>
  </div>


  <!-- Esri Press Book Chapter -->
  <div class="paper-box">
    <div class="paper-box-image">
      <div class="badge">Book Chapter</div>
      <img src="images/object detection.png" alt="Text SAM Tree Segmentation" width="75%">
    </div>
    <div class="paper-box-text">
      <a href="https://www.esri.com/en-us/esri-press/browse/security-first-geospatial-workflows-for-a-safe-and-equitable-world"
         target="_blank" rel="noopener">
        Object detection and segmentation of trees using Text SAM in ArcGIS Online
      </a>
      — <strong>Yang, Yifan</strong>, Dominic Borrelli. <br>
      In: Darren Martin Ruddell &amp; Diana Ter-Ghazaryan (eds.),
      <em>Security First: Geospatial Workflows for a Safe and Equitable World</em>. <br>
      Esri Press, 2025. (Chapter 7)

      <div class="paper-links">
        <a href="https://www.esri.com/en-us/esri-press/browse/security-first-geospatial-workflows-for-a-safe-and-equitable-world"
           target="_blank" rel="noopener"
           class="paper-link link-paper">📘 Book</a>

        <a href="https://www.esri.com/en-us/esri-press/browse/security-first-geospatial-workflows-for-a-safe-and-equitable-world"
           target="_blank" rel="noopener"
           class="paper-link link-doi">🔗 Link</a>

        <a href="https://github.com/rayford295/ArcGIS-SAM-TreeSegmentation"
           target="_blank" rel="noopener"
           class="paper-link link-code">💻 GitHub</a>
      </div>
    </div>
  </div>


  <!-- Applied Sciences Journal Paper -->
  <div class="paper-box">
    <div class="paper-box-image">
      <div class="badge">Journal Article</div>
      <img src="images/0st_geolocator.png" alt="GeoLocator" width="75%">
    </div>
    <div class="paper-box-text">
      <a href="https://www.mdpi.com/2076-3417/14/16/7091"
         target="_blank" rel="noopener">
        GeoLocator: A Location-Integrated Large Multimodal Model (LMM) for Inferring Geo-Privacy
      </a>
      — <strong>Yang, Yifan</strong>, Siqin Wang, Daoyang Li, Shuju Sun, Qingyang Wu. <br>
      <em>Applied Sciences</em>, 14(16), 7091, 2024.

      <div class="paper-links">
        <a href="https://www.mdpi.com/2076-3417/14/16/7091"
           target="_blank" rel="noopener"
           class="paper-link link-paper">📄 Paper</a>

        <a href="https://doi.org/10.3390/app14167091"
           target="_blank" rel="noopener"
           class="paper-link link-doi">🔗 DOI</a>

        <a href="https://github.com/rayford295/GeoLocator"
           target="_blank" rel="noopener"
           class="paper-link link-code">💻 GitHub</a>
      </div>
    </div>
  </div>
</section>


<section id="presentation">
  <h2>🏘 Presentation</h2>
  <ul class="presentation-timeline">
    <li class="presentation-year">
      <span class="presentation-year-label">2026</span>
      <ul class="presentation-items">
        <li>
          <strong>Symposium on Spatiotemporal Data Science</strong>, Virginia Tech Academic Building One, Alexandria, VA, August 7–8, 2026.
          <ul class="presentation-subitems">
            <li>
              <em>Session Organizer</em> — “Spatiotemporal AI for Urban and Environmental Intelligence: Sensing, Inference, and Human-Centered Applications.”
            </li>
            <li>
              <em>Onsite Oral Presentation</em> —
              <strong>Yifan Yang</strong>:
              Satellite-to-Street: Synthesizing Post-Disaster Views from Satellite Imagery via Generative Vision Models.
            </li>
          </ul>
        </li>
        <li>
          <strong>IEEE International Geoscience and Remote Sensing Symposium (IGARSS)</strong>,
          Washington, D.C., August 13, 2026.
          <ul class="presentation-subitems">
            <li>
              <em>Leveraging AI, LLMs, and Geospatial Technologies for Rapid and Explainable Post-Disaster Damage Intelligence</em> —
              <strong>Yifan Yang, Lei Zou, and Wendy Jepson</strong>:
              Satellite-to-Street: Synthesizing Post-Disaster Views from Satellite Imagery via Generative Vision Models
              (<a href="https://2026.ieeeigarss.org/view_paper.php?PaperNum=2585" target="_blank" rel="noopener">Paper TH3.R6.4</a>).
            </li>
          </ul>
        </li>
        <li>
          <strong>American Association of Geographers Annual Meeting</strong>, March 17–21, 2026, San Francisco, California
          (<a href="https://aag-meetings.secure-platform.com/aag2026/gallery/rounds/149/details/90541" target="_blank" rel="noopener">Session 90541</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25333" target="_blank" rel="noopener">Session 25333</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/24774" target="_blank" rel="noopener">Session 24774</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25413" target="_blank" rel="noopener">Session 25413</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25683" target="_blank" rel="noopener">Session 25683</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25257" target="_blank" rel="noopener">Session 25257</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25338" target="_blank" rel="noopener">Session 25338</a>).
        </li>
      </ul>
    </li>

    <li class="presentation-year">
      <span class="presentation-year-label">2025</span>
      <ul class="presentation-items">
        <li>
          <strong>International Cartographic Conference (ICC)</strong>, Vancouver, Canada, August 18–22, 2025.
          <ul class="presentation-subitems">
            <li>
              <em>Student Paper Session</em> —
              <strong>Yifan Yang</strong>: Perceiving Multidimensional Disaster Damages from Street-View Images Using Visual-Language Models.
            </li>
            <li>
              <em>GeoAnalytics for Sustainable and Livable Cities</em>, ICC pre-conference symposium, Vancouver, Canada, August 17, 2025 —
              <strong>Yifan Yang and Lei Zou</strong>: DisasterVLP: A Vision-Language Pretrained Framework for Multidimensional Disaster Damage Assessment Using Street-View Images
              (<a href="https://asiacarto.org/ica2025/" target="_blank" rel="noopener">Symposium Page</a>).
            </li>
          </ul>
        </li>
        <li>
          <strong>American Association of Geographers Annual Meeting</strong>, March 24–28, 2025, Detroit, Michigan
          (<a href="https://aag.secure-platform.com/aag2025/solicitations/82/sessiongallery/23561" target="_blank" rel="noopener">Session 23561</a>,
           <a href="https://aag.secure-platform.com/aag2025/solicitations/82/sessiongallery/23718" target="_blank" rel="noopener">Session 23718</a>,
           <a href="https://aag.secure-platform.com/aag2025/organizations/main/gallery/rounds/131/details/82104" target="_blank" rel="noopener">Session 82104</a>,
           <a href="https://aag.secure-platform.com/aag2025/organizations/main/gallery/rounds/131/details/83465" target="_blank" rel="noopener">Session 83465</a>).
        </li>
      </ul>
    </li>

    <li class="presentation-year">
      <span class="presentation-year-label">2024</span>
      <ul class="presentation-items">
        <li>
          <strong>American Association of Geographers Annual Meeting</strong>, April 16–20, 2024, Honolulu, Hawai'i
          (<a href="https://aag.secure-platform.com/aag2024/solicitations/57/sessiongallery/7825" target="_blank" rel="noopener">Session 7825</a>).
        </li>
        <li>
          <strong>Spatial Data Science Symposium</strong> —
          <em>Thematic Session, Geoprivacy Challenges and Solutions in the Digital Society</em>
          (<a href="https://sdss2024.spatial-data-science.net/ts/zhang.html" target="_blank" rel="noopener">Session Details</a>,
          <a href="https://www.youtube.com/watch?v=6pOIemM9y6M&list=PLLPRl7FLqNFScodyhaN0j_y5JMx3H7TRg&index=5" target="_blank" rel="noopener">Watch Video</a>).
        </li>
        <li>
          <strong>Spatiotemporal Data Science Symposium</strong> —
          <em>Pre-symposium Training Workshop</em>, Washington DC, July 22, 2024 (online)
          (<a href="https://sdl.gis.harvard.edu/event/symposium-spatiotemporal-data-science-geoai-social-sciences" target="_blank" rel="noopener">Event Page</a>).
        </li>
        <li>
          <strong>AGI Leap Summit</strong> —
          <em>Multimodality</em>, Paper Presentation, SuperAGI, February 29, 2024 (Virtual)
          (<a href="https://superagi.com/agi-leap-summit/" target="_blank" rel="noopener">Summit Website</a>).
        </li>
        <li>
          <strong>Los Angeles Geospatial Summit</strong>, February 23, 2024, Los Angeles, CA
          (<a href="https://www.esri.com/en-us/industries/blog/articles/showcasing-innovation-in-gis-education-through-student-projects-at-the-la-geospatial-summit/"
              target="_blank" rel="noopener">Event Article</a>).
        </li>
      </ul>
    </li>
  </ul>
</section>

<section id="partial-honors">
  <h2>👑 Partial Honors</h2>
  <ul>
    <li>2026 Cartography and Geographic Information Society (CaGIS) Doctoral Scholarship Award, $1000.</li>
    <li>2026 NSF I-GUIDE Summer School: Spatial AI &amp; Convergence Science — Selected Travel Award.</li>
    <li>2026 IEEE GRSS Travel Grant — IGARSS 2026, Washington, D.C., $500.</li>
    <li>2026 AAG-GISSG Student Honors Paper Competition — 🥈 2nd Place, $350.</li>
    <li>2026 AAG-IGIF Scholarship Award, AAG International Geographic Information Funds (IGIF), $1,200.</li>
    <li>2025 Environment and Sustainability Graduate Fellow Award, Texas A&amp;M University, $2,500.</li>
    <li>2025 Travel Grant, Summer School on Cyberinfrastructure and Disaster Resilience, TAMU (funded by NSF), $200.</li>
    <li>2025-2026 Texas A&M Institute of Data Science (TAMIDS) Student Ambassador Scholarship, Domain Data Science Track, TAMU, $2,000.</li>
    <li>2025 CaGIS International Travel Grant - 2025 ICC, Vancouver, Canada, $2,100.</li>
    <li>2025 International Cartographic Conference (ICC), Vancouver, Canada — 🏆 Best Student Paper Award</li>
    <li>2025 AAG-GISSG Student Honors Paper Competition — Honorable Mention, $200. (Top 5)</li>
    <li>2025 AAG Applied Geography Specialty Group — AGSG Annual Meeting Award, $196.</li>
    <li>2024 Travel Grant(Visiting), Department of Geography, University of South Carolina, $400.</li>
    <li>2024 Lifetime Membership — Nu Theta Chapter, Gamma Theta Upsilon (International Geographic Honor Society)</li>
    <li>2024 Los Angeles Geospatial Summit — ArcGIS StoryMaps Competition: Most Suitably Applied Analysis Methodology</li>
    <li>2023 9th China International "Internet+" College Students Innovation and Entrepreneurship Competition (Shanghai Division), International Project Category ("Youguang Ushine - AI+ Multilingual Talent Service Platform") — Second Runner-up.</li>
    <li>2020 Computer Design Competition for Chinese College Students (Big Data Practice) — 🏆 National First Prize.</li>
    <li>2020 10th MathorCup College Mathematical Modeling Challenge — Third Prize.</li>
    <li>2020 13th "Certification Cup" Mathematics China Mathematical Modeling Network Challenge (Inner Mongolia Region) — Second Prize.</li>
    <li>2020 China-US Youth Creators Competition (Haikou Region) — Third Prize.</li>
    <li>2020 3rd China Youth Cup National University Student Mathematical Modeling Competition — Second Prize.</li>
    <li>2020 6th National Mobile Internet Innovation Competition (South China Region) — Third Prize.</li>
    <li>2020 China University Computer Competition, Innovation Group (Artificial Intelligence Track) — Third Prize.</li>
    <li>2020 Hainan Selection Competition of the 4th China Creative Wings Innovation Competition — Third Prize / Finalist.</li>
    <li>2020 Hainan Free Trade Port Entrepreneurship Competition — Honorable Mention.</li>
    <li>2020 6th China International "Internet+" Student Innovation and Entrepreneurship Competition, Hainan Creative Group — Silver Award.</li>
    <li>2020 Challenge Cup Student Entrepreneurship Plan Competition (Hainan Region) — Bronze Prize.</li>
    <li>2020 14th iCAN International Innovation and Entrepreneurship Competition (South China Region) — Second Prize.</li>
    <li>2020 Hainan University First-Class Comprehensive Scholarship — CNY 2,500.</li>
    <li>2020 Hainan University "College Student with the Most Innovative Spirit and Practical Ability" Recognition.</li>
  </ul>
</section>

<section id="professional-activities-and-service">
  <h2>👔 Professional Activities and Service</h2>
    <ul>
    <li>
      <em>Student Co-Director, Remote Sensing Specialty Group</em>,  
      <a href="https://www.aag.org/" target="_blank" rel="noopener">American Association of Geographers</a>, 2025 – 2027
    </li>
    <li>
      <em>Student Co-Director, Hazards, Risks, and Disasters</em>,  
      <a href="https://www.aag.org/" target="_blank" rel="noopener">American Association of Geographers</a>, 2025 – 2027
    </li>
    <li>
      <em>Data Science Student Ambassador</em>,  
      <a href="https://tamids.tamu.edu/2025/07/18/tamids-announces-2025-2026-cohort-of-student-ambassadors/" target="_blank" rel="noopener">Texas A&M Institute of Data Science (TAMIDS)</a>, 2025 – 2026
    </li>
    <li>
      <em>Executive Committee Member</em>,  
      <a href="https://geography.tamu.edu/aggie-geographers-graduate-society.html" target="_blank" rel="noopener">Aggie Geographers Graduate Society (AGGS)</a>, 2025 – 2026
    </li>
    <li>
      <em>Board Member, 
      <a href="https://gisphere.info/" target="_blank" rel="noopener">GISphere</a>
        (responsible for the 
      <a href="https://space.bilibili.com/1043870260/" target="_blank" rel="noopener">GISalon Roundtable Series</a>)
      </em>, 2024 – 2025
    </li>
    <li>
      <em>Vice President, Association of Robotics and Artificial Intelligence</em>,  
      <a href="https://www.hainanu.edu.cn/" target="_blank" rel="noopener">Hainan University</a>, 2021 – 2022
    </li>
  </ul>
    <ul>

    <li>
  <em>Reviewer for leading journals and conferences including:</em>
  <ul style="margin-left: 1em;">
    <li><em>ACM Transactions on Autonomous and Adaptive Systems</em></li>
    <li><em>Climatic Change</em></li>
    <li><em>Computational Urban Science</em></li>
    <li><em>International Journal of Applied Earth Observation and Geoinformation</em></li>
    <li><em>International Journal of Geographical Information Science</em></li>
    <li><em>International Journal of ITS Research</em></li>
    <li><em>Scientific Reports</em></li>
    <li><em>Transactions in GIS</em></li>
    <li><em>Tourism Geographies</em></li>
    <li><em>Journal of Transport Geography</em></li>
    <li><em>32nd SIGKDD Conference on Knowledge Discovery and Data Mining (KDD 2026) – AI for Sciences Track</em></li>
    <li><em>International Journal of Remote Sensing</em></li>
  </ul>
</li>
  </ul>
</section>

<section id="industry-engagement">
  <h2>🏢 Industry Engagement</h2>

  <ul>
    <li>
      <strong>Rayford AI</strong> — <em>Founder-led Venture</em>
      <p style="margin-left: 1em;">
        Building a geospatial physical AI company that combines remote sensing, street-level imagery,
        and multimodal spatial intelligence into auditable real-world workflows for property and infrastructure
        decisions, starting with disaster assessment, claims triage, and resilience operations.
        <a href="https://rayford-ai.com/" target="_blank" rel="noopener">Company</a>.
      </p>
    </li>

    <li>
      <strong>Niantic Spatial</strong> — <em>Academic Exchange</em>
      <p style="margin-left: 1em;">
        Invited by Niantic Spatial for an academic exchange in San Francisco on GeoAI,
        multimodal spatial intelligence, and disaster-related spatial analytics,
        highlighting the relevance of my research to large-scale spatial systems in industry.
        <a href="/images/niantic.png" target="_blank" rel="noopener">Invitation Letter</a>.
      </p>
    </li>

    <li>
      <strong>Mosaic</strong> — <em>Featured Research</em>
      <p style="margin-left: 1em;">
        My disaster assessment research was featured by Mosaic in a story on how
        Texas A&amp;M is pioneering hyperlocal damage assessment using street-level
        imagery from Hurricane Milton.
        <a href="https://www.mosaic51.com/featured/how-texas-am-is-pioneering-damage-assessment-using-mosaic-imagery-from-hurricane-milton/" target="_blank" rel="noopener">Read Story</a>.
      </p>
    </li>

    <li>
      <strong>Vitally AI</strong> — <em>Industry Experience</em>
      <p style="margin-left: 1em;">
        Completed an industry internship in data engineering and AI model fine-tuning,
        gaining hands-on experience in applied generative AI systems and production-oriented workflows.
        <a href="https://app.vitally-ai.com/" target="_blank" rel="noopener">Company</a>.
      </p>
    </li>
  </ul>
</section>


<section id="media-coverage">
  <h2>📺 Media Coverage</h2>
  <ul>
    <li>
      <a href="https://www.mosaic51.com/featured/how-texas-am-is-pioneering-damage-assessment-using-mosaic-imagery-from-hurricane-milton/" target="_blank" rel="noopener">
        📷 Mosaic Featured Story: “How Texas A&amp;M is Pioneering Damage Assessment Using Mosaic Imagery from Hurricane Milton”
      </a>
      <p style="margin-left: 1em;">
        Featured by Mosaic for research led with Dr. Lei Zou on hyperlocal disaster damage assessment, showing how bi-temporal street-view imagery can complement satellite observations for post-disaster analysis.
      </p>
    </li>
    <li>
      <a href="https://engineering.tamu.edu/news/2024/09/throwing-shade-at-heatwaves.html" target="_blank" rel="noopener">
        🌡️ TAMU Engineering News: “Throwing Shade at Heatwaves.”
      </a>
      <p style="margin-left: 1em;">
        Featured in a Texas A&M Engineering article highlighting my research on mitigating urban heat through shade and geospatial analysis.
      </p>
    </li>
    <li>
      <a href="https://www.esri.com/en-us/industries/blog/articles/showcasing-innovation-in-gis-education-through-student-projects-at-the-la-geospatial-summit" target="_blank" rel="noopener">
        🗺️ Esri Blog: “Showcasing Innovation in GIS Education at the LA Geospatial Summit.”
      </a>
      <p style="margin-left: 1em;">
        Esri featured my project for demonstrating innovative uses of GIS and GeoAI at the Los Angeles Geospatial Summit.
      </p>
    </li>
    <li>
      <a href="https://artsci.tamu.edu/research/updates/five-texas-am-researchers-join-national-climate-health-initiative.html" target="_blank" rel="noopener">
        🌎 TAMU College of Arts & Sciences: “Five Texas A&M Researchers Join National Climate-Health Initiative”
      </a>
      <p style="margin-left: 1em;">
        Featured as one of the five Texas A&M researchers contributing to a national effort connecting climate science and public health, highlighting my GeoAI-based research on climate resilience and environmental health.
      </p>
    </li>
  </ul>
</section>

<section id="writing-and-reflections">
  <h2>✍️ Writing & Reflections</h2>
  <p>
    This section gathers my reading reflections, research notes, public essays,
    and thoughts from my Ph.D. journey. Compared with formal publications, these
    pieces stay closer to the process of research itself: how I read, ask
    questions, think through GeoAI, disaster resilience, and autonomous science,
    and slowly grow into a researcher through everyday practice.
  </p>

  <ul>
    <li>
      <strong>
        <a href="https://mp.weixin.qq.com/s/deemE3X03aam_LTA2dljxg" target="_blank" rel="noopener">
          In the Autonomous Era, What Should a PhD Student Hold Onto?
        </a>
      </strong>
      — <em>Featured Essay, May 2026</em>
      <p style="margin-left: 1em;">
        A reading reflection on automated science, AI-assisted research,
        doctoral training, reading, courage, and creativity. As more research
        work becomes automated, I ask what a Ph.D. student should still hold
        onto.
        <a href="https://mp.weixin.qq.com/s/deemE3X03aam_LTA2dljxg" target="_blank" rel="noopener">Read Essay</a>.
      </p>
    </li>

    <li>
      <strong>
        <a href="https://mp.weixin.qq.com/s/d96wzMorwGsIGaO5N3mh9A" target="_blank" rel="noopener">
          Ph.D. Year Two: Self-Mastery Makes One Strong
        </a>
      </strong>
      — <em>Ph.D. Year-Two Reflection, May 2026</em>
      <p style="margin-left: 1em;">
        A Chinese personal reflection on the second year of Ph.D. life, building
        a reading and review system, training inner strength, and learning to
        become steadier, braver, and more responsible through writing.
        <a href="https://mp.weixin.qq.com/s/d96wzMorwGsIGaO5N3mh9A" target="_blank" rel="noopener">Read Essay</a>.
      </p>
    </li>

    <li>
      <strong>
        <a href="https://github.com/AutoGeoAI4Sci/awesome-autonomous-geoai/blob/main/RESEARCH_PHILOSOPHY.md" target="_blank" rel="noopener">
          Research Philosophy: GeoAI, Disaster Resilience, and Autonomous Science
        </a>
      </strong>
      — <em>Research Philosophy</em>
      <p style="margin-left: 1em;">
        A living research philosophy document that organizes my thinking and
        judgment on GeoAI, disaster resilience, responsible AI, autonomous
        science, and long-term research questions.
        <a href="https://github.com/AutoGeoAI4Sci/awesome-autonomous-geoai/blob/main/RESEARCH_PHILOSOPHY.md" target="_blank" rel="noopener">Read Document</a>;
        <a href="https://github.com/AutoGeoAI4Sci/awesome-autonomous-geoai/blob/main/RESEARCH_PHILOSOPHY_SUMMARY_ZH.md" target="_blank" rel="noopener">中文摘要</a>.
      </p>
    </li>
  </ul>

  <div style="text-align:center; margin:30px auto 6px;">
    <img src="/images/wechat-mp-qr.png" alt="WeChat Official Account QR code" loading="lazy" decoding="async" style="width:160px; height:auto; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
    <p style="margin:8px 0 0; color:#555; font-size:0.9em;">📩 扫码关注我的微信公众号 · Follow my WeChat Official Account</p>
  </div>
</section>

<section id="videos">
  <h2>🎬 Personal Moments — A glimpse into my journey beyond research</h2>
  <ul class="video-list">
    <li>
      <strong>🎓 USC Graduation Ceremony</strong>
      <p>
        A short highlight from my 2024 USC Commencement Ceremony, where I received my Master’s degree in Spatial Data Science at the University of Southern California.
      </p>
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/30hsLMBgjcU?si=QZRSTSTG0jn2OVzQ"
          title="USC Graduation Ceremony"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>
    </li>

    <li>
      <strong>🪂 Skydiving Adventure — GoJump America</strong>
      <p>
        A thrilling moment from my skydiving experience in California, capturing the excitement and beauty of freefall above the Pacific Ocean.
      </p>
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/w7AncQ7OeH4?si=0Z61Q_GexChCJzZb"
          title="Skydiving Adventure — GoJump America"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>
    </li>

    <li>
      <strong>🌐 GISalon Roundtable: GeoAI and the Future of GIS</strong>
      <p>
        A GISalon roundtable conversation on GeoAI and whether AI will replace GIS, featuring my perspective as a Texas A&amp;M Geography Ph.D. student.
        <a href="https://www.bilibili.com/video/BV1e8Lg64EMz/" target="_blank" rel="noopener">Watch on Bilibili</a>.
      </p>
      <div class="video-wrapper">
        <button
          class="video-cover"
          type="button"
          data-video-src="https://player.bilibili.com/player.html?isOutside=true&amp;bvid=BV1e8Lg64EMz&amp;cid=38375326637&amp;p=1&amp;autoplay=1"
          data-video-title="GIS真的要被AI取代了吗？先听懂GeoAI"
          aria-label="Play GISalon Roundtable: GeoAI and the Future of GIS">
          <img
            src="/images/gisalon-geoai-cover.jpg"
            alt="Cover image for the GISalon GeoAI roundtable video"
            loading="lazy"
            decoding="async">
          <span class="video-cover-overlay" aria-hidden="true">
            <span class="video-play-icon"></span>
          </span>
        </button>
      </div>
    </li>

    <li>
      <strong>🎤 GISalon Roundtable: Is Studying Abroad Really That Lonely?</strong>
      <p>
        A GISalon roundtable I hosted on the real experience of overseas campus life — exploring whether studying abroad is as isolating as it is often imagined.
        <a href="https://www.bilibili.com/video/BV1HeVdzyEkP" target="_blank" rel="noopener">Watch on Bilibili</a>.
      </p>
      <div class="video-wrapper">
        <button
          class="video-cover"
          type="button"
          data-video-src="https://player.bilibili.com/player.html?isOutside=true&amp;bvid=BV1HeVdzyEkP&amp;cid=29889334394&amp;p=1&amp;autoplay=1"
          data-video-title="留学生活真的那么孤独吗？探索海外校园的真实体验！"
          aria-label="Play GISalon Roundtable: Is Studying Abroad Really That Lonely?">
          <img
            src="/images/gisalon-studyabroad-cover.jpg"
            alt="Cover image for the GISalon study-abroad roundtable video"
            loading="lazy"
            decoding="async">
          <span class="video-cover-overlay" aria-hidden="true">
            <span class="video-play-icon"></span>
          </span>
        </button>
      </div>
    </li>
  </ul>

  <div style="text-align:center; margin:30px auto 6px;">
    <img src="/images/wechat-channels-qr.png" alt="WeChat Channels (视频号) QR code" loading="lazy" decoding="async" style="width:200px; height:auto; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.15);">
    <p style="margin:8px 0 0; color:#555; font-size:0.9em;">📺 扫码关注我的微信视频号 · Follow my WeChat Channels</p>
  </div>
</section>

<style>
#videos {
  margin-top: 40px;
}

#videos h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #222;
}

.video-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px 32px;
  align-items: start;
}

@media (max-width: 640px) {
  .video-list {
    grid-template-columns: 1fr;
  }
}

.video-list li {
  margin-bottom: 0;
}

.video-list p {
  margin-left: 1em;
  color: #444;
  font-size: 0.95em;
}

/* 缩小视频比例，使页面更协调 */
.video-wrapper {
  position: relative;
  padding-bottom: 52%; /* 控制视频高宽比例 */
  height: 0;
  overflow: hidden;
  max-width: 100%; /* 填满所在网格列(每行两个) */
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
}

.video-cover {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  cursor: pointer;
  overflow: hidden;
  background: #000;
  border-radius: 10px;
}

.video-cover img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.video-cover-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.18);
  transition: background 160ms ease;
}

.video-cover:hover .video-cover-overlay,
.video-cover:focus-visible .video-cover-overlay {
  background: rgba(0, 0, 0, 0.28);
}

.video-play-icon {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  position: relative;
}

.video-play-icon::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-42%, -50%);
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 24px solid #111;
}
</style>

<script>
document.querySelectorAll(".video-cover[data-video-src]").forEach(function (cover) {
  cover.addEventListener("click", function () {
    var iframe = document.createElement("iframe");
    iframe.src = cover.dataset.videoSrc;
    iframe.title = cover.dataset.videoTitle || cover.getAttribute("aria-label") || "Video player";
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "");
    cover.replaceWith(iframe);
  });
});
</script>

<section id="personal-gallery" class="personal-gallery">
  <h2>📸 Personal Gallery — Moments That Inspire Me</h2>

  <div class="personal-gallery-grid" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; max-width:760px; margin:24px auto 44px; align-items:start;">
    <figure style="margin:0; text-align:center;">
      <img src="/images/godfather.png" alt="The Godfather film poster" loading="lazy" decoding="async" style="max-width:680px; width:100%; height:auto; aspect-ratio:auto; object-fit:contain; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2); display:block; margin:0 auto;">
    </figure>
    <figure style="margin:0; text-align:center;">
      <img src="/images/camus.jpg" alt="Albert Camus portrait" loading="lazy" decoding="async" style="max-width:680px; width:100%; height:auto; aspect-ratio:auto; object-fit:contain; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2); display:block; margin:0 auto;">
    </figure>
    <figure style="margin:0; text-align:center;">
      <img src="/images/jackie.JPG" alt="Jackie Chan portrait" loading="lazy" decoding="async" style="max-width:680px; width:100%; height:auto; aspect-ratio:auto; object-fit:contain; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2); display:block; margin:0 auto;">
    </figure>
    <figure style="margin:0; text-align:center;">
      <img src="/images/我的团长我的团.jpg" alt="My Chief and My Regiment poster" loading="lazy" decoding="async" style="max-width:680px; width:100%; height:auto; aspect-ratio:auto; object-fit:contain; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2); display:block; margin:0 auto;">
    </figure>
    <figure style="margin:0; text-align:center;">
      <img src="/images/road-not-taken-zh.png" alt="The Road Not Taken Chinese translation page" loading="lazy" decoding="async" style="max-width:680px; width:100%; height:auto; aspect-ratio:auto; object-fit:contain; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2); display:block; margin:0 auto;">
    </figure>
  </div>
</section>

<section id="miscellaneous" class="misc-section">
  <h2>🌎 Miscellaneous</h2>

  <p class="misc-text">
    Outside of research, I enjoy playing <strong>eFootball</strong>, following football and basketball,
    and collecting <strong>trading cards</strong>, especially limited and signed cards from athletes I admire.
  </p>

  <div class="hobby-gallery">
    <figure class="hobby-card">
      <img src="/hobby/leah-macy-autograph-card.jpg" alt="Leah Macy autographed Notre Dame trading card" loading="lazy" decoding="async">
      <figcaption>
        <strong>Autographed Card</strong>
        <span>Leah Macy, Notre Dame, 48/99.</span>
      </figcaption>
    </figure>
    <figure class="hobby-card">
      <img src="/hobby/football1.jpg" alt="Playing football" loading="lazy" decoding="async">
      <figcaption>
        <strong>Football</strong>
        <span>Weekend matches and pickup games.</span>
      </figcaption>
    </figure>
    <figure class="hobby-card">
      <img src="/hobby/card-pulls.png" alt="Trading card pulls featuring football legends and pop-culture cards" loading="lazy" decoding="async">
      <figcaption>
        <strong>Card Pulls</strong>
        <span>Collecting football legends and pop-culture hits beyond research hours.</span>
      </figcaption>
    </figure>
    <figure class="hobby-card">
      <img src="/hobby/hansen.jpg" alt="Yang Hansen trading card" loading="lazy" decoding="async">
      <figcaption>
        <strong>Cards</strong>
        <span>Collecting players and stories on cardboard.</span>
      </figcaption>
    </figure>
    <figure class="hobby-card">
      <img src="/hobby/playcard.jpg" alt="Trading cards collection" loading="lazy" decoding="async">
      <figcaption>
        <strong>Collection</strong>
        <span>Favorite cards from the binder.</span>
      </figcaption>
    </figure>
  </div>

  <div class="visitor-map-wrap" data-visitor-map>
    <div class="visitor-map-fallback" role="status" hidden>
      <svg class="visitor-map-fallback__map" viewBox="0 0 320 160" aria-hidden="true" focusable="false">
        <path d="M48 65c10-17 32-29 55-28 15 1 27 6 38 15 7 6 16 8 27 6 15-3 29 1 41 10 13 9 27 11 43 6 13-4 26-2 36 6 9 8 14 19 14 31 0 14-7 26-19 34-13 9-30 10-45 3-13-6-27-6-40 0-18 8-39 7-56-3-11-6-24-7-36-3-16 6-34 4-47-7-20-16-24-45-11-70Z" />
        <circle cx="86" cy="69" r="5" />
        <circle cx="143" cy="91" r="4" />
        <circle cx="206" cy="75" r="5" />
        <circle cx="252" cy="104" r="4" />
      </svg>
      <div>
        <strong>Visitor Map</strong>
        <span>Live visitor map is temporarily unavailable.</span>
      </div>
    </div>
    <div class="visitor-map-widgets">
      <div class="visitor-map-flat" data-visitor-widget>
        <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=Qrv5eIcxwcPpgsi2Ge8d293SVIT9aODPJGzL0ZRIB-c&cl=ffffff&w=a"></script>
      </div>
    </div>
  </div>

  <script>
  (function () {
    var container = document.querySelector("[data-visitor-map]");
    if (!container) {
      return;
    }

    var fallback = container.querySelector(".visitor-map-fallback");
    var widgets = Array.prototype.slice.call(container.querySelectorAll("[data-visitor-widget]"));

    // A widget is "live" once MapMyVisitors injects a non-script element
    // (the map or globe image/anchor) beside its script tag.
    function hasLiveMap() {
      return widgets.some(function (widget) {
        return Array.prototype.some.call(widget.children, function (child) {
          return child.tagName !== "SCRIPT";
        });
      });
    }

    function refreshFallback() {
      if (fallback) {
        fallback.hidden = hasLiveMap();
      }
    }

    window.addEventListener("load", function () {
      window.setTimeout(refreshFallback, 1200);
    });
    window.setTimeout(refreshFallback, 4000);
  }());
  </script>

</section>
