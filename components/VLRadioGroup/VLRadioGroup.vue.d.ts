import { VLInputRuleType, SlInputEvent, SlInvalidEvent } from '../utils/types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<any>;
    name: {
        type: import('vue').PropType<string>;
        default: string;
    };
    error: {
        type: import('vue').PropType<string>;
        default: string;
    };
    form: {
        type: import('vue').PropType<string>;
        default: string;
    };
    label: {
        type: import('vue').PropType<string>;
        default: string;
    };
    onChange: {
        type: import('vue').PropType<(e: import('../utils/types').SlChangeEvent) => void>;
    };
    onInput: {
        type: import('vue').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('vue').PropType<(e: SlInvalidEvent) => void>;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large">;
        default: string;
    };
    helpText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    options: {
        type: import('vue').PropType<import('./types').Radio[]>;
        required: true;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (...args: any[]) => void;
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
        default: string;
    };
    form: {
        type: import('vue').PropType<string>;
        default: string;
    };
    label: {
        type: import('vue').PropType<string>;
        default: string;
    };
    onChange: {
        type: import('vue').PropType<(e: import('../utils/types').SlChangeEvent) => void>;
    };
    onInput: {
        type: import('vue').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('vue').PropType<(e: SlInvalidEvent) => void>;
    };
    size: {
        type: import('vue').PropType<"small" | "medium" | "large">;
        default: string;
    };
    helpText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    options: {
        type: import('vue').PropType<import('./types').Radio[]>;
        required: true;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onInvalid?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    error: string;
    form: string;
    label: string;
    size: "small" | "medium" | "large";
    helpText: string;
    required: boolean;
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
