import * as React from 'react';
import { useNavigate } from 'react-router';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='container'>
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
          <form>
            <label className='block'>
              <input
                type='text'
                placeholder='Username'
                className='mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
              />
            </label>
            <label className='block mt-4'>
              <input
                type='password'
                placeholder='Password'
                className='mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
              />
            </label>
          </form>
          <div className='w-72'>
            <button className='font-bold py-2 px-4'>비밀번호 찾기</button>
          </div>
          <button className='bg-red-500 hover:bg-red-700 w-72 text-white font-bold py-2 px-4 rounded mt-4'>
            로그인
          </button>
          <h1 className='mt-4'>OR</h1>
          <button className='bg-blue-500 hover:bg-blue-700 w-72 text-white font-bold py-2 px-4 rounded mt-4'>
            카카오톡 로그인
          </button>
          <button className='bg-blue-500 hover:bg-blue-700 w-72 text-white font-bold py-2 px-4 rounded mt-4'>
            구글 로그인
          </button>
          <button className='bg-blue-500 hover:bg-blue-700 w-72 text-white font-bold py-2 px-4 rounded mt-4'>
            이메일 로그인
          </button>
          <div className='flex flex-row mt-2'>
            <h1>아이디가 없으신가요?</h1>
            <button
              className='ml-2 text-blue font-bold'
              onClick={() => navigate('/join')}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
