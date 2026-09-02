const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const apiConfig = {
  baseUrl: apiUrl ?? '',
  timeoutMs: 30000,
} as const;

export function requireApiBaseUrl(): string {
  if (!apiConfig.baseUrl) {
    throw new Error(
      'EXPO_PUBLIC_API_URL is not configured.',
    );
  }

  return apiConfig.baseUrl;
}
