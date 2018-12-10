import * as React from "react"

interface Props {
  name?: string
}

const Button: React.SFC<Props> = (props) => (
  <div>
    Yo, {props.name}!
    <div>
      {props.children}
    </div>
  </div>
);

Button.defaultProps = {
  name: "Dawg"
}

export default Button;
