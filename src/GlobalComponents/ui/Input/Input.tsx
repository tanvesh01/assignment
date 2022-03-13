import { styled } from "@styles/stitches";
import { XIcon } from "@heroicons/react/solid";

interface InputWithClearButtonType {
  value: string;
  placeholder: string;
  name: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}

export const InputWithClearButton: React.FC<InputWithClearButtonType> = ({
  value,
  setValue,
  placeholder,
  name,
  id,
}) => {
  return (
    <ParentContainer>
      <StyledInput
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        name={name}
      />
      <AdornmentContainer onClick={() => setValue("")} aria-label="Clear">
        {value && <XIcon color="#4D4D4D" />}
      </AdornmentContainer>
    </ParentContainer>
  );
};

const StyledInput = styled("input", {
  display: "block",
  borderRadius: "4px",
  height: "48px",
  fontSize: "1rem",
  padding: "0 1rem",
  width: "100%",
  border: "none",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
});

const AdornmentContainer = styled("button", {
  backgroundColor: "white",
  borderLeft: "none",
  display: "flex",
  alignItems: "center",
  paddingRight: "18px",
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  minWidth: "3rem",
  border: 0,
  cursor: "pointer",
  "& svg": {
    width: "1.4rem",
    height: "1.4rem",
  },
});
const ParentContainer = styled("div", {
  width: "352px",
  border: "1px solid $black85",
  display: "flex",
  borderRadius: 4,
});
