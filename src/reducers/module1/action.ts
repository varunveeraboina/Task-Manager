import { CREATE_NEW_BOARD, ADD_NEW_TASK, EDIT_TASK_STATUS } from './constant';

export function createNewBoard(name: string) {
  return {
    type: CREATE_NEW_BOARD,
    payload: {
      name,
    },
  };
}

export function createNewTask(
  taskName: string,
  boardKey: string,
  taskStatus: string,
) {
  return {
    type: ADD_NEW_TASK,
    payload: {
      boardKey,
      taskName,
      taskStatus,
    },
  };
}

export function editTaskStatus(
  boardKey: string,
  taskKey: string,
  taskLabel: string,
  currentStatus: string,
  newStatus: string,
) {
  return {
    type: EDIT_TASK_STATUS,
    payload: {
      boardKey,
      taskKey,
      taskLabel,
      currentStatus,
      newStatus,
    },
  };
}
