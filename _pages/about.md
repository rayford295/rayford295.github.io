---
permalink: /
title: "Yifan Yang"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<section id="about-me">
  <h2>🗨 About Me</h2>
  <p>
    My name is <strong>Yifan Yang</strong>, and I am a Ph.D. student in the Department of Geography at Texas&nbsp;A&amp;M University.  
    I have the honor of working with my advisor, <strong>Dr. Lei Zou</strong>, in the 
    <a href="https://www.geoearlab.com" target="_blank" rel="noopener">Geospatial Exploration and Resolution (GEAR) Lab</a>.  
    My research focuses on the integration of Spatial Science and GeoAI—utilizing GIS &amp; Remote Sensing for mapping and analyzing geographic patterns, exploring Disaster Resilience, understanding Climate Change impacts, and investigating Public Health.  
    I am also deeply committed to Responsible GIS and GeoAI, particularly in enhancing Explainable GeoAI for improved interpretability in decision-making.
  </p>
  <p>
    Before entering PhD studies, I earned a master’s degree in Spatial Data Science from the 
    <a href="https://www.usc.edu" target="_blank" rel="noopener">University of Southern California</a>.  
    During my master’s I worked with Dr. John Wilson on the 
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

  <h3>Research Interests</h3>
  <ul>
    <li>Autonomous GeoAI Science</li>
    <li>Spatial Data Science</li>
    <li>GeoAI</li>
    <li>AI4Science</li>
    <li>GIScience</li>
  </ul>
</section>



<style>
  /* 每条记录的容器 */
  .item {
    display: flex;
    align-items: center;    /* ← 中线对齐！ */
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

<span id="publications"></span>

# 📕 Publications
<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">arXiv</div>
      <img src='images/1st_dual_channel.png' alt="Hyperlocal Disaster" width="75%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[Hyperlocal disaster damage assessment using bi-temporal street-view imagery and pre-trained vision models](https://arxiv.org/abs/2504.09066) **Yang, Yifan**, Lei Zou, Bin Zhou, Daoyang Li, Boyuan Lin, Javed Abedin, Mengyang Yang. *arXiv preprint*, arXiv:2504.09066, 2025. [arXiv Link](https://arxiv.org/abs/2504.09066)

  </div>
</div>

<div class='paper-box'>
  <div class='paper-box-image'>
    <div>
      <div class="badge">Applied Sciences</div>
      <img src='images/0st_geolocator.png' alt="GeoLocator" width="75%">
    </div>
  </div>
  <div class='paper-box-text' markdown="1">

[GeoLocator: A Location-Integrated Large Multimodal Model (LMM) for Inferring Geo-Privacy](https://www.mdpi.com/2076-3417/14/16/7091) **Yang, Yifan**, Siqin Wang, Daoyang Li, Shuju Sun, Qingyang Wu. *Applied Sciences*, 14(16), 7091, 2024. [Paper Link](https://www.mdpi.com/2076-3417/14/16/7091)

  </div>
</div>

<section id="presentation">
  <h2>🏘 Presentation</h2>
  <ul>
    <li>
      <em>American Association of Geographers Annual Meeting</em>, March 24 – 28, 2025, Detroit  
      (<a href="https://aag.secure-platform.com/aag2025/solicitations/82/sessiongallery/23561" target="_blank" rel="noopener">Session 23561</a>, 
       <a href="https://aag.secure-platform.com/aag2025/solicitations/82/sessiongallery/23718" target="_blank" rel="noopener">Session 23718</a>, 
       <a href="https://aag.secure-platform.com/aag2025/organizations/main/gallery/rounds/131/details/82104" target="_blank" rel="noopener">Detail 82104</a>, 
       <a href="https://aag.secure-platform.com/aag2025/organizations/main/gallery/rounds/131/details/83465" target="_blank" rel="noopener">Detail 83465</a>)
    </li>
    <li>
      <em>Spatial Data Science Symposium: Thematic Session, Geoprivacy Challenges and Solutions in the Digital Society</em>  
      (<a href="https://sdss2024.spatial-data-science.net/ts/zhang.html" target="_blank" rel="noopener">Session Details</a>)
    </li>
    <li>
      <em>The Symposium on Spatiotemporal Data Science, Pre-symposium Training Workshop</em>, Washington DC, July 22, 2024 (online)  
      (<a href="https://sdl.gis.harvard.edu/event/symposium-spatiotemporal-data-science-geoai-social-sciences" target="_blank" rel="noopener">Event Page</a>)
    </li>
    <li>
      <em>American Association of Geographers Annual Meeting</em>, April 16 – 20, 2024, Honolulu, Hawai'i  
      (<a href="https://aag.secure-platform.com/aag2024/solicitations/57/sessiongallery/7825" target="_blank" rel="noopener">Session 7825</a>)
    </li>
    <li>
      <em>AGI Leap Summit 2024, Multimodality</em>, Paper Presentation, SuperAGI, February 29, 2024 (Virtual)  
      (<a href="https://superagi.com/agi-leap-summit/" target="_blank" rel="noopener">Summit Website</a>)
    </li>
    <li>
      <em>2024 Los Angeles Geospatial Summit</em>, February 23, 2024, Los Angeles, CA  
      (<a href="https://www.esri.com/en-us/industries/blog/articles/showcasing-innovation-in-gis-education-through-student-projects-at-the-la-geospatial-summit/" 
          target="_blank" rel="noopener">
        Event Article
      </a>)
    </li>
  </ul>
</section>


<span id="partial-honor"></span>

# 👑 Partial Honor
- *2025 AAG-GISSG Student Honors Paper Competition Honorable Mentions, Top 5 Run-up
- *2025 AAG Applied Geography Student Travel Awards
- *Nu Theta chapter of Gamma Theta Upsilon, lifetime membership, the international geographic honor society Gamma Theta Upsilon
- *2024 Los Angeles Geospatial Summit ArcGIS Storymaps Competition Most Suitably Applied Analysis Methodology Using Map
- *DNIIT(performance：EXCELLENT)
- *The 9th China International "Internet +" College Students Innovation and Entrepreneurship Competition (Shanghai Division) Higher Education Main Track International Project Second Runner-up (Youguang Ushine - AI+ Multilingual Talent Service Platform" project)
- *2020 National First Prize in the Computer Design Competition for Chinese College Students, Big Data Practice Competition
- *The third prize of the 10th MathorCup College Mathematical Modeling Challenge in 2020                               
- *2020 Second Prize of the 13th "Certification Cup" Mathematics China Mathematical Modeling Network Challenge (Inner Mongolia Autonomous Society)                            
- *2020 China-US Youth Creators Competition, Haikou Region, Third Prize
- *2020 Second Prize of the Third China Youth Cup National University Student Mathematical Modeling           
- *Third Prize of the 6th National Mobile Internet Innovation Competition (South China Region)                           
- *2020 China University Computer Competition - Third Prize in the Innovation Group of the Artificial Intelligence
- *Third prize in the final of the Hainan Selection Competition of the 4th China Creative Wings Competition and the
- *2020 Hainan Free Trade Port Entrepreneurship Competition
- *Silver Award of Hainan Creative Group of the 6th China International "Internet+" Student Innovation and Entrepreneurship Competition
- *Bronze Prize in Hainan Region of the Challenge Cup Student Entrepreneurship Plan Competition in 2020       
- *Second Prize of the 14th iCAN International Innovation and Entrepreneurship Competition South China Region
- *Hainan University First Class Comprehensive Scholarship
- *College students with the most innovative spirit and practical ability in Hainan University

<span id="professional-activities-and-service"></span>

# 👔 Professional Activities and Service
- *BOD member of GISphere (https://gisphere.info/), 2024-now
- *Student Co-Director of Remote Sensing Specialty Group, American Association of Geographers, 2025-2027
- *Student Co-Director of Hazards, Risks, and Disasters, American Association of Geographers, 2025-2027
- *Vice President, Association of Robotics and Artificial Intelligence, Hainan University, 2021-2022                             

<span id="miscellaneous"></span>

# 🌎 Miscellaneous
[comment]: <> ( I am recording some of my works and thoughts in form of blog.)
I like basketball, football, and I watch many games. Favorite player is Messi

<body>
<a href="https://clustrmaps.com/site/1bvzy"  title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=ew9JD5D1fDG0V7A7Uc0mx-mp4-J3v9AA6jUiCkkFMXA&cl=ffffff" /></a>
</body>
