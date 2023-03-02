import { WritableComputedRef } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: false;
        default: undefined;
    };
    value: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: any;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    selected: WritableComputedRef<string | number | boolean | object> | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: false;
        default: undefined;
    };
    value: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean | Record<string, any>;
    disabled: boolean;
}>;
export default _sfc_main;
