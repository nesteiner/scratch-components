declare const _sfc_main: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    maxlength: {
        type: NumberConstructor;
        required: false;
        default: undefined;
    };
    clearable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: any;
    emits: (event: "update:modelValue", ...args: any[]) => void;
    clear: () => void;
    updateInput: (event: Event) => void;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    maxlength: {
        type: NumberConstructor;
        required: false;
        default: undefined;
    };
    clearable: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    type: string;
    maxlength: number;
    clearable: boolean;
    placeholder: string;
}>;
export default _sfc_main;
