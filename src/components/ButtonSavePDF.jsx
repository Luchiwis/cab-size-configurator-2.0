export function ButtonSavePDF({children}) {
    return (
        <button className="btn btn-secondary my-2" onClick={print}>{children}</button>
    )
}