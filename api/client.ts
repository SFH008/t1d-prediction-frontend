import { apiConfig, requireApiBaseUrl } from './config';
import { ApiError } from './errors';

export async function apiFetch(
  path: string,
  init?: RequestInit,
): Promise<Response> {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, apiConfig.timeoutMs);

  try {
    const response = await fetch(
      `${requireApiBaseUrl()}${path}`,
      {
        ...init,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...init?.headers,
        },
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      throw new ApiError(
        `API request failed with status ${response.status}`,
        response.status,
      );
    }

    return response;
  } finally {
    clearTimeout(timeout);
  }
}
