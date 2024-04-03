export function Update() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input type="text" placeholder="title" onChange={function(){
                setTitle(e.tarrget.value);
            }}></input> <br />
            <input type="text" placeholder="description" onChange={function(){
                setDescription(e.target.value);
            }}></input> <br />
            <button>Update</button>
        </div>
    );
}