import type { NetworkId } from "@/utils/types";

type NetworkComponents = {
  [k: string]: { id: string; props?: Record<string, unknown> };
};

export const getComponent = (...[name]: TemplateStringsArray[]) =>
  `c5d50293c3a3ed146051462e6e02e469acda10b517bfffeb3d34652076f0cb7c/widget/${name}`;

export const componentsByNetworkId: Record<
  NetworkId,
  NetworkComponents | undefined
> = {
  testnet: {},
  mainnet: {
    home: {
      id: getComponent`Hero`,
      props: {
        redirect: (path: string) => window.location.href = path,
      },
    },
    feature_data: {
      id: getComponent`ImageWidget`,
      props: {
        title: "Composable",
        description: "Never worry again about finding the right nodules to build your own decentralized App.",
        icon: "switch",
      },
    },
    feature_privacy: {
      id: getComponent`ImageWidget`,
      props: {
        title: "Private",
        description: "Customer data is protected. We limit access to personal details in transaction data.",
        icon: "eye",
      },
    },
    feature_global: {
      id: getComponent`ImageWidget`,
      props: {
        title: "Global",
        description: "Match customers and service providers from anywhere in the world, on any chain.",
        icon: "world",
      },
    },
    data_count: {
      id: getComponent`DataWidget`,
      props: {
        cipher: "200k",
        title: "active users",
        description: "Last month, this many users have used the marketplace.",
      },
    },
    data_tb: {
      id: getComponent`DataWidget`,
      props: {
        cipher: "50 TiB",
        title: "total used data",
        description: "Users around the world have used this huge amount!",
      },
    },
    data_mean: {
      id: getComponent`DataWidget`,
      props: {
        cipher: "3 GiB",
        title: "average exchange",
        description: "Normally, users exchange this amount of data.",
      },
    },
    app_hero: {
      id: getComponent`AppHero`,
      props: {
        width: "auto",
        height: "200px",
        gif: true,
        fn: () => void 0,
      },
    },
    app_received: {
      id: getComponent`DataWidget`,
      props: {
        cipher: "1.0 GiB",
        title: "of data received",
        description: "You received this amount of data in this billing period.",
      },
    },
    app_sent: {
      id: getComponent`DataWidget`,
      props: {
        cipher: "0.6 GiB",
        title: "of data sent",
        description: "You sent this amount of data in this billing period.",
      },
    },
  },
};
