import Text from '@/components/elements/Text'

export const NavBar = () => {
  return (
    <div className='bg-white flex justify-between w-screen px-56 py-6'>
      <Text className='text-title font-bold text-4xl'> eCharger </Text>
      <div className='flex space-x-4'>
        <div className='w-12 h-12 rounded-full bg-normal-100'></div>
        <Text className='text-title pt-3 font-medium'> Bart Vader </Text>
      </div>
    </div>
  )
}

export default NavBar;