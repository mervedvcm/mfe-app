import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const path = localStorage.getItem('companyName');
  return (
    <>
      <h1>GCloda Hoşgeldiniz </h1>
      <div>Giriş yapmak için tıklayanız. </div>
      <button
        className="bg-green-400 text-white border rounded-md"
        onClick={() => navigate(`${path}/login`)}
      >
        Giriş Yap
      </button>
    </>
  );
};

export default Landing;
