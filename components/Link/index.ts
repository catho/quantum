import React from 'react';

export interface Link {
  theme?: {
    colors?: object;
  };
  skin?: 'default' | 'dark';
  children?: React.ReactNode[] | React.ReactNode;
}