import './App.css';
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";

function App() {
    const data = [
        {
            id: "random id",
            name: "random name",
            description: "random description",
            operations: [
                {
                    urlTemplate: "/",
                    displayName: "random subitem display name",
                    method: "POST",
                    contentToRender: "random conlkajfklasjfklsdajfklasdfsa asdl;fjsadf jsdkfjsadklfj klsadfj asfd"
                },
                {
                    urlTemplate: "/",
                    displayName: "random subitem display name",
                    method: "POST",
                    contentToRender: "random conlkajfklasjfklsdajfklasdfsa adfas fasdf asdf asdf asdf "
                }
            ]
        },
        {
            id: "random id 2",
            name: "random name 2",
            description: "random description",
            operations: [
                {
                    urlTemplate: "/",
                    displayName: "random subitem display name",
                    method: "POST",
                    contentToRender: "random conlkajfklasjfklsdajfklasdfsa"
                },
                {
                    urlTemplate: "/",
                    displayName: "random subitem display name",
                    method: "POST",
                    contentToRender: "random conlkajfklasjfklsdajfklasdfsa adsf asdf asdfs f"
                }
            ]
        }
    ]


  return (
    <div className="App">
        {data && data.length > 0 && <PermanentDrawerLeft data={data} />}
    </div>
  );
}

export default App;
