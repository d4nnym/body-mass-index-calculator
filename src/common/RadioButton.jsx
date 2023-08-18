export default function RadioButton({ value, id, name}) {
  return (
    <>
      <input type="radio" name={name} id={id} />
      <label htmlFor={id} className="radio">
        {value}
      </label>
    </>
  );
}
