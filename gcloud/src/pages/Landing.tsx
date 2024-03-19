import * as React from 'react';
// import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from '../components/Landing/AppAppBar';
import Hero from '../components/Landing/Hero';
import Highlights from '../components/Landing/Highlights';
import Pricing from '../components/Landing/Pricing';
import Features from '../components/Landing/Features';
import Footer from '../components/Landing/Footer';


// interface ToggleCustomThemeProps {
//   showCustomTheme: Boolean;
//   toggleCustomTheme: () => void;
// }

// function ToggleCustomTheme({
//   showCustomTheme,
//   toggleCustomTheme,
// }: ToggleCustomThemeProps) {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '100dvw',
//         position: 'fixed',
//         bottom: 24,
//       }}
//     >
//       <ToggleButtonGroup
//         color="primary"
//         exclusive
//         value={showCustomTheme}
//         onChange={toggleCustomTheme}
//         aria-label="Platform"
//         sx={{
//           backgroundColor: 'background.default',
//           '& .Mui-selected': {
//             pointerEvents: 'none',
//           },
//         }}
//       >
//         <ToggleButton value>
//           <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
//           Custom theme
//         </ToggleButton>
//         <ToggleButton value={false}>Material Design 2</ToggleButton>
//       </ToggleButtonGroup>
//     </Box>
//   );
// }

export default function LandingPage() {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppAppBar/>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Landing = () => {
//   const navigate = useNavigate();
//   const path = localStorage.getItem('companyName');
//   return (
//     <>
//       <h1>GCloda Hoşgeldiniz </h1>
//       <div>Giriş yapmak için tıklayanız. </div>
//       <button
//         className="bg-green-400 text-white border rounded-md"
//         onClick={() => navigate(`${path}/login`)}
//       >
//         Giriş Yap
//       </button>
//     </>
//   );
// };

// export default Landing;
