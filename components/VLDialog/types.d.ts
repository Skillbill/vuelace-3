import { SlAfterShowEvent, SlHideEvent, SlShowEvent, SlAfterHideEvent, SlInitialFocusEvent, SlRequestCloseEvent } from '../utils/types';

export interface VLDialogProps {
    label?: string;
    noHeader?: boolean;
    noCloseOnOutsideClick?: boolean;
    onShow?: (evt: SlShowEvent) => void;
    onAfterShow?: (evt: SlAfterShowEvent) => void;
    onHide?: (evt: SlHideEvent) => void;
    onAfterHide?: (evt: SlAfterHideEvent) => void;
    onInitialFocus?: (evt: SlInitialFocusEvent) => void;
    onRequestClose?: (evt: SlRequestCloseEvent) => void;
}
