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

  static login = async (reqBody) => {
    const res = await this.fetch('/middleware/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: reqBody,
    });
    if (!res) return null;
    return res.json();
  };

  static test = async () => {
    const token = localStorage.getItem('access-token');
    const res = await this.fetch('/middleware/user/test', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token ? `Bearer ${token}` : ''}`,
      },
    });
    if (!res) return null;
    return res;
  };
}
