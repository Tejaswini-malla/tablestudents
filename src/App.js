import logo from './logo.svg';
import './App.css';
const data = [
  { name : "student name" , age : "age" ,  score: "score" , designation : "designation"},
  {name:"Teju", age:"22" , score: "80" , designation:"Full Stack(React + java) Developer" },
  {name:"pooja", age:"24" , score: "89" , designation:"Full Stack(React + java) Developer" },
  {name:"Navya", age:"25" , score: "80" , designation:"Full Stack(React + java) Developer" },
  {name:"Bhavana", age:"23" , score: "90" , designation:"Full Stack(React + java) Developer" },
  {name:"Rohini", age:"22" , score: "70" , designation:" Frontend Developer" },
  {name:"Kaveri", age:"20" , score: "80" , designation:"SQL developer" },
  {name:"Divya", age:"21" , score: "60" , designation:"React js Developer" },
]


function App() {
  return (
    <div className="App">
      <h1>Student details</h1>
      <table>

        <tbody>
          {
            data.map((value,key) => {
              return(
                <tr key={key}>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.score}</td>
                  <td>{value.designation}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>


    </div>
   
  );
}

export default App;

