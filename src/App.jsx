// App.jsx
import  { useState } from 'react';
import { Navbar } from './components/page/Nav';
import { Footer } from './components/page/Footers';
import MultiImageLanguageBook from './components/content/Content';

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState('th');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
      <main className="flex-grow">
        <MultiImageLanguageBook currentLanguage={currentLanguage} />
      </main>
      <Footer />
    </div>
  );
};

export default App;