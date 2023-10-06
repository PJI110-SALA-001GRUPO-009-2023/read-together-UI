import Panel from "../../components/Panel/panel"

function Clube({ data }) {
    console.log(data)
    return (
        <>
            <div
                className="container h-100 pt-4"
                style={{ marginTop: '20px' }}>
                <div className="row">
                    <div className="col-lg-4">
                        <Panel data={data} />
                    </div>
                    <div className="col row justify-content-evenly h-50">
                        <section className="col-lg-4 d-flex flex-column">
                            <a href="<%- clubeData.idClube -%>/reuniao/1" className="d-inline rounded mb-2 btn btn-lilas btn-secondary">
                                Participar da Reunião
                            </a>
                            <button className="line rounded mb-2 btn btn-lilas btn-secondary" type="button" data-bs-toggle="modal"
                                data-bs-target="#membrosModal">
                                Membros
                            </button>
                        </section>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Clube
