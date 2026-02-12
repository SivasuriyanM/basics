

export default {
  title: 'Components / Card',
  argTypes: {
    interactive: { control: 'boolean' },
  },
};

export const Default = ({ interactive }) => `
  <div class="container container--md">
    <div class="card ${interactive ? 'card--interactive' : ''}">
      <div class="card__header">Card Title</div>
      <div class="card__body">
        This card demonstrates layout using flexbox,
        spacing tokens, and structural consistency.
      </div>
      <div class="card__footer">
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  </div>
`;

Default.args = {
  interactive: false,
};
