export default {
  title: 'Layout / Flexbox',
  argTypes: {
    direction: {
      control: 'radio',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    align: {
      control: 'select',
      options: [
        'stretch',
        'flex-start',
        'center',
        'flex-end',
      ],
    },
    gap: {
      control: { type: 'range', min: 0, max: 32, step: 4 },
    },
    grow: {
      control: { type: 'range', min: 0, max: 2, step: 1 },
    },
    shrink: {
      control: { type: 'range', min: 0, max: 1, step: 1 },
    },
    basis: {
      control: { type: 'range', min: 50, max: 150, step: 25 },
    },
  },
};

export const Playground = ({
  direction,
  justify,
  align,
  gap,
  grow,
  shrink,
  basis,
}) => {
  return `
    <div class="flex-wrapper">
      <div
        class="flex-container"
        style="
          --direction: ${direction};
          --justify: ${justify};
          --align: ${align};
          --gap: ${gap}px;
        "
      >
        ${[1, 2, 3].map(
          i => `
          <div
            class="flex-item"
            style="
              --grow: ${grow};
              --shrink: ${shrink};
              --basis: ${basis}px;
            "
          >
            ${i}
          </div>
        `
        ).join('')}
      </div>
    </div>
  `;
};

Playground.args = {
  direction: 'row',
  justify: 'flex-start',
  align: 'stretch',
  gap: 8,
  grow: 0,
  shrink: 1,
  basis: 80,
};
