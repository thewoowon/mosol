const RadioButton = ({
  list,
  onChange,
  value,
}: {
  list: { label: string; value: string }[];
  onChange: (value: string) => void;
  value?: string | null;
}) => {
  return (
    <div className="radio-group">
      {list.map((item, index) => {
        return (
          <label
            className="radio"
            key={index}
            style={{
              fontWeight: 400,
            }}
          >
            <input
              type="radio"
              name="radio"
              value={item.value}
              onChange={(e) => onChange(e.target.value)}
              checked={item.value === value}
            />
            <span className="radio-custom"></span>
            <span className="radio-label">{item.label}</span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioButton;
