import uniqid from 'uniqid'
import './ProjectContainer.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>

    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default ProjectContainer
