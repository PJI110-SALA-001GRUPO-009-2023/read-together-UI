import { useState } from "react"


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

export default function PanelFigure({ url, isEditing }) {
    const [imageInformation, setImageInformation] = useState({ url: '', fileName: '', error: false })
    const [inputHovered, setInputHovered] = useState(false)

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
