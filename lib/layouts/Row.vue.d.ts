import { PropType } from 'vue';
type MainAxisAlignment = 'center' | 'start' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
type CrossAxisAlignment = 'center' | 'start' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
type MainAxisSize = "max" | "min";
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
    mappingAxisAligment: (alignment: MainAxisAlignment | CrossAxisAlignment) => string;
    mappingAxisSize: (size: MainAxisSize) => string;
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
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    mainAxisAligment: MainAxisAlignment;
    crossAxisAligment: CrossAxisAlignment;
    mainAxisSize: MainAxisSize;
    inline: boolean;
}>;
export default _sfc_main;
