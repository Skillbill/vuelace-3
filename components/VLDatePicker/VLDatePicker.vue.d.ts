import { VLInputRuleType } from '../utils/types';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date | Date[] | undefined>;
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
    };
    defaultValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
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
    format: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    selectionMode: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"multiple" | "single" | "range">;
        default: string;
    };
    minDate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date>;
        default: undefined;
    };
    maxDate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date>;
        default: undefined;
    };
    withTime: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date | Date[] | undefined>;
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
    };
    defaultValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
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
    format: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    selectionMode: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"multiple" | "single" | "range">;
        default: string;
    };
    minDate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date>;
        default: undefined;
    };
    maxDate: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<Date>;
        default: undefined;
    };
    withTime: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
}>>, {
    name: string;
    error: string;
    defaultValue: string;
    clearable: boolean;
    disabled: boolean;
    placeholder: string;
    required: boolean;
    rules: VLInputRuleType[];
    selectionMode: "multiple" | "single" | "range";
    minDate: Date;
    maxDate: Date;
    withTime: boolean;
}, {}>;
export default _default;
