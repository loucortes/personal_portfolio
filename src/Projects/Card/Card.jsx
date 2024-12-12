import './Card.css'
function Card() {
  return (
    <div className='card'>
      <div className="card-container">
        <img src="images/MainAfter.jpg" alt="" />

        <div className="card-description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit doloribus voluptas rerum quis modi, ab laudantium mollitia dolore. Earum, quia!</p>

          <div className="card-buttons">
            <button>View Project</button>

            <div className='card-technologies'>
              <img src="images/javascript-logo-svgrepo-com.svg" alt="" />
              <img src="images/react-svgrepo-com.svg" alt="" />
              <img src="images/node-js-svgrepo-com.svg" alt="" />
              <img src="images/postgresql-svgrepo-com.svg" alt="" />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Card