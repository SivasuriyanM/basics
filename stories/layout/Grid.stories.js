export default {
  title: 'Layout / CSS Grid',
  argTypes: {
    columns: {
      control: 'select',
      options: [
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
        '200px 1fr 1fr',
        'repeat(auto-fill, minmax(120px, 1fr))',
        'repeat(auto-fit, minmax(120px, 1fr))',
      ],
    },
    rows: {
      control: 'select',
      options: [
        'auto',
        '100px 1fr',
        'repeat(2, 1fr)',
      ],
    },
    gap: {
      control: { type: 'range', min: 0, max: 32, step: 4 },
    },
  },
};

export const Playground = ({ columns, rows, gap }) => {
  return `
    <div class="grid-wrapper">
      <div
        class="grid-container"
        style="
          --columns: ${columns};
          --rows: ${rows};
          --gap: ${gap}px;
        "
      >
        ${Array.from({ length: 6 })
          .map(
            (_, i) =>
              `<div class="grid-item">${i + 1}</div>`
          )
          .join('')}
      </div>
    </div>
  `;
};
export const DashboardLayout = () => `
  <div class="dashboard-layout">
    <div class="sidebar grid-item">Sidebar</div>
    <div class="header grid-item">Header</div>
    <div class="content grid-item">Content</div>
  </div>
`;

Playground.args = {
  columns: 'repeat(3, 1fr)',
  rows: 'auto',
  gap: 8,
};
