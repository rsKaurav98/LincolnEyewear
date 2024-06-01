import { Flex, Button } from "@chakra-ui/react";

function Pagination({ current, onChange }) {
  const buttonStyle = {
    background: "grey",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    padding: "10px 18px",
    margin: "auto",
    _hover: { bg: "#455666"},
    transition: "0.3s",
    fontSize:{base:"11px",md:"15px",lg:"20px"}
  };

  const prev = (
    <Button
      disabled={current === 0}
      onClick={() => onChange(current - 1)}
      {...buttonStyle}
    >
      PREV
    </Button>
  );

  const currentPage = (
    <Button {...buttonStyle}>
      {current + 1}
    </Button>
  );

  const next = (
    <Button onClick={() => onChange(current + 1)} {...buttonStyle}>
      NEXT
    </Button>
  );

  return (
    <Flex
      w={{ md: "15%", base: "5%" }}
      m="2% auto"
      gap="2"
      justifyContent="center"
    >
      {prev}
      {currentPage}
      {next}
    </Flex>
  );
}

export default Pagination;
