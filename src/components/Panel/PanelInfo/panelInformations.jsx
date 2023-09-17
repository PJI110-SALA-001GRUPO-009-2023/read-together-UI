import { useState } from "react"

export default function PanelInformations({ nome, subtitulo, descricao, isEditing }) {
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
