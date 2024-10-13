import { CapabilitySection } from "@/components/CapabilitySection";
import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
import { HeaderMegaMenu } from "@/components/header/HeaderMegaMenu";
import { HeroSection } from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";
import { SpecializationSection } from "@/components/SpecializationSection";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShellHeader
        styles={{ header: { background: "none", borderBottom: "none" } }}
      >
        <HeaderMegaMenu />
      </AppShellHeader>
      <AppShellMain styles={{ main: { padding: 0 } }}>
        <HeroSection />
        <SpecializationSection />
        <ServiceSection />
        <CapabilitySection />
      </AppShellMain>
    </AppShell>
  );
}
