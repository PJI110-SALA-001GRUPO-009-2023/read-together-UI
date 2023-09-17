import { Icon } from "@iconify/react"

export default function ControlButton({iconId, onClickHandler, args = null}) {

    return (
        <button
            type="button"
            onClick={() => onClickHandler(args)}
            style={{ backgroundColor: "inherit", zIndex: 4 }}
            className="panel-edicao d-flex p-0 m-1 justify-content-center border rounded-circle "
        >
            <Icon className="h-gray" icon={iconId} width={30} height={30} />
        </button>
    )
}
