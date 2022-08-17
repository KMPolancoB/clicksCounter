

export default function Boton({text, clickButton, handleClick }) {


  return (
    <button 
    className={clickButton 
        ? 'px-4 py-2 border-white border-2 m-5 text-white font-bold bg-blue-600 rounded hover:bg-blue-500'
        : 'px-4 py-2 border-white border-2 m-5 text-white font-bold bg-blue-800 rounded hover:bg-blue-700'} 
    onClick={handleClick}>
    {text}
    </button>
  )
}
