
import Contatore from "./contatore";
function App() {
    const [persone, setPersona] = useState(anagrafica);

    const [persona, setPersona] = useState (
        {
            id: "1",
            nome: "Roberto",
            cognome: "del",
            età: 48,
        }
    )

    const data = new Date();

    const[saluta, setSaluta] = useState("Ciao");

    const salutami = () => {
        console.log(saluta);
        setSaluta("Arrivederci");
        console.log(saluta);
    };
    const eliminaOggetto = {id} => {
        const newAna = persone.filter((ang) => ang.id !== id);

        setPersona(newAna);

        console.log(id);
  
    };

    const compleanno=() => {
        let anni=persona.eta+1

        setPersona({
            ...persona,
            eta:anni
        })
    }

    return (
        <div className="App"></div>
        <h1>Primma App React</h1>
        <Contatore></Contatore>
    )
}