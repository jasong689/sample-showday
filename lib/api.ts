import { BrowserSessionStorageType, Client } from "@gadget-client/sample-showday";

export const api = new Client({
  authenticationMode: {
    browserSession: {
      storageType: BrowserSessionStorageType.Temporary,
    },
  },
});
