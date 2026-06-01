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
    .clustrmaps-container {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      overflow: hidden;
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

<p>
  <strong>Research interests:</strong> Spatial Data Science, GeoAI, AI4Science, GIScience, Disaster Resilience.
</p>



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
    Selected as one of 30 participants from 150+ applicants for
    <a href="https://i-guide.io/summer-school/summer-school-2026/" target="_blank" rel="noopener">
      <strong>I-GUIDE Summer School 2026: Spatial AI &amp; Convergence Science</strong>
    </a>
    at the <strong>University of Illinois Urbana-Champaign</strong> (July 13–17, 2026),
    with NSF-supported travel funding.
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
        DamageArbiter: A CLIP-Enhanced Multimodal Arbitration Framework for Hurricane Damage Assessment from Street-View Imagery
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
  <ul>
    <li><strong>IEEE International Geoscience and Remote Sensing Symposium (IGARSS)</strong>
      <ul>
        <li>
          <em>Leveraging AI, LLMs, and Geospatial Technologies for Rapid and Explainable Post-Disaster Damage Intelligence</em>,
          Washington, D.C., August 13, 2026 —
          <strong>Yifan Yang, Lei Zou, and Wendy Jepson</strong>:
          Satellite-to-Street: Synthesizing Post-Disaster Views from Satellite Imagery via Generative Vision Models
          (<a href="https://2026.ieeeigarss.org/view_paper.php?PaperNum=2585" target="_blank" rel="noopener">Paper TH3.R6.4</a>)
        </li>
      </ul>
    </li>

    <li><strong>AAG Annual Meetings</strong>
      <ul>
        <li>
         <em>American Association of Geographers Annual Meeting</em>, March 17 – 21, 2026, San Francisco, California
         (<a href="https://aag-meetings.secure-platform.com/aag2026/gallery/rounds/149/details/90541" target="_blank" rel="noopener">Session 90541</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25333" target="_blank" rel="noopener">Session 25333</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/24774" target="_blank" rel="noopener">Session 24774</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25413" target="_blank" rel="noopener">Session 25413</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25683" target="_blank" rel="noopener">Session 25683</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25257" target="_blank" rel="noopener">Session 25257</a>,
          <a href="https://aag-meetings.secure-platform.com/aag2026/solicitations/93/sessiongallery/25338" target="_blank" rel="noopener">Session 25338</a>
         )
        </li>
        <li>
          <em>American Association of Geographers Annual Meeting</em>, March 24 – 28, 2025, Detroit, Michigan  
          (<a href="https://aag.secure-platform.com/aag2025/solicitations/82/sessiongallery/23561" target="_blank" rel="noopener">Session 23561</a>, 
           <a href="https://aag.secure-platform.com/aag2025/solicitations/82/sessiongallery/23718" target="_blank" rel="noopener">Session 23718</a>, 
           <a href="https://aag.secure-platform.com/aag2025/organizations/main/gallery/rounds/131/details/82104" target="_blank" rel="noopener">Session 82104</a>, 
           <a href="https://aag.secure-platform.com/aag2025/organizations/main/gallery/rounds/131/details/83465" target="_blank" rel="noopener">Session 83465</a>)
        </li>
        <li>
          <em>American Association of Geographers Annual Meeting</em>, April 16 – 20, 2024, Honolulu, Hawai'i  
          (<a href="https://aag.secure-platform.com/aag2024/solicitations/57/sessiongallery/7825" target="_blank" rel="noopener">Session 7825</a>)
        </li>
      </ul>
    </li>

    <li><strong>International Cartographic Conference (ICC)</strong>
      <ul>
        <li>
          <em>Student Paper Session</em>, Vancouver, Canada, August 18–22, 2025 —  
          <strong>Yifan Yang</strong>: Perceiving Multidimensional Disaster Damages from Street-View Images Using Visual-Language Models
        </li>
        <li>
          <em>GeoAnalytics for Sustainable and Livable Cities</em>, Vancouver, Canada, August 17, 2025 (ICC pre-conference symposium) —  
          <strong>Yifan Yang and Lei Zou</strong>: DisasterVLP: A Vision-Language Pretrained Framework for Multidimensional Disaster Damage Assessment Using Street-View Images  
          (<a href="https://asiacarto.org/ica2025/" target="_blank" rel="noopener">Symposium Page</a>)
        </li>
      </ul>
    </li>

    <li><strong>Spatial Data Science Symposium</strong>
      <ul>
        <li>
          <em>Thematic Session, Geoprivacy Challenges and Solutions in the Digital Society</em>  
          (<a href="https://sdss2024.spatial-data-science.net/ts/zhang.html" target="_blank" rel="noopener">Session Details</a>, 
           <a href="https://www.youtube.com/watch?v=6pOIemM9y6M&list=PLLPRl7FLqNFScodyhaN0j_y5JMx3H7TRg&index=5" target="_blank" rel="noopener">Watch Video</a>)
        </li>
      </ul>
    </li>

    <li><strong>Spatiotemporal Data Science Symposium</strong>
      <ul>
        <li>
          <em>Pre-symposium Training Workshop</em>, Washington DC, July 22, 2024 (online)  
          (<a href="https://sdl.gis.harvard.edu/event/symposium-spatiotemporal-data-science-geoai-social-sciences" target="_blank" rel="noopener">Event Page</a>)
        </li>
      </ul>
    </li>

    <li><strong>AGI Leap Summit</strong>
      <ul>
        <li>
          <em>Multimodality</em>, Paper Presentation, SuperAGI, February 29, 2024 (Virtual)  
          (<a href="https://superagi.com/agi-leap-summit/" target="_blank" rel="noopener">Summit Website</a>)
        </li>
      </ul>
    </li>

    <li><strong>Los Angeles Geospatial Summit</strong>
      <ul>
        <li>
          <em>2024 Los Angeles Geospatial Summit</em>, February 23, 2024, Los Angeles, CA  
          (<a href="https://www.esri.com/en-us/industries/blog/articles/showcasing-innovation-in-gis-education-through-student-projects-at-the-la-geospatial-summit/" 
              target="_blank" rel="noopener">Event Article</a>)
        </li>
      </ul>
    </li>
  </ul>
</section>

<section id="partial-honors">
  <h2>👑 Partial Honors</h2>
  <ul>
    <li>2026 IEEE GRSS Travel Grant — IGARSS 2026, Washington, D.C., $500.</li>
    <li>2026 AAG-GISSG Student Honors Paper Competition — 🥈 2nd Place, $350.</li>
    <li>2026 AAG-IGIF Scholarship Award, AAG International Geographic Information Funds (IGIF), $1,200.</li>
    <li>2025 Environment and Sustainability Graduate Fellow Award, Texas A&amp;M University, $2,500.</li>
    <li>2025 Texas A&M University GIS Day Student Paper Competition, Finalist.</li>
    <li>2025 Travel Grant, Summer School on Cyberinfrastructure and Disaster Resilience, TAMU (funded by NSF), $200.</li>
    <li>
  2025–2026 NSF I-GUIDE Spatial AI Challenge — 
  <a href="https://i-guide.io/spatial-ai-challenge-2025-26-accepted-projects/" target="_blank" rel="noopener">
    GeoAgent4Disaster (Accepted Project)
  </a>.
</li>
    <li>2025-2026 Texas A&M Institute of Data Science (TAMIDS) Student Ambassador Scholarship, Domain Data Science Track, TAMU, $2,000.</li>
    <li>2025 CaGIS International Travel Grant - 2025 ICC, Vancouver, Canada, $2,100.</li>
    <li>2025 International Cartographic Conference (ICC), Vancouver, Canada — 🏆 Best Student Paper Award</li>
    <li>2025 AAG-GISSG Student Honors Paper Competition — Honorable Mention, $200. (Top 5)</li>
    <li>2025 AAG Applied Geography Specialty Group — AGSG Annual Meeting Award, $196.</li>
<li>
  2024–2025 NSF I-GUIDE Spatial AI Challenge — 
  <a href="https://i-guide.io/spatial-ai-challenge-2024/accepted-abstracts/" target="_blank" rel="noopener">
    Perceiving Multidimensional Disaster Damages (Accepted Abstract)
  </a>.
</li>
    <li>2024–2025 Travel Grant, Department of Geography, Texas A&M University, total amount: $2,100.</li>
    <li>2024 Travel Grant(Visiting), Department of Geography, University of South Carolina, $400.</li>
    <li>2024 Lifetime Membership — Nu Theta Chapter, Gamma Theta Upsilon (International Geographic Honor Society)</li>
    <li>2024 Los Angeles Geospatial Summit — ArcGIS StoryMaps Competition: Most Suitably Applied Analysis Methodology</li>
    <li>DNIIT (Performance: Excellent)</li>
    <li>Second Runner-up — 9th China International "Internet+" College Students Innovation and Entrepreneurship Competition (Shanghai Division) — International Project Category ("Youguang Ushine – AI+ Multilingual Talent Service Platform")</li>
    <li>National First Prize — 2020 Computer Design Competition for Chinese College Students (Big Data Practice)</li>
    <li>Third Prize — 10th MathorCup College Mathematical Modeling Challenge (2020)</li>
    <li>Second Prize — 13th "Certification Cup" Mathematics China Mathematical Modeling Network Challenge (Inner Mongolia Region, 2020)</li>
    <li>Third Prize — China–US Youth Creators Competition (Haikou Region, 2020)</li>
    <li>Second Prize — 3rd China Youth Cup National University Student Mathematical Modeling Competition (2020)</li>
    <li>Third Prize — 6th National Mobile Internet Innovation Competition (South China Region)</li>
    <li>Third Prize — Innovation Group of the 2020 China University Computer Competition (Artificial Intelligence Track)</li>
    <li>Third Prize — Finalist, Hainan Selection Competition of the 4th China Creative Wings Innovation Competition (2020)</li>
    <li>Honorable Mention — 2020 Hainan Free Trade Port Entrepreneurship Competition</li>
    <li>Silver Award — Hainan Creative Group, 6th China International "Internet+" Student Innovation and Entrepreneurship Competition</li>
    <li>Bronze Prize — Hainan Region, Challenge Cup Student Entrepreneurship Plan Competition (2020)</li>
    <li>Second Prize — 14th iCAN International Innovation and Entrepreneurship Competition (South China Region)</li>
    <li>First-Class Comprehensive Scholarship — Hainan University, CNY ￥2500.</li>
    <li>Recognized as "College Student with the Most Innovative Spirit and Practical Ability" — Hainan University</li>
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
</section>


<section id="swingform-ai" style="margin-bottom:48px;">
  <h2>⛳ SwingForm AI — Open-Source Sports Posture Intelligence</h2>
  <p style="color:#555;margin-bottom:20px;line-height:1.7;">
    An open-source toolkit I built to turn real practice video into pose landmarks, swing phases, and biomechanical metrics.
    The pipeline runs MediaPipe pose estimation on raw footage and produces a 3D skeleton viewer, 
    per-frame kinematic metrics, and a skeleton+ball-trail overlay video — all from a single phone clip.
    <br><br>
    <a href="https://github.com/rayford295/swingform-ai" target="_blank" rel="noopener"
       style="display:inline-flex;align-items:center;gap:6px;background:#111;color:#fff;padding:8px 16px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      GitHub — rayford295/swingform-ai
    </a>
  </p>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start;margin-bottom:24px;">

    <!-- Real video demo -->
    <div>
      <div style="font-size:11px;letter-spacing:2px;color:#888;text-transform:uppercase;margin-bottom:8px;">📹 Real Video · Skeleton + Ball Trail Overlay</div>
      <video
        src="https://raw.githubusercontent.com/rayford295/swingform-ai/main/examples/yifan-golf-0520/golf_effects.mp4"
        controls autoplay muted loop playsinline
        style="width:100%;border-radius:10px;background:#000;box-shadow:0 8px 32px rgba(0,0,0,0.18);">
      </video>
      <p style="font-size:12px;color:#888;margin-top:8px;">
        Skeleton overlay with depth-aware coloring (cyan=spine, gold=arms, green=legs) and real ball-detection trail via Farneback optical flow + RANSAC parabolic fit.
      </p>
    </div>

    <!-- 3D skeleton viewer -->
    <div>
      <div style="font-size:11px;letter-spacing:2px;color:#888;text-transform:uppercase;margin-bottom:8px;">🦴 3D Pose Model · MediaPipe World Landmarks</div>
      <div id="sf-canvas-wrap" style="width:100%;aspect-ratio:9/16;background:#070810;border-radius:10px;overflow:hidden;position:relative;box-shadow:0 8px 32px rgba(0,0,0,0.22);">
        <canvas id="sf-canvas" style="width:100%;height:100%;display:block;"></canvas>
        <div style="position:absolute;bottom:10px;left:0;right:0;text-align:center;">
          <button onclick="sfTogglePlay()" id="sf-playbtn"
            style="background:rgba(0,229,255,0.15);border:1px solid #00e5ff;color:#00e5ff;font-size:11px;padding:5px 14px;border-radius:4px;cursor:pointer;letter-spacing:1px;font-family:monospace;">
            ▶ PLAY
          </button>
        </div>
        <div style="position:absolute;top:10px;left:12px;font-size:10px;color:rgba(0,229,255,0.5);letter-spacing:2px;font-family:monospace;">SWINGFORM AI · 3D</div>
      </div>
      <p style="font-size:12px;color:#888;margin-top:8px;">
        3D skeleton rendered from MediaPipe world landmarks (metric, hip-centered). One full S1 swing cycle. 
        <a href="https://github.com/rayford295/swingform-ai/blob/main/docs/viewer/pose3d.html" target="_blank">Full interactive viewer →</a>
      </p>
    </div>

  </div>

  <!-- Metric visuals -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:12px;">
    <div>
      <div style="font-size:11px;letter-spacing:2px;color:#888;text-transform:uppercase;margin-bottom:6px;">📊 Metric Timeline</div>
      <img src="https://raw.githubusercontent.com/rayford295/swingform-ai/main/docs/assets/yifan-golf-0520/metric_timeline.png"
           alt="Golf swing metric timeline" style="width:100%;border-radius:8px;border:1px solid #e5e7eb;">
    </div>
    <div>
      <div style="font-size:11px;letter-spacing:2px;color:#888;text-transform:uppercase;margin-bottom:6px;">🦴 Skeleton Keyposes</div>
      <img src="https://raw.githubusercontent.com/rayford295/swingform-ai/main/docs/assets/yifan-golf-0520/skeleton_keyposes.png"
           alt="Golf swing skeleton keyposes" style="width:100%;border-radius:8px;border:1px solid #e5e7eb;">
    </div>
  </div>

</section>

<script type="importmap">
{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js","three/addons/":"https://unpkg.com/three@0.160.0/examples/jsm/"}}
</script>
<script type="module">
import * as THREE from 'three';

const MINI_POSE = [{"fi": 80, "j": {"nose": [0.424, -0.446, -0.049], "left_shoulder": [0.176, -0.448, 0.069], "right_shoulder": [0.233, -0.366, -0.242], "left_elbow": [0.105, -0.221, 0.132], "right_elbow": [0.203, -0.12, -0.242], "left_wrist": [0.179, 0.041, 0.103], "right_wrist": [0.236, 0.117, -0.143], "left_hip": [0.006, -0.02, 0.095], "right_hip": [-0.006, 0.019, -0.094], "left_knee": [0.088, 0.292, 0.187], "right_knee": [0.035, 0.394, -0.05], "left_ankle": [0.062, 0.644, 0.332], "right_ankle": [-0.012, 0.775, 0.058]}}, {"fi": 82, "j": {"nose": [0.425, -0.445, -0.065], "left_shoulder": [0.181, -0.447, 0.067], "right_shoulder": [0.23, -0.366, -0.247], "left_elbow": [0.108, -0.223, 0.132], "right_elbow": [0.199, -0.12, -0.246], "left_wrist": [0.179, 0.04, 0.106], "right_wrist": [0.234, 0.117, -0.147], "left_hip": [0.007, -0.02, 0.095], "right_hip": [-0.008, 0.019, -0.094], "left_knee": [0.084, 0.297, 0.182], "right_knee": [0.036, 0.394, -0.049], "left_ankle": [0.061, 0.652, 0.323], "right_ankle": [-0.009, 0.775, 0.061]}}, {"fi": 84, "j": {"nose": [0.43, -0.446, -0.066], "left_shoulder": [0.183, -0.446, 0.062], "right_shoulder": [0.23, -0.361, -0.247], "left_elbow": [0.104, -0.223, 0.131], "right_elbow": [0.192, -0.115, -0.243], "left_wrist": [0.177, 0.028, 0.108], "right_wrist": [0.225, 0.118, -0.141], "left_hip": [0.008, -0.02, 0.095], "right_hip": [-0.008, 0.019, -0.094], "left_knee": [0.085, 0.29, 0.195], "right_knee": [0.036, 0.394, -0.047], "left_ankle": [0.061, 0.64, 0.355], "right_ankle": [-0.009, 0.777, 0.065]}}, {"fi": 86, "j": {"nose": [0.441, -0.444, -0.098], "left_shoulder": [0.203, -0.445, 0.057], "right_shoulder": [0.225, -0.349, -0.253], "left_elbow": [0.133, -0.27, 0.144], "right_elbow": [0.179, -0.099, -0.248], "left_wrist": [0.227, -0.098, 0.161], "right_wrist": [0.224, 0.119, -0.143], "left_hip": [0.013, -0.021, 0.094], "right_hip": [-0.013, 0.02, -0.093], "left_knee": [0.124, 0.287, 0.161], "right_knee": [0.035, 0.399, -0.042], "left_ankle": [0.059, 0.641, 0.297], "right_ankle": [-0.014, 0.782, 0.069]}}, {"fi": 88, "j": {"nose": [0.45, -0.421, -0.189], "left_shoulder": [0.235, -0.43, 0.017], "right_shoulder": [0.207, -0.318, -0.296], "left_elbow": [0.193, -0.285, 0.142], "right_elbow": [0.162, -0.055, -0.29], "left_wrist": [0.269, -0.158, 0.186], "right_wrist": [0.216, 0.147, -0.195], "left_hip": [0.025, -0.021, 0.093], "right_hip": [-0.025, 0.02, -0.093], "left_knee": [0.151, 0.261, 0.139], "right_knee": [0.028, 0.405, -0.055], "left_ankle": [0.057, 0.614, 0.25], "right_ankle": [-0.016, 0.796, 0.029]}}, {"fi": 90, "j": {"nose": [0.453, -0.416, -0.212], "left_shoulder": [0.252, -0.417, 0.014], "right_shoulder": [0.195, -0.315, -0.305], "left_elbow": [0.238, -0.293, 0.15], "right_elbow": [0.137, -0.047, -0.309], "left_wrist": [0.311, -0.236, 0.199], "right_wrist": [0.201, 0.151, -0.228], "left_hip": [0.03, -0.019, 0.093], "right_hip": [-0.031, 0.018, -0.093], "left_knee": [0.188, 0.244, 0.129], "right_knee": [0.044, 0.394, -0.074], "left_ankle": [0.07, 0.584, 0.232], "right_ankle": [-0.016, 0.781, 0.006]}}, {"fi": 92, "j": {"nose": [0.45, -0.39, -0.246], "left_shoulder": [0.27, -0.368, -0.021], "right_shoulder": [0.156, -0.316, -0.313], "left_elbow": [0.223, -0.207, 0.064], "right_elbow": [0.09, -0.057, -0.333], "left_wrist": [0.273, -0.063, 0.044], "right_wrist": [0.177, 0.16, -0.282], "left_hip": [0.048, -0.011, 0.093], "right_hip": [-0.049, 0.01, -0.092], "left_knee": [0.193, 0.244, 0.054], "right_knee": [0.048, 0.328, -0.205], "left_ankle": [0.076, 0.592, 0.129], "right_ankle": [-0.018, 0.735, -0.152]}}, {"fi": 94, "j": {"nose": [0.413, -0.378, -0.282], "left_shoulder": [0.309, -0.314, -0.053], "right_shoulder": [0.114, -0.33, -0.308], "left_elbow": [0.254, -0.112, -0.021], "right_elbow": [0.051, -0.091, -0.344], "left_wrist": [0.197, 0.084, -0.081], "right_wrist": [0.145, 0.142, -0.308], "left_hip": [0.069, 0.009, 0.081], "right_hip": [-0.069, -0.01, -0.08], "left_knee": [0.194, 0.235, -0.06], "right_knee": [0.053, 0.251, -0.321], "left_ankle": [0.09, 0.583, 0.017], "right_ankle": [-0.003, 0.693, -0.289]}}, {"fi": 96, "j": {"nose": [0.4, -0.384, -0.265], "left_shoulder": [0.312, -0.32, -0.044], "right_shoulder": [0.108, -0.364, -0.288], "left_elbow": [0.27, -0.108, -0.017], "right_elbow": [0.041, -0.13, -0.339], "left_wrist": [0.197, 0.088, -0.088], "right_wrist": [0.124, 0.099, -0.295], "left_hip": [0.073, 0.016, 0.072], "right_hip": [-0.073, -0.017, -0.072], "left_knee": [0.217, 0.233, -0.066], "right_knee": [0.052, 0.258, -0.282], "left_ankle": [0.103, 0.596, 0.006], "right_ankle": [-0.003, 0.697, -0.242]}}, {"fi": 98, "j": {"nose": [0.349, -0.398, -0.277], "left_shoulder": [0.282, -0.344, -0.054], "right_shoulder": [0.057, -0.395, -0.291], "left_elbow": [0.255, -0.13, -0.028], "right_elbow": [0.003, -0.143, -0.335], "left_wrist": [0.155, 0.075, -0.108], "right_wrist": [0.078, 0.067, -0.299], "left_hip": [0.076, 0.014, 0.071], "right_hip": [-0.076, -0.015, -0.071], "left_knee": [0.226, 0.236, -0.014], "right_knee": [0.008, 0.274, -0.242], "left_ankle": [0.1, 0.552, 0.108], "right_ankle": [-0.036, 0.706, -0.196]}}, {"fi": 100, "j": {"nose": [0.3, -0.448, -0.216], "left_shoulder": [0.241, -0.393, -0.024], "right_shoulder": [-0.008, -0.463, -0.212], "left_elbow": [0.168, -0.163, -0.023], "right_elbow": [-0.055, -0.218, -0.259], "left_wrist": [-0.007, -0.052, -0.133], "right_wrist": [0.01, -0.051, -0.279], "left_hip": [0.085, 0.013, 0.069], "right_hip": [-0.086, -0.014, -0.069], "left_knee": [0.227, 0.229, -0.013], "right_knee": [-0.015, 0.281, -0.236], "left_ankle": [0.107, 0.52, 0.134], "right_ankle": [-0.068, 0.676, -0.168]}}, {"fi": 102, "j": {"nose": [0.261, -0.502, -0.219], "left_shoulder": [0.196, -0.439, -0.048], "right_shoulder": [-0.058, -0.461, -0.198], "left_elbow": [0.064, -0.229, -0.076], "right_elbow": [-0.125, -0.24, -0.246], "left_wrist": [-0.111, -0.244, -0.145], "right_wrist": [-0.048, -0.219, -0.286], "left_hip": [0.092, 0.008, 0.069], "right_hip": [-0.093, -0.009, -0.068], "left_knee": [0.174, 0.317, 0.174], "right_knee": [-0.037, 0.301, -0.21], "left_ankle": [0.105, 0.547, 0.435], "right_ankle": [-0.068, 0.665, -0.095]}}, {"fi": 104, "j": {"nose": [0.213, -0.526, -0.208], "left_shoulder": [0.131, -0.474, -0.068], "right_shoulder": [-0.08, -0.456, -0.19], "left_elbow": [-0.094, -0.365, -0.047], "right_elbow": [-0.201, -0.319, -0.317], "left_wrist": [-0.282, -0.393, -0.019], "right_wrist": [-0.256, -0.403, -0.453], "left_hip": [0.091, -0.001, 0.063], "right_hip": [-0.091, 0.0, -0.063], "left_knee": [0.152, 0.333, 0.204], "right_knee": [-0.031, 0.335, -0.136], "left_ankle": [0.119, 0.561, 0.481], "right_ankle": [-0.066, 0.685, 0.004]}}, {"fi": 106, "j": {"nose": [0.19, -0.574, -0.203], "left_shoulder": [0.123, -0.48, -0.073], "right_shoulder": [-0.095, -0.481, -0.169], "left_elbow": [-0.094, -0.417, -0.057], "right_elbow": [-0.24, -0.416, -0.344], "left_wrist": [-0.299, -0.472, -0.038], "right_wrist": [-0.281, -0.478, -0.473], "left_hip": [0.09, -0.005, 0.056], "right_hip": [-0.09, 0.004, -0.056], "left_knee": [0.159, 0.329, 0.195], "right_knee": [-0.028, 0.332, -0.135], "left_ankle": [0.128, 0.566, 0.491], "right_ankle": [-0.052, 0.703, 0.01]}}, {"fi": 108, "j": {"nose": [0.152, -0.585, -0.183], "left_shoulder": [0.133, -0.479, -0.062], "right_shoulder": [-0.115, -0.5, -0.102], "left_elbow": [-0.075, -0.444, -0.111], "right_elbow": [-0.247, -0.455, -0.22], "left_wrist": [-0.305, -0.533, -0.178], "right_wrist": [-0.289, -0.541, -0.355], "left_hip": [0.093, -0.005, 0.041], "right_hip": [-0.094, 0.004, -0.04], "left_knee": [0.163, 0.325, 0.144], "right_knee": [-0.031, 0.337, -0.126], "left_ankle": [0.133, 0.59, 0.439], "right_ankle": [-0.042, 0.736, 0.0]}}, {"fi": 110, "j": {"nose": [0.12, -0.585, -0.188], "left_shoulder": [0.143, -0.474, -0.077], "right_shoulder": [-0.112, -0.493, -0.064], "left_elbow": [-0.05, -0.443, -0.177], "right_elbow": [-0.244, -0.447, -0.167], "left_wrist": [-0.296, -0.561, -0.264], "right_wrist": [-0.28, -0.535, -0.308], "left_hip": [0.096, -0.006, 0.021], "right_hip": [-0.096, 0.005, -0.021], "left_knee": [0.167, 0.326, 0.09], "right_knee": [-0.035, 0.345, -0.113], "left_ankle": [0.133, 0.599, 0.353], "right_ankle": [-0.035, 0.748, 0.012]}}, {"fi": 112, "j": {"nose": [0.149, -0.587, -0.131], "left_shoulder": [0.14, -0.488, -0.004], "right_shoulder": [-0.11, -0.502, -0.071], "left_elbow": [-0.031, -0.457, -0.106], "right_elbow": [-0.235, -0.468, -0.186], "left_wrist": [-0.254, -0.563, -0.213], "right_wrist": [-0.3, -0.574, -0.294], "left_hip": [0.095, -0.005, 0.028], "right_hip": [-0.096, 0.005, -0.027], "left_knee": [0.166, 0.324, 0.151], "right_knee": [-0.033, 0.346, -0.134], "left_ankle": [0.132, 0.604, 0.399], "right_ankle": [-0.037, 0.746, -0.029]}}, {"fi": 114, "j": {"nose": [0.182, -0.579, -0.133], "left_shoulder": [0.126, -0.489, -0.001], "right_shoulder": [-0.083, -0.501, -0.12], "left_elbow": [-0.096, -0.447, 0.024], "right_elbow": [-0.229, -0.462, -0.304], "left_wrist": [-0.274, -0.522, 0.051], "right_wrist": [-0.278, -0.531, -0.479], "left_hip": [0.09, -0.005, 0.051], "right_hip": [-0.091, 0.005, -0.051], "left_knee": [0.169, 0.323, 0.199], "right_knee": [-0.03, 0.346, -0.164], "left_ankle": [0.134, 0.601, 0.449], "right_ankle": [-0.04, 0.744, -0.069]}}, {"fi": 116, "j": {"nose": [0.238, -0.549, -0.096], "left_shoulder": [0.08, -0.507, 0.003], "right_shoulder": [0.018, -0.484, -0.175], "left_elbow": [-0.144, -0.46, 0.09], "right_elbow": [-0.112, -0.446, -0.325], "left_wrist": [-0.295, -0.509, 0.138], "right_wrist": [-0.114, -0.505, -0.442], "left_hip": [0.056, -0.009, 0.074], "right_hip": [-0.056, 0.008, -0.074], "left_knee": [0.162, 0.32, 0.201], "right_knee": [-0.011, 0.361, -0.127], "left_ankle": [0.137, 0.607, 0.436], "right_ankle": [-0.026, 0.746, -0.018]}}, {"fi": 118, "j": {"nose": [0.295, -0.492, -0.191], "left_shoulder": [0.177, -0.472, -0.026], "right_shoulder": [0.01, -0.48, -0.226], "left_elbow": [0.092, -0.276, 0.011], "right_elbow": [-0.124, -0.321, -0.289], "left_wrist": [-0.028, -0.235, -0.086], "right_wrist": [-0.027, -0.241, -0.264], "left_hip": [0.058, -0.007, 0.077], "right_hip": [-0.059, 0.007, -0.077], "left_knee": [0.19, 0.309, 0.193], "right_knee": [-0.01, 0.356, -0.126], "left_ankle": [0.14, 0.591, 0.402], "right_ankle": [-0.048, 0.715, -0.027]}}, {"fi": 120, "j": {"nose": [0.313, -0.426, -0.238], "left_shoulder": [0.186, -0.426, -0.036], "right_shoulder": [0.054, -0.381, -0.309], "left_elbow": [0.194, -0.202, 0.041], "right_elbow": [0.023, -0.134, -0.333], "left_wrist": [0.255, -0.009, -0.041], "right_wrist": [0.159, 0.06, -0.279], "left_hip": [0.052, -0.01, 0.089], "right_hip": [-0.053, 0.009, -0.088], "left_knee": [0.257, 0.221, 0.118], "right_knee": [0.167, 0.347, -0.153], "left_ankle": [0.113, 0.545, 0.215], "right_ankle": [0.027, 0.707, -0.084]}}, {"fi": 122, "j": {"nose": [0.26, -0.518, 0.079], "left_shoulder": [-0.048, -0.5, 0.051], "right_shoulder": [0.158, -0.404, -0.217], "left_elbow": [-0.177, -0.258, 0.129], "right_elbow": [0.19, -0.197, -0.16], "left_wrist": [0.006, -0.121, 0.207], "right_wrist": [0.253, -0.056, 0.05], "left_hip": [-0.023, -0.016, 0.093], "right_hip": [0.023, 0.015, -0.093], "left_knee": [0.158, 0.225, 0.215], "right_knee": [0.133, 0.377, 0.037], "left_ankle": [0.155, 0.501, 0.329], "right_ankle": [-0.044, 0.701, 0.121]}}, {"fi": 124, "j": {"nose": [0.165, -0.566, 0.066], "left_shoulder": [-0.108, -0.523, 0.048], "right_shoulder": [0.13, -0.416, -0.159], "left_elbow": [-0.193, -0.473, 0.216], "right_elbow": [0.229, -0.342, -0.087], "left_wrist": [-0.101, -0.517, 0.376], "right_wrist": [0.222, -0.444, 0.109], "left_hip": [-0.028, -0.017, 0.091], "right_hip": [0.027, 0.016, -0.09], "left_knee": [0.126, 0.243, 0.258], "right_knee": [0.103, 0.373, 0.006], "left_ankle": [0.149, 0.518, 0.374], "right_ankle": [-0.067, 0.702, 0.076]}}, {"fi": 126, "j": {"nose": [0.067, -0.66, 0.053], "left_shoulder": [-0.143, -0.52, 0.012], "right_shoulder": [0.068, -0.451, -0.124], "left_elbow": [-0.239, -0.416, 0.164], "right_elbow": [0.013, -0.379, -0.121], "left_wrist": [-0.15, -0.526, 0.252], "right_wrist": [-0.067, -0.528, -0.012], "left_hip": [-0.024, -0.019, 0.064], "right_hip": [0.023, 0.018, -0.063], "left_knee": [0.059, 0.204, 0.268], "right_knee": [0.056, 0.383, 0.005], "left_ankle": [0.081, 0.431, 0.447], "right_ankle": [-0.06, 0.762, 0.083]}}, {"fi": 128, "j": {"nose": [0.022, -0.653, 0.04], "left_shoulder": [-0.137, -0.493, -0.029], "right_shoulder": [0.04, -0.485, -0.099], "left_elbow": [-0.238, -0.457, 0.142], "right_elbow": [-0.021, -0.505, -0.136], "left_wrist": [-0.211, -0.604, 0.27], "right_wrist": [-0.124, -0.644, -0.213], "left_hip": [-0.024, -0.011, 0.018], "right_hip": [0.023, 0.01, -0.017], "left_knee": [-0.017, 0.304, 0.197], "right_knee": [0.05, 0.369, 0.153], "left_ankle": [0.004, 0.618, 0.316], "right_ankle": [-0.012, 0.725, 0.276]}}, {"fi": 130, "j": {"nose": [-0.003, -0.671, 0.096], "left_shoulder": [-0.131, -0.494, -0.022], "right_shoulder": [0.041, -0.491, -0.036], "left_elbow": [-0.262, -0.442, 0.108], "right_elbow": [-0.057, -0.475, -0.176], "left_wrist": [-0.269, -0.549, 0.246], "right_wrist": [-0.161, -0.58, -0.348], "left_hip": [-0.03, -0.011, 0.003], "right_hip": [0.029, 0.011, -0.002], "left_knee": [-0.02, 0.334, 0.099], "right_knee": [0.064, 0.375, 0.102], "left_ankle": [-0.001, 0.668, 0.163], "right_ankle": [0.051, 0.742, 0.178]}}, {"fi": 132, "j": {"nose": [-0.049, -0.653, 0.058], "left_shoulder": [-0.141, -0.493, -0.063], "right_shoulder": [0.002, -0.494, -0.028], "left_elbow": [-0.332, -0.436, -0.033], "right_elbow": [-0.142, -0.463, -0.11], "left_wrist": [-0.351, -0.545, 0.004], "right_wrist": [-0.235, -0.581, -0.225], "left_hip": [-0.027, -0.011, -0.007], "right_hip": [0.026, 0.01, 0.008], "left_knee": [-0.015, 0.301, 0.071], "right_knee": [0.063, 0.377, 0.095], "left_ankle": [-0.008, 0.652, 0.173], "right_ankle": [0.045, 0.756, 0.194]}}, {"fi": 134, "j": {"nose": [-0.022, -0.596, -0.099], "left_shoulder": [-0.097, -0.494, -0.065], "right_shoulder": [-0.085, -0.478, -0.135], "left_elbow": [-0.289, -0.454, -0.032], "right_elbow": [-0.257, -0.453, -0.266], "left_wrist": [-0.306, -0.551, -0.036], "right_wrist": [-0.269, -0.563, -0.339], "left_hip": [0.011, -0.013, 0.031], "right_hip": [-0.012, 0.012, -0.03], "left_knee": [0.04, 0.253, 0.151], "right_knee": [0.052, 0.372, -0.008], "left_ankle": [0.001, 0.544, 0.409], "right_ankle": [0.041, 0.74, 0.116]}}, {"fi": 136, "j": {"nose": [-0.009, -0.638, -0.035], "left_shoulder": [-0.138, -0.497, -0.047], "right_shoulder": [-0.045, -0.475, -0.132], "left_elbow": [-0.348, -0.457, 0.009], "right_elbow": [-0.167, -0.429, -0.243], "left_wrist": [-0.302, -0.594, 0.028], "right_wrist": [-0.245, -0.558, -0.296], "left_hip": [0.004, -0.012, 0.042], "right_hip": [-0.005, 0.011, -0.041], "left_knee": [0.042, 0.291, 0.158], "right_knee": [0.055, 0.373, 0.001], "left_ankle": [0.005, 0.621, 0.357], "right_ankle": [0.04, 0.75, 0.111]}}, {"fi": 138, "j": {"nose": [-0.069, -0.643, 0.057], "left_shoulder": [-0.181, -0.49, -0.063], "right_shoulder": [0.007, -0.472, -0.022], "left_elbow": [-0.403, -0.446, 0.001], "right_elbow": [-0.097, -0.42, -0.051], "left_wrist": [-0.302, -0.569, 0.084], "right_wrist": [-0.227, -0.554, -0.052], "left_hip": [-0.023, -0.012, -0.004], "right_hip": [0.022, 0.011, 0.004], "left_knee": [0.005, 0.33, 0.1], "right_knee": [0.049, 0.378, 0.093], "left_ankle": [0.015, 0.662, 0.169], "right_ankle": [0.04, 0.752, 0.167]}}, {"fi": 140, "j": {"nose": [-0.071, -0.664, -0.008], "left_shoulder": [-0.112, -0.487, -0.131], "right_shoulder": [0.016, -0.512, -0.008], "left_elbow": [-0.336, -0.444, -0.082], "right_elbow": [-0.134, -0.476, -0.006], "left_wrist": [-0.276, -0.583, 0.001], "right_wrist": [-0.207, -0.603, -0.084], "left_hip": [-0.019, -0.007, -0.047], "right_hip": [0.018, 0.007, 0.047], "left_knee": [-0.017, 0.346, -0.013], "right_knee": [0.035, 0.36, 0.175], "left_ankle": [0.033, 0.71, 0.043], "right_ankle": [0.055, 0.703, 0.323]}}, {"fi": 142, "j": {"nose": [-0.055, -0.661, 0.025], "left_shoulder": [-0.093, -0.487, -0.105], "right_shoulder": [0.017, -0.513, -0.013], "left_elbow": [-0.297, -0.424, -0.045], "right_elbow": [-0.126, -0.473, -0.055], "left_wrist": [-0.275, -0.58, 0.065], "right_wrist": [-0.209, -0.598, -0.118], "left_hip": [-0.01, -0.007, -0.033], "right_hip": [0.009, 0.007, 0.033], "left_knee": [-0.005, 0.323, 0.006], "right_knee": [0.04, 0.367, 0.125], "left_ankle": [0.035, 0.653, 0.108], "right_ankle": [0.055, 0.734, 0.209]}}, {"fi": 144, "j": {"nose": [-0.03, -0.661, 0.099], "left_shoulder": [-0.128, -0.489, -0.041], "right_shoulder": [0.054, -0.495, -0.007], "left_elbow": [-0.307, -0.42, 0.07], "right_elbow": [-0.077, -0.441, -0.036], "left_wrist": [-0.279, -0.573, 0.2], "right_wrist": [-0.178, -0.585, -0.053], "left_hip": [-0.027, -0.01, -0.022], "right_hip": [0.027, 0.009, 0.023], "left_knee": [-0.018, 0.296, 0.048], "right_knee": [0.062, 0.378, 0.083], "left_ankle": [0.012, 0.616, 0.145], "right_ankle": [0.057, 0.766, 0.137]}}, {"fi": 146, "j": {"nose": [-0.019, -0.664, 0.082], "left_shoulder": [-0.137, -0.479, -0.045], "right_shoulder": [0.057, -0.487, -0.006], "left_elbow": [-0.321, -0.376, 0.071], "right_elbow": [-0.056, -0.433, -0.048], "left_wrist": [-0.274, -0.516, 0.219], "right_wrist": [-0.142, -0.593, -0.115], "left_hip": [-0.034, -0.011, -0.02], "right_hip": [0.033, 0.01, 0.02], "left_knee": [-0.014, 0.329, 0.058], "right_knee": [0.062, 0.382, 0.105], "left_ankle": [0.039, 0.669, 0.141], "right_ankle": [0.062, 0.766, 0.156]}}, {"fi": 148, "j": {"nose": [0.011, -0.664, 0.074], "left_shoulder": [-0.135, -0.479, -0.028], "right_shoulder": [0.058, -0.483, -0.017], "left_elbow": [-0.309, -0.377, 0.108], "right_elbow": [-0.055, -0.423, -0.068], "left_wrist": [-0.274, -0.52, 0.249], "right_wrist": [-0.138, -0.588, -0.132], "left_hip": [-0.034, -0.011, -0.008], "right_hip": [0.033, 0.01, 0.008], "left_knee": [-0.008, 0.332, 0.086], "right_knee": [0.074, 0.382, 0.103], "left_ankle": [0.042, 0.676, 0.156], "right_ankle": [0.07, 0.761, 0.161]}}, {"fi": 150, "j": {"nose": [0.016, -0.669, 0.077], "left_shoulder": [-0.133, -0.48, -0.025], "right_shoulder": [0.057, -0.483, -0.025], "left_elbow": [-0.299, -0.381, 0.101], "right_elbow": [-0.061, -0.429, -0.12], "left_wrist": [-0.27, -0.518, 0.231], "right_wrist": [-0.141, -0.597, -0.217], "left_hip": [-0.035, -0.011, -0.007], "right_hip": [0.034, 0.011, 0.007], "left_knee": [-0.007, 0.344, 0.091], "right_knee": [0.077, 0.383, 0.105], "left_ankle": [0.041, 0.693, 0.148], "right_ankle": [0.074, 0.758, 0.173]}}, {"fi": 152, "j": {"nose": [0.011, -0.669, 0.089], "left_shoulder": [-0.121, -0.482, -0.02], "right_shoulder": [0.054, -0.483, -0.02], "left_elbow": [-0.254, -0.381, 0.092], "right_elbow": [-0.067, -0.43, -0.153], "left_wrist": [-0.239, -0.503, 0.216], "right_wrist": [-0.153, -0.592, -0.291], "left_hip": [-0.034, -0.012, -0.007], "right_hip": [0.033, 0.012, 0.007], "left_knee": [-0.006, 0.346, 0.084], "right_knee": [0.076, 0.383, 0.104], "left_ankle": [0.045, 0.696, 0.133], "right_ankle": [0.08, 0.755, 0.17]}}, {"fi": 154, "j": {"nose": [0.009, -0.669, 0.085], "left_shoulder": [-0.126, -0.482, -0.011], "right_shoulder": [0.047, -0.486, -0.03], "left_elbow": [-0.259, -0.371, 0.113], "right_elbow": [-0.074, -0.433, -0.158], "left_wrist": [-0.248, -0.49, 0.244], "right_wrist": [-0.166, -0.585, -0.275], "left_hip": [-0.034, -0.012, -0.002], "right_hip": [0.033, 0.011, 0.003], "left_knee": [-0.003, 0.346, 0.096], "right_knee": [0.077, 0.383, 0.104], "left_ankle": [0.042, 0.694, 0.154], "right_ankle": [0.078, 0.75, 0.173]}}, {"fi": 156, "j": {"nose": [-0.006, -0.67, 0.083], "left_shoulder": [-0.139, -0.478, -0.027], "right_shoulder": [0.054, -0.485, -0.015], "left_elbow": [-0.299, -0.363, 0.093], "right_elbow": [-0.067, -0.419, -0.002], "left_wrist": [-0.249, -0.49, 0.229], "right_wrist": [-0.175, -0.588, 0.022], "left_hip": [-0.036, -0.011, -0.005], "right_hip": [0.034, 0.011, 0.006], "left_knee": [-0.0, 0.327, 0.108], "right_knee": [0.066, 0.376, 0.119], "left_ankle": [0.041, 0.651, 0.203], "right_ankle": [0.057, 0.74, 0.199]}}, {"fi": 158, "j": {"nose": [-0.012, -0.673, 0.082], "left_shoulder": [-0.14, -0.472, -0.027], "right_shoulder": [0.048, -0.485, -0.014], "left_elbow": [-0.28, -0.342, 0.085], "right_elbow": [-0.063, -0.414, 0.008], "left_wrist": [-0.203, -0.464, 0.218], "right_wrist": [-0.173, -0.567, 0.064], "left_hip": [-0.035, -0.01, -0.005], "right_hip": [0.034, 0.01, 0.005], "left_knee": [0.0, 0.318, 0.101], "right_knee": [0.06, 0.372, 0.113], "left_ankle": [0.043, 0.651, 0.174], "right_ankle": [0.053, 0.738, 0.184]}}, {"fi": 160, "j": {"nose": [-0.014, -0.678, 0.093], "left_shoulder": [-0.164, -0.472, -0.044], "right_shoulder": [0.065, -0.484, -0.015], "left_elbow": [-0.288, -0.324, 0.06], "right_elbow": [0.01, -0.362, 0.067], "left_wrist": [-0.19, -0.434, 0.209], "right_wrist": [-0.101, -0.483, 0.212], "left_hip": [-0.043, -0.008, -0.005], "right_hip": [0.042, 0.007, 0.005], "left_knee": [-0.008, 0.32, 0.1], "right_knee": [0.058, 0.371, 0.114], "left_ankle": [0.048, 0.653, 0.15], "right_ankle": [0.038, 0.736, 0.162]}}, {"fi": 162, "j": {"nose": [-0.011, -0.68, 0.099], "left_shoulder": [-0.164, -0.473, -0.057], "right_shoulder": [0.078, -0.478, -0.018], "left_elbow": [-0.271, -0.325, 0.047], "right_elbow": [0.043, -0.339, 0.043], "left_wrist": [-0.157, -0.421, 0.188], "right_wrist": [-0.057, -0.428, 0.157], "left_hip": [-0.046, -0.008, -0.005], "right_hip": [0.045, 0.007, 0.006], "left_knee": [-0.012, 0.318, 0.112], "right_knee": [0.059, 0.372, 0.133], "left_ankle": [0.053, 0.65, 0.171], "right_ankle": [0.036, 0.735, 0.194]}}, {"fi": 164, "j": {"nose": [-0.0, -0.679, 0.102], "left_shoulder": [-0.161, -0.469, -0.06], "right_shoulder": [0.094, -0.471, -0.031], "left_elbow": [-0.252, -0.271, 0.041], "right_elbow": [0.074, -0.307, 0.024], "left_wrist": [-0.135, -0.311, 0.174], "right_wrist": [-0.026, -0.36, 0.135], "left_hip": [-0.05, -0.008, -0.001], "right_hip": [0.049, 0.007, 0.002], "left_knee": [-0.015, 0.314, 0.126], "right_knee": [0.06, 0.383, 0.139], "left_ankle": [0.056, 0.64, 0.188], "right_ankle": [0.024, 0.741, 0.189]}}, {"fi": 166, "j": {"nose": [0.011, -0.68, 0.102], "left_shoulder": [-0.16, -0.465, -0.06], "right_shoulder": [0.11, -0.469, -0.038], "left_elbow": [-0.216, -0.246, 0.038], "right_elbow": [0.138, -0.303, 0.04], "left_wrist": [-0.077, -0.251, 0.175], "right_wrist": [0.047, -0.358, 0.197], "left_hip": [-0.055, -0.008, 0.0], "right_hip": [0.055, 0.007, 0.0], "left_knee": [-0.002, 0.286, 0.14], "right_knee": [0.062, 0.389, 0.148], "left_ankle": [0.081, 0.599, 0.212], "right_ankle": [0.009, 0.749, 0.194]}}, {"fi": 168, "j": {"nose": [0.015, -0.685, 0.106], "left_shoulder": [-0.16, -0.465, -0.071], "right_shoulder": [0.128, -0.469, -0.036], "left_elbow": [-0.213, -0.251, 0.03], "right_elbow": [0.193, -0.302, 0.071], "left_wrist": [-0.066, -0.247, 0.202], "right_wrist": [0.099, -0.358, 0.267], "left_hip": [-0.061, -0.008, -0.003], "right_hip": [0.061, 0.007, 0.004], "left_knee": [-0.004, 0.298, 0.136], "right_knee": [0.063, 0.392, 0.156], "left_ankle": [0.081, 0.609, 0.207], "right_ankle": [0.014, 0.757, 0.195]}}, {"fi": 170, "j": {"nose": [0.035, -0.684, 0.125], "left_shoulder": [-0.158, -0.465, -0.053], "right_shoulder": [0.137, -0.468, -0.033], "left_elbow": [-0.217, -0.234, 0.045], "right_elbow": [0.221, -0.302, 0.099], "left_wrist": [-0.073, -0.204, 0.217], "right_wrist": [0.142, -0.37, 0.333], "left_hip": [-0.062, -0.008, 0.003], "right_hip": [0.062, 0.007, -0.002], "left_knee": [0.01, 0.315, 0.145], "right_knee": [0.064, 0.398, 0.132], "left_ankle": [0.108, 0.617, 0.207], "right_ankle": [0.014, 0.763, 0.13]}}, {"fi": 172, "j": {"nose": [0.045, -0.682, 0.13], "left_shoulder": [-0.158, -0.465, -0.038], "right_shoulder": [0.139, -0.468, -0.038], "left_elbow": [-0.22, -0.243, 0.063], "right_elbow": [0.223, -0.298, 0.09], "left_wrist": [-0.078, -0.23, 0.239], "right_wrist": [0.147, -0.369, 0.325], "left_hip": [-0.061, -0.007, 0.017], "right_hip": [0.061, 0.006, -0.016], "left_knee": [0.026, 0.318, 0.175], "right_knee": [0.064, 0.398, 0.109], "left_ankle": [0.12, 0.618, 0.24], "right_ankle": [-0.0, 0.762, 0.105]}}, {"fi": 174, "j": {"nose": [0.069, -0.68, 0.139], "left_shoulder": [-0.157, -0.468, -0.006], "right_shoulder": [0.144, -0.467, -0.062], "left_elbow": [-0.22, -0.253, 0.115], "right_elbow": [0.222, -0.292, 0.048], "left_wrist": [-0.081, -0.249, 0.303], "right_wrist": [0.156, -0.359, 0.297], "left_hip": [-0.061, -0.005, 0.036], "right_hip": [0.061, 0.004, -0.035], "left_knee": [0.026, 0.326, 0.188], "right_knee": [0.067, 0.393, 0.081], "left_ankle": [0.12, 0.635, 0.247], "right_ankle": [-0.002, 0.755, 0.073]}}, {"fi": 176, "j": {"nose": [0.073, -0.681, 0.142], "left_shoulder": [-0.156, -0.47, 0.037], "right_shoulder": [0.14, -0.47, -0.089], "left_elbow": [-0.194, -0.252, 0.15], "right_elbow": [0.212, -0.284, 0.001], "left_wrist": [-0.065, -0.24, 0.301], "right_wrist": [0.146, -0.313, 0.216], "left_hip": [-0.061, -0.001, 0.066], "right_hip": [0.061, -0.0, -0.065], "left_knee": [0.045, 0.325, 0.211], "right_knee": [0.097, 0.388, 0.017], "left_ankle": [0.104, 0.627, 0.279], "right_ankle": [-0.001, 0.734, 0.003]}}, {"fi": 178, "j": {"nose": [0.088, -0.68, 0.149], "left_shoulder": [-0.139, -0.471, 0.079], "right_shoulder": [0.139, -0.471, -0.09], "left_elbow": [-0.144, -0.262, 0.209], "right_elbow": [0.215, -0.286, -0.018], "left_wrist": [-0.017, -0.258, 0.364], "right_wrist": [0.165, -0.319, 0.175], "left_hip": [-0.059, 0.002, 0.075], "right_hip": [0.059, -0.003, -0.074], "left_knee": [0.057, 0.325, 0.203], "right_knee": [0.122, 0.382, 0.001], "left_ankle": [0.088, 0.633, 0.242], "right_ankle": [-0.0, 0.724, -0.019]}}, {"fi": 180, "j": {"nose": [0.114, -0.668, 0.156], "left_shoulder": [-0.117, -0.475, 0.105], "right_shoulder": [0.138, -0.47, -0.098], "left_elbow": [-0.12, -0.279, 0.236], "right_elbow": [0.213, -0.277, -0.042], "left_wrist": [0.019, -0.261, 0.389], "right_wrist": [0.185, -0.266, 0.135], "left_hip": [-0.056, 0.002, 0.084], "right_hip": [0.056, -0.003, -0.083], "left_knee": [0.045, 0.329, 0.2], "right_knee": [0.143, 0.378, -0.028], "left_ankle": [0.029, 0.639, 0.242], "right_ankle": [0.05, 0.72, -0.059]}}, {"fi": 182, "j": {"nose": [0.152, -0.656, 0.157], "left_shoulder": [-0.079, -0.475, 0.179], "right_shoulder": [0.12, -0.47, -0.095], "left_elbow": [-0.085, -0.26, 0.284], "right_elbow": [0.164, -0.276, -0.113], "left_wrist": [0.036, -0.13, 0.337], "right_wrist": [0.195, -0.187, -0.046], "left_hip": [-0.044, 0.003, 0.09], "right_hip": [0.043, -0.003, -0.089], "left_knee": [0.042, 0.352, 0.159], "right_knee": [0.138, 0.364, -0.095], "left_ankle": [0.032, 0.699, 0.197], "right_ankle": [0.074, 0.738, -0.091]}}, {"fi": 184, "j": {"nose": [0.165, -0.621, 0.131], "left_shoulder": [-0.078, -0.476, 0.17], "right_shoulder": [0.091, -0.469, -0.113], "left_elbow": [-0.103, -0.258, 0.249], "right_elbow": [0.116, -0.247, -0.149], "left_wrist": [0.037, -0.096, 0.277], "right_wrist": [0.198, -0.103, -0.08], "left_hip": [-0.04, 0.003, 0.094], "right_hip": [0.039, -0.004, -0.093], "left_knee": [0.044, 0.355, 0.149], "right_knee": [0.178, 0.366, -0.08], "left_ankle": [0.003, 0.714, 0.202], "right_ankle": [0.124, 0.75, -0.054]}}, {"fi": 186, "j": {"nose": [0.189, -0.613, 0.098], "left_shoulder": [-0.051, -0.477, 0.173], "right_shoulder": [0.076, -0.468, -0.136], "left_elbow": [-0.066, -0.27, 0.256], "right_elbow": [0.086, -0.237, -0.185], "left_wrist": [0.093, -0.123, 0.27], "right_wrist": [0.185, -0.069, -0.124], "left_hip": [-0.029, 0.003, 0.097], "right_hip": [0.028, -0.004, -0.096], "left_knee": [0.027, 0.358, 0.141], "right_knee": [0.163, 0.375, -0.085], "left_ankle": [-0.027, 0.717, 0.205], "right_ankle": [0.145, 0.765, -0.055]}}, {"fi": 188, "j": {"nose": [0.206, -0.619, 0.057], "left_shoulder": [-0.043, -0.488, 0.156], "right_shoulder": [0.075, -0.468, -0.172], "left_elbow": [-0.081, -0.291, 0.244], "right_elbow": [0.057, -0.244, -0.225], "left_wrist": [0.066, -0.13, 0.231], "right_wrist": [0.133, -0.073, -0.172], "left_hip": [-0.025, 0.003, 0.098], "right_hip": [0.024, -0.004, -0.097], "left_knee": [-0.01, 0.363, 0.14], "right_knee": [0.124, 0.399, -0.08], "left_ankle": [-0.034, 0.736, 0.208], "right_ankle": [0.126, 0.796, -0.048]}}, {"fi": 190, "j": {"nose": [0.211, -0.629, 0.027], "left_shoulder": [-0.042, -0.496, 0.145], "right_shoulder": [0.07, -0.471, -0.196], "left_elbow": [-0.08, -0.294, 0.216], "right_elbow": [0.039, -0.248, -0.246], "left_wrist": [0.058, -0.118, 0.195], "right_wrist": [0.108, -0.068, -0.191], "left_hip": [-0.021, 0.003, 0.098], "right_hip": [0.02, -0.003, -0.098], "left_knee": [-0.017, 0.364, 0.149], "right_knee": [0.084, 0.409, -0.074], "left_ankle": [-0.046, 0.729, 0.242], "right_ankle": [0.102, 0.797, -0.021]}}, {"fi": 192, "j": {"nose": [0.224, -0.634, 0.017], "left_shoulder": [-0.026, -0.497, 0.131], "right_shoulder": [0.071, -0.474, -0.204], "left_elbow": [-0.075, -0.294, 0.198], "right_elbow": [0.048, -0.252, -0.253], "left_wrist": [0.058, -0.11, 0.182], "right_wrist": [0.11, -0.059, -0.201], "left_hip": [-0.016, 0.003, 0.098], "right_hip": [0.015, -0.003, -0.097], "left_knee": [-0.005, 0.363, 0.149], "right_knee": [0.068, 0.41, -0.071], "left_ankle": [-0.038, 0.733, 0.243], "right_ankle": [0.082, 0.799, -0.007]}}, {"fi": 194, "j": {"nose": [0.22, -0.633, 0.001], "left_shoulder": [-0.022, -0.498, 0.114], "right_shoulder": [0.069, -0.473, -0.217], "left_elbow": [-0.042, -0.296, 0.181], "right_elbow": [0.051, -0.244, -0.268], "left_wrist": [0.119, -0.112, 0.154], "right_wrist": [0.117, -0.042, -0.22], "left_hip": [-0.015, 0.002, 0.098], "right_hip": [0.014, -0.002, -0.098], "left_knee": [-0.007, 0.362, 0.177], "right_knee": [0.065, 0.412, -0.07], "left_ankle": [-0.048, 0.729, 0.284], "right_ankle": [0.07, 0.8, 0.004]}}, {"fi": 196, "j": {"nose": [0.225, -0.636, -0.05], "left_shoulder": [0.005, -0.499, 0.085], "right_shoulder": [0.051, -0.473, -0.255], "left_elbow": [-0.014, -0.29, 0.153], "right_elbow": [0.023, -0.245, -0.3], "left_wrist": [0.146, -0.096, 0.122], "right_wrist": [0.103, -0.031, -0.252], "left_hip": [-0.001, 0.001, 0.098], "right_hip": [-0.0, -0.002, -0.098], "left_knee": [0.009, 0.36, 0.211], "right_knee": [0.03, 0.411, -0.056], "left_ankle": [-0.036, 0.722, 0.329], "right_ankle": [0.022, 0.799, 0.043]}}, {"fi": 198, "j": {"nose": [0.226, -0.635, -0.088], "left_shoulder": [0.041, -0.495, 0.068], "right_shoulder": [0.028, -0.47, -0.271], "left_elbow": [0.015, -0.269, 0.127], "right_elbow": [-0.017, -0.235, -0.32], "left_wrist": [0.16, -0.069, 0.073], "right_wrist": [0.062, -0.016, -0.289], "left_hip": [0.02, 0.001, 0.098], "right_hip": [-0.02, -0.001, -0.098], "left_knee": [0.078, 0.345, 0.222], "right_knee": [0.023, 0.408, -0.036], "left_ankle": [0.015, 0.679, 0.364], "right_ankle": [0.001, 0.783, 0.074]}}, {"fi": 200, "j": {"nose": [0.229, -0.62, -0.115], "left_shoulder": [0.056, -0.491, 0.057], "right_shoulder": [0.017, -0.461, -0.278], "left_elbow": [0.033, -0.263, 0.114], "right_elbow": [-0.027, -0.209, -0.327], "left_wrist": [0.163, -0.069, 0.05], "right_wrist": [0.049, 0.009, -0.297], "left_hip": [0.03, -0.001, 0.098], "right_hip": [-0.03, 0.0, -0.098], "left_knee": [0.135, 0.313, 0.211], "right_knee": [0.029, 0.406, -0.037], "left_ankle": [0.036, 0.641, 0.344], "right_ankle": [-0.006, 0.765, 0.09]}}, {"fi": 202, "j": {"nose": [0.233, -0.611, -0.112], "left_shoulder": [0.051, -0.489, 0.056], "right_shoulder": [0.018, -0.459, -0.28], "left_elbow": [0.033, -0.262, 0.113], "right_elbow": [-0.019, -0.207, -0.327], "left_wrist": [0.16, -0.058, 0.057], "right_wrist": [0.053, 0.024, -0.291], "left_hip": [0.028, -0.001, 0.098], "right_hip": [-0.029, 0.0, -0.098], "left_knee": [0.125, 0.317, 0.173], "right_knee": [0.038, 0.391, -0.057], "left_ankle": [0.032, 0.668, 0.268], "right_ankle": [0.003, 0.754, 0.079]}}];

const EDGES = [
  ["left_shoulder","right_shoulder"],
  ["left_shoulder","left_elbow"],["left_elbow","left_wrist"],
  ["right_shoulder","right_elbow"],["right_elbow","right_wrist"],
  ["left_shoulder","left_hip"],["right_shoulder","right_hip"],
  ["left_hip","right_hip"],
  ["left_hip","left_knee"],["left_knee","left_ankle"],
  ["right_hip","right_knee"],["right_knee","right_ankle"],
];
const ECOL = {
  "left_shoulder-right_shoulder":0xe5ff00,"left_shoulder-left_hip":0xe5ff00,
  "right_shoulder-right_hip":0xe5ff00,"left_hip-right_hip":0xe5ff00,
  "left_shoulder-left_elbow":0xffc940,"left_elbow-left_wrist":0xffc940,
  "right_shoulder-right_elbow":0xffc940,"right_elbow-right_wrist":0xffc940,
  "left_hip-left_knee":0x39ff85,"left_knee-left_ankle":0x39ff85,
  "right_hip-right_knee":0x39ff85,"right_knee-right_ankle":0x39ff85,
};

const wrap = document.getElementById("sf-canvas-wrap");
const canvas = document.getElementById("sf-canvas");
const W = wrap.clientWidth, H = wrap.clientHeight;

const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.setSize(W, H, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, W/H, 0.01, 20);
camera.position.set(0.4, 0.6, 2.8);
camera.lookAt(0, 0, 0);

scene.add(new THREE.AmbientLight(0x1a2040, 4));
const dl = new THREE.DirectionalLight(0x4488ff, 3); dl.position.set(2,4,2); scene.add(dl);
const rl = new THREE.DirectionalLight(0x00e5ff, 1.5); rl.position.set(-3,1,-2); scene.add(rl);

const grid = new THREE.GridHelper(3, 15, 0x111830, 0x0a0c18);
grid.position.y = -1.0; scene.add(grid);

function makeBone(col){
  const g=new THREE.CylinderGeometry(0.014,0.014,1,7);
  const m=new THREE.MeshStandardMaterial({color:col,emissive:col,emissiveIntensity:0.5,roughness:0.3,metalness:0.5});
  return new THREE.Mesh(g,m);
}
function makeJoint(col,r=0.025){
  const g=new THREE.SphereGeometry(r,10,7);
  const m=new THREE.MeshStandardMaterial({color:col,emissive:col,emissiveIntensity:0.6,roughness:0.2,metalness:0.5});
  return new THREE.Mesh(g,m);
}
function poseBone(mesh,a,b){
  const d=b.clone().sub(a),l=d.length();
  if(l<0.001)return;
  mesh.scale.y=l;
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());
}
function mp3(j){return new THREE.Vector3(-j[0],-j[1],j[2]);}

const boneMeshes={};
EDGES.forEach(([a,b])=>{
  const k=a+"-"+b;
  const m=makeBone(ECOL[k]||0x00e5ff);
  boneMeshes[k]=m; scene.add(m);
});
const JNAMES=[...new Set(EDGES.flat())];
const jMeshes={};
JNAMES.forEach(n=>{const m=makeJoint(0x00e5ff); jMeshes[n]=m; scene.add(m);});
const head=makeJoint(0xffffff,0.038); scene.add(head);

let frameIdx=0, playing=false, lastTs=null, accumT=0;
const FPS=30/2; // data is every 2nd frame

function applyFrame(idx){
  const f=MINI_POSE[idx]; if(!f)return;
  const j=f.j;
  EDGES.forEach(([a,b])=>{
    const k=a+"-"+b;
    if(j[a]&&j[b]) poseBone(boneMeshes[k],mp3(j[a]),mp3(j[b]));
  });
  JNAMES.forEach(n=>{ if(j[n]) jMeshes[n].position.copy(mp3(j[n])); });
  if(j.nose) head.position.copy(mp3(j.nose));
}

// Gentle auto-rotate camera
let autoAngle=0;
function animate(ts){
  requestAnimationFrame(animate);
  if(playing){
    if(lastTs!==null){
      accumT+=(ts-lastTs)/1000*FPS;
      frameIdx=Math.round(accumT)%MINI_POSE.length;
    }
    lastTs=ts;
  } else { lastTs=null; }
  autoAngle+=0.004;
  camera.position.x=Math.sin(autoAngle)*2.5;
  camera.position.z=Math.cos(autoAngle)*2.5;
  camera.position.y=0.7;
  camera.lookAt(0,0,0);
  applyFrame(frameIdx);
  renderer.render(scene,camera);
}

window.sfTogglePlay=function(){
  playing=!playing;
  if(playing) accumT=frameIdx;
  document.getElementById("sf-playbtn").textContent=playing?"⏸ PAUSE":"▶ PLAY";
};

applyFrame(0);
animate(0);
</script>

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
  </ul>
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
}

.video-list li {
  margin-bottom: 40px;
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
  max-width: 680px; /* 视频整体宽度限制 */
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

  <div class="personal-gallery-grid" style="display:block; max-width:680px; margin:24px auto 44px;">
    <figure style="margin:0 0 30px; text-align:center;">
      <img src="/images/godfather.png" alt="The Godfather film poster" loading="lazy" decoding="async" style="max-width:680px; width:100%; height:auto; aspect-ratio:auto; object-fit:contain; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2); display:block; margin:0 auto;">
    </figure>
    <figure style="margin:0 0 30px; text-align:center;">
      <img src="/images/camus.jpg" alt="Albert Camus portrait" loading="lazy" decoding="async" style="max-width:680px; width:100%; height:auto; aspect-ratio:auto; object-fit:contain; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2); display:block; margin:0 auto;">
    </figure>
    <figure style="margin:0 0 30px; text-align:center;">
      <img src="/images/jackie.JPG" alt="Jackie Chan portrait" loading="lazy" decoding="async" style="max-width:680px; width:100%; height:auto; aspect-ratio:auto; object-fit:contain; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.2); display:block; margin:0 auto;">
    </figure>
    <figure style="margin:0 0 30px; text-align:center;">
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

  <div class="clustrmaps-container" data-visitor-map>
    <div class="visitor-map-fallback" role="status">
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
    <script
      type="text/javascript"
      id="clustrmaps"
      src="https://cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=420&t=tt&d=ew9JD5D1fDG0V7A7Uc0mx-mp4-J3v9AA6jUiCkkFMXA">
    </script>
  </div>

  <script>
  (function () {
    var container = document.querySelector("[data-visitor-map]");
    if (!container) {
      return;
    }

    var fallback = container.querySelector(".visitor-map-fallback");
    var script = container.querySelector("#clustrmaps");

    function hasLiveMap() {
      return Array.prototype.some.call(container.children, function (child) {
        if (child === fallback || child === script) {
          return false;
        }

        return child.tagName !== "SCRIPT";
      });
    }

    function refreshFallback() {
      if (!fallback) {
        return;
      }

      fallback.hidden = hasLiveMap();
    }

    if (script) {
      script.addEventListener("load", function () {
        window.setTimeout(refreshFallback, 600);
      });
      script.addEventListener("error", refreshFallback);
    }

    window.addEventListener("load", function () {
      window.setTimeout(refreshFallback, 1200);
    });
    window.setTimeout(refreshFallback, 4000);
  }());
  </script>

</section>
