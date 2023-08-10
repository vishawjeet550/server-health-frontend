import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Configuration from "./layout/configuration/Configuration";
import ProcessManagement from './layout/process/Process';
import Signin from './layout/auth/Signin';
import Signup from './layout/auth/Signup';
import { fetchUser } from './api/global/global.api';
import { RootState } from './store';
import LoadingLayer from './common/LoadingLayer';
import { AuthRouter, PrivateRouter } from './common/PrivateRouter';
import Shell from './layout/shell/Shell';
import CodeEditor from './layout/code_editor/CodeEditor';

function App() {
  const { globalLoader } = useSelector((state: RootState) => state.global)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  if (globalLoader) return <LoadingLayer />

  return (
    <div className="m-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateRouter><Configuration showBanner={true} /></PrivateRouter>} />
          <Route path='/process' element={<PrivateRouter><ProcessManagement /></PrivateRouter>} />
          <Route path='/shell' element={<PrivateRouter><Shell /></PrivateRouter>} />
          <Route path='/editor' element={<PrivateRouter><CodeEditor /></PrivateRouter>} />

          <Route path='/sign-in' element={<AuthRouter><Signin /></AuthRouter>} />
          <Route path='/register' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
