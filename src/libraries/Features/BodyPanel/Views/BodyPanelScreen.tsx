import React from 'react';
import { IBodyPanel } from '../Models/BodyPanel';
import './BodyPanelScreen.css';

function BodyPanelScreen( props: IBodyPanel) {
    return (
        <div className={ "bodypanel-container " + props.class }>
            {
                props.children
            }
        </div>
    );
}

export default BodyPanelScreen;
