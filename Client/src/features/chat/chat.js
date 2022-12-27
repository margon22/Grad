import React from 'react'

const chat = () => {
  return (
    <div className="chat-container">
    <nav>chat</nav>
    <div>
      <aside>
        <ul>
          <li>
            <figure>
              <img src="" alt="" />
            </figure>
            <div>
              <p className="name">name</p>
              <span>admin</span>
            </div>
          </li>
        </ul>
      </aside>
      <main>
        <p className="sender">
          <span>test from sender </span>
        </p>
        <p className="reciver">
          <span>test form reciver </span>
        </p>
        <p className="sender">
          <span>test from sender </span>
        </p>
        <p className="reciver">
          <span>test form reciver </span>
        </p>
        <p className="reciver">
          <span>test form reciver </span>
        </p>
        <p className="reciver">
          <span>test form reciver </span>
        </p>
        <p className="sender">
          <span>test from sender </span>
        </p><p className="sender">
          <span>test from sender </span>
        </p>
        <footer>
            <input type="text" name="" id="" />
            <button className="btn">send</button>
        </footer>
      </main>
    </div>
  </div>
  )
}

export default chat