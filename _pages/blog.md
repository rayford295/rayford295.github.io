---
layout: default
title: "Writing"
permalink: /blog/
author_profile: true
---

<style>
  .blog-lead { color: #7a8288; margin-bottom: 2em; }
  .blog-year { font-size: 1.1em; letter-spacing: .05em; text-transform: uppercase;
               color: #7a8288; border-bottom: 1px solid #f2f3f3;
               padding-bottom: .3em; margin: 2em 0 1em; }
  .blog-item { margin-bottom: 1.6em; }
  .blog-item h3 { margin: 0 0 .2em; font-size: 1.05em; line-height: 1.4; }
  .blog-meta { font-size: .75em; color: #7a8288; margin: 0 0 .35em;
               font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif; }
  .blog-excerpt { font-size: .85em; color: #494e52; margin: 0; }
  .blog-tag { display: inline-block; font-size: .65em; letter-spacing: .05em;
              text-transform: uppercase; vertical-align: middle;
              padding: .12em .5em; margin-left: .4em; border-radius: 3px;
              background: #f2f3f3; color: #7a8288; }
</style>

<h1 class="page__title">✍️ Writing</h1>

<p class="blog-lead">Reading reflections, research notes, public essays, and thoughts from my Ph.D. journey. Some pieces live here; others were first published on my WeChat official account and are linked out. <a href="{{ '/feed.xml' | relative_url }}">RSS</a></p>

{% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in years %}
<h2 class="blog-year">{{ year.name }}</h2>
{% for post in year.items %}
{% assign link = post.external_url | default: post.url %}
<div class="blog-item">
<h3>{% if post.external_url %}<a href="{{ link }}" target="_blank" rel="noopener">{{ post.title }}</a> <span class="blog-tag">{{ post.source | default: "external" }}</span>{% else %}<a href="{{ link | relative_url }}">{{ post.title }}</a>{% endif %}</h3>
<p class="blog-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time></p>
{% if post.excerpt %}<p class="blog-excerpt">{{ post.excerpt | strip_html | normalize_whitespace | truncate: 220 }}</p>{% endif %}
</div>
{% endfor %}
{% endfor %}

{% if site.posts.size == 0 %}
<p><em>Nothing here yet.</em></p>
{% endif %}

<hr>

<p><a href="{{ '/' | relative_url }}">← Back to homepage</a></p>
