export default function Section(props) {
    const bgColor = props.bgColor || 'transparent';
    const textColor = props.textColor || 'black';
    return (
      <section className="baseSection" style={{ backgroundColor: bgColor, color: textColor }}>
        <div className="content">
            {props.children}
        </div>
      </section>
    )
}