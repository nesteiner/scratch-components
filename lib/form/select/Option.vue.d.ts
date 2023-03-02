import { Ref } from "vue";
type valueType = number | string | boolean | object;
declare const _sfc_main: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: true;
    };
}, {
    props: any;
    open: Ref<boolean> | undefined;
    selected: Ref<valueType | null> | undefined;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | BooleanConstructor | ObjectConstructor | NumberConstructor)[];
        required: true;
    };
}>>, {}>;
export default _sfc_main;
