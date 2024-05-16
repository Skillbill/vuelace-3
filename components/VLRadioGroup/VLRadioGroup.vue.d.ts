import { VLInputRuleType, SlInputEvent, SlInvalidEvent } from '../utils/types';

declare const _default: __VLS_WithTemplateSlots<import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<any>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    form: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    onChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: import('../utils/types').SlChangeEvent) => void>;
    };
    onInput: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInvalidEvent) => void>;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    helpText: {
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
    options: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./types').Radio[]>;
        required: true;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    input: (...args: any[]) => void;
    change: (...args: any[]) => void;
    invalid: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<any>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    form: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    onChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: import('../utils/types').SlChangeEvent) => void>;
    };
    onInput: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInvalidEvent) => void>;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    helpText: {
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
    options: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<import('./types').Radio[]>;
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
