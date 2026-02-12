export const openModal = () => {
  document.querySelector('.modal-overlay')
    .style.display = 'flex';
};

export const closeModal = () => {
  document.querySelector('.modal-overlay')
    .style.display = 'none';
};
