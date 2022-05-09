import React from 'react';
import { UPDDATE_DUTY, REMOVE_DUTY } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers';

const DutyList = ({ duty }) => {
    const [, dispatch] = useStoreContext();

    const removeDuty = duty => {
        dispatch({
            type: REMOVE_DUTY,
            _id: duty._id
        });
        idbPromise('duty', 'delete', { ...duty });
    };

    const onChange = (e) => {
        const value = e.target.value;

        if (value === '0') {
            dispatch({
                type: REMOVE_DUTY,
                _id: duty._id
            });
            idbPromise('duty', 'delete', { ...duty });
        }
        else {
            dispatch({
                type: UPDDATE_DUTY,
                _id: duty._id,
            });
            idbPromise('duty', 'put' { ...duty });
        }
    };

    return (
        <div>
            <input 
                placeholder='Duty Name'
                value={duty.dutyName}
                type='dutyName'
                onChange={onChange}
            />
            <input 
                placeholder='Allowance'
                value={duty.dutyValue}
                type='dutyValue'
                onChange={onChange}
            />
            <input
                placeholder='Description'
                value={duty.dutyDescription}
                type='dutyDescription'
                onChange={onChange}
            />
            <span onClick={() => removeDuty(duty)}></span>
        </div>
    )
}

export default DutyList;