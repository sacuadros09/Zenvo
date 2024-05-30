import { useState, useEffect } from 'react';
import './Portfolio.css';
import { db } from '../../firebase/firebase';
import { collection,getDocs } from 'firebase/firestore';




export function PortfolioPage() {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [firebaseData, setFirebaseData] = useState([]);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsData = projectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("Fetched Projects: ", projectsData);
        setFirebaseData(projectsData);
        setFilteredData(projectsData);
        setProjectCount(projectsData.length);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    filterProjects(value, filterValue);
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    filterProjects(searchValue, value);
  };

  const filterProjects = (search, filter) => {
    const filteredByTitle = firebaseData.filter(project =>
      project.title.toLowerCase().includes(search.toLowerCase())
    );

    const filteredProjects = filter ? filteredByTitle.filter(project => project.project.includes(filter)) : filteredByTitle;

    console.log("Filtered Projects: ", filteredProjects);
    setFilteredData(filteredProjects);
    setProjectCount(filteredProjects.length);
  };

  return (
    <>
      <section>
        <div>
          <button className='hamburguer-btn'>
          </button>
        </div>
        
        <section className='title-text-banner'>
          <div className='title-text-portfolio'>
            <h1 className='title-portfolio'>Our Portfolio</h1>
            <p className='first-part-text'>
              Immerse yourself in a world of innovative design, where each project tells a unique story of creativity, 
              functionality and style. Discover how we have brought our clients visions to life, taking their ideas 
              from conception to digital realization. Explore our portfolio and be inspired by the art of design at Zenvo Studio.
            </p>
          </div>
          <img className='pet-banner' src='/src/assets/robot-portfolio.png' alt="Robot Banner" />
        </section>

        <section className='input-filter'>
          <div>
          <input className="input-portfolio"
        type="text" placeholder="Search project"
        onChange={handleSearch}
        value={searchValue}
        />
  
          </div>
          <div className="filter-container">
            <select className='filter-select' onChange={handleFilter} value={filterValue}>
              <option className='option-one' value="">All Projects</option>
              <option value="Ux design">Ux design</option>
              <option value="Ui design">Ui design</option>
              <option value="Frontend dev">Frontend dev</option>
              <option value="Consulting & advisory">Consulting & advisory</option>
              <option value="Branding & marketing">Branding & marketing</option>
            </select>
          </div>
        </section>

        <section className='component-portfolio'>
        <p className="project-count-text">{projectCount} {projectCount === 1 ? 'project' : 'projects'} found</p>
          {projectCount === 0}
          {filteredData.map((card, id) => (
            <article className='card-portfolio' key={id}>
              <img src={card.images} className='img-card-port' alt={card.title} />
              <div className='organice-desktop'>
                <div className='all-text'>
                  <div className='arrow-title'>
                    <h3 className='title-portfolio-comp'>{card.title}</h3>
                    <button className='arrow-btn'><img src={card.arrow}  /></button>
                  </div>
                  <p className='descrip-portfolio'>{card.description}</p>
                  <p className='made-for'>Realizado por {card.members.join(', ')}</p>
                  <p className='project-types'>Tipos de proyecto: {card.project.join(', ')}</p>
                  <a href={card.behance} className='behance-link' target='_blank' rel='noopener noreferrer'> Behance</a>
                </div>
              </div>
            </article>
          ))}
        </section>
        <img className="decoration-portfolio1" src="../../../src/assets/circle-line-service.png"/>
        <img className="decoration-portfolio2" src="../../../src/assets/circle-line-service2.png"/>
       
      </section>
</>
);
}