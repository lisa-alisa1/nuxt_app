export type TypeService = "bridges" | "swaps" | "landings" | "mints";

export interface IProtocolServices {
  icon: string;
  title: string;
  services: Partial<Record<TypeService, IProtocolService[]>>;
}

export interface IProtocolService {
  name: string;
  icon: string;
  link: string;
}

export const protocols: IProtocolServices[] = [
  {
    icon: "/Ethereum.svg",
    title: "Ethereum Mainnet",
    services: {
      bridges: [
        {
          name: "Orbiter",
          icon: "/Orbiter.svg",
          link: "https://orbiter.finance",
        },
        { 
          name: "Scroll", 
          icon: "/Scroll.svg", 
          link: "https://scroll.io" 
        },
      ],
      swaps: [
        {
          name: "SyncSwap",
          icon: "/Syncswap.svg",
          link: "https://syncswap.xyz",
        },
        {
          name: "SpaceFi",
          icon: "/Spacefi.svg",
          link: "https://spacefi.io",
        },
        {
          name: "Velocore",
          icon: "/Velocore.svg",
          link: "https://velocore.xyz",
        },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
        { name: "Izumi", icon: "/Izumi.svg", link: "https://izumi.finance" },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
        { name: "Izumi", icon: "/Izumi.svg", link: "https://izumi.finance" },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
        { name: "Izumi", icon: "/Izumi.svg", link: "https://izumi.finance" },
      ],
      landings: [
        { name: "Mute", icon: "/Mute.svg", link: "https://syncswap.xyz" },
      ],
      mints: [
        {
          name: "Skydrom",
          icon: "/Skydrom.svg",
          link: "https://skydrom.com",
        },
      ],
    },
  },
  {
    icon: "/Solana.svg",
    title: "Solana",
    services: {
      bridges: [
        { name: "Scroll", icon: "/Scroll.svg", link: "https://scroll.io" },
      ],
      swaps: [
        {
          name: "Velocore",
          icon: "/Velocore.svg",
          link: "https://velocore.xyz",
        },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
        { name: "Izumi", icon: "/Izumi.svg", link: "https://izumi.finance" },
      ],
      landings: [
        { name: "Mute", icon: "/Mute.svg", link: "https://syncswap.xyz" },
      ],
    },
  },
  {
    icon: "/Ton.svg",
    title: "Ton",
    services: {
      bridges: [
        {
          name: "Orbiter",
          icon: "/Orbiter.svg",
          link: "https://orbiter.finance",
        },
      ],
      swaps: [
        {
          name: "Velocore",
          icon: "/Velocore.svg",
          link: "https://velocore.xyz",
        },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
      ],
      mints: [
        {
          name: "Skydrom",
          icon: "/Skydrom.svg",
          link: "https://skydrom.com",
        },
      ],
    },
  },
  {
    icon: "/Base.svg",
    title: "Base",
    services: {
      bridges: [
        { name: "Scroll", icon: "/Scroll.svg", link: "https://scroll.io" },
      ],
      swaps: [
        {
          name: "Velocore",
          icon: "/Velocore.svg",
          link: "https://velocore.xyz",
        },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
        { name: "Izumi", icon: "/Izumi.svg", link: "https://izumi.finance" },
      ],
      landings: [
        { name: "Mute", icon: "/Mute.svg", link: "https://syncswap.xyz" },
      ],
    },
  },
  {
    icon: "/Zksync.svg",
    title: "zkSync",
    services: {
      bridges: [
        {
          name: "Orbiter",
          icon: "/Orbiter.svg",
          link: "https://orbiter.finance",
        },
      ],
      swaps: [
        {
          name: "Velocore",
          icon: "/Velocore.svg",
          link: "https://velocore.xyz",
        },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
      ],
      mints: [
        {
          name: "Skydrom",
          icon: "/Skydrom.svg",
          link: "https://skydrom.com",
        },
      ],
    },
  },
  {
    icon: "/Starknet.svg",
    title: "Starknet",
    services: {
      bridges: [
        { name: "Scroll", icon: "/Scroll.svg", link: "https://scroll.io" },
      ],
      swaps: [
        {
          name: "Velocore",
          icon: "/Velocore.svg",
          link: "https://velocore.xyz",
        },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
        { name: "Izumi", icon: "/Izumi.svg", link: "https://izumi.finance" },
      ],
      landings: [
        { name: "Mute", icon: "/Mute.svg", link: "https://syncswap.xyz" },
      ],
    },
  },
  {
    icon: "/Tether.svg",
    title: "Tether",
    services: {
      bridges: [
        {
          name: "Orbiter",
          icon: "/Orbiter.svg",
          link: "https://orbiter.finance",
        },
      ],
      swaps: [
        {
          name: "Velocore",
          icon: "/Velocore.svg",
          link: "https://velocore.xyz",
        },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
      ],
      mints: [
        {
          name: "Skydrom",
          icon: "/Skydrom.svg",
          link: "https://skydrom.com",
        },
      ],
    },
  },
  {
    icon: "/Layerbank.svg",
    title: "Layerbank",
    services: {
      bridges: [
        {
          name: "Orbiter",
          icon: "/Orbiter.svg",
          link: "https://orbiter.finance",
        },
        { name: "Scroll", icon: "/Scroll.svg", link: "https://scroll.io" },
      ],
      swaps: [
        {
          name: "SyncSwap",
          icon: "/Syncswap.svg",
          link: "https://syncswap.xyz",
        },
        {
          name: "Velocore",
          icon: "/Velocore.svg",
          link: "https://velocore.xyz",
        },
        { name: "Maverick", icon: "/Maverick.svg", link: "https://mav.xyz" },
      ],
      landings: [
        { name: "Mute", icon: "/Mute.svg", link: "https://syncswap.xyz" },
      ],
      mints: [
        {
          name: "Skydrom",
          icon: "/Skydrom.svg",
          link: "https://skydrom.com",
        },
      ],
    },
  },
];
