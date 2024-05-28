import './InputAdmin.css'
 
export function InputAdmin (props) {
    const { img1, img2, img3,type, text,placeholder } = props
    return (
      <div className='div-input-admin'>
        <img className='input-img1' src={img1} />
        <img className='input-img3' src={img3} />
        <input className='input-admin'  type={type} placeholder={text} />
        <img className='input-img2' src={img2} />

      </div>
    )
  }