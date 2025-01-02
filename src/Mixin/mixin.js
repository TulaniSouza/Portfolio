import { css } from 'styled-components';

const breakpoints = {
    small: '320px',
    medium: '576px',
    large: '768px',
    xlarge: '992px',
};

export const breakpoint = (size) => {
    if (size === 'small') {
        return (...args) => css`
      @media (min-width: ${breakpoints.small}) and (max-width: ${breakpoints.medium}) {
        ${css(...args)}
      }
    `;
    } else if (size === 'medium') {
        return (...args) => css`
      @media (min-width: ${breakpoints.medium}) and (max-width: ${breakpoints.large}) {
        ${css(...args)}
      }
    `;
    } else if (size === 'large') {
        return (...args) => css`
      @media (min-width: ${breakpoints.large}) and (max-width: ${breakpoints.xlarge}) {
        ${css(...args)}
      }
    `;
    } else if (size === 'xlarge') {
        return (...args) => css`
      @media (min-width: ${breakpoints.xlarge}) {
${css(...args)}
      }
    `;
    }
};
