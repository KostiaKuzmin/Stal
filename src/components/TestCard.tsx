import React from 'react';
import { clsx } from 'clsx';
import { useTestStore } from '../stores/testStore';
import type { Test } from '../types';
import { ClockIcon, CheckCircleIcon, XCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface TestCardProps {
  test: Test;
  projectId: string;
}

export function TestCard({ test, projectId }: TestCardProps) {
  const { toggleTestSelection, isTestSelected } = useTestStore();
  const isSelected = isTestSelected(projectId, test.name);

  const getStatusIcon = () => {
    switch (test.status) {
      case 'Пройдено':
        return <CheckCircleIcon className="h-5 w-5 text-green-500" />;
      case 'Не пройдено':
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      case 'В работе':
        return <ArrowPathIcon className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (test.status) {
      case 'Пройдено':
        return 'bg-green-50 text-green-700 ring-green-600/20';
      case 'Не пройдено':
        return 'bg-red-50 text-red-700 ring-red-600/20';
      case 'В работе':
        return 'bg-yellow-50 text-yellow-700 ring-yellow-600/20';
      default:
        return 'bg-gray-50 text-gray-700 ring-gray-600/20';
    }
  };

  return (
    <div
      className={clsx(
        'group rounded-xl border transition-all cursor-pointer hover:shadow-lg',
        isSelected ? 'border-indigo-500 bg-indigo-50/50' : 'border-gray-200 bg-white hover:border-indigo-200'
      )}
      onClick={() => toggleTestSelection(projectId, test.name)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {test.customName}
          </h3>
          <div className={clsx(
            'rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset flex items-center gap-1.5',
            getStatusColor()
          )}>
            {getStatusIcon()}
            {test.status}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{test.description}</p>
        
        {test.lastRun && (
          <div className="flex items-center text-sm text-gray-500">
            <ClockIcon className="h-4 w-4 mr-1.5" />
            Последний запуск: {test.lastRun}
          </div>
        )}
      </div>
    </div>
  );
}