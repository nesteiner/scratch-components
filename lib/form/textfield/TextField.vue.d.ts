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
        flex: import("vue").ComputedRef<string>;
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
            type: import("vue").PropType<"center" | "start" | "end" | "space-around" | "space-between" | "space-evenly">;
            default: string;
        };
        crossAxisAligment: {
            type: import("vue").PropType<"center" | "start" | "end" | "space-around" | "space-between" | "space-evenly">;
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
        display: import("vue").ComputedRef<"inline-flex" | "flex">;
        mappingAxisAligment: (alignment: "center" | "start" | "end" | "space-around" | "space-between" | "space-evenly") => string;
        mappingAxisSize: (size: "max" | "min") => string;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        mainAxisAligment: {
            type: import("vue").PropType<"center" | "start" | "end" | "space-around" | "space-between" | "space-evenly">;
            default: string;
        };
        crossAxisAligment: {
            type: import("vue").PropType<"center" | "start" | "end" | "space-around" | "space-between" | "space-evenly">;
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
        mainAxisAligment: "center" | "start" | "end" | "space-around" | "space-between" | "space-evenly";
        crossAxisAligment: "center" | "start" | "end" | "space-around" | "space-between" | "space-evenly";
        mainAxisSize: "max" | "min";
        inline: boolean;
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
    type: string;
    disabled: boolean;
    maxlength: number;
    clearable: boolean;
    placeholder: string;
}>;
export default _sfc_main;
