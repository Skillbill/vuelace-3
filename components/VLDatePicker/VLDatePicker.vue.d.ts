import { VLInputRuleType } from '../utils/types';

declare const _default: import('vue').DefineComponent<{
    modelValue: import('vue').PropType<Date | Date[] | null | undefined>;
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
    };
    defaultValue: {
        type: import('vue').PropType<string>;
        default: string;
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
    format: {
        type: import('vue').PropType<string>;
    };
    selectionMode: {
        type: import('vue').PropType<"multiple" | "single" | "range">;
        default: string;
    };
    minDate: {
        type: import('vue').PropType<Date>;
        default: undefined;
    };
    maxDate: {
        type: import('vue').PropType<Date>;
        default: undefined;
    };
    withTime: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
}, {
    isValid: () => boolean;
    validateInput: () => boolean;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<Date | Date[] | null | undefined>;
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
    };
    defaultValue: {
        type: import('vue').PropType<string>;
        default: string;
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
    format: {
        type: import('vue').PropType<string>;
    };
    selectionMode: {
        type: import('vue').PropType<"multiple" | "single" | "range">;
        default: string;
    };
    minDate: {
        type: import('vue').PropType<Date>;
        default: undefined;
    };
    maxDate: {
        type: import('vue').PropType<Date>;
        default: undefined;
    };
    withTime: {
        type: import('vue').PropType<boolean>;
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
