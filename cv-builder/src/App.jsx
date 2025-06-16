import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CVForm from './components/CVForm'
import CVPreview from './components/CVPreview'
import { initialCVData } from './utils/initialData' 

function App() {
  const [cvData, setCvData] = useState(initialCVData)
  const [activeTab, setActiveTab] = useState('form')

  return (
    <>
      <div className="app">
        <header className="app-header">
         <h1>CV Builder</h1>
         <div className="tabs">
          <button className={activeTab === 'form'? 'active': ''}
          onClick={()=> setActiveTab('form')}>
            Edit CV

          </button>
          <button className={activeTab === 'preview'? 'active': ''}
          onClick={()=> setActiveTab('preview')}>
            Preview CV
          </button>
         </div>
        </header>

        <main>
          {/* {activeTab === 'form' ? (
            <CVForm  cvData={cvData} setCvData={setCvData}/>
          ): (
            <CVPreview cvData={cvData}/>
          ) */}

          <CVForm  cvData={cvData} setCvData={setCvData}/>
          <CVPreview cvData={cvData}/>
        {/* } */}
        </main>
      
      </div>
      

    </>
  )
}

export default App
