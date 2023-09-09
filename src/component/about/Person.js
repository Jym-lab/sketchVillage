import Person from './person.json';

function Person0({id}) {
    return (
      <div className="pbox">
          {Person.map(person => (
              (person.id === id) && (
              <div key={person.id}>
                      <img className="Pimg mx-auto" src={person.image} alt="personimg" />
                      {/* <img className="Pimg" src="img/about/minjo.png" alt="personimg" /> */}
  
                      <div className="Pinfo">
                          <img src={person.logo} alt="personimg"/>
                          <div className="Pname font-bold">{person.name}</div>
                      </div>
  
                  <div className="Pdepart font-bold">{person.department}</div>
                  <div className="Pposi font-bold">{person.position}</div>
                  <div className='Prole font-bold'>{person.role}</div>
              </div>
          )
        ))}
      </div>
    )
  }
  
  export default Person0;