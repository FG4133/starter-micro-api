module.exports = {
  async fetch(req) {
    try {
      const { URL } = require('url');
      const url = new URL(req.url);
      const splitted = url.pathname.replace(/^\/*/, '').split('/');
      const address = splitted[0];
      url.pathname = splitted.slice(1).join('/');
      url.hostname = address;
      url.protocol = 'https:';
      const fetch = require('node-fetch');
      return await fetch(url.toString(), req);
    } catch (e) {
      return new Response(e);
    }
  }
};
