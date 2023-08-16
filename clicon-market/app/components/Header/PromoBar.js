import Image from "next/image"
import Section from "../Section"
import CustomBtn from "../Buttons/CustomBtn"

export default function PromoBar() {

    return (
      <Section classes='promoBar' styleConfig={{ backgroundColor: "var(--gray_900)" }}>
        <Image
        src="/assets/black_friday.png"
        height={44}
        width={160}
        alt="Black Friday"
        style={{ height: '44px' }}
        />
        <h1>Up to <span style={{ fontSize: "2rem", color: "#EBC80C" }}>59%</span> <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>OFF</span></h1>
        <CustomBtn>
            <h1>SHOP NOW</h1>
            <Image
                src="/assets/icons/ArrowRight.svg"
                height={19}
                width={19}
                alt="Black Friday"
                />
        </CustomBtn>
      </Section>
    )
}