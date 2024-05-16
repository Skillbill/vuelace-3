import { VLCrudInputValueType } from './types';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLCrudInputValueType>;
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
    };
    onError: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(error: import('..').VLFileInputErrorEvent) => void>;
    };
    type: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./types').VLCrudInputFieldType>;
        required: true;
    };
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('..').VLInputRuleType[]>;
    };
    options: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('../VLSelect').VLSelectOptionType[]>;
    };
    input_name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
    };
    initialValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | number | boolean | Date>;
    };
    img_style: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}, {
    validateInput: () => boolean;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    error: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLCrudInputValueType>;
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
    };
    onError: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(error: import('..').VLFileInputErrorEvent) => void>;
    };
    type: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./types').VLCrudInputFieldType>;
        required: true;
    };
    disabled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    placeholder: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('..').VLInputRuleType[]>;
    };
    options: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('../VLSelect').VLSelectOptionType[]>;
    };
    input_name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
    };
    initialValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | number | boolean | Date>;
    };
    img_style: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    required: boolean;
}, {}>;
export default _default;
