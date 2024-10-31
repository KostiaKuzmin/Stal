import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { ProjectSelector } from './components/ProjectSelector';
import { TestList } from './components/TestList';
import { ActionButtons } from './components/ActionButtons';
import { SearchFilter } from './components/SearchFilter';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState('Project1');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Test Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Run and manage your Python tests easily
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
            <ProjectSelector 
              value={selectedProject}
              onChange={setSelectedProject}
            />
            <SearchFilter 
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="mb-6">
            <ActionButtons />
          </div>
          <TestList 
            projectId={selectedProject}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
}

export default App;