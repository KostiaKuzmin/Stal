import React from 'react';
import { useTestStore } from '../stores/testStore';
import { PlayIcon, DocumentChartBarIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export function ActionButtons() {
  const { runSelectedTests, runAllureReport, runRegression, isRunning } = useTestStore();

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={runSelectedTests}
        disabled={isRunning}
        className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <PlayIcon className="h-5 w-5 mr-2" />
        Запустить тесты
      </button>

      <button
        onClick={runAllureReport}
        className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
      >
        <DocumentChartBarIcon className="h-5 w-5 mr-2" />
        Отчеты Allure
      </button>

      <button
        onClick={runRegression}
        className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-purple-700 bg-purple-50 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
      >
        <ArrowPathIcon className="h-5 w-5 mr-2" />
        Регрессионные тесты
      </button>
    </div>
  );
}