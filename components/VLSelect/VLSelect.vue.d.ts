import { VLSelectOptionType } from './types';
import { VLInputRuleType, SlFocusEvent, SlBlurEvent, SlAfterHideEvent, SlInputEvent, SlShowEvent, SlHideEvent, SlInvalidEvent, SlClearEvent, SlAfterShowEvent, SlChangeEvent } from '../utils/types';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | string[] | null | undefined>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    form: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: undefined;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    onFocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlFocusEvent) => void>;
    };
    onBlur: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlBlurEvent) => void>;
    };
    onChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlChangeEvent) => void>;
    };
    onInput: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInvalidEvent) => void>;
    };
    defaultValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | string[]>;
        default: string;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    filled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    pill: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    helpText: {
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
    onClear: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlClearEvent) => void>;
    };
    multiple: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    maxOptionsVisible: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: number;
    };
    placement: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"top" | "bottom">;
        default: string;
    };
    options: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLSelectOptionType[]>;
        required: true;
        default: () => VLSelectOptionType[];
    };
    getTag: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<Function>;
        default: (option: any) => string;
    };
    onShow: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlShowEvent) => void>;
    };
    onHide: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlHideEvent) => void>;
    };
    onAfterShow: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlAfterShowEvent) => void>;
    };
    onAfterHide: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlAfterHideEvent) => void>;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    input: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    clear: (...args: any[]) => void;
    invalid: (...args: any[]) => void;
    show: (...args: any[]) => void;
    "after-show": (...args: any[]) => void;
    hide: (...args: any[]) => void;
    "after-hide": (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | string[] | null | undefined>;
    name: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    form: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: undefined;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
        default: string;
    };
    onFocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlFocusEvent) => void>;
    };
    onBlur: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlBlurEvent) => void>;
    };
    onChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlChangeEvent) => void>;
    };
    onInput: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInputEvent) => void>;
    };
    onInvalid: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlInvalidEvent) => void>;
    };
    defaultValue: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string | string[]>;
        default: string;
    };
    size: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"small" | "medium" | "large">;
        default: string;
    };
    filled: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    pill: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    helpText: {
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
    onClear: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlClearEvent) => void>;
    };
    multiple: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<boolean>;
        default: boolean;
    };
    maxOptionsVisible: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<number>;
        default: number;
    };
    placement: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<"top" | "bottom">;
        default: string;
    };
    options: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLSelectOptionType[]>;
        required: true;
        default: () => VLSelectOptionType[];
    };
    getTag: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<Function>;
        default: (option: any) => string;
    };
    onShow: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlShowEvent) => void>;
    };
    onHide: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlHideEvent) => void>;
    };
    onAfterShow: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlAfterShowEvent) => void>;
    };
    onAfterHide: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(e: SlAfterHideEvent) => void>;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onInvalid?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    "onAfter-show"?: ((...args: any[]) => any) | undefined;
    "onAfter-hide"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    form: string;
    label: string;
    defaultValue: string | string[];
    size: "small" | "medium" | "large";
    filled: boolean;
    pill: boolean;
    helpText: string;
    clearable: boolean;
    disabled: boolean;
    placeholder: string;
    required: boolean;
    rules: VLInputRuleType[];
    multiple: boolean;
    maxOptionsVisible: number;
    placement: "top" | "bottom";
    options: VLSelectOptionType[];
    getTag: Function;
}, {}>;
export default _default;
