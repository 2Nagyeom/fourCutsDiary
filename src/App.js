import React, { useEffect, useReducer, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';

import './App.css';

import fourcutImg from '../src/assets/images/fourcutImg.png';
import Edit from './pages/Edit';


function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => String(item.id) === String(action.data.id) ? { ...action.data } : item)
    case 'DELETE':
      return state.fliter((item) => String(item.id) !== String(action.targetId))
    default:
      break;
  }
  return state;
}

const dummy_data = [
  {
    id: 1,
    date: new Date().getTime(),
    content: 'dummy1',
    image: fourcutImg,
    video: '',
  }, {
    id: 2,
    date: new Date().getTime(),
    content: 'dummy2',
    image: fourcutImg,
    video: '',
  }, {
    id: 3,
    date: new Date().getTime(),
    content: 'dummy3',
    image: fourcutImg,
    video: '',
  }, 
]

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  // 일기 고유 id
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: 'INIT',
      data: dummy_data,
    })
  }, []);

  const onCreate = (date, content, image, video) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        image,
        video
      }
    });
    idRef.current++;
  }

  const onUpdate = (targetId, date, content, image, video) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        image,
        video,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,

    })
  }

  return (
    <StateContext.Provider value={data}>
      <DispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </DispatchContext.Provider>
    </StateContext.Provider>

  );
}

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

export default App;
