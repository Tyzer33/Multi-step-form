/* eslint-disable react/jsx-props-no-spreading */
function Button({ ...props }) {
  return <button type="button" {...props} />
}

export default Button
