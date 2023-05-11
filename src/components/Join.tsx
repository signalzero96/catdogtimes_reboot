import * as React from 'react';
import { useNavigate } from 'react-router';

export const Join = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='container'>
        <div className='flex flex-col justify-center items-center h-screen w-screen'>
          <div className='w-72 flex justify-center'>
            <button className='font-bold py-4 px-4'>멍냥일보</button>
          </div>
          <form>
            <label className='block'>
              <input
                type='text'
                placeholder='휴대폰 번호 또는 이메일 주소'
                className='mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
              />
            </label>
            <label className='block'>
              <input
                type='text'
                placeholder='성명'
                className='mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
              />
            </label>
            <label className='block'>
              <input
                type='text'
                placeholder='사용자 이름'
                className='mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
              />
            </label>
            <label className='block'>
              <input
                type='text'
                placeholder='비밀번호'
                className='mt-1 block w-72 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    '
              />
            </label>
          </form>

          <button className='bg-blue-500 hover:bg-blue-700 w-72 text-white font-bold py-2 px-4 rounded mt-4'>
            가입
          </button>

          <div className='flex flex-row mt-2'>
            <h1>계정이 있으신가요?</h1>
            <button
              className='ml-2 text-blue font-bold'
              onClick={() => navigate('/')}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
