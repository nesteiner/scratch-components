import { WritableComputedRef } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: true;
    };
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: false;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
}, {
    props: any;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    selected: WritableComputedRef<string | number | boolean | object> | undefined;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: true;
    };
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: false;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean | Record<string, any>;
    disabled: boolean;
}>;
export default _sfc_main;
