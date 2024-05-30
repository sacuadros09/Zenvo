import './InputUpload.css'

export function InputUpload (props) {
    const {  text } = props
    return (
      <div className='div-input-check'>
        
        <input type='input-checkbox' className='input-check'  />
        <p className='name-checkbox'>{text}</p>
        
      </div>
    )
  }