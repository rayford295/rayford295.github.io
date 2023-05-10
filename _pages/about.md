---
permalink: /
title: "Shiyu Jiang"
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

<span class='anchor' id='about-me'></span>

# 🗨 About Me
I'm Shiyu Jiang, a master student majoring in computer science at Whiting School of Engineering, Johns Hopkins University 
advised by [Prof.Kimia Ghobadi](https://systems.jhu.edu/kimia/).

I received my B.S. in Computer Science from Wenzhou-Kean University. During my undergrad, I was fortunate to work with 
[Prof.Aloysius Wong](https://wku.edu.cn/faculty/aloysius-wong/) and [Prof.Zhen Shen](https://people.ucas.edu.cn/~zhenshen?language=en).

I like to embrace technologies and use it to explore things. My research interests including analysis on high-throughput genomics data, 
bioinformatics, and artificial intelligence. I also have experiences in software engineering with Java, Python, Go, and React.js.


# 📖 Educations
- *2022.08 - 2023.12*, Master of Science in Engineering, Computer Science. Whiting School of Engineering, Johns Hopkins University. *Baltimore, MD* 
- *2018.08 - 2022.05*, Bachelor of Science, Computer Science. College of Science and Technology, Wenzhou-Kean University. *Wenzhou, China*

# 💻 Experiences
- *2023.05 - Present*, Research Assistant (Remote), [University of British Columbia](), Vancouver, BC.

[comment]: <> (  - Working on analyzing and exploring high-throughput genomics data using RNA-seq and ChIP-seq.)

[comment]: <> (  - **Technology Used**: R, Python, Shell, Slurm.)
- *2023.01 - Present*, Research Assistant (Hybrid), [Zang Lab at University of Virginia School of Medicine](https://zanglab.github.io/index.htm), Charlottesville, VA.
    - Working on analyzing and exploring high-throughput genomics data using RNA-seq and ChIP-seq.
    - **Technology Used**: R, Python, Shell, Slurm.
- *2022.09 - 2023.05*, Research Assistant (Hybrid), [Dr. Ghobadi's Lab at Johns Hopkins Withing School of Engineering](https://systems.jhu.edu/kimia/), Baltimore, MD.
    - Developed and maintained an agent-based simulation model for imitating pandemic spreading under disastrous events.
    - **Technology Used**: Python, Dash, Plotly, Slurm.
- *2022.06 - 2022.08*, Software Engineer Intern (On-site), [Alibaba Cloud](https://www.alibabacloud.com/product/polardb), Hangzhou, China.
    - Rewrote the official JDBC driver for MySQL to customize a general PolarDB JDBC driver to achieve functions of automatic recognition and reconnection among a master cluster and slave clusters when mastering failovers or master exchanges. 
    - Implemented the clustering management of ShardingSphere-Proxy based on PolarDB, built a persistence module, and developed a listening mechanism detecting files including updating, adding, and changing by constructing closure tables and polling strategy.
    - Tested the functionalities using JUnit and Mockito, and published a technical design document and a sharing talk internally.  
    - **Technology Used**: Java, MySQL, JDBC, ShardingSphere-Proxy, ZooKeeper, JUnit, Mockito.
- *2021.09 - 2022.08*, Deep Learning Research Intern (Hybrid), [Institute of Automation, Chinese Academy of Science](https://people.ucas.edu.cn/~zhenshen?language=en), Beijing, China.
    - Predicted financial futures time-series data with deep learning models and quantitative trading methods.
    - **Technology Used**: Python, Pytorch.
- *2021.08 - 2022.07*, Research Assistant (On-site), [Wenzhou Municipal Key Lab for Applied Biomedical Informatics](https://wku.edu.cn/faculty/aloysius-wong/), Wenzhou, China.
    - Developed a user-friendly web server HNOXPred, as a tool for the prediction of gas-sensing H-NOX proteins from amino acid sequence input. 
    - Recognized the single-line description of FASTA format sequence data to support multiple sequence snippets’ input and analysis.
    - Designed a protein sequencing algorithm to locate every fitted sequence and calculate its physicochemical properties and assigned confidence scores based on a database of H-NOX proteins.
    - **Technology Used**: Python, Javascript, MySQL, Flask, HTML/CSS, Nginx. 
- *2020.11 - 2021.04*, Undergrad Research Assistant (On-site), [Wenzhou-Kean AI Lab](https://github.com/WKUAILAB), Wenzhou, China.
    - Assisted in the integration of DeblurGANv2 and YOLOv3 under PyTorch framework, proposed as the Deblur-YOLO algorithm, the proposed model achieves competitive performance against several state-of-the-art image deblurring models.
    - **Technology Used**: Python, Pytorch。

[comment]: <> (# 🔥 News)

[comment]: <> (- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[comment]: <> (- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

# 📝 Publications 

[comment]: <> (Ye, H., Lv, J., Zhan, Y., Xue, Z., Li, T., **Jiang, S.**, Huasng, M., Dong, L., Ren, G., Lei, Q., Fang, W., & Xie, H. [Phase Behavior and Co-localization of Ovalbumin-Lysozyme Complexes]&#40;&#41;)

[comment]: <> (. *International Journal of Biological Macromolecules*. &#40;Under Review&#41;)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ALIFE 2023</div><img src='images/covid_sim.png' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">

[Simulating Disease Spread During Disaster Scenarios]()

**Shiyu Jiang**, Heejoong Kim, Fabio Henrique Tanaka, Claus Aranha, Anna Bogdanova, Kimia Ghobadi, Anton Dahbura. *The International Conference on Artificial Life*, 2023. (Accepted)

[Code](https://github.com/caranha/Koudou/tree/ALIFE_2023)

- This research aims to create a comprehensive Agent-Based Model (ABM) to simulate daily agent schedules and movements across Johns Hopkins and University of Tsukuba campuses. The model will compare scenarios related to COVID-19 spread and assess the impact of large-scale events, like earthquakes, on masking policies and disease transmission dynamics.

</div>

</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">HCI International 2023</div><img src='images/hcii.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[An Artificial Intelligence-Based Interactive Learning Platform to Assist Visually Impaired Children in Learning Mathematics](https://www.researchgate.net/profile/Shiyu-Jiang-6/publication/370175261_An_Artificial_Intelligence-Based_Interactive_Learning_Platform_to_Assist_Visually_Impaired_Children_in_Learning_Mathematics/links/64431136d749e4340e2b109b/An-Artificial-Intelligence-Based-Interactive-Learning-Platform-to-Assist-Visually-Impaired-Children-in-Learning-Mathematics.pdf)

Muhammad Shoaib, **Shiyu Jiang**, Luo Jin, Donal Fitzpatrick, Ian Pitt. *25th International Conference on Human-Computer Interaction*, 2023. (Accepted)

- This paper introduces an artificial intelligence-based interactive learning plat-form that can enhance the mathematical skills of visually impaired children.
- The proposed platform uses text-to-speech along with tactile and auditory feedback to help visually impaired students arrive at a  better understanding of mathematical material.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Bioinformatics</div><img src='images/bioinformatics2022.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[HNOXPred: a web tool for the prediction of gas-sensing H-NOX proteins from amino acid sequence](https://academic.oup.com/bioinformatics/article/38/19/4643/6673135)

**Shiyu Jiang**, Hemn Barzan Abdalla, Chuyun Bi, Yi Zhu, Xuechen Tian, Yixin Yang, Aloysius Wong. *Bioinformatics*, 2022

[Website](https://www.hnoxpred.com/)  [Code](https://github.com/JasonJiangs/HNOX_Pred)

- H-NOX proteins are gas-sensing hemoproteins found in diverse organisms ranging from bacteria to eukaryotes. HNOXPred is a webserver for the prediction of gas-sensing heme-nitric oxide/oxygen (H-NOX) proteins from amino acid sequence.
- The tool is developed by Python scripts, Flask framework and MySQL DB.
</div>
</div>

Jong Min Kim, Jeongsoo Han, **Shiyu Jiang**. [The impact of comment history disclosure on online comment posting behaviors](https://www.emerald.com/insight/content/doi/10.1108/ITP-09-2021-0692/full/html)
. *Information Technology & People*, 2022.
- This study aimed to empirically examine the effectiveness of disclosing user comment history without disclosing personal identity as a nudge policy to refrain users from posting malicious content online.

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCNN 2021</div><img src='images/ijcnn.png' alt="sym" width="100%"></div></div>

<div class='paper-box-text' markdown="1">

[Deblur-yolo: Real-time object detection with efficient blind motion deblurring](https://ieeexplore.ieee.org/abstract/document/9534352)

Shen Zheng, Yuxiong Wu, **Shiyu Jiang**, Changjie Lu, Gaurav Gupta. *International Joint Conference on Neural Networks*, 2021

- In this work, we propose Deblur-YOLO, an efficient, YOLO-based and detection-driven approach robust to motion blur photographs.
</div>
</div>

**Shiyu Jiang**, Junjie Jia, Yi Yuan, Yuxiong Wu, Tianqi Wang. [Research on China’s Primary Industry: Evidence From Regional Analysis Based on SVM and Moran’s Index](https://ieeexplore.ieee.org/abstract/document/9754653)
. *International Conference on Cloud Computing and Intelligent Systems*, 2021.
- This article aims to use machine learning and Moran’s I to analyze the current situation of China’s primary industry from a regional perspective.

[comment]: <> (# 🎖 Honors and Awards)

[comment]: <> (- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[comment]: <> (- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

# 🧑‍💻 Software

[comment]: <> (### Package)

[comment]: <> (- Python Package...)

## Web server
- [HNOXPred](https://github.com/JasonJiangs/HNOX_Pred) (**Pred**iction of **H**eme-**N**itric oxide/**OX**ygen domains): This web server predicts gas sensing H-NOX proteins from amino acid sequence.
  The software takes a single or multiple amino acid sequence and returns predicted H-NOX centers accompanied by HNOX scores scaled from 0 to 1, where 1 is closest to the mean of H-NOX proteins in HNOXPred database.
- [Agent-based System Analytical Dashboard](https://github.com/caranha/Koudou/tree/ALIFE_2023/src/dashapp): This is a responsive analytical web tool supporting statistical, geographical, and visualization
  analysis based on the result from a multi-agent system simulating infectious disease. It allows user to upload up to three sets of 
  result data and output comparative analysis. 

## Full-stack
- [OfficeAdmin](https://github.com/JasonJiangs/OfficeAdmin): An office management system developed by Spring Boot, MyBatis-Plus, Redis, MySQL, etc.
- [Microservice](https://github.com/JasonJiangs/Microservice): The project implements several small scripts and microservices using Golang and its frameworks.

## Research Pipeline & Model
- [Agent-based Model for Epidemic Simulation](https://github.com/caranha/Koudou/tree/ALIFE_2023): This is an agent-based model that considers the effects of 
  masking and large scale evacuations at the scale of a large university campus and its neighborhood. This
  project is part of a larger effort to create a simulator that considers how human mobility interacts with large scale events
  at a neighborhood level in the Japanese context.
- [RNA-seq & ChIP-seq Joint Analysis Pipeline](https://github.com/JasonJiangs/RNAseq-ChIPseq-Joint-Pipeline): 
  It is an extensible and modular pipeline combining RNA-seq and ChIP-seq tools for exploring transcriptional regulatory function with high-throughout data, 
  with easy configuration via YAML files and command line arguments, providing users with phase-based execution 
  flexibility and advanced modeling analysis options.


[comment]: <> (# 💬 Facts)

[comment]: <> (I am a soccer fan and )

[comment]: <> (- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. )

[comment]: <> (- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]]&#40;https://github.com/&#41;)

<body>
  <a href="https://clustrmaps.com/site/1bt6x"  title="Visit tracker" >
    <img src="//www.clustrmaps.com/map_v2.png?d=aGpjzbKbHZT-5oLEhHvcK0igPnT7IvQmYxySQX6oPb4&cl=ffffff" />
  </a>
</body>