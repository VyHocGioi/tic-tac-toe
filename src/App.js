import "./App.css";
// import Toggle from "./state/Toggle";
import Game from "./components/tictactoe/Game";
// import { YoutubeData } from "./YoutubeData";
// function Feature() {
//   return (
//     <div>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam,
//       cupiditate maxime incidunt quisquam veniam laudantium vero quam provident
//       magnam asperiores, officia numquam nobis deleniti! Tempora esse magnam
//       quam quia!
//     </div>
//   );
// }
function App() {
  return (
    <div>
      <Game></Game>
    </div>
  );
}

// function Youtubeitem(props) {
//   return (
//     <div className="youtube-item">
//       <div className="youtube-image">
//         <img src={props.image} alt="" />
//       </div>

//       <div className="youtube-footer">
//         <div className="youtube-avatar">
//           <img src={props.avatar} alt="" />
//         </div>
//         <div className="youtube-info">
//           <h2 className="youtube-title">
//             {props.title || "This is an example title"}
//           </h2>
//           <h3 className="youtube-author">
//             {props.author || "This is an example author"}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }
export default App;
