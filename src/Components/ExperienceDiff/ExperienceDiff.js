import './ExperienceDiff.css'
import '../../App1000.css'

const ExpereienceDiff = () => {


    return(
        <div className="experienceDiff">
            <div className="experienceContainer">
                <h2 className="differenceText">Experience the difference</h2>
                <span className="goPremiumText">Go Premium and enjoy full control of your listening.</span>
                <span className="goPremiumText">Cancel anytime.</span>
              </div>

              <div className="premiumShowcaseContainer">
                <div className="experiencePlanTitles disableHover">
                  <span className="experienceTopText">What you’ll get</span>
                  <span className="experienceTopText">Spotify’s<br></br>Free plan</span>
                  <span className="experienceTopText">Spotify’s<br></br>Premium<br></br>plans</span>
                </div>

                <div className="experiencePlanTitles">
                  <span>Ad-free music listening</span>
                  <span className="material-symbols-outlined">remove</span>
                  <span className="material-symbols-outlined">task_alt</span> 
                </div>

                <div className="experiencePlanTitles">
                  <span>Download to listen offline</span>
                  <span className="material-symbols-outlined">remove</span>
                  <span className="material-symbols-outlined">task_alt</span> 
                </div>

                <div className="experiencePlanTitles">
                  <span>Play songs in any order</span>
                  <span className="material-symbols-outlined">remove</span>
                  <span className="material-symbols-outlined">task_alt</span> 
                </div>

                <div className="experiencePlanTitles">
                  <span>High audio quality</span>
                  <span className="material-symbols-outlined">remove</span>
                  <span className="material-symbols-outlined">task_alt</span> 
                 </div>

                <div className="experiencePlanTitles">
                  <span>Listen with friends in real time</span>
                  <span className="material-symbols-outlined">remove</span>
                  <span className="material-symbols-outlined">task_alt</span> 
                </div>

                <div className="experiencePlanTitles">
                  <span>Organise listening queue</span>
                  <span className="material-symbols-outlined">remove</span>
                  <span className="material-symbols-outlined">task_alt</span> 
                </div>
            </div>

        </div>
    
    )
}

export default ExpereienceDiff;