export default {
    title:'Layout/ Z-Index and Stacking Context',
    argTypes:{
        parentZ:{
            control:{
                type:'range',
                min:-1,
                max:10,
                step:1
            },
        },
        parentTransform:{
            control:"radio",
            options:["none", "translateZ(0)"],
        },
        zA:{
            control:{
                type:"range",
                min:0,
                max:10,
                step:1,
            },
        },
        zB:{
            control:{
                type:"range",
                min:0,
                max:10,
                step:1,
            },
        },
    },
};

export const Playground = ({
    parentZ,
    parentTransform,
    zA,
    zB,
}) => {
    return `
    <div class="stacking-wrapper">
        <div
            class="stacking-parent"
            style="
                --parent-z: ${parentZ};
                --parent-transform: ${parentTransform};
                "
        >
        Parent (Stacking Context)
            <div
                class="stacking-box box-a"
                style="--z-a: ${zA};"
            >
                Box A
            </div>
            <div
            class="stacking-box box-b"
            style="--z-b:${zB};"
            >
                Box B
            </div>
        </div>
    </div>
    `;
};

Playground.args = {
    parentZ: 0,
    parentTransform:"none",
    zA:1,
    zB:2,
};