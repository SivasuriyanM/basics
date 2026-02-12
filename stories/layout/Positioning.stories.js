export default {
  title:'Layout / Positioning',
  argTypes:{
    position:{
      control:'radio',
      options:['static', 'relative', 'absolute', 'fixed', 'sticky'],
    },
    parentPosition:{
      control:'radio',
      options:['static', 'relative'],
    },
    top:{
      control:{ type:'range', min:-50, max:200, step:10},
    },

    left:{
      control:{ type:'range', min:-50, max:200, step:10},
    },
  },
}

export const Playground = ({
  position,
  parentPosition,
  top,
  left,
})=>{
  return `
  <div class="positioning-wrapper">
    <div class="positioning-scroll">
      <div
        class="positioning-parent"
        style="--parent-position: ${parentPosition}"
      >
        Parent Container
        <div
          class="positioning-box"
          style="
            --position: ${position};
            --top: ${top}px;
            --left: ${left}px;
          "
        >
          ${position}
        </div>
      </div>

      <p> Scroll down for sticky behavior</p>
      <p style="height: 600px;"></p>
    </div>
  </div>
  `;
};

Playground.args = {
  position:'static',
  parentPosition:'relative',
  top:20,
  left:20,
}


