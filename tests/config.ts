export interface TestConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
}

export const config: TestConfig = {
  baseUrl: process.env.TEST_BASE_URL || 'http://localhost:3000',
  timeout: 30000,
  retries: 2
};