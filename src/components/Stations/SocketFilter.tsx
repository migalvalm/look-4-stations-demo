import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/api/Store';
import { setSocketTypes } from '@/api/slices/socketSlice'

import Text from '@/components/elements/Text'
import Checkbox from '@/components/elements/Checkbox'

const SocketFilter = () => {
  const dispatch = useDispatch();
  const socketTypes = useSelector((state: RootState) => state.socket);
  
  const handleSocketChange = (event) => {
    const socketType = event.target.value;
    const isChecked = event.target.checked;
    dispatch(setSocketTypes({ ...socketTypes, [socketType]: isChecked }));
  };

  return (
    <div className='space-y-2'>
      <Text className='text-md font-light text-title'>Socket Type</Text>
      <div className='flex space-x-2'>
        <Checkbox
          className='border border-normal-50 rounded-xl px-6 py-3.5 flex items-center font-md'
          label={'Normal'}
          checked={socketTypes.Normal}
          value={'Normal'}
          onChange={handleSocketChange}
        />
        <Checkbox
          className='border border-normal-50 rounded-xl px-6 py-3.5 flex items-center font-md'
          label={'Rapido'}
          checked={socketTypes.Rapido}
          value={'Rapido'}
          onChange={handleSocketChange}
        />
      </div>
    </div> 
   );
};

export default SocketFilter;
