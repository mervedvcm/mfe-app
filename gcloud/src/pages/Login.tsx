import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const params = useParams();
  const path = localStorage.getItem('companyName');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('companyName', params.companyName);
    Cookies.set('token', 'eyJhbGciOiJIUzI1NiIsI');

    navigate(`/${params.companyName}/dashboard`);
  };

//   const handleLogin = () => {
//     if (params.companyName) {
//       localStorage.setItem('companyName', params.companyName);
//       Cookies.set('token', 'eyJhbGciOiJIUzI1NiIsI');
//       navigate(`/${params.companyName}/dashboard`);
//     } else {
//       // Eğer params.companyName değeri belirlenmediyse uygun bir işlem yapılabilir.
//       console.error("params.companyName değeri belirlenmedi.");
//       // Örneğin landing sayfasına yönlendirme yapabiliriz:
//       navigate('/landing');
//     }
//   };

  return (
    <>
      <div>GCLOUD LOGIN PAGE</div>;
      <input type="text" placeholder="Kullanıcı Adı" />
      <input type="password" placeholder="Şifre" />
      <button onClick={() => handleLogin()}>Giriş Yap</button>
    </>
  );
};

export default Login;
