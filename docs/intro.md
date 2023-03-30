---
slug: Tutorial
title: Tutorial
authors: [eomokiti]
sidebar_position: 1
tags: [tutorial,APIs, React]
---


# How to Use the Election Type API 

In this tutorial we would learn how to use the election type API in a React application. 

## Prerequiste
Good Knowledge of React
Good Knowledge of API

### Time to Code.

**Step 1**

In your App.jsx file, we would create a button that when clicked would call the API.

```js
import './App.css'

export default function App() {
  return (
    <main>
    <button>GetElectionType</button>
    </main>
  )
}
```

**Step2**

We would create a state to store the data's we would get from the election type API. If you play with the API in the API section. you will see that our response is an object that has an array called data that is why our state is 

```js
 const[data,setData] = useState({data:[]})
```
```js

import './App.css'
import {useState} from 'react';

export default function App() {
  const[data,setData] = useState({data:[]})
  
  return (
    <main>
    <button>GetElectionType</button>
    </main>
  )
}

```

**Step3**

We would create a function that will call the API.I will name my function getElectionType . our function will be in a try catch statement to help us catch errors in case of any. We will use our **setData** to update our state

```js
import './App.css'
import { useState } from 'react';
export default function App() {
  
  const[data,setData] = useState({data:[]})

const getElectionType= async()=>{
     const url ="https://irev-v2.herokuapp.com/api/v1/election-types"
    try{
      const data = await fetch(url) 
      const jsonData = await data.json()
       console.log(jsonData)
      setData(jsonData)
    } catch(error){
      console.log(error,'error')
    }
   
  }
 
}

```

**Step4**

We would give our button an onclick event,so that when clicked the API would be called.

```js
import './App.css'
import { useState } from 'react';
export default function App() {
  
  const[data,setData] = useState({data:[]})

const getElectionType= async()=>{
     const url ="https://irev-v2.herokuapp.com/api/v1/election-types"
    try{
      const data = await fetch(url) 
      const jsonData = await data.json()
       console.log(jsonData)
      setData(jsonData)
    } catch(error){
      console.log(error,'error')
    }
   
  }
  return (
    <main>
    <button onClick={getElectionType} className="electionButton">Get Election Type</button>
      </main>
  )
}

```

**Step5**

We would use map to map through our data from the API. we would be getting the name of the election type's in Nigeria.

```js
import './App.css'
import {useState} from 'react';
export default function App() {
  
  const[data,setData] = useState({data:[]})

const getElectionType= async()=>{
     const url ="https://irev-v2.herokuapp.com/api/v1/election-types"
    try{
      const data = await fetch(url) 
      const jsonData = await data.json()
       console.log(jsonData)
      setData(jsonData)
    } catch(error){
      console.log(error,'error')
    }
   
  }

  getElectionType();
  return (
    <main>
    <button onClick={getElectionType} className="electionButton">Get Election Type</button>
      {data.data.map(electionType =>{
        return(
        <div key={electionType._id}>
          <p>{electionType.name}</p>
          
        </div>
        )
      })}
    </main>
  )
}

```
If you save your changes and click on the **Get Election Type** button you will be able to see the different type's of elcetion held in Nigeria.

### Conclusion

I hope you have learned about using APIs in a react application. You can explore the other APIs in the API section of this docs.

You can find the complete code [here](https://replit.com/@EmaOmokiti/Election-Type)
Happy Coding!!!

 