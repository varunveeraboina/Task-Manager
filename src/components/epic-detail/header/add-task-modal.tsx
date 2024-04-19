import { useState } from 'react';
import { createNewTask } from '@/redux/action';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

const Modal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [formData, setFormData] = useState({
    label: '',
    status: '',
  });
  const searchParams = useSearchParams();
  const selectedBoard = searchParams.get('selectedBoard');

  const [shouldShowError, setShouldShowError] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Add your submit logic here
    if (!!formData.label && !!formData.status) {
      setShouldShowError(false);
      dispatch(createNewTask(formData.label, selectedBoard, formData.status));
      setTimeout(closeModal, 1000);
    } else {
      setShouldShowError(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-violet-500 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Task Name</h2>
          <input
            type="text"
            name="label"
            required
            value={formData.label}
            onChange={handleChange}
            placeholder="Input 1"
            className="text-black bg-white rounded-lg px-4 py-2 mb-4 w-full"
          />
          <select
            id="myDropdown"
            name="status"
            required
            value={formData.status}
            onChange={handleChange}
            className="text-black"
          >
            <option value="todo">ToDo</option>
            <option value="doing">Doing</option>
            <option value="complete">Completed</option>
          </select>
          {shouldShowError ? (
            <div className="text-red-600 text-sm mt-4">
              Error: Task name and status can't be null
            </div>
          ) : null}
          <div className="flex">
            <button
              onClick={handleSubmit}
              className="mt-4 bg-white text-violet-500 rounded-lg px-4 py-2 font-semibold hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Add Task
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
