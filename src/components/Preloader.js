import React from 'react';
const displayNone = {
    display: 'none'
};
const Preloader = () => (
    <div id="preloader" style={displayNone}>
        <div id="status" style={displayNone}></div>
    </div>
);

export default Preloader;
