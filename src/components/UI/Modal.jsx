import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';

const Modal = ({ children, setIsModalOpen, title, ok }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("modal DOM'a yüklendi.");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      console.log(i);
    }, 1000);

    // clean-up function
    return () => {
      console.log("modal DOM'dan kaldırıldı.");
      clearInterval(id);
    };
  }, []);

  function handleCloseModal() {
    setIsModalOpen();
  }

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="w-full h-full absolute  top-0 left-0"
        onClick={handleCloseModal}
      ></div>
      <div className="bg-white rounded-lg w-[600px] p-6 relative z-40">
        {/* Modal başlık */}
        <div className="flex justify-between items-center mb-4">
          {count}
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={handleCloseModal}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            X
          </button>
        </div>

        {/* Modal içeriği */}
        <div className="mb-4">{children}</div>

        {/* Modal alt kısmı */}
        <div className="flex justify-end gap-2">
          {ok && (
            <Button onClick={handleCloseModal} color="success">
              Okey
            </Button>
          )}
          <Button onClick={handleCloseModal}>Kapat</Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
