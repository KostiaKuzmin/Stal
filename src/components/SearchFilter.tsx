import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

interface SearchFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-lg border border-gray-300 py-3.5 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Поиск по названию или описанию"
      />
    </div>
  );
};