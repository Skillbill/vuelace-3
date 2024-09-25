import { VLInputRuleType } from '../utils/types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<File | File[] | null>;
    name: {
        type: import('vue').PropType<string>;
    };
    error: {
        type: import('vue').PropType<string>;
    };
    label: {
        type: import('vue').PropType<string>;
        required: true;
        default: string;
    };
    onError: {
        type: import('vue').PropType<(error: import('./types').VLFileInputErrorEvent) => void>;
    };
    helpText: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    multiple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    accept: {
        type: import('vue').PropType<string>;
    };
    acceptedTypes: {
        type: import('vue').PropType<string[]>;
    };
    maxFileSize: {
        type: import('vue').PropType<number>;
    };
    fileLimit: {
        type: import('vue').PropType<number>;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<File | File[] | null>;
    name: {
        type: import('vue').PropType<string>;
    };
    error: {
        type: import('vue').PropType<string>;
    };
    label: {
        type: import('vue').PropType<string>;
        required: true;
        default: string;
    };
    onError: {
        type: import('vue').PropType<(error: import('./types').VLFileInputErrorEvent) => void>;
    };
    helpText: {
        type: import('vue').PropType<string>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('vue').PropType<string>;
    };
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    multiple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    accept: {
        type: import('vue').PropType<string>;
    };
    acceptedTypes: {
        type: import('vue').PropType<string[]>;
    };
    maxFileSize: {
        type: import('vue').PropType<number>;
    };
    fileLimit: {
        type: import('vue').PropType<number>;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    disabled: boolean;
    required: boolean;
    rules: VLInputRuleType[];
    multiple: boolean;
}, {}>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
