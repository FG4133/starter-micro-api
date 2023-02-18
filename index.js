const { URL, Request, Response } = require('node-fetch');
const fetch = require('node-fetch');

module.exports = {
  async fetch(req) {
    try {
      const url = new URL(req.url);
      const splitted = url.pathname.replace(/^\/*/, '').split('/');
      const address = splitted[0];
      url.pathname = splitted.slice(1).join('/');
      url.hostname = address;
      url.protocol = 'https:';
      return await fetch(new Request(url, req));
    } catch (e) {
      return new Response(e);
    }
  }
};
