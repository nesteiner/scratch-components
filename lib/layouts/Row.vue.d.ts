import { PropType } from 'vue';
type MainAxisAlignment = 'center' | 'start' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
type CrossAxisAlignment = 'center' | 'start' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
type MainAxisSize = "max" | "min";
type CrossAxisSize = "max" | "min";
declare const _sfc_main: import("vue").DefineComponent<{
    mainAxisAligment: {
        type: PropType<MainAxisAlignment>;
        default: string;
    };
    crossAxisAligment: {
        type: PropType<CrossAxisAlignment>;
        default: string;
    };
    mainAxisSize: {
        type: PropType<MainAxisSize>;
        default: string;
    };
    crossAxisSize: {
        type: PropType<CrossAxisSize>;
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
    mappingAxisAligment: (alignment: MainAxisAlignment | CrossAxisAlignment) => string;
    mappingAxisSize: (size: MainAxisSize | CrossAxisSize) => string;
    style: import("vue").CSSProperties;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mainAxisAligment: {
        type: PropType<MainAxisAlignment>;
        default: string;
    };
    crossAxisAligment: {
        type: PropType<CrossAxisAlignment>;
        default: string;
    };
    mainAxisSize: {
        type: PropType<MainAxisSize>;
        default: string;
    };
    crossAxisSize: {
        type: PropType<CrossAxisSize>;
        default: string;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    inline: boolean;
    mainAxisAligment: MainAxisAlignment;
    crossAxisAligment: CrossAxisAlignment;
    mainAxisSize: MainAxisSize;
    crossAxisSize: CrossAxisSize;
}>;
export default _sfc_main;
