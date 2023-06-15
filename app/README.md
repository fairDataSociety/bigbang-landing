# Warp Core React Frontend

Warp Core's frontend is based on a Create-React-App in TypeScript, and uses a Redux-like state store using Context.

## State Store

The app is wrapped in multiple providers, each handling its own layer of the state. There's a theme provider to handle the CSS styles, a contract provider to handle smart contract logic, interfaces, and artifacts, a store provider to handle the app-specific global state, and a web3react provider to handle wallet connections.

TODO: scaffold out other providers, describe

## Web3React

Warp Core connects the app to the user's wallet using the [`web3react`](https://github.com/NoahZinsmeister/web3-react) library.

### Wallet and Provider Connectors

Wallets and web3 providers (such as Infura) connect to an app in `web3react` via a `connector`. The connectors are listed in `src/wallets/connectors.ts`. Currently there is support for injected wallets such as MetaMask, providers such as Infura, widget wallets such as Portis, and more. If you wish to add a new wallet or provider, there is likely already a web3react package to aid the process (see Portis for an example). There is a list of packages on the landing page of the GitHub repo ([here](https://github.com/NoahZinsmeister/web3-react)).

### Connecting Wallets

Wallets are connected in `src/containers/WalletWrapper.tsx`. As of this writing, Warp Core ships with support for Portis and Torus, along with support for injected providers (such as MetaMask).

We'll describe the process of connecting a wallet using `web3-react`, and also use WalletConnect as an example with code snippets.

First you'll need to get the connector for the desired wallet from the `web3-react` repo. You can find the code for the connectors [here](https://github.com/NoahZinsmeister/web3-react/tree/v6/packages), though each is also its own npm package, and should be added using Yarn, installing each separately as needed.

If we wanted WalletConnect, we would get the package using `yarn add @web3-react/walletconnect-connector`.

Each wallet needs its own unique instantiation details. We won't give a guide for each wallet here other than giving our WalletConnect example. If you want to add something else, head over to the package details in the `web3-react` repo and see what you'll need there.

With WalletConnect, we'd head to the [`walletconnect-connector` directory](https://github.com/NoahZinsmeister/web3-react/tree/v6/packages/walletconnect-connector). In the `src/` directory there we can see an `index.ts` file, which has a TypeScript interface called `WalletConnectConstructorArguments`. These are the arguments you'll need when creating a WalletConnect connector inside your app. Well, there's actually only one for WalletConnect, but many others have more.

```typescript
export interface WalletConnectConnectorArguments extends IWalletConnectProviderOptions {
  supportedChainIds?: number[]
}
```
Warp Core provides `wallet/connectors.ts` for wallet connections. To connect WalletConnect, we'd import the WalletConnect connector:
```typescript
// in wallets/connectors.ts
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
```
Using the interface as our guide we can see that the only obligatory argument is `chainId`. If we're testing on Goerli, this means all we'd need to add to `connectors.ts` is:
```typescript
export const walletConnect = new TorusConnector({ chainId: 5 });
```
(`chainId: 5` is Goerli, you can replace that with whatever chain you want to work with.)

Next, import your wallet in `containers/WalletWrapper.tsx`. Currently line 6 is:
```typescript
import { injectedConnector, portis, torus } from "../wallets/connectors";
```
You can just add `walletConnect` to the list:
```typescript
import { injectedConnector, portis, torus, walletConnect } from "../wallets/connectors";
```

_The following details how to integrate a new wallet in `connectors.tsx`. If you are already comfortable with web3/blockchain in React, you can probably skip this section and infer it directly from the code and existing examples there._

You'll need to create a new function for selecting the wallet you've integrated. You can see the `selectMetamask` and `selectPortis` functions in `connectors.tsx`, if we wanted to add WalletConnect, we'd add:
```typescript
const selectWalletConnect = () => {
    setWallet(walletConnect);
  };
```
Part of the beauty of `web3-react` is that the `handleConnect` doesn't need to be changed or updated at all. In order for a button to show up in a "select wallet" modal, you'll also need to add an object to the `wallets` array.
```typescript
const wallets = [
    // ...Metamask, Portis, and Torus objects
    {
      name: "walletConnect",
      connectFunction: selectWalletConnect,
      selected: wallet === walletConnect,
      activating: activatingConnector === walletConnect,
      active: connector === walletConnect,
      icon: WalletConnect,
    },
]
```
(If you want the icon, you'll need to find it. It should be an svg, and placed in `/components/icons`, then imported as a React component. If you're following along with WalletConnect, they have a repo of assets in their GitHub, and [this](https://github.com/WalletConnect/walletconnect-assets/blob/master/svg/walletconnect-logo.svg) is probably what you're looking for.)

Many of these properties (`selected`, `activated`, and more) are provided to help make for easy UI patterns which will be discussed and documented later.

You now have a new wallet integrated!

### Interacting With Wallets and Providers

Once you have a connected provider and/or wallet, `web3react` gives you a number of modules for interacting with the wallet. In any component interacting with the wallet, first import `useWeb3React`:
```typescript
import { useWeb3React } from "@web3-react/core";
```
Then destructure the relevant module from `web3react` like so:
```typescript
const {
    connector,
    activate,
    deactivate,
    active,
    chainId,
    account,
} = useWeb3React();
```
TODO: list basic useful functions, link to web3react [example](https://github.com/NoahZinsmeister/web3-react/tree/v6/example)

Warp Core also provides some additional UI-related functions. You can leverage these by adding an object ot the `wallets` array in `src/containers/WalletWrapper.tsx`. Here is an example wallet:
```javascript
{
    name: "metamask",
    connectFunction: selectMetamask,
    selected: wallet === injectedConnector,
    activating: activatingConnector === injectedConnector,
    active: connector === injectedConnector,
    icon: Metamask,
},
```
We'll step through the different properties here. First let's briefly talk about the more self-explanatory ones:

* `name`: the `web3-react` name of the wallet (should be in `wallets/connectors.tsx` already)
* `connectFunction`: the name of the function for connecting this wallet in `wallets/connectors.tsx`, follows the pattern of `selectWALLET_NAME`
* `icon`: the media asset for the icon. This should be an svg stored in `components/icons`.

The other three are provided as UI hooks, as mentioned above. You've likely noticed the general pattern of clicking a "select wallet" screen, being presented with the different wallets you can pick from, selecting one, then having the website connect with the wallet. What information can and should be displayed to a user often changes depending on what step along the process the user is at. these hooks help Warp Core know what stage of the process the wallet connection is at to make the process of displaying the right components simpler:

TODO: description and syntax (maybe use Torus as example?)
* `selected`:
* `activating`:
* `active`:

### Additional Utilities

MetaMask works by injecting itself into the browser window, but is not the only wallet that does so. We've had need to check if the injected wallet is MetaMask, so we made a MetaMask Checker. It lives in `src/wallets/utils.ts`, and is called `isMetamaskEnabled`. It works simply, and returns a boolean representing if the connected wallet is Metamask or not.