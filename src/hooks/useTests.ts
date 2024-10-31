import { useState, useEffect } from 'react';
import { projectTests } from '../data/projects';
import type { Test } from '../types';

export function useTests(projectId: string) {
  const [tests, setTests] = useState<Test[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!projectId) {
      setTests([]);
      return;
    }

    setIsLoading(true);
    // Имитируем загрузку данных
    setTimeout(() => {
      const projectData = projectTests[projectId] || [];
      setTests(projectData);
      setIsLoading(false);
    }, 500);
  }, [projectId]);

  return { tests, isLoading };
}