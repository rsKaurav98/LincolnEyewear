import { Flex, Button, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Pagination({ current, totalPages, onChange }) {
  const buttonStyle = {
    bg: "gray.600",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    padding: { base: "4px 8px", md: "6px 12px", lg: "10px 18px" },
    margin: { base: "0 2px", md: "0 5px" },
    _hover: { bg: "blue.600" },
    transition: "0.3s",
    fontSize: { base: "12px", md: "14px", lg: "16px" },
    w: "fit-content",
    whiteSpace: "nowrap"
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (current > 2) {
      pages.push(
        <Button key={1} onClick={() => handlePageChange(1)} {...buttonStyle} display={{base:"none",md:"inherit"}}>
          1
        </Button>
      );
    }
    if (current > 3) {
      pages.push(<Text key="start-ellipsis" mx={1} display={{base:"none",md:"inherit"}}>...</Text>); 
    }

    for (let i = Math.max(1, current - 1); i <= Math.min(totalPages, current + 1); i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          {...buttonStyle}
          bg={current === i ? "blue.600" : "gray.600"}
          display={{base:"none",md:"inherit"}}
        >
          {i}
        </Button>
      );
    }

    if (current < totalPages - 2) {
      pages.push(<Text key="end-ellipsis" mx={1} display={{base:"none",md:"inherit"}} >...</Text>);
    }
    if (current < totalPages - 1) {
      pages.push(
        <Button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          {...buttonStyle}
          display={{base:"none",md:"inherit"}}
        >
          {totalPages}
        </Button>
      );
    }

    return pages;
  };

  return (
    <Flex
      w="100%"
      my={8}
      justifyContent="center"
      alignItems="center"
      flexWrap="nowrap"
      overflowX="auto"
    >
      <Button
        disabled={current === 1}
        onClick={() => { handlePageChange(current - 1); window.scrollTo(0, 0); }}
        
        {...buttonStyle}
        leftIcon={<ChevronLeftIcon />}
        
      >
        PREV
      </Button>
      {renderPageNumbers()}
      <Button
        disabled={current === totalPages}
        onClick={() => { handlePageChange(current + 1); window.scrollTo(0, 0); }}
        {...buttonStyle}
        rightIcon={<ChevronRightIcon />}
      >
        NEXT
      </Button>
    </Flex>
  );
}

export default Pagination;
