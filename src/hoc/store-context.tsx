import React, {ReactNode} from 'react';
import {Store} from "redux";
import {Provider} from "react-redux";
export default function StoreContext({store, children}: {store: Store, children: ReactNode}) {
    return React.createElement(Provider as any, {store}, children);
}
