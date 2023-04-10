import React from "react";
import {useColorMode, Box, IconButton} from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";

const ThemeToggler = () => {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <Box textAlign="right" py={4} mr={12}>
            <IconButton
                icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                onClick={toggleColorMode}
                variant="ghost"
                aria-label="icon"/>
        </Box>
    );
};

export default ThemeToggler;