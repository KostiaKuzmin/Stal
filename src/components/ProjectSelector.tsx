import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { projectMappings } from '../data/projects';
import { clsx } from 'clsx';

interface ProjectSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const ProjectSelector: React.FC<ProjectSelectorProps> = ({ value, onChange }) => {
  const projects = Object.entries(projectMappings);

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3.5 pl-4 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <span className="block truncate font-medium">
            {value ? projectMappings[value] : 'Выберите проект'}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {projects.map(([id, name]) => (
              <Listbox.Option
                key={id}
                className={({ active }) =>
                  clsx(
                    'relative cursor-default select-none py-2.5 pl-10 pr-4',
                    active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                  )
                }
                value={id}
              >
                {({ selected }) => (
                  <>
                    <span className={clsx('block truncate', selected ? 'font-medium' : 'font-normal')}>
                      {name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};