import './InputPortfolio.css'
 
export function InputPortfolio (props) {
    const { img1, img2, type, text } = props
    return (
      <div className='div-input-port'>
        <img src={img1} />
        <input className='input-port' type={type} placeholder={text} />
        <img src={img2} />
      </div>
    )
  }