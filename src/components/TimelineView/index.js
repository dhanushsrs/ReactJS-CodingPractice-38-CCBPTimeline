// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  // console.log(timelineItemsList)

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">
            MY JOURNEY OF <br />
            <span className="ccbp-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
