declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    props: any;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    selected: import("vue").WritableComputedRef<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
