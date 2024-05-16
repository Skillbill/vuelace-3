import { VLInputRuleType } from '../utils/types';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | null>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
        default: string;
    };
    onError: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(error: import('..').VLFileInputErrorEvent) => void>;
    };
    class: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    helpText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
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
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    imgStyle: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    error: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | null>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
        default: string;
    };
    onError: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(error: import('..').VLFileInputErrorEvent) => void>;
    };
    class: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    helpText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
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
    required: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    rules: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    imgStyle: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
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
