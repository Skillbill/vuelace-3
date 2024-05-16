import { VLInputRuleType } from '../utils/types';
import { VLSelectOptionType } from '../VLSelect';
import { VLCrudInputFieldType, VLCrudInputValueType } from '../VLCrudInput';

export interface VLCrudFormFieldType {
    i18n_key: string;
    value: string;
    input_type: VLCrudInputFieldType;
    options?: VLSelectOptionType[];
    default_value?: VLCrudInputValueType;
    class?: string;
    label: string;
    rules?: VLInputRuleType[];
    disabled?: boolean;
    required?: boolean;
    img_style?: string;
    hidden?: boolean;
    hidden_on_create?: boolean;
    disabled_on_edit?: boolean;
    placeholder?: string;
    side_effect?: (model: {
        [key: string]: VLCrudInputValueType;
    }, fields: {
        [key: string]: Omit<VLCrudFormFieldType, 'side_effect'>;
    }) => void;
}
export interface VLCrudFormProps {
    modelValue?: {
        [key: string]: VLCrudInputValueType;
    };
    type: 'add' | 'edit';
    fields: VLCrudFormFieldType[];
    title: string;
    cancelLabel: string;
    confirmLabel: string;
    requiredRuleMessage: string;
    validateAll?: boolean;
    primaryKey: string;
}
