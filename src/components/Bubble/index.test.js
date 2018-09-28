import {mount} from "enzyme"
import React from "react"
import Bubble from "./index"

const bubbleProps = {
  background: "#000",
  color: "#fff",
  padding: "1rem 2rem",
  radius: "1rem",
}
const BubbleFixture = <Bubble {...bubbleProps} />
const BubbleNoPropsFixture = <Bubble />

describe("Bubble", () => {
  it("renders", () => {
    mount(BubbleFixture)
    mount(BubbleNoPropsFixture)
  })
})
