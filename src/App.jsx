import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
  useEffect(() => {
    let dragable = document.querySelectorAll(".item")
    dragable.forEach(item => {
      item.addEventListener("dragstart", (event) => {
        item.classList.add('dargging')
      });
      item.addEventListener("dragend", (event) => {
        item.classList.remove('dargging')
      });
    });
    let container = document.querySelectorAll(".container")
    container.forEach(item => {
      item.addEventListener("dragover", (event) => {
        const dragItem = document.querySelector(".dargging")
        let child = [...item.querySelectorAll(".item:not(.dargging)")]
        let index = child.findIndex((ele) => {
          if (event.clientY <= ele.offsetTop + ele.offsetHeight / 2) return true
          else false
        })
        child.splice(index, 0, dragItem);
        item.replaceChildren(...child);


      });
    });
  })
  const [array1, setarray1] = useState(['1', '2']);
  const [array2, setarray2] = useState(['3']);


  return (
    <>
      <section className="box">
        <div className="boxCard">
          <h1 >Todo</h1>
          <div className="container">
            {array1.map((array1) => (
              <div key={array1}  draggable="true" className="item">
                <p>{array1}</p>
            </div>
            ))}
          </div>
        </div>
        <div className="boxCard">
          <h1 >Work Started</h1>
          <div className="container">
            {array2.map((array2) => (
              <div key={array2} draggable="true" className="item">
                <p>{array2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
