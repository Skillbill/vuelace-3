import { VLInputRuleType, SlFocusEvent, SlBlurEvent, SlInputEvent, SlInvalidEvent, SlClearEvent, SlChangeEvent } from '../utils/types';

declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<number | undefined>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    form: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: undefined;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    title: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    onFocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlFocusEvent) => void>;
    };
    onBlur: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlBlurEvent) => void>;
    };
    onChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlChangeEvent) => void>;
    };
    onInput: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInvalidEvent) => void>;
    };
    defaultValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: undefined;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    filled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    pill: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    helpText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    clearable: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    readonly: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    autocomplete: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    autofocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    onClear: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlClearEvent) => void>;
    };
    noSpinButtons: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    min: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: undefined;
    };
    max: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: undefined;
    };
    step: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number | "any">;
        default: number;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    input: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    clear: (...args: any[]) => void;
    invalid: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<number | undefined>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    form: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: undefined;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    title: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    onFocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlFocusEvent) => void>;
    };
    onBlur: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlBlurEvent) => void>;
    };
    onChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlChangeEvent) => void>;
    };
    onInput: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInvalidEvent) => void>;
    };
    defaultValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: undefined;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    filled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    pill: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    helpText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    clearable: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    readonly: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    autocomplete: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    autofocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    onClear: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlClearEvent) => void>;
    };
    noSpinButtons: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    min: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: undefined;
    };
    max: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: undefined;
    };
    step: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number | "any">;
        default: number;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onInvalid?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    error: string;
    form: string;
    label: string;
    defaultValue: string;
    size: "small" | "medium" | "large";
    filled: boolean;
    pill: boolean;
    helpText: string;
    clearable: boolean;
    disabled: boolean;
    placeholder: string;
    readonly: boolean;
    required: boolean;
    autofocus: boolean;
    rules: VLInputRuleType[];
    noSpinButtons: boolean;
    min: number;
    max: number;
    step: number | "any";
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
