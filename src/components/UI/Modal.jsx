import React from 'react';
import Button from './Button';

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[600px] p-6">
        {/* Modal başlık */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Modal Başlığı</h2>
          <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
            X
          </button>
        </div>

        {/* Modal içeriği */}
        <div className="mb-4">Modal İçeriği</div>

        {/* Modal alt kısmı */}
        <div className="flex justify-end">
          <Button>Kapat</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
