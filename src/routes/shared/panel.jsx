import { useState } from "react"
import { Icon } from "@iconify/react"
import "../../assets/panel.css"
import { Form } from "react-router-dom"

function PanelFigure({ url }) {
    return (
        <figure id="overview-figure" className="m-auto mb-2 overview-figure-clube position-relative">
            <img
                className="img-fluid rounded-circle can-edit"
                src={url
                    ? `${url}`
                    : `${'/midia/imagens/kaffe.jpg'}`} />
            <div className="top-0 position-absolute w-100 h-100">
                <label htmlFor="imageUpload">
                    <i className="bi bi-pencil-square representante-edicao"></i>
                </label>
                <input className="d-none" type="file" accept=".png, .jpg, .jpeg" id="imageUpload" name="imageUpload" />
                <input type="hidden" name="idClube" value="{idClube}" />
            </div>
        </figure>
    )
}

function PanelInformations({ nome, subtitulo, descricao, isEditing }) {
    const [showCompleteText, setShowCompleteText] = useState(false)

    console.log(arguments)

    return (
        !isEditing
            ? (
                <section id="overview-section" className="card-body w-100" >
                    {nome &&
                        <h4 className="card-title can-edit fs-5">
                            {nome}
                        </h4>
                    }
                    {subtitulo &&
                        <h5 className="card-subtitle mb-2 text-muted can-edit fs-6 small">
                            {subtitulo}
                        </h5>
                    }
                    {(descricao || bio) &&
                        <p
                            className={'card-text ' + `${showCompleteText ? 'text-truncate' : ''}` + ' descricao-truncate mb-1'}
                            aria-expanded="false"
                        >
                            {descricao || bio}
                        </p>
                    }
                    <button
                        id="clube-ler-mais-btn"
                        onClick={() => setShowCompleteText(!showCompleteText)}
                        className="d-block btn-link btn-ler-mais"
                    >
                        « Ler mais »
                    </button>
                </section >
            )
            : (
                <Form>
                    {Object.keys(arguments[0]).slice(0, 3).map(item =>
                        <div class="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                class="form-label"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div
                                id="emailHelp"
                                class="form-text"
                            >
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                    )}
                </Form>
            )
    )
}

function Panel({ data }) {
    const [editState, setEditState] = useState(false)

    return (
        <div
            id="overview-container"
            className="card position-relative overview-pagina"
            style={{ marginRight: '20px', marginLeft: '10px' }}
        >
            <button
                type="button"
                onClick={() => setEditState(!editState)}
                style={{ backgroundColor: "inherit" }}
                className="panel-edicao position-absolute end-0 d-flex p-0 m-1 justify-content-center border rounded-circle"
            >
                <Icon icon="mdi:gear-outline" width={30} height={30} />
            </button>
            <PanelFigure url={data.url} isEditing={editState} />
            <PanelInformations
                nome={data.nome}
                subtitulo={data.subtitulo}
                descricao={data.descricao}
                isEditing={editState}
            />
        </div >
    )
}

export default Panel
