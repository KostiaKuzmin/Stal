import React from 'react';
import { useTests } from '../hooks/useTests';
import { TestCard } from './TestCard';

interface TestListProps {
  projectId: string;
  searchQuery: string;
}

export function TestList({ projectId, searchQuery }: TestListProps) {
  const { tests, isLoading } = useTests(projectId);
  
  if (!projectId) {
    return (
      <div className="text-center text-gray-500 py-12">
        Выберите проект для отображения тестов
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center text-gray-500 py-12">
        Загрузка тестов...
      </div>
    );
  }

  const filteredTests = tests.filter(test => 
    test.customName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredTests.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        Тесты не найдены
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredTests.map(test => (
        <TestCard 
          key={test.name}
          test={test}
          projectId={projectId}
        />
      ))}
    </div>
  );
}