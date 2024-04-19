import { CREATE_NEW_BOARD, ADD_NEW_TASK, EDIT_TASK_STATUS } from './constant';
import { State, Action } from './types';

const initialState: State = {
  boards: [
    {
      key: 'product_details',
      label: 'Product Details',
      todo: [
        {
          key: 'task_1',
          label: 'TASK 1',
        },
        {
          key: 'task_2',
          label: 'TASK 2',
        },

        {
          key: 'task_3',
          label: 'TASK 3',
        },
      ],
      doing: [
        {
          key: 'doing_task_1',
          label: 'Doing TASK 1',
        },
        {
          key: 'doing_task_2',
          label: 'Doing TASK 2',
        },

        {
          key: 'doing_task_3',
          label: 'Doing TASK 3',
        },
      ],
      complete: [
        {
          key: 'complete_task_1',
          label: 'Complete Task 1',
        },
        {
          key: 'complete_task_2',
          label: 'Complete Task 2',
        },

        {
          key: 'complete_task_3',
          label: 'Complete Task 3',
        },
      ],
    },
    {
      key: 'road_map',
      label: 'Road Map',
      todo: [],
      doing: [],
      complete: [],
    },
  ],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CREATE_NEW_BOARD: {
      const generatedBoardKey = action.payload.name
        .toLowerCase()
        .replace(/\s+/g, '_');

      const newBoardConfig = {
        key: generatedBoardKey,
        label: action.payload.name,
        todo: [],
        doing: [],
        complete: [],
      };
      return {
        boards: [...state.boards, newBoardConfig],
      };
    }
    case ADD_NEW_TASK: {
      const { boards } = JSON.parse(JSON.stringify(state));
      const { taskName, taskStatus, boardKey } = action.payload;

      const currentBoardConfig = boards.find((board) => {
        return boardKey === board.key;
      });

      const generatedTaskKey = taskName.toLowerCase().replace(/\s+/g, '_');

      currentBoardConfig[taskStatus].push({
        label: taskName,
        key: generatedTaskKey,
      });

      return {
        ...state,
        boards,
      };
    }

    case EDIT_TASK_STATUS: {
      const { boardKey, taskLabel, taskKey, currentStatus, newStatus } =
        action.payload;
      const { boards } = JSON.parse(JSON.stringify(state));

      const currentBoardConfig = boards.find((board) => {
        return boardKey === board.key;
      });

      currentBoardConfig[currentStatus] = currentBoardConfig[
        currentStatus
      ].filter((task) => {
        return task.key !== taskKey;
      });
      console.log(
        'reducer',
        currentStatus,
        currentBoardConfig[currentStatus],
        taskKey,
      );
      currentBoardConfig[newStatus].push({
        label: taskLabel,
        key: taskKey,
      });

      return {
        boards,
      };
    }
    default:
      return state;
  }
};

export default reducer;
