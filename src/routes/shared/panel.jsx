function PanelFigure({ url }) {
    return (
        <figure id="overview-figure" className="m-auto mb-2 overview-figure-clube position-relative">
            <img
                className="img-fluid rounded-circle can-edit"
                src={url
                    ? `${url}`
                    : `${'/midia/imagens/kaffe.jpg'}`} />
            <div className="top-0 position-absolute w-100 h-100">
                <label for="imageUpload">
                    <i className="bi bi-pencil-square representante-edicao"></i>
                </label>
                <input className="d-none" type="file" accept=".png, .jpg, .jpeg" id="imageUpload" name="imageUpload" />
                <input type="hidden" name="idClube" value="{idClube}" />
            </div>
        </figure>
    )
}

function PanelInformations({ nome, subtitulo, descricao }) {
    return (
        <section id="overview-section" className="card-body w-100">
            <h4 className="card-title can-edit fs-5">
                {nome}
            </h4>
            <h5 className="card-subtitle mb-2 text-muted can-edit fs-6 small">
                {subtitulo}
            </h5>
            <p className="card-text text-truncate descricao-truncate can-edit mb-1" aria-expanded="false">
                {descricao}
            </p>
            <button id="clube-ler-mais-btn" className="d-block btn-link btn-ler-mais">« Ler mais »</button>
            <section className="w-100 mt-2">
            </section>
        </section>
    )
}

function Panel({ data }) {
    console.log(data)
    return (
        <div
            id="overview-container"
            className="card position-relative overview-pagina"
            style={{ marginRight: '20px', marginLeft: '10px' }}
        >
            <PanelFigure url={data.url} />
            <PanelInformations
                nome={data.nome}
                subtitulo={data.subtitulo}
                descricao={data.descricao}
            />
        </div>
    )
}

export default Panel
