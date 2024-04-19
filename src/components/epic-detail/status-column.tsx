import React from 'react';
import TaskItem from './task-item';
import { Task } from '@/redux/types';

type STATUS = 'todo' | 'doing' | 'complete';
export default function StatusColumn({
  status,
  tasks,
}: {
  status: STATUS;
  tasks: Array<Task>;
}) {
  return (
    <div className="flex-1 px-8 mt-4">
      {status.toUpperCase()} ({tasks.length})
      {tasks.map((task) => {
        return (
          <TaskItem
            key={'task-item=' + task.key}
            taskKey={task.key}
            label={task.label}
            status={status}
          />
        );
      })}
    </div>
  );
}
