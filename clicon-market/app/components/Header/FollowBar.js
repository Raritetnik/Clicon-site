import SelectionBtn from "../Buttons/SelectionBtn"
import Section from "../Section"

export default function FollowBar(props) {

  return (
    <Section classes='followBar' styleConfig={{ backgroundColor: "var(--secondary_700)" }}>
        <h1>Welcome to Clicon online eCommerce store.</h1>
        <div>
          <h1>Follow us:</h1>

          <SelectionBtn />
          <SelectionBtn />
        </div>
    </Section>
  )
}