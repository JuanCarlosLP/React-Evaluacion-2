import React from 'react';
import Trends from '../trends/trends'

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <button onClick={props.cambiarImagen}>Cambiar la imagen de perfil</button>

            < Trends />
        </div>
    )
}

export default SidebarCol;