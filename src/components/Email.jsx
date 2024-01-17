
export function EmailConsult({children, restrictions}) {
    return (
        <a className="text-decoration-none text-white" href={"mailto:sales@fesiparts.com?subject=Custom Cab Size Consult&body"}>{children}</a>
    )
}