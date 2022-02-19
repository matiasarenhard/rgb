import "./styles.css";

function History({ data, backgroundColor }) {
    return <>
        {data.length > 0 && (
            <section>
            <h3>Histórico de cores geradas: </h3>
            <ul>
                {data.map((rgb) => (
                        <li key={rgb.join()}>
                                <br></br><br></br>
                            <div className="small-preview" style={{
                            backgroundColor: backgroundColor(...rgb) 
                            }}
                            >
                                <br></br>
                            {rgb.join(", ")}
                            <br></br>
                            </div>
                        </li>
                    ))}
                    
            </ul>
        </section>

        )};
        
        
    </>;
 }

export default History;
