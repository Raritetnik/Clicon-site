export default function CustomBtn(props) {

    const custStyle = {
      backgroundColor: "#EBC80C",
      padding: ".7rem 1.7rem",
      color: 'black',
      display: 'flex',
      borderRadius: '5px',
      fontWeight: "500",
      fontSize: ".9rem",
      gap: '0.4rem'
     }
    return (
      <button style={ custStyle }>
        {props.children}
      </button>
    )
}