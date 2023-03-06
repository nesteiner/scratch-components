import { WritableComputedRef } from "vue";
type valueType = number | string | boolean | object;
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        required: false;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    value: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
}, {
    props: any;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    selected: WritableComputedRef<valueType[]> | undefined;
    ischecked: import("vue").ComputedRef<boolean>;
    updateInput: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        required: false;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    value: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor | NumberConstructor)[];
        required: true;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: unknown[];
}>;
export default _sfc_main;
