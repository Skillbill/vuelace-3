import { VLInputRuleType, SlFocusEvent, SlBlurEvent, SlInputEvent, SlInvalidEvent, SlClearEvent, SlChangeEvent } from '../utils/types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<any>;
    name: {
        type: import('vue').PropType<string>;
        default: string;
    };
    error: {
        type: import('vue').PropType<string>;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    label: {
        type: import('vue').PropType<string>;
        required: true;
        default: string;
    };
    title: {
        type: import('vue').PropType<string>;
    };
    onFocus: {
        type: import('vue').PropType<(e: SlFocusEvent) => void>;
    };
    onBlur: {
        type: import('vue').PropType<(e: SlBlurEvent) => void>;
    };
    onChange: {
        type: import('vue').PropType<(e: SlChangeEvent) => void>;
    };
    onInput: {
        type: import('vue').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('vue').PropType<(e: SlInvalidEvent) => void>;
    };
    type: {
        type: import('vue').PropType<"text" | "password" | "email">;
        default: string;
    };
    defaultValue: {
        type: import('vue').PropType<string>;
        default: string;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large">;
        default: string;
    };
    filled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    pill: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    helpText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('vue').PropType<string>;
        default: string;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    passwordToggle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autocapitalize: {
        type: import('vue').PropType<"off" | "none" | "on" | "sentences" | "words" | "characters">;
        default: string;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
    };
    autocorrect: {
        type: import('vue').PropType<"off" | "on">;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    spellcheck: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    inputmode: {
        type: import('vue').PropType<"text" | "email" | "none">;
        default: string;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    onClear: {
        type: import('vue').PropType<(e: SlClearEvent) => void>;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    clear: (...args: any[]) => void;
    invalid: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<any>;
    name: {
        type: import('vue').PropType<string>;
        default: string;
    };
    error: {
        type: import('vue').PropType<string>;
    };
    form: {
        type: import('vue').PropType<string>;
        default: undefined;
    };
    label: {
        type: import('vue').PropType<string>;
        required: true;
        default: string;
    };
    title: {
        type: import('vue').PropType<string>;
    };
    onFocus: {
        type: import('vue').PropType<(e: SlFocusEvent) => void>;
    };
    onBlur: {
        type: import('vue').PropType<(e: SlBlurEvent) => void>;
    };
    onChange: {
        type: import('vue').PropType<(e: SlChangeEvent) => void>;
    };
    onInput: {
        type: import('vue').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('vue').PropType<(e: SlInvalidEvent) => void>;
    };
    type: {
        type: import('vue').PropType<"text" | "password" | "email">;
        default: string;
    };
    defaultValue: {
        type: import('vue').PropType<string>;
        default: string;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large">;
        default: string;
    };
    filled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    pill: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    helpText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    clearable: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('vue').PropType<string>;
        default: string;
    };
    readonly: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    passwordToggle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autocapitalize: {
        type: import('vue').PropType<"off" | "none" | "on" | "sentences" | "words" | "characters">;
        default: string;
    };
    autocomplete: {
        type: import('vue').PropType<string>;
    };
    autocorrect: {
        type: import('vue').PropType<"off" | "on">;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    spellcheck: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    inputmode: {
        type: import('vue').PropType<"text" | "email" | "none">;
        default: string;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    onClear: {
        type: import('vue').PropType<(e: SlClearEvent) => void>;
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
    form: string;
    label: string;
    type: "text" | "password" | "email";
    defaultValue: string;
    size: "small" | "medium" | "large";
    filled: boolean;
    pill: boolean;
    helpText: string;
    clearable: boolean;
    disabled: boolean;
    placeholder: string;
    readonly: boolean;
    passwordToggle: boolean;
    required: boolean;
    autocapitalize: "off" | "none" | "on" | "sentences" | "words" | "characters";
    autofocus: boolean;
    spellcheck: boolean;
    inputmode: "text" | "email" | "none";
    rules: VLInputRuleType[];
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
