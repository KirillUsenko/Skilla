import React from 'react'
import {useRadioGroupState} from '@react-stately/radio';

const RadioGroup = (props) => {
    let state = useRadioGroupState({
        defaultValue: props.defaultValue,
        onChange: props.onChange
    })

    if (props.type === 'modal') return (
        <div className="header-form__labels">
            <label className="header-form__label">
                <input
                    className="header-form__checkbox"
                    type="radio"
                    name={state.name}
                    checked={state.selectedValue === '1'}
                    onChange={() => state.setSelectedValue('1')} />
                Да
            </label>
            <label className="header-form__label">
                <input
                    className="header-form__checkbox"
                    type="radio"
                    name={state.name}
                    checked={state.selectedValue === '0'}
                    onChange={() => state.setSelectedValue('0')} />
                Нет
            </label>
        </div>
    )

    return (
        <div className="header-form__labels">
            <label className="header-form__label">
                <input
                    className="header-form__checkbox"
                    type="radio"
                    name={state.name}
                    checked={state.selectedValue === 'telegram'}
                    onChange={() => state.setSelectedValue('telegram')} />
                Telegram
            </label>
            <label className="header-form__label">
                <input
                    className="header-form__checkbox"
                    type="radio"
                    name={state.name}
                    checked={state.selectedValue === 'whatsapp'}
                    onChange={() => state.setSelectedValue('whatsapp')} />
                WhatsApp
            </label>
            <label className="header-form__label">
                <input
                    className="header-form__checkbox"
                    type="radio"
                    name={state.name}
                    checked={state.selectedValue === 'звонок'}
                    onChange={() => state.setSelectedValue('звонок')} />
                Звонок
            </label>
        </div>
    )
}

export default RadioGroup