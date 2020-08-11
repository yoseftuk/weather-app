export const classes = (props: {}) => {
    return Object.entries(props).filter(([k, v]) => v).map(([k, v]) => k).join(' ');
};
