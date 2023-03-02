type valueType = number | string | boolean | object;
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
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
            type: import("vue").PropType<"center" | "start" | "end" | "space-around" | "space-between" | "space-evenly">;
            default: string;
        };
        crossAxisAligment: {
            type: import("vue").PropType<"center" | "start" | "end" | "space-around" | "space-between" | "space-evenly">;
            default: string;
        };
        mainAxisSize: {
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
        display: import("vue").ComputedRef<"inline-flex" | "flex">;
        mappingAxisAligment: (alignment: "center" | "start" | "end" | "space-around" | "space-between" | "space-evenly") => string;
        mappingAxisSize: (size: "max" | "min") => string;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        mainAxisAligment: {
            type: import("vue").PropType<"center" | "start" | "end" | "space-around" | "space-between" | "space-evenly">;
            default: string;
        };
        crossAxisAligment: {
            type: import("vue").PropType<"center" | "start" | "end" | "space-around" | "space-between" | "space-evenly">;
            default: string;
        };
        mainAxisSize: {
            type: import("vue").PropType<"max" | "min">;
            default: string;
        };
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>, {
        mainAxisAligment: "center" | "start" | "end" | "space-around" | "space-between" | "space-evenly";
        crossAxisAligment: "center" | "start" | "end" | "space-around" | "space-between" | "space-evenly";
        mainAxisSize: "max" | "min";
        inline: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
