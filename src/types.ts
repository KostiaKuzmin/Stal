export interface Test {
  name: string;
  customName: string;
  description: string;
  status: string;
  resultClass?: string;
  lastRun?: string;
}

export interface Project {
  id: string;
  name: string;
  tests: Test[];
}