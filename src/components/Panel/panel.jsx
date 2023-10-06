import { useState } from "react"
import "./panel.css"
import { Form } from "react-router-dom"
import PanelFigure from "./PanelFigure/panelFigure"
import PanelInformations from "./PanelInfo/panelInformations"
import ControlButton from "./ControlButton/controlButton"

function PanelComponents({ data, state }) {
    return (
        <>
            <PanelFigure url={data.url} isEditing={state} />
            <PanelInformations
                nome={data.nome}
                subtitulo={data.subtitulo}
                descricao={data.descricao}
                isEditing={state}
            />
        </>
    )
}

function Panel({ data, endpointUrl }) {
    const [editState, setEditState] = useState(false)

    function toggleEditState(state) {
        setEditState(!state);
    }

    return (
        <div
            id="overview-container"
            className="card position-relative overview-pagina"
            style={{ marginRight: '20px', marginLeft: '10px' }}
        >
            <div
                className="btn-group-vertical position-absolute end-0"
                role="group"
                aria-label="Vertical button group"
            >
                {[
                    ["mdi:gear-outline", toggleEditState, editState],
                    ["ri:save-3-fill", alert, "null"],
                    ["material-symbols:cancel", alert, "iae"]
                ].map(
                    ([iconId, handler, args], idx) =>
                        <ControlButton
                            key={idx}
                            args={args}
                            iconId={iconId}
                            onClickHandler={handler}
                        />
                )}
            </div>
            {!editState
                ? (
                    <PanelComponents data={data} state={editState} />
                )
                : (
                    <Form method="POST">
                        <PanelComponents data={data} state={editState} />
                    </Form>
                )}
        </div>
    )
}

export default Panel