import React, { FC, useEffect, useState } from 'react';
import IconRenderer from '../../ui/IconRenderer/IconRenderer';
import './DotBtn.scss';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

interface IDotBtnMenu {
    menu: boolean;
    onClickHandler: () => void;
    onDeleteHandler: () => Promise<void>;
}

const DotBtn: FC<IDotBtnMenu> = ({ menu, onClickHandler, onDeleteHandler }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const index: string | null = searchParams.get('playlist-index');

    return (
        <div className={`dotBtn__wr`} onClick={onClickHandler}>
            <button className='dotBtn'>{menu ? <IconRenderer id='cross' /> : <IconRenderer id='dotsBig' />}</button>
            <ul className={`${menu ? 'active' : ''} dotBtn__menu`}>
                <li className='dotBtn__li'>
                    <Link to={`../edit-playlist?playlist-index=${index}`}>Edit</Link>
                </li>
                <li className='dotBtn__li' onClick={onDeleteHandler}>
                    Delete
                </li>
            </ul>
        </div>
    );
};

export default DotBtn;
