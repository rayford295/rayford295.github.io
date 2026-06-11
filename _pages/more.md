---
permalink: /more/
title: "More"
author_profile: true
---

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
