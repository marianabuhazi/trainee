import Header from './components/Header'
import Input from './components/Input'
import Source from './components/Source'
import { useState } from 'react';



function App() {
  const [sources, setSources]= useState([
  {
    "num": 1,
    "name": "Presbo",
    "email": "presbo@columbia.edu"
  },
  {
    "num": 2,
    "name": "John Jay Mouse",
    "email": "mouse@columbia.edu"
  },
  {
    "num": 3,
    "name": "Water Bottle Man",
    "email": "flipper@columbia.edu"
  }
]);

  let current_num;
  if(sources.length===0){
    current_num=1;
  }
  else{
    current_num= sources[sources.length-1].num+1;
  }

  const deleteSource=(num)=>{
    const newSources= sources.filter(source => source.num !== num);
    current_num--;
    setSources(newSources);
  };

    const submitSource=(newName,newEmail)=>{
      const newSource= {
        "num": current_num,
        "name": newName,
        "email": newEmail
      };

      current_num+=1;
      setSources([...sources, newSource]);
      
    }; 


  
  return (
    <div className="App">
      <Header />
      <Input submitSource={submitSource}/>
      {sources.map(source=>{
        return(
          <Source source={source} deleteSource={deleteSource} />
        )
      })}
    </div>
  );
}

export default App;
