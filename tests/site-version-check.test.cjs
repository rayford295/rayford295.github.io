const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const source = fs.readFileSync(path.join(__dirname, '../assets/js/site-version-check.js'), 'utf8');
const current = '20261031060000';
const newer = '20261031070000';
const settle = () => new Promise(resolve => setImmediate(resolve));

function browser({ version = current, href = 'https://rayford295.github.io/experience/?filter=all#teaching', failure = false, ok = true } = {}) {
  const events = {};
  const redirects = [];
  const requests = [];
  const document = {
    visibilityState: 'visible',
    querySelector: () => ({ content: current }),
    addEventListener: (name, handler) => { events[name] = handler; }
  };
  const window = {
    location: { href, origin: new URL(href).origin, replace: url => redirects.push(url) },
    addEventListener: (name, handler) => { events[name] = handler; },
    fetch: async (url, options) => {
      requests.push({ url, options });
      if (failure) throw new Error('offline');
      return { ok, json: async () => ({ version }) };
    }
  };
  vm.runInNewContext(source, { window, document, URL, Date });
  return { events, redirects, requests, document };
}

test('current pages stay put and check an uncached version manifest', async () => {
  const page = browser();
  await settle();
  assert.equal(page.redirects.length, 0);
  assert.equal(page.requests[0].options.cache, 'no-store');
  assert.equal(new URL(page.requests[0].url).pathname, '/assets/site-version.json');
  assert.ok(new URL(page.requests[0].url).searchParams.has('check'));
});

test('new deployments refresh stale pages and preserve queries and anchors', async () => {
  const page = browser({ version: newer });
  await settle();
  assert.deepEqual(page.redirects, ['https://rayford295.github.io/experience/?filter=all&v=' + newer + '#teaching']);
});

test('an older CDN manifest never downgrades the current page', async () => {
  const page = browser({ version: '20261031050000' });
  await settle();
  assert.equal(page.redirects.length, 0);
});

test('a stale edge cannot create a reload loop for the same version', async () => {
  const page = browser({ version: newer, href: 'https://rayford295.github.io/blog/?v=' + newer });
  await settle();
  assert.equal(page.redirects.length, 0);
});

test('network failures, HTTP errors and invalid manifests leave content available', async () => {
  for (const options of [{ failure: true }, { ok: false }, { version: null }, { version: 'invalid' }]) {
    const page = browser(options);
    await settle();
    assert.equal(page.redirects.length, 0);
  }
});

test('back and forward restores recheck the deployment', async () => {
  const page = browser();
  await settle();
  page.events.pageshow({ persisted: false });
  await settle();
  assert.equal(page.requests.length, 1);
  page.events.pageshow({ persisted: true });
  await settle();
  assert.equal(page.requests.length, 2);
});

test('returning to a visible tab rechecks; background tabs do not request', async () => {
  const page = browser();
  await settle();
  page.document.visibilityState = 'hidden';
  page.events.visibilitychange();
  await settle();
  assert.equal(page.requests.length, 1);
  page.document.visibilityState = 'visible';
  page.events.visibilitychange();
  await settle();
  assert.equal(page.requests.length, 2);
});
