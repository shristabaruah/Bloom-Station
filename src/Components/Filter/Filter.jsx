import { Box, Select } from "@chakra-ui/react";
import { BsFilterLeft } from "react-icons/bs";
const Filter = ({ filterType , setFilterType }) => {
  return (
    <>
      <Box>
        <Select
          icon={<BsFilterLeft />}
          // textAlign="center"
          // w="25%"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="noFilter">No Filter</option>
          <option value="Popular">Popular</option>
          <option value="Oldest_First">Oldest First</option>
          <option value="Newest_First">Newest First</option>
        </Select>
      </Box>
    </>
  );
};

export { Filter };
