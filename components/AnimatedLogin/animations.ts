// Animation variants for login flow
export const containerVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
};

export const aircraftVariants = {
  idle: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  },
  typing: {
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.5, repeat: Infinity }
  },
  success: {
    y: -200,
    rotate: 360,
    opacity: 0,
    transition: { duration: 1.2, ease: 'easeIn' }
  },
  error: {
    x: [-10, 10, -10, 10, 0],
    transition: { duration: 0.5 }
  }
};

export const inputVariants = {
  focus: {
    boxShadow: '0 0 0 3px rgba(250, 204, 21, 0.1)',
    transition: { duration: 0.2 }
  },
  blur: {
    boxShadow: '0 0 0 0px rgba(250, 204, 21, 0.1)',
    transition: { duration: 0.2 }
  }
};

export const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  loading: {
    opacity: 0.7,
    transition: { duration: 0.3 }
  }
};

export const messageVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};
