import { VLCrudInputValueType } from './types';

declare const _default: import('vue').DefineComponent<{
    modelValue: import('vue').PropType<VLCrudInputValueType>;
    label: {
        type: import('vue').PropType<string>;
        required: true;
    };
    onError: {
        type: import('vue').PropType<(error: import('..').VLFileInputErrorEvent) => void>;
    };
    type: {
        type: import('vue').PropType<import('./types').VLCrudInputFieldType>;
        required: true;
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
        type: import('vue').PropType<import('..').VLInputRuleType[]>;
    };
    multiple: {
        type: import('vue').PropType<boolean>;
    };
    options: {
        type: import('vue').PropType<import('../VLSelect').VLSelectOptionType[]>;
    };
    input_name: {
        type: import('vue').PropType<string>;
        required: true;
    };
    initialValue: {
        type: import('vue').PropType<string | number | boolean | Date>;
    };
    img_style: {
        type: import('vue').PropType<string>;
    };
}, {
    validateInput: () => boolean;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    error: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<VLCrudInputValueType>;
    label: {
        type: import('vue').PropType<string>;
        required: true;
    };
    onError: {
        type: import('vue').PropType<(error: import('..').VLFileInputErrorEvent) => void>;
    };
    type: {
        type: import('vue').PropType<import('./types').VLCrudInputFieldType>;
        required: true;
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
        type: import('vue').PropType<import('..').VLInputRuleType[]>;
    };
    multiple: {
        type: import('vue').PropType<boolean>;
    };
    options: {
        type: import('vue').PropType<import('../VLSelect').VLSelectOptionType[]>;
    };
    input_name: {
        type: import('vue').PropType<string>;
        required: true;
    };
    initialValue: {
        type: import('vue').PropType<string | number | boolean | Date>;
    };
    img_style: {
        type: import('vue').PropType<string>;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    required: boolean;
}, {}>;
export default _default;
