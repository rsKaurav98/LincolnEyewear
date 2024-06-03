import { Flex, Button, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Pagination({ current, totalPages, onChange }) {
  const buttonStyle = {
    bg: "gray.600",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    padding: "10px 18px",
    margin: "0 5px", // Adjusting margin to create 10px space between buttons
    _hover: { bg: "blue.600" },
    transition: "0.3s",
    fontSize: { base: "14px", md: "16px", lg: "18px" },
    w: "fit-content"
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    // Add the first page
    if (current > 2) {
      pages.push(
        <Button key={1} onClick={() => handlePageChange(1)} {...buttonStyle}>
          1
        </Button>
      );
    }
    if (current > 3) {
      pages.push(<Text key="start-ellipsis" mx={1}>...</Text>); 
    }

    for (let i = Math.max(1, current - 1); i <= Math.min(totalPages, current + 1); i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          {...buttonStyle}
          bg={current === i ? "blue.600" : "gray.600"}
        >
          {i}
        </Button>
      );
    }

    if (current < totalPages - 2) {
      pages.push(<Text key="end-ellipsis" mx={1}>...</Text>);
    }
    if (current < totalPages - 1) {
      pages.push(
        <Button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          {...buttonStyle}
        >
          {totalPages}
        </Button>
      );
    }

    return pages;
  };

  return (
    <Flex w="100%" my={8} justifyContent="center" alignItems="center">
      <Button
        disabled={current === 1}
        onClick={() => handlePageChange(current - 1)}
        {...buttonStyle}
        leftIcon={<ChevronLeftIcon />}
      >
        PREV
      </Button>
      {renderPageNumbers()}
      <Button
        disabled={current === totalPages}
        onClick={() => handlePageChange(current + 1)}
        {...buttonStyle}
        rightIcon={<ChevronRightIcon />}
      >
        NEXT
      </Button>
    </Flex>
  );
}

export default Pagination;
