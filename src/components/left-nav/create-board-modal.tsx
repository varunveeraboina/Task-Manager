import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNewBoard } from '@/redux/action';
import { State, Board } from '@/redux/types';

interface BoardItem {
  key: string;
  label: string;
}

const Modal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [boardName, setBoardName] = useState('');
  const [shouldShowError, setShouldShowError] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector((state: State) => {
    return state.boards.reduce((acc: Array<BoardItem>, current: Board) => {
      return [...acc, { key: current.key, label: current.label }];
    }, []);
  });

  const handleChange = (e) => {
    setBoardName(e.target.value);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    const doesBoardAlreadyExist =
      boards
        .map((board) => board.label.toLowerCase())
        .indexOf(boardName.toLowerCase()) > -1;

    if (doesBoardAlreadyExist) {
      setShouldShowError(true);
    } else {
      setShouldShowError(false);
      dispatch(createNewBoard(boardName));
      setTimeout(closeModal, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-violet-500 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Create New Board</h2>
          <input
            type="text"
            name="board-name"
            value={boardName}
            onChange={handleChange}
            placeholder="enter board name"
            className="text-black bg-white rounded-lg px-4 py-2 mb-4 w-full"
          />
          {shouldShowError ? (
            <div className="text-red-600 text-sm">
              Error: Board with same name already exists
            </div>
          ) : null}
          <div className="flex">
            <button
              onClick={handleSubmit}
              className="mt-4 bg-white text-violet-500 rounded-lg px-4 py-2 font-semibold hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Add Board
            </button>
            <button
              onClick={closeModal}
              className="ml-2 mt-4 bg-white text-red-500 rounded-lg px-4 py-2 font-semibold hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
