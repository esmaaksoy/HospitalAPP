import "../sass/Doktors.scss"
import AddModal from "./AddModal";
const Doktors = ({ doctorData }) => {
    
  return (
    <div className="container bg-danger">
      <h2>Our Doktors</h2>
      <div>
        {doctorData.map(({ id, name, dep, img }) => (
          <div key= {id} className="card">
            <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"> <img src={img} alt=""/></button>
            <AddModal name={name}/>
            </div>
            <p>{name}</p>
            <p>{dep}</p>
          
          </div>
          
        ))}
       
      </div>
    </div>
  );
};

export default Doktors;
