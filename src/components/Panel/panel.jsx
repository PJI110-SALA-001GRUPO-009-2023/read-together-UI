import { useState } from "react"
import { Icon } from "@iconify/react"
import "./panel.css"
import { Form } from "react-router-dom"

function PanelFigure({ url, isEditing }) {
    const [imageInformation, setImageInformation] = useState({ url: '', fileName: '', error: false })
    const [inputHovered, setInputHovered] = useState(false)

    function updateImageInformation({ /** @type {HTMLImageElement} */ target }) {
        /** @type {File} */
        const file = target.files[0]
        const sizeInMB = file.size / (1024 * 1024)
        const imageInformation = { url: '', fileName: '', error: true }
        if (sizeInMB < 7) {
            imageInformation.url = URL.createObjectURL(file)
            imageInformation.fileName = file.name
            imageInformation.error = false
        }
        setImageInformation(imageInformation)
    }

    return (
        !isEditing
            ? (
                <figure
                    id="overview-figure"
                    className="position-relative d-flex justify-content-center mt-3"
                    style={{ maxHeight: '300px' }}
                >
                    <img
                        className="img-fluid rounded-circle can-edit"
                        src={url
                            ? `${url}`
                            : `${'/midia/imagens/kaffe.jpg'}`} />
                </figure>
            ) : (
                <div
                    className="w-100 h-100 position-relative"
                    onClick={() => document.querySelector("#imageUpload").click()}
                >
                    <div
                        style={{ maxHeight: '300px', cursor: 'pointer' }}
                        onMouseOver={() => setInputHovered(true)}
                        onMouseOut={() => setInputHovered(false)}
                        className="d-flex mt-4 clip-path position-relative align-items-center justify-content-center"
                    >
                        <img
                            className="clip-path w-100"
                            src={imageInformation.url
                                ? `${imageInformation.url}`
                                : `${'/midia/imagens/book-club_0.jpg'}`}
                        />
                        {inputHovered &&
                            <span
                                style={{ backgroundColor: '#eee', height: '80px', bottom: '-15px' }}
                                className="position-absolute left-50 w-100 d-flex justify-content-center align-items-start"
                            >
                                Nova Imagem
                            </span>
                        }
                    </div>
                    {imageInformation.url &&
                        <span
                            className="w-100 small text-center text-truncate d-block p-0 mb-2"
                            title={`${imageInformation.fileName}`}
                        >
                            Previewing {imageInformation.fileName}
                        </span>
                    }
                    <input
                        id="imageUpload"
                        className="d-none"
                        accept=".png, .jpg, .jpeg"
                        name="imageUpload"
                        type="file"
                        onInput={(e) => updateImageInformation(e)}
                    />
                    <input type="hidden" name="idClube" value="{idClube}" />
                </div>
            )
    )
}

function PanelInformations({ nome, subtitulo, descricao, isEditing }) {
    const [showCompleteText, setShowCompleteText] = useState(false)

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
                <section id="overview-section" className="card-body w-100" >
                    {Object.keys(arguments[0]).slice(0, 3).map((item, idx) =>
                        <div key={idx} className="mb-3">
                            <label
                                htmlFor={`${item}-field`}
                                className="form-label small m-0"
                            >
                                {`${item[0].toUpperCase()}${item.substring(1).toLowerCase()}`}
                            </label>
                            <input
                                id={`${item}-field`}
                                type="text"
                                name={item}
                                className="form-control p-1 border border-dark"
                            />
                        </div>
                    )}
                </section>
            )
    )
}

function PanelComponents({ data, editState }) {
    return <>
        <PanelFigure url={data.url} isEditing={editState} />
        <PanelInformations
            nome={data.nome}
            subtitulo={data.subtitulo}
            descricao={data.descricao}
            isEditing={editState}
        />
    </>
}

function Panel({ data, endpointUrl }) {
    const [editState, setEditState] = useState(false)


    return (
        <div
            id="overview-container"
            className="card position-relative overview-pagina"
            style={{ marginRight: '20px', marginLeft: '10px' }}
        >
            <div className="btn-group-vertical position-absolute end-0" role="group" aria-label="Vertical button group">
                <button
                    type="button"
                    onClick={() => setEditState(!editState)}
                    style={{ backgroundColor: "inherit", zIndex: 4 }}
                    className="panel-edicao d-flex p-0 m-1 justify-content-center border rounded-circle "
                >
                    <Icon className="h-gray" icon="mdi:gear-outline" width={30} height={30} />
                </button>
                <button
                    type="button"
                    onClick={() => alert('iaeee')}
                    style={{ backgroundColor: "inherit", zIndex: 4 }}
                    className="panel-edicao d-flex p-0 m-1 justify-content-center border rounded-circle "
                >
                    <Icon icon="ri:save-3-fill" width={30} height={30} />
                </button>
                <button
                    type="button"
                    onClick={() => alert('iaeee')}
                    style={{ backgroundColor: "inherit", zIndex: 4 }}
                    className="panel-edicao  d-flex p-0 m-1 justify-content-center border rounded-circle "
                >
                    <Icon icon="material-symbols:cancel" width={30} height={30} />
                </button>
            </div>
            {!editState
                ? (
                    <PanelComponents data={data} editState={editState} />
                )
                : (
                    <Form method="POST">
                        <PanelComponents data={data} editState={editState} />
                    </Form>
                )}
        </div >
    )
}

export default Panel
