import {
  Group,
  Button,
  Box,
} from "@mantine/core";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from "./HeaderMegaMenu.module.css";

export function HeaderMegaMenu() {

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <a href="#" className={classes.link}>
            Logo
          </a>

          <Group visibleFrom="sm">
            <Button variant="default">Contact</Button>
          </Group>

        </Group>
      </header>
    </Box>
  );
}
