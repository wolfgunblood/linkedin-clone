import React,{ useState, useMemo } from 'react';
import './PostStatus.scss';
import ModalComponent from '../ModalComponent/ModalComponent';

const PostStatus = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState('');
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  // const ModalComponentMemo = useMemo(() => <ModalComponent showModal={showModal} closeModal={closeModal} />,[showModal]);
  // console.log(ModalComponentMemo);
  return (
    <div className='post-status-container'>
      <div className='user-details'>
        <button
          className='open-post-modal'
          onClick={openModal}
        >
          Start a Post
        </button>
      </div>
      <ModalComponent 
        showModal={showModal}
        setShowModal={setShowModal}
        closeModal={closeModal}
        openModal={openModal}
        status={status}
        setStatus={setStatus}
      />
    </div>
  )
}

export default PostStatus