import React from 'react'
import Navbar from './Navbar'
import "../styles/home.css";
const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <main>
      <div className="main-container">
        <h2>Welcome to Omegle!</h2>
        <p>
          Omegle is an exciting platform where you can meet new people, make
          friends, and engage in interesting conversations. Whether you're
          looking for a casual chat or a deep connection, our platform offers
          you the opportunity to connect with individuals from around the world.
        </p>
        <p>Please note:</p>
        <p>
          Welcome to Omegle, the premier online platform where delightful
          encounters and meaningful connections flourish! Our vibrant community
          eagerly awaits your presence, offering a diverse array of individuals
          eager to engage in captivating conversations.
        </p>
        <p>
          We want your experience on Omegle to be nothing short of exceptional.
          To ensure this, we have laid down some guidelines for your perusal:
        </p>
        <p>
          Omegle prides itself on fostering an environment of mutual respect and
          kindness. We encourage you to embrace the rich tapestry of our
          community, engaging in dialogues that uplift and celebrate our
          differences.
        </p>
        <p>
          If you're under 18 years old, please obtain parental consent before
          embarking on your journey with us. Your safety and well-being are of
          paramount importance to us, and we want to ensure that your time here
          is both enjoyable and secure.
        </p>
        <p>
          Omegle is dedicated to providing a platform for wholesome and
          enriching conversations. We kindly request that users refrain from
          engaging in discussions of explicit or adult nature. Should you seek
          such content, we recommend exploring other platforms that cater to
          those preferences.
        </p>
        <p>
          Rest assured, your privacy and security are our top priorities. We
          employ stringent measures to safeguard your personal information and
          uphold the integrity of our community. Should you encounter any
          inappropriate behavior or content, please don't hesitate to report it
          to our diligent moderation team.
        </p>

        <h2 className="monitered-text">
          Video is monitered. Please keep it clean!
        </h2>
        <div className="action-container">
          <p className="start-chat">Start Chatting.</p>
          <div className="button-container">
            <button className="action-button">
              <a href="#">Text chat</a>
            </button>

            <button className="action-button">
              <a href= "/landing">Video chat</a>
            </button>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Home
