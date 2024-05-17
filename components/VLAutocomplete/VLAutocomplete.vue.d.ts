import { VLSelectOptionType } from '../VLSelect';
import { VLInputRuleType } from '../utils/types';

declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    suggestions: import('../../../vue/dist/vue.esm-bundler.js').PropType<any>;
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    onFocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: Event) => void>;
    };
    onBlur: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: Event) => void>;
    };
    onChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteChangeEvent) => void>;
    };
    onClick: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: Event) => void>;
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
    onClear: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
    options: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLSelectOptionType[]>;
        default: () => VLSelectOptionType[];
    };
    onShow: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
    onHide: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
    emptySearchMessage: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    optionLabel: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    labelClass: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    onItemSelect: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteItemSelectEvent) => void>;
    };
    onItemUnselect: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteItemUnselectEvent) => void>;
    };
    onDropdownClick: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteDropdownClickEvent) => void>;
    };
    onComplete: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteCompleteEvent) => void>;
    };
    onBeforeShow: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
    onBeforeHide: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    clear: (...args: any[]) => void;
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
    click: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "item-select": (...args: any[]) => void;
    "item-unselect": (...args: any[]) => void;
    "dropdown-click": (...args: any[]) => void;
    complete: (...args: any[]) => void;
    "before-show": (...args: any[]) => void;
    "before-hide": (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    suggestions: import('../../../vue/dist/vue.esm-bundler.js').PropType<any>;
    modelValue: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    error: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    label: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    onFocus: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: Event) => void>;
    };
    onBlur: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: Event) => void>;
    };
    onChange: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteChangeEvent) => void>;
    };
    onClick: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: Event) => void>;
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
    onClear: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
    options: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<VLSelectOptionType[]>;
        default: () => VLSelectOptionType[];
    };
    onShow: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
    onHide: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
    emptySearchMessage: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    optionLabel: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    labelClass: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<string>;
    };
    onItemSelect: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteItemSelectEvent) => void>;
    };
    onItemUnselect: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteItemUnselectEvent) => void>;
    };
    onDropdownClick: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteDropdownClickEvent) => void>;
    };
    onComplete: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<(evt: import('primevue/autocomplete').AutoCompleteCompleteEvent) => void>;
    };
    onBeforeShow: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
    onBeforeHide: {
        type: import('../../../vue/dist/vue.esm-bundler.js').PropType<() => void>;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onComplete?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onItem-select"?: ((...args: any[]) => any) | undefined;
    "onItem-unselect"?: ((...args: any[]) => any) | undefined;
    "onDropdown-click"?: ((...args: any[]) => any) | undefined;
    "onBefore-show"?: ((...args: any[]) => any) | undefined;
    "onBefore-hide"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    required: boolean;
    rules: VLInputRuleType[];
    options: VLSelectOptionType[];
}, {}>;
export default _default;
