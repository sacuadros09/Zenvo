 import './InputPortfolio.css'
 
export function InputPortfolio (props) {
    const { img1, img2, type, text } = props
    return (
      <div>
        <img src={img1} />
        <input type={type} placeholder={text} />
        <img src={img2} />
      </div>
    )
  }