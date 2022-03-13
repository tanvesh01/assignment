import { styled } from "@styles/stitches";
import { XIcon } from "@heroicons/react/solid";

interface InputWithClearButtonType {
  value: string;
  placeholder: string;
  name: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const InputWithClearButton: React.FC<InputWithClearButtonType> = ({
  value,
  setValue,
  placeholder,
  name,
}) => {
  return (
    <ParentContainer>
      <StyledInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        name={name}
      />
      <AdornmentContainer onClick={() => setValue("")}>
        {value && <XIcon />}
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
  "&:focus": { boxShadow: "none" },
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
    width: "1.5rem",
    height: "1.5rem",
  },
});
const ParentContainer = styled("div", {
  width: "352px",
  border: "1px solid $black85",
  display: "flex",
  borderRadius: 4,
  [`&:focus-within `]: {
    boxShadow: `$inputShadow`,
  },
});
