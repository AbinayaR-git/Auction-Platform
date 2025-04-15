import { AuthProvider } from './contexts/useAuth';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import { ScrollToTop } from './Components/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render( 
  <BrowserRouter>
   <AuthProvider>
      <ScrollToTop/>
     <App />
    </AuthProvider>
  </BrowserRouter>
);
