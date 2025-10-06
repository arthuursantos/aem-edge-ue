export default class Api {
  static hostname = 'http://localhost:8080';

  static fetch = async (endpoint, req) => {
    try {
      const res = await fetch(`${Api.hostname}${endpoint}`, req);
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
      return res;
    } catch {
      return null;
    }
  };

  static login = async () => {
    const res = await this.fetch('/auth/login', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res) return null;
    return res.json();
  };
}
