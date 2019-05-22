import React from 'react';

const Notification = ({ store }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    store.getState().notification.message !== '' &&
      <div style={style}>
        {store.getState().notification.message}
      </div>
  )
}

export default Notification
