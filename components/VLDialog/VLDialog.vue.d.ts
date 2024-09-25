import { SlAfterShowEvent, SlHideEvent, SlShowEvent, SlAfterHideEvent, SlInitialFocusEvent, SlRequestCloseEvent } from '../utils/types';

declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<{
    modelValue: import('vue').PropType<boolean>;
    label: {
        type: import('vue').PropType<string>;
    };
    noHeader: {
        type: import('vue').PropType<boolean>;
    };
    noCloseOnOutsideClick: {
        type: import('vue').PropType<boolean>;
    };
    onShow: {
        type: import('vue').PropType<(evt: SlShowEvent) => void>;
    };
    onAfterShow: {
        type: import('vue').PropType<(evt: SlAfterShowEvent) => void>;
    };
    onHide: {
        type: import('vue').PropType<(evt: SlHideEvent) => void>;
    };
    onAfterHide: {
        type: import('vue').PropType<(evt: SlAfterHideEvent) => void>;
    };
    onInitialFocus: {
        type: import('vue').PropType<(evt: SlInitialFocusEvent) => void>;
    };
    onRequestClose: {
        type: import('vue').PropType<(evt: SlRequestCloseEvent) => void>;
    };
}, {
    open: boolean | undefined;
    show: () => Promise<void> | undefined;
    hide: () => Promise<void> | undefined;
}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
    afterShow: (...args: any[]) => void;
    afterHide: (...args: any[]) => void;
    initialFocus: (...args: any[]) => void;
    requestClose: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean>;
    label: {
        type: import('vue').PropType<string>;
    };
    noHeader: {
        type: import('vue').PropType<boolean>;
    };
    noCloseOnOutsideClick: {
        type: import('vue').PropType<boolean>;
    };
    onShow: {
        type: import('vue').PropType<(evt: SlShowEvent) => void>;
    };
    onAfterShow: {
        type: import('vue').PropType<(evt: SlAfterShowEvent) => void>;
    };
    onHide: {
        type: import('vue').PropType<(evt: SlHideEvent) => void>;
    };
    onAfterHide: {
        type: import('vue').PropType<(evt: SlAfterHideEvent) => void>;
    };
    onInitialFocus: {
        type: import('vue').PropType<(evt: SlInitialFocusEvent) => void>;
    };
    onRequestClose: {
        type: import('vue').PropType<(evt: SlRequestCloseEvent) => void>;
    };
}>> & {
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onAfterShow?: ((...args: any[]) => any) | undefined;
    onAfterHide?: ((...args: any[]) => any) | undefined;
    onInitialFocus?: ((...args: any[]) => any) | undefined;
    onRequestClose?: ((...args: any[]) => any) | undefined;
}, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
