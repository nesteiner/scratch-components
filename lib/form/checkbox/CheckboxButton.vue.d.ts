import { WritableComputedRef } from "vue";
type valueType = number | string | boolean | object;
declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        required: false;
        default: undefined;
    };
    value: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
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
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        required: false;
        default: undefined;
    };
    value: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: unknown[];
    disabled: boolean;
}>;
export default _sfc_main;
