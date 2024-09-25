import { VLInputRuleType, SlBlurEvent, SlFocusEvent, SlInvalidEvent, SlInputEvent, SlChangeEvent } from '../utils/types';

declare const _default: import('vue').DefineComponent<{
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
    helpText: {
        type: import('vue').PropType<string>;
        default: string;
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
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autocapitalize: {
        type: import('vue').PropType<"off" | "none" | "on" | "sentences" | "words" | "characters">;
        default: string;
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
        type: import('vue').PropType<"text" | "email" | "none" | "search" | "tel" | "url" | "decimal" | "numeric">;
        default: string;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    rows: {
        type: import('vue').PropType<number>;
        default: number;
    };
    resize: {
        type: import('vue').PropType<"none" | "vertical" | "auto">;
        default: string;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
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
    helpText: {
        type: import('vue').PropType<string>;
        default: string;
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
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    autocapitalize: {
        type: import('vue').PropType<"off" | "none" | "on" | "sentences" | "words" | "characters">;
        default: string;
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
        type: import('vue').PropType<"text" | "email" | "none" | "search" | "tel" | "url" | "decimal" | "numeric">;
        default: string;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    rows: {
        type: import('vue').PropType<number>;
        default: number;
    };
    resize: {
        type: import('vue').PropType<"none" | "vertical" | "auto">;
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
