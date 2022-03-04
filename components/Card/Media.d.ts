import { ComponentType } from 'react';

type Media = ComponentType<{
    className?: string;
    style?: {};
    theme?: { colors?: {}; spacing?: {} };
}> & {
    displayName: 'Card.Media';
};

export default Media;
