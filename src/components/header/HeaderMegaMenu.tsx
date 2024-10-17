
"use client"
import {
  Group,
  Button,
  Box,
} from "@mantine/core";
import classes from "./HeaderMegaMenu.module.css";

export function HeaderMegaMenu() {

  // Function to handle scroll
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <a href="#" className={classes.link}>
            The Typed Media
            {/* The <span style={{ fontFamily: "monospace", }}>Typed Media</span> */}
          </a>

          <Group visibleFrom="sm">
            <Button variant="default" onClick={handleScrollToContact}>Contact</Button>
          </Group>

        </Group>
      </header>
    </Box>
  );
}
