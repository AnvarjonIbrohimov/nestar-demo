import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import Filter from "@/libs/components/property/Filter";
import PropertyCard from "@/libs/components/property/PropertyCard";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { Box, Button, Pagination, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  const device = useDeviceDetect();
  const properties = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (device === "mobile") {
    return (
      <>
        <Stack className={"footer-container"}>PROPERTYLIST MOBILE</Stack>
      </>
    );
  } else {
    return (
      <div id={"property-list-page"} style={{ position: "relative" }}>
        <Stack className={"container"}>
          {/* right */}
          <Box className={"right"}>
            <span>Sort By</span>
            <div>
              <Button endIcon={<KeyboardArrowDownRounded />}>New</Button>
            </div>
          </Box>
          {/* Property Page */}
          <Stack className={"property-page"}>
            <Stack className={"filter-config"}>
              <Filter />
            </Stack>
            <Stack className={"main-config"} mb={"76px"}>
              <Stack className={"list-config"}>
                {properties.map((property, index) => {
                  return <PropertyCard key={index} />;
                })}
              </Stack>
              {/* Pagination */}
              <Stack className={"pagination-config"}>
                <Stack className={"pagination-box"}>
                  <Pagination
                    page={1}
                    count={5}
                    shape="circular"
                    color="primary"
                  />
                </Stack>
                <Stack>Total 5 properties aviable</Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
};

export default withLayoutBasic(PropertyList);
