import React, { FC, useEffect, useState } from 'react';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import './DotBtn.scss';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

interface IDotBtnMenu {
    menu: boolean;
    onClickHandler: () => void;
    onDeleteHandler: () => Promise<void>;
}

const DotBtn: FC<IDotBtnMenu> = ({ menu, onClickHandler, onDeleteHandler }) => {
    return (
        <div className={`dotBtn__wr`} onClick={onClickHandler}>
            <button className='dotBtn'>{menu ? <IconRenderer id='cross' /> : <IconRenderer id='dotsBig' />}</button>
            <ul className={`${menu ? 'active' : ''} dotBtn__menu`}>
                <li className='dotBtn__li'>
                    <Link to={'Edit '}>Edit</Link>
                </li>
                <li className='dotBtn__li' onClick={onDeleteHandler}>
                    Delete
                </li>
            </ul>
        </div>
    );
};

export default DotBtn;
