import { VLInputRuleType, SlBlurEvent, SlFocusEvent, SlInvalidEvent, SlInputEvent, SlChangeEvent } from '../utils/types';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<any>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    form: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: undefined;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
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
    defaultValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    filled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    helpText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
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
    autocapitalize: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"off" | "none" | "on" | "sentences" | "words" | "characters">;
        default: string;
    };
    autocorrect: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"off" | "on">;
    };
    autofocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    spellcheck: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    inputmode: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"text" | "email" | "none" | "search" | "tel" | "url" | "decimal" | "numeric">;
        default: string;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    rows: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: number;
    };
    resize: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"none" | "vertical" | "auto">;
        default: string;
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
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<any>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    form: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: undefined;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
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
    defaultValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    filled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    helpText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
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
    autocapitalize: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"off" | "none" | "on" | "sentences" | "words" | "characters">;
        default: string;
    };
    autocorrect: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"off" | "on">;
    };
    autofocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    spellcheck: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    inputmode: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"text" | "email" | "none" | "search" | "tel" | "url" | "decimal" | "numeric">;
        default: string;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    rows: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: number;
    };
    resize: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"none" | "vertical" | "auto">;
        default: string;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onInvalid?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    form: string;
    label: string;
    defaultValue: string;
    size: "small" | "medium" | "large";
    filled: boolean;
    helpText: string;
    disabled: boolean;
    placeholder: string;
    readonly: boolean;
    required: boolean;
    autocapitalize: "off" | "none" | "on" | "sentences" | "words" | "characters";
    autofocus: boolean;
    spellcheck: boolean;
    inputmode: "text" | "email" | "none" | "search" | "tel" | "url" | "decimal" | "numeric";
    rules: VLInputRuleType[];
    rows: number;
    resize: "none" | "vertical" | "auto";
}, {}>;
export default _default;
