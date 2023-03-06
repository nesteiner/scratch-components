declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    max: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    emits: (event: "update:modelValue", ...args: any[]) => void;
    props: any;
    handleDec: () => void;
    handleInc: () => void;
    decDisable: import("vue").ComputedRef<boolean>;
    incDisable: import("vue").ComputedRef<boolean>;
    readonly Expanded: import("vue").DefineComponent<{
        flex: {
            type: NumberConstructor;
            default: number;
        };
    }, {
        props: any;
        flex: import("vue").ComputedRef<number>;
        style: import("vue").CSSProperties;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        flex: {
            type: NumberConstructor;
            default: number;
        };
    }>>, {
        flex: number;
    }>;
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
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, {
        props: any;
        mainAxisAligment: import("vue").ComputedRef<string>;
        crossAxisAligment: import("vue").ComputedRef<string>;
        mainAxisSize: import("vue").ComputedRef<string>;
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
        inline: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>>, {
        inline: boolean;
        mainAxisAligment: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        crossAxisAligment: "space-around" | "space-between" | "space-evenly" | "center" | "end" | "start";
        mainAxisSize: "max" | "min";
    }>;
    readonly SizedBox: import("vue").DefineComponent<{
        width: {
            type: NumberConstructor;
            default: number;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
    }, {
        props: any;
        width: import("vue").ComputedRef<string>;
        height: import("vue").ComputedRef<string>;
        style: import("vue").CSSProperties;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: NumberConstructor;
            default: number;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
    }>>, {
        width: number;
        height: number;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    max: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    max: number;
    min: number;
    step: number;
}>;
export default _sfc_main;
