import React from 'react';

const Touche = (props) => {
    let { libelle, click } = props;
    return (
        <button onClick={click}>{libelle}</button>
    )
}

export default Touche;