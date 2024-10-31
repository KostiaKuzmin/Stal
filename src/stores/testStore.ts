import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import type { Test } from '../types';

interface TestStore {
  selectedTests: Record<string, string[]>;
  isRunning: boolean;
  toggleTestSelection: (projectId: string, testName: string) => void;
  isTestSelected: (projectId: string, testName: string) => boolean;
  runSelectedTests: () => Promise<void>;
  runAllureReport: () => Promise<void>;
  runRegression: () => void;
}

export const useTestStore = create<TestStore>((set, get) => ({
  selectedTests: {},
  isRunning: false,

  toggleTestSelection: (projectId, testName) => {
    set(state => {
      const currentTests = state.selectedTests[projectId] || [];
      const isSelected = currentTests.includes(testName);
      
      return {
        selectedTests: {
          ...state.selectedTests,
          [projectId]: isSelected
            ? currentTests.filter(t => t !== testName)
            : [...currentTests, testName]
        }
      };
    });
  },

  isTestSelected: (projectId, testName) => {
    const state = get();
    return state.selectedTests[projectId]?.includes(testName) || false;
  },

  runSelectedTests: async () => {
    const state = get();
    if (state.isRunning) return;

    set({ isRunning: true });
    
    try {
      const response = await fetch('/api/run-python-tests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          scriptPath: 'tests/your_test_script.py'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to run tests');
      }

      const data = await response.json();
      console.log('Test output:', data.output);
      toast.success('Тесты успешно запущены');
    } catch (error) {
      toast.error('Ошибка при запуске тестов');
      console.error('Test execution error:', error);
    } finally {
      set({ isRunning: false });
    }
  },

  runAllureReport: async () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.promise(promise, {
      loading: 'Генерация отчета...',
      success: 'Отчет успешно сгенерирован',
      error: 'Ошибка при генерации отчета'
    });

    await promise;
  },

  runRegression: () => {
    toast.success('Регрессионное тестирование запущено');
  }
}));