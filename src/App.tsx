import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';


import { store, persistor } from '@/api/Store'

import { router } from '@/router/routes'

import NavBar from '@/components/shared/NavBar'


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='bg-background w-full h-full'>
          <NavBar />

          <RouterProvider router={router} />
        </div>
      </PersistGate>
    </Provider>
    )
};

export default App;