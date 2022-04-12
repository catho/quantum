declare module "@catho/quantum"

import { StyledComponent } from 'styled-components';

import { default as AccordionComponent, AccordionProps } from "./Accordion"
import { default as AlertComponent, AlertProps } from "./Alert"
import { default as AutoCompleteComponent, AutoCompleteProps } from "./AutoComplete"
import { default as AvatarComponent, AvatarProps } from "./Avatar"
import { default as BadgeComponent, BadgeProps } from "./Badge"
import { default as BreadcrumbsComponent, BreadcrumbsProps } from "./Breadcrumbs"
import { default as ButtonComponent, ButtonProps } from "./Button"
import { default as SocialButtonComponent, SocialButtonProps } from "./SocialButton"
import { default as CardComponent, Props as CardProps } from "./Card"
import { default as ChargeBarComponent, ChargeBarProps } from "./ChargeBar"
import { Checkbox as CheckboxComponent, CheckboxGroup as CheckboxGroupComponent, CheckboxProps, CheckboxGroupProps } from './Checkbox';
import { default as CircularLoaderComponent, CircularLoaderProps } from "./CircularLoader"
import { default as DialogComponent, DialogProps } from "./Dialog"
import { default as DropdownComponent, DropdownProps } from "./Dropdown"
import { Container as ContainerComponent, Col as ColComponent, Row as RowComponent, ColProps, RowProps, ContainerProps } from './Grid';
import { default as HamburgerComponent, HamburgerProps } from "./Hamburger"
import { default as Icon, IconProps } from "./Icon"
import { default as InputComponent, InputProps } from "./Input"
import { default as LinkComponent, LinkProps } from "./Link"
import { default as ListComponent, ListProps } from "./List"
import { default as ModalComponent, ModalProps } from "./Modal"
import { default as PaginationComponent, PaginationProps } from "./Pagination"
import { default as PopoverComponent, PopoverProps } from "./Popover"
import { default as ProgressBarComponent, ProgressBarProps } from "./ProgressBar"
import { default as RadioGroupComponent, RadioGroupProps } from "./RadioGroup"
import { default as RangeSliderComponent, RangeSliderProps } from "./RangeSlider"
import { default as SnackBarComponent, SnackBarProps } from "./SnackBar"
import { default as SocialsComponent, SocialsProps } from "./Socials"
import { default as StepperComponent, StepperProps } from "./Stepper"
import { TabbedView as TabbedViewComponent, TabbedViewProps } from './TabbedView';
import { default as TagComponent, TagProps } from "./Tag"
import { default as TextAreaComponent, TextAreaProps } from "./TextArea"
import { default as ToggleComponent, ToggleProps } from "./Toggle"
import { default as TooltipComponent, TooltipProps } from "./Tooltip"
import { default as SegmentedControlComponent, SegmentedControlProps } from "./SegmentedControl"
import { default as CarouselComponent, CarouselProps } from "./Carousel"

export { default as BREAKPOINTS } from './Breakpoints';
export { default as Colors } from "./Colors"
export { Form, Validations } from './Form';
export { default as GlobalStyle, IconFont, Typography } from "./GlobalStyle"
export { Hide } from './Grid';
export { default as shared } from "./shared"
export { default as Skeleton } from "./Skeleton"
export { Tab } from './TabbedView'

export const Accordion: StyledComponent<typeof AccordionComponent, AccordionProps>;
export const Alert: StyledComponent<typeof AlertComponent, AlertProps>;
export const Avatar: StyledComponent<typeof AvatarComponent, AvatarProps>;
export const AutoComplete: StyledComponent<typeof AutoCompleteComponent, AutoCompleteProps>;
export const Badge: StyledComponent<typeof BadgeComponent, BadgeProps>;
export const Breadcrumbs: StyledComponent<typeof BreadcrumbsComponent, BreadcrumbsProps>;
export const Button: StyledComponent<typeof ButtonComponent, ButtonProps>;
export const Card: StyledComponent<typeof CardComponent, CardProps>;
export const ChargeBar: StyledComponent<typeof ChargeBarComponent, ChargeBarProps>;
export const Checkbox: StyledComponent<typeof CheckboxComponent, CheckboxProps>;
export const CheckboxGroup: StyledComponent<typeof CheckboxGroupComponent, CheckboxGroupProps>;
export const CircularLoader: StyledComponent<typeof CircularLoaderComponent, CircularLoaderProps>;
export const Dialog: StyledComponent<typeof DialogComponent, DialogProps>;
export const Dropdown: StyledComponent<typeof DropdownComponent, DropdownProps>;
export const Container: StyledComponent<typeof ContainerComponent, ContainerProps>;
export const Col: StyledComponent<typeof ColComponent, ColProps>;
export const Row: StyledComponent<typeof RowComponent, RowProps>;
export const Hamburger: StyledComponent<typeof HamburgerComponent, HamburgerProps>;
export const Icon: StyledComponent<typeof IconComponent, IconProps>;
export const Input: StyledComponent<typeof InputComponent, InputProps>;
export const Link: StyledComponent<typeof LinkComponent, LinkProps>;
export const List: StyledComponent<typeof ListComponent, ListProps>;
export const Modal: StyledComponent<typeof ModalComponent, ModalProps>;
export const Pagination: StyledComponent<typeof PaginationComponent, PaginationProps>;
export const Popover: StyledComponent<typeof PopoverComponent, PopoverProps>;
export const ProgressBar: StyledComponent<typeof ProgressBarComponent, ProgressBarProps>;
export const RadioGroup: StyledComponent<typeof RadioGroupComponent, RadioGroupProps>;
export const RangeSlider: StyledComponent<typeof RangeSliderComponent, RangeSliderProps>;
export const SnackBar: StyledComponent<typeof SnackBarComponent, SnackBarProps>;
export const Socials: StyledComponent<typeof SocialsComponent, SocialsProps>;
export const Stepper: StyledComponent<typeof StepperComponent, StepperProps>;
export const TabbedView: StyledComponent<typeof TabbedViewComponent, TabbedViewProps>;
export const Tag: StyledComponent<typeof TagComponent, TagProps>;
export const TextArea: StyledComponent<typeof TextAreaComponent, TextAreaProps>;
export const Toggle: StyledComponent<typeof ToggleComponent, ToggleProps>;
export const Tooltip: StyledComponent<typeof TooltipComponent, TooltipProps>;
export const SocialButton: StyledComponent<typeof SocialButtonComponent, SocialButtonProps>;
export const SegmentedControl: StyledComponent<typeof SegmentedControlComponent, SegmentedControlProps>;
export const Carousel: StyledComponent<typeof CarouselComponent, CarouselProps>;