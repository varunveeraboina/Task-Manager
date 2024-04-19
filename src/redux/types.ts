export interface Payload {
  [k: string]: any;
}
export type Action =
  | {
      type: 'CREATE_NEW_BOARD';
      payload: { name: string };
    }
  | {
      type: 'ADD_NEW_TASK';
      payload: {
        taskName: string;
        boardKey: string;
        taskStatus: string;
      };
    }
  | {
      type: 'EDIT_TASK_STATUS';
      payload: {
        boardKey: string;
        taskKey: string;
        taskLabel: string;
        currentStatus: string;
        newStatus: string;
      };
    };

export type Task = {
  key: string;
  label: string;
};

export type Board = {
  key: string;
  label: string;
  todo: Task[];
  doing: Task[];
  complete: Task[];
};

export type State = {
  boards: Board[];
};
