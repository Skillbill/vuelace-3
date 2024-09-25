import { VLInputRuleType } from '../utils/types';

declare const _default: import('vue').DefineComponent<{
    modelValue: import('vue').PropType<string | null>;
    name: {
        type: import('vue').PropType<string>;
        default: string;
    };
    error: {
        type: import('vue').PropType<string>;
        default: string;
    };
    label: {
        type: import('vue').PropType<string>;
        required: true;
        default: string;
    };
    onError: {
        type: import('vue').PropType<(error: import('..').VLFileInputErrorEvent) => void>;
    };
    class: {
        type: import('vue').PropType<string>;
    };
    helpText: {
        type: import('vue').PropType<string>;
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
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    imgStyle: {
        type: import('vue').PropType<string>;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string | null>;
    name: {
        type: import('vue').PropType<string>;
        default: string;
    };
    error: {
        type: import('vue').PropType<string>;
        default: string;
    };
    label: {
        type: import('vue').PropType<string>;
        required: true;
        default: string;
    };
    onError: {
        type: import('vue').PropType<(error: import('..').VLFileInputErrorEvent) => void>;
    };
    class: {
        type: import('vue').PropType<string>;
    };
    helpText: {
        type: import('vue').PropType<string>;
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
    required: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('vue').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    imgStyle: {
        type: import('vue').PropType<string>;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    error: string;
    label: string;
    clearable: boolean;
    disabled: boolean;
    placeholder: string;
    required: boolean;
    rules: VLInputRuleType[];
}, {}>;
export default _default;
