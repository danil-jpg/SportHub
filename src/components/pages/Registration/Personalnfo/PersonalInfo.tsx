import React, { FC, useState } from 'react';
import pic from '../../../../assets/img/registration/pic.png';
import picW from '../../../../assets/img/registration/pic.png?as=webp';
import InputRadio from '../../../ui/Forms/InputRadio/InputRadio';

const PersonalInfo: FC = () => {
    const [radio, setRadio] = useState<string>('');

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value);
    };

    return (
        <div className='registration-container info'>
            <p className='info__title'>Personal Information</p>
            <div className='info__img-block'>
                <img className='info__img' src={picW} />
                <div className='info__title'>
                    <p className='info__img_title'>Information about adding photo</p>
                    <p className='info__img_descr'>
                        Information about adding photo. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
            </div>
            <div className='info__radio-wr'>
                <p className='info__radio_text'>Gender</p>
                <div className='info__radio-line'>
                    <form>
                        <InputRadio checked={radio[0]} value={'radio[0]'} onChange={() => setRadio([true, false, false])} text='Male' name='Male' id='Male'></InputRadio>
                        <InputRadio checked={radio[1]} value={'radio[1]'} onChange={() => setRadio([false, true, false])} text='Female' name='Female' id='Female'></InputRadio>
                        <InputRadio checked={radio[2]} value={'radio[2]'} onChange={() => setRadio([false, false, true])} text='None' name='None' id='None'></InputRadio>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
