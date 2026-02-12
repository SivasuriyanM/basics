import { openModal, closeModal } from './modal.js';

export default {
  title: 'Components / Modal',
  
};

export const Default = () => `
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal__header">Modal Title</div>
      <div class="modal__body">
        This modal demonstrates fixed positioning,
        stacking context control, and token-based spacing.
      </div>
      <div class="modal__footer">
        <button>Cancel</button>
        <button>Confirm</button>
      </div>
    </div>
  </div>
`;
