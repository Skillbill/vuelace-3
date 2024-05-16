import { VLInputRuleType, SlChangeEvent, SlFocusEvent, SlBlurEvent, SlInvalidEvent, SlInputEvent } from '../utils/types';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
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
        default: string;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
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
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    checked: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    indeterminate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    defaultChecked: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    input: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    invalid: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
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
        default: string;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
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
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    checked: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    indeterminate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    defaultChecked: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onInvalid?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    error: string;
    form: string;
    label: string;
    size: "small" | "medium" | "large";
    disabled: boolean;
    required: boolean;
    rules: VLInputRuleType[];
    checked: boolean;
    indeterminate: boolean;
    defaultChecked: boolean;
}, {}>;
export default _default;
