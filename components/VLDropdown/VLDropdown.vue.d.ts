import { VLSelectOptionType } from '../VLSelect';
import { VLInputRuleType } from '../utils/types';

declare const _default: import('vue').DefineComponent<{
    modelValue: import('vue').PropType<string | string[] | null | undefined>;
    name: {
        type: import('vue').PropType<string>;
        required: true;
    };
    error: {
        type: import('vue').PropType<string>;
    };
    label: {
        type: import('vue').PropType<string>;
        required: true;
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
    multiple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    options: {
        type: import('vue').PropType<VLSelectOptionType[]>;
        default: () => never[];
    };
    dropdown: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    manual: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<string | string[] | null | undefined>;
    name: {
        type: import('vue').PropType<string>;
        required: true;
    };
    error: {
        type: import('vue').PropType<string>;
    };
    label: {
        type: import('vue').PropType<string>;
        required: true;
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
    multiple: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    options: {
        type: import('vue').PropType<VLSelectOptionType[]>;
        default: () => never[];
    };
    dropdown: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    manual: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}>>, {
    disabled: boolean;
    placeholder: string;
    required: boolean;
    rules: VLInputRuleType[];
    multiple: boolean;
    options: VLSelectOptionType[];
    dropdown: boolean;
    manual: boolean;
}, {}>;
export default _default;
