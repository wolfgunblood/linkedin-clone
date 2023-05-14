import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./ModalComponent.scss";

const ModalComponent = ({
  status,
  setStatus,
  showModal,
  openModal,
  closeModal,
}) => {
  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={showModal}
        onOk={() => {
          openModal();
        }}
        onCancel={() => {
          closeModal();
        }}
        footer={[
          <Button
            key="submit"
            type='primary'
            onClick={() => { }}
            disabled={status.length > 0 ? false : true}
          >
            Post
          </Button>,
        ]}
      >
        <div className='posts-body'>
          <ReactQuill
            className='modal-input'
            theme='snow'
            placeholder='Write something....'
            value={status}
            onChange={(e) => setStatus(e)}
          />
        </div>
      </Modal>
    </>
  )
}

export default ModalComponent