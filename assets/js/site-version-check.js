(function () {
  'use strict';

  var versionMeta = document.querySelector('meta[name="site-build-version"]');
  if (!versionMeta || !window.fetch) return;
  var pageVersion = versionMeta.content;
  var pending = false;

  async function checkVersion() {
    if (pending || document.visibilityState === 'hidden') return;
    pending = true;
    try {
      var manifestUrl = new URL('/assets/site-version.json', window.location.origin);
      manifestUrl.searchParams.set('check', String(Date.now()));
      var response = await window.fetch(manifestUrl.href, { cache: 'no-store' });
      if (!response.ok) return;
      var manifest = await response.json();
      var deployedVersion = manifest.version;
      // Ignore an older CDN response rather than sending the visitor backwards.
      if (typeof deployedVersion !== 'string' || !/^\d{14}$/.test(deployedVersion) || deployedVersion <= pageVersion) return;

      var destination = new URL(window.location.href);
      // Attempt each deployed version once, even if an edge still serves old HTML.
      if (destination.searchParams.get('v') === deployedVersion) return;
      destination.searchParams.set('v', deployedVersion);
      window.location.replace(destination.href);
    } catch (error) {
      // Keep the current page usable when the version check is unavailable.
    } finally {
      pending = false;
    }
  }

  checkVersion();
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) checkVersion();
  });
  document.addEventListener('visibilitychange', checkVersion);
})();
