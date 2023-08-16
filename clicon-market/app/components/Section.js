export default function Section(props) {
    return (
      <section className="baseSection" style={props.styleConfig}>
        <div className={"content "+props.classes}>
            {props.children}
        </div>
      </section>
    )
}