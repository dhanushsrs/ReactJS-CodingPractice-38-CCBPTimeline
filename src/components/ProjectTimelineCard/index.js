// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {projectTitle, description, duration} = projectDetails
  const {imageUrl, projectUrl} = projectDetails

  return (
    <>
      <div className="project-card-container">
        <img src={imageUrl} className="project-image" alt="project" />
        <div className="project-title-and-duration-container">
          <h1 className="project-title">{projectTitle}</h1>
          <div className="duration-container">
            <AiFillCalendar color="#171f46" />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="project-description">{description}</p>
        <a href={projectUrl} className="visit-link">
          Visit
        </a>
      </div>
    </>
  )
}

export default ProjectTimelineCard
