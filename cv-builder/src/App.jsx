import { useState } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import { initialCVData } from './utils/initialData';
import './App.css';

function App() {
  const [cvData, setCvData] = useState(initialCVData);
  const [isEditing, setIsEditing] = useState(true);
  const [submittedData, setSubmittedData] = useState(initialCVData);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(cvData);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>CV Builder</h1>
        {!isEditing && (
          <button className="edit-button" onClick={handleEdit}>
            Edit CV
          </button>
        )}
      </header>

      <main>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <CVForm cvData={cvData} setCvData={setCvData} />
            <button type="submit" className="submit-button">
              Submit CV
            </button>
          </form>
        ) : (
          <CVPreview cvData={submittedData} />
        )}
      </main>
    </div>
  );
}

export default App;