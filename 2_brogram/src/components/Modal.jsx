import ReactDom from 'react-dom'

export default function Modal(props) {

    const { showExerciseDescription, handleCloseModal } = props
    const { name, description } = showExerciseDescription || {}

    return ReactDom.createPortal((
        <div className='modal-container'>
            <button className='modal-underlay' onClick={handleCloseModal} />
            <div className='modal-content'>
                <div>
                    <h6>Name</h6>
                    <h2 className='skill-name'>{name.replaceAll('-', ' ')}</h2>
                </div>
                <div>
                    <h6>Description</h6>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    ),
        document.getElementById('portal')
    )

}