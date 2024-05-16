export interface VLButtonProps {
    variant?: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text';
    size?: string;
    caret?: boolean;
    disabled?: boolean;
    loading?: boolean;
    outline?: boolean;
    pill?: boolean;
    circle?: boolean;
    type?: 'button' | 'submit' | 'reset';
    name?: string;
    value?: string;
    href?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    form?: string;
}
