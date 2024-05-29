import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './Portfolio.css';
import { InputPortfolio, FooterMobile, CardPortfolio } from "../../components/index";
import { dataPortfolio } from '../../services/DataPortfolio';

export function PortfolioPage() {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [filteredData, setFilteredData] = useState(dataPortfolio);

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
    const filteredByTitle = dataPortfolio.filter(project =>
      project.title.toLowerCase().includes(search.toLowerCase())
    );

    const filteredProjects = filter ? filteredByTitle.filter(project => project.type === filter) : filteredByTitle;

    setFilteredData(filteredProjects);
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
          <div >
            <InputPortfolio className="input-portfolio" icon={<FiSearch />} text="Search project" onChange={handleSearch} /> 
          </div>
          <div className="filter-container">
            <select className='filter-select' onChange={handleFilter} value={filterValue}>
              <option className='option-one' value="">All Projects</option>
              <option value="UX Design">UX Design</option>
              <option value="UI Design">UI Design</option>
              <option value="Development">Development</option>
              <option value="Consulting">Consulting</option>
              <option value="Branding">Branding</option>
            </select>
          </div>
        </section>

        <section className='component-portfolio'>
          {filteredData.map((card, id) => (
            <CardPortfolio
              title={card.title}
              key={id}
              img={card.img}
              text={card.text}
              name={card.name}
              arrow={card.arrow}
              icon1={card.icon1}
              icon2={card.icon2}
              icon3={card.icon3}
            />
          ))}
        </section>
      </section>
      <FooterMobile />
    </>
  );
}