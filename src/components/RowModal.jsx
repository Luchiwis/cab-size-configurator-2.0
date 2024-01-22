
export function RowModal({ children, id, title }) {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={id+'label'} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={id+'label'}>{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Config elevator cab size</button>
                    </div>
                </div>
            </div>
        </div>
    )
}