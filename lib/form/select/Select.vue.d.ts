type valueType = number | string | boolean | object;
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: true;
    };
}, {
    props: any;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    open: import("vue").Ref<boolean>;
    selected: import("vue").Ref<valueType>;
    options: import("vue").Ref<valueType[]>;
    handleBlur: () => boolean;
    handleClick: () => boolean;
    clickOption: (option: valueType) => void;
    readonly Row: import("vue").DefineComponent<{
        mainAxisAligment: {
            type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start">;
            default: string;
        };
        crossAxisAligment: {
            type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start">;
            default: string;
        };
        mainAxisSize: {
            type: import("vue").PropType<"max" | "min">;
            default: string;
        };
        crossAxisSize: {
            type: import("vue").PropType<"max" | "min">;
            default: string;
        };
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        props: any;
        mainAxisAligment: import("vue").ComputedRef<string>;
        crossAxisAligment: import("vue").ComputedRef<string>;
        mainAxisSize: import("vue").ComputedRef<string>;
        crossAxisSize: import("vue").ComputedRef<string>;
        display: import("vue").ComputedRef<"flex" | "inline-flex">;
        mappingAxisAligment: (alignment: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start") => string;
        mappingAxisSize: (size: "max" | "min") => string;
        style: import("vue").CSSProperties;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        mainAxisAligment: {
            type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start">;
            default: string;
        };
        crossAxisAligment: {
            type: import("vue").PropType<"space-around" | "space-between" | "space-evenly" | "center" | "end" | "start">;
            default: string;
        };
        mainAxisSize: {
            type: import("vue").PropType<"max" | "min">;
            default: string;
        };
        crossAxisSize: {
            type: import("vue").PropType<"max" | "min">;
            default: string;
        };
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>, {
        inline: boolean;
        mainAxisAligment: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        crossAxisAligment: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        mainAxisSize: "max" | "min";
        crossAxisSize: "max" | "min";
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
