import { VLInputRuleType } from '../utils/types';

declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<File | File[] | null>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
        default: string;
    };
    onError: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(error: import('./types').VLFileInputErrorEvent) => void>;
    };
    helpText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
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
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    multiple: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    accept: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    acceptedTypes: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string[]>;
    };
    maxFileSize: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
    };
    fileLimit: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    error: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<File | File[] | null>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        required: true;
        default: string;
    };
    onError: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(error: import('./types').VLFileInputErrorEvent) => void>;
    };
    helpText: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
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
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLInputRuleType[]>;
        default: () => VLInputRuleType[];
    };
    multiple: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    accept: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    acceptedTypes: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string[]>;
    };
    maxFileSize: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
    };
    fileLimit: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
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
