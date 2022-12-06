import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <div className=' hero flex flex-col p-20' >
      <div className="card w-fit bg-base-100 shadow-xl  mb-10">
        <div className="card-body">
          <h2 className="card-title  font-bold text-3xl">#What are the different ways to manage a state in a React application?</h2>
          <div className="divider"></div>
          <p className='text-2xl font-semibold'>The Four Kinds of React State to Manage</p>
          <li>Local state.</li>
          <li>Global state.</li>
          <li>Server state.</li>
          <li>URL state.</li>
        </div>
      </div>
      <div className="card w-fit bg-base-100 shadow-xl  mb-10">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">#How does prototypical inheritance work?</h2>
          <li>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</li>
        </div>
      </div>
      <div className="card w-fit bg-base-100 shadow-xl  mb-10">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold"># What is meant by unit test?</h2>
          <p>
            A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p>
        </div>
      </div>
      <div className="card w-fit bg-base-100 shadow-xl  mb-10">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">#React vs. Angular vs. Vue?</h2>
          <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
        </div>
      </div>
      <Link to='/' className='btn'>Go Home</Link>
    </div>
  )
}

export default Blogs