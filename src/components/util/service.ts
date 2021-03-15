import { Api } from './api';

async function http<T>(endpoint: string, config: RequestInit): Promise<T> {

  const request = new Request(`${Api.BASE_URL}${endpoint}`, config);
  const response = await fetch(request);

  if(!response.ok) {
      throw new Error(`${response.status}`);
  }

  return await response.json().catch(() => ({}));
}

export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'GET' , ...config };
  return await http<T>(path, init);
}

export async function post<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
  const init = { method: 'POST', headers: {
    'Content-Type': 'application/json',
  }, body: JSON.stringify(body), ...config }
  return await http<U>(path, init);
}

async function create<T>(item: T, endpoint: string) {
  fetch(`${Api.BASE_URL}/${endpoint}`, {
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
}

export { create };
