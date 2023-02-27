import React from 'react';

/**
 * The context used for the to-do list functionality.
 * This context provides state and functions to manipulate the state,
 * allowing child components to share data and behavior without having to pass props down manually.
 */
const ItemContext = React.createContext<any>(null);

export default ItemContext;
