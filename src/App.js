import React from 'react';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <ProfilePage />
      </div>
      <Footer />
    </div>
  );
}



export default App;
