import React from 'react'
import InputComponent from './InputComponent'

const Home = () => {


  
  return (
    <div class="container py-3">
      <div class="card my-4">
        <div class="card-body row">
          <div className="col-11 text-start">
            <p>Reverse Lunge</p>
          </div>
          <div className="col-1">
            <a class="text-dark" data-bs-toggle="collapse" href="#collapse1" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-sort-down"></i>
            </a>
          </div>
        </div>
        <div class="collapse" id="collapse1">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
      <div class="card my-4">
        <div class="card-body row">
          <div className="col-11 text-start">
            <p>Reps/Weight/Sets/Rest</p>
          </div>
          <div className="col-1">
            <a class="text-dark" data-bs-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-sort-down"></i>
            </a>
          </div>
        </div>
        <div class="collapse" id="collapse2">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div>
        </div>
      </div>
      <div class="card my-4 py-3">
        <div class="card-body row">
          <div className="col-11 text-start">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://randomwordgenerator.com/img/picture-generator/57e0d6444351a914f1dc8460962e33791c3ad6e04e50744172287ad19245c6_640.jpg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body text-start">
                    <h5 class="card-title">Reverse Lounge</h5>
                    <p class="card-text">reps <span className="text-secondary">12 - 12</span></p>
                    <p class="card-text">weights <span className="text-secondary">0 - 12</span></p>
                    <p class="card-text">rest <span className="text-secondary">30 - 12</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1">
            <a class="text-dark" data-bs-toggle="collapse" href="#collapse3" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-sort-down"></i>
            </a>
          </div>
        </div>
        <div class="collapse" id="collapse3">
          <div className="row" >
            <InputComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
