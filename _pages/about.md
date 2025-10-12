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
  </style>
</head>


<section id="about-me">
  <h2>🗨 About Me</h2>

  <div>
    <p>
      My name is <strong>Yifan Yang</strong>, and I am a Ph.D. student in the Department of Geography at 
      <a href="https://www.tamu.edu" target="_blank" rel="noopener">Texas&nbsp;A&amp;M University</a>.  
      I have the honor of working with my advisor, 
      <a href="https://www.geoearlab.com/people" target="_blank" rel="noopener">Dr. Lei Zou</a>, in the 
      <a href="https://www.geoearlab.com" target="_blank" rel="noopener">Geospatial Exploration and Resolution (GEAR) Lab</a>.  
      My research focuses on the integration of Spatial Science and GeoAI—utilizing GIS &amp; Remote Sensing for mapping and analyzing geographic patterns, exploring Disaster Resilience, understanding Climate Change impacts, and investigating Public Health.  
      I am also deeply committed to Responsible GIS and GeoAI, particularly in enhancing Explainable GeoAI for improved interpretability in decision-making.
    </p>

    <p>
      Before entering PhD studies, I earned a master’s degree in Spatial Data Science from the 
      <a href="https://www.usc.edu" target="_blank" rel="noopener">University of Southern California</a>.  
      During my master’s, I worked with 
      <a href="https://dornsife.usc.edu/spatial/profile/john-p-wilson/" target="_blank" rel="noopener">Dr. John P. Wilson</a> on the 
      <a href="https://publicexchange.usc.edu/urban-trees-initiative/" target="_blank" rel="noopener">Urban Trees Initiative</a>, 
      and received invaluable guidance from 
      <a href="https://dornsife.usc.edu/spatial/profile/siqin-sisi-wang/" target="_blank" rel="noopener">Dr. Siqin Wang</a>.
    </p>

    <p>
      Prior to graduate school, I received a bachelor’s degree in Software Engineering from 
      <a href="https://www.hainanu.edu.cn/" target="_blank" rel="noopener">Hainan University</a> in China.  
      I hope to use computer science and spatial science to make a positive contribution to the world.  
      I’m also an AI4Science enthusiast, and my hobbies are basketball🏀, football⚽, poker🎴, and talk shows🎆.
    </p>

    <p>
      <strong>Research interests:</strong> Autonomous GeoAI Science, Spatial Data Science, GeoAI, AI4Science, GIScience.
    </p>

    <div style="text-align: center; margin-top: 30px;">
      <img src="https://raw.githubusercontent.com/rayford295/rayford295.github.io/main/images/godfather.png" 
           alt="Profile Image" 
           style="max-width: 500px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
    </div>

        <div style="text-align: center; margin-top: 30px;">
      <img src="https://raw.githubusercontent.com/rayford295/rayford295.github.io/main/images/camus.jpg" 
           alt="Profile Image" 
           style="max-width: 500px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
    </div>
    </div>

        <div style="text-align: center; margin-top: 30px;">
      <img src="https://raw.githubusercontent.com/rayford295/rayford295.github.io/main/images/jackie.JPG" 
           alt="Profile Image" 
           style="max-width: 500px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
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
      Advisor: Prof. Jieren Cheng
    </div>
  </div>
</section>

<section id="experiences">
  <h2>💻 Experiences</h2>

  <div class="item">
    <img class="logo" src="images/tamu_logo.webp" alt="Texas A&M logo">
    <div class="text">
      <strong>Texas A&amp;M University</strong><br>
      Graduate Research Assistant, Jan. 2025 – Present<br>
      Advisor: Prof. Lei Zou, GEAR Lab
    </div>
  </div>

  <div class="item">
    <img class="logo" src="images/tamu_logo.webp" alt="Texas A&M logo">
    <div class="text">
      <strong>Texas A&amp;M University</strong><br>
      Graduate Teaching Assistant, Aug. 2024 – Dec. 2024<br>
      GEOG232, lab sections 501, 502, 505
    </div>
  </div>

  <div class="item">
    <img class="logo" src="images/USC-Logo-cropped.png" alt="USC logo">
    <div class="text">
      <strong>University of Southern California</strong><br>
      Master Student Researcher, Sept. 2023 – Apr. 2024<br>
      USC Urban Trees Initiative<br>
      Advisors: Prof. John Wilson, Prof. Yi Qi, Beau MacDonald
    </div>
  </div>
</section>

<section id="publications">
  <h2>📕 Selected Publications</h2>

  <div class="paper-box">
    <div class="paper-box-image">
      <div class="badge">Computers, Environment and Urban Systems</div>
      <img src="images/1st_dual_channel.png" alt="Hyperlocal Disaster" width="75%">
    </div>
    <div class="paper-box-text">
      <a href="https://www.sciencedirect.com/science/article/pii/S0198971525000882" target="_blank" rel="noopener">
        Hyperlocal Disaster Damage Assessment Using Bi-temporal Street-view Imagery and Pre-trained Vision Models
      </a> — <strong>Yang, Yifan</strong>, Lei Zou, Bing Zhou, Daoyang Li, Binin Lin, Joynal Abedin, Mengyang Yang. 
      <em>Computers, Environment and Urban Systems</em>, Volume 115, 102318, 2025. 
    </div>
  </div>

  <div class="paper-box">
    <div class="paper-box-image">
      <div class="badge">Applied Sciences</div>
      <img src="images/0st_geolocator.png" alt="GeoLocator" width="75%">
    </div>
    <div class="paper-box-text">
      <a href="https://www.mdpi.com/2076-3417/14/16/7091" target="_blank" rel="noopener">
        GeoLocator: A Location-Integrated Large Multimodal Model (LMM) for Inferring Geo-Privacy
      </a> — <strong>Yang, Yifan</strong>, Siqin Wang, Daoyang Li, Shuju Sun, Qingyang Wu.
      <em>Applied Sciences</em>, 14(16), 7091, 2024.
    </div>
  </div>
</section>

<section id="presentation">
  <h2>🏘 Presentation</h2>
  <ul>
    <li><strong>AAG Annual Meetings</strong>
      <ul>
        <li>
          <em>American Association of Geographers Annual Meeting</em>, March 24 – 28, 2025, Detroit  
          (<a href="https://aag.secure-platform.com/aag2025/solicitations/82/sessiongallery/23561" target="_blank" rel="noopener">Session 23561</a>, 
           <a href="https://aag.secure-platform.com/aag2025/solicitations/82/sessiongallery/23718" target="_blank" rel="noopener">Session 23718</a>, 
           <a href="https://aag.secure-platform.com/aag2025/organizations/main/gallery/rounds/131/details/82104" target="_blank" rel="noopener">Detail 82104</a>, 
           <a href="https://aag.secure-platform.com/aag2025/organizations/main/gallery/rounds/131/details/83465" target="_blank" rel="noopener">Detail 83465</a>)
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
    <li>Travel Grant, Summer School on Cyberinfrastructure and Disaster Resilience, TAMU (funded by NSF), $200.</li>
    <li>Texas A&M Institute of Data Science (TAMIDS) Student Ambassador Scholarship, Domain Data Science Track (2025–2026 cohort), TAMU, $2,000.</li>
    <li>2025 CaGIS International Travel Grant - 2025 ICC, Vancouver, Canada</li>
    <li>2025 International Cartographic Conference (ICC), Vancouver, Canada — Best Student Paper Award</li>
    <li>2025 AAG-GISSG Student Honors Paper Competition — Honorable Mention (Top 5)</li>
    <li>2025 AAG Applied Geography Specialty Group — Student Travel Award, $196.</li>
    <li>2024 Travel Grant, Department of Geography, Texas A&M University, $1000.</li>
    <li>2024 Travel Grant(Visiting), Department of Geography, University of South Carolina, $400.</li>
    <li>Lifetime Membership — Nu Theta Chapter, Gamma Theta Upsilon (International Geographic Honor Society)</li>
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
    <li>First-Class Comprehensive Scholarship — Hainan University</li>
    <li>Recognized as "College Student with the Most Innovative Spirit and Practical Ability" — Hainan University</li>
  </ul>
</section>

<section id="professional-activities-and-service">
  <h2>👔 Professional Activities and Service</h2>
  <ul>
    <li>
      <em>BOD member of <a href="https://gisphere.info/" target="_blank" rel="noopener">GISphere</a></em>, 2024 – Present
    </li>
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
      <em>Vice President, Association of Robotics and Artificial Intelligence</em>,  
      <a href="https://www.hainanu.edu.cn/" target="_blank" rel="noopener">Hainan University</a>, 2021 – 2022
    </li>
  </ul>
</section>


<section id="media-coverage">
  <h2>📺 Media Coverage</h2>
  <ul>
    <li>
      <a href="https://engineering.tamu.edu/news/2024/09/throwing-shade-at-heatwaves.html" target="_blank" rel="noopener">
        🌡️ TAMU Engineering News: “Throwing Shade at Heatwaves”
      </a>
      <p style="margin-left: 1em;">
        Featured in a Texas A&M Engineering article highlighting my research on mitigating urban heat through shade and geospatial analysis.
      </p>
    </li>
    <li>
      <a href="https://www.esri.com/en-us/industries/blog/articles/showcasing-innovation-in-gis-education-through-student-projects-at-the-la-geospatial-summit" target="_blank" rel="noopener">
        🗺️ Esri Blog: “Showcasing Innovation in GIS Education at the LA Geospatial Summit”
      </a>
      <p style="margin-left: 1em;">
        Esri featured my project for demonstrating innovative uses of GIS and GeoAI at the Los Angeles Geospatial Summit.
      </p>
    </li>
  </ul>
</section>


<section id="miscellaneous">
  <h2>🌎 Miscellaneous</h2>
  <p>I enjoy basketball, football, and following international sports. My favorite player is Messi.</p>
  <div>
    <a href="https://clustrmaps.com/site/1bvzy" title="Visit tracker" target="_blank" rel="noopener">
      <img src="//www.clustrmaps.com/map_v2.png?d=ew9JD5D1fDG0V7A7Uc0mx-mp4-J3v9AA6jUiCkkFMXA&cl=ffffff" alt="Visit Tracker Map">
    </a>
  </div>
</section>
